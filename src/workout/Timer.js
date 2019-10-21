import React, { Component } from 'react'
import { cardStyleClasses } from '../App'

export default class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            period: 1000 * 60,
            ...props
        }
        this.start = this.start.bind(this)
        this.reset = this.reset.bind(this)
    }

    start() {
        const now = Date.now();
        const finish = now + this.state.period
        this.setState({ finish })

        const intervalId = setInterval(() => this.forceUpdate(), 100)
        this.setState({ intervalId })
    }

    reset() {
        this.setState({ finish: undefined })
        clearInterval(this.state.intervalId)
    }

    render() {
        const timeLeft = this.state.finish - Date.now() || this.state.period
        if (timeLeft < 0)
            clearInterval(this.state.intervalId)

        return (
            <div className={cardStyleClasses}>
                <h3>Timer</h3>
                <h4
                    className="w3-padding"
                    style={{ color: "cornflowerblue" }}>
                    {(timeLeft > 0) ? (<span>
                        {Math.floor((timeLeft / 1000 / 60) % 60).toFixed(0)}:
                {(timeLeft / 1000 % 60).toFixed(2).padStart(5, '0')}
                    </span>) : "0:00"}
                </h4>
                <button className="w3-button" onClick={this.start}>Start</button>
                <button className="w3-button" onClick={this.reset}>Reset</button>
            </div>
        )
    }
}
