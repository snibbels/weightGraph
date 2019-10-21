import React, { Component } from 'react'
import { cardStyleClasses } from '../App'

export default class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            period: 1000 * 60,
            ...props
        }
        this.startTimer = this.startTimer.bind(this)
    }

    startTimer() {
        const now = Date.now();
        const finish = now + this.state.period
        this.setState({ finish })

        const intervalId = setInterval(() => this.forceUpdate(), 100)
        this.setState({ intervalId })
    }

    render() {
        const timeLeft = this.state.finish - Date.now() || this.state.period
        if (timeLeft < 0)
            clearInterval(this.state.intervalId)

        return (
            <div className={cardStyleClasses}>
                <h3>Timer</h3>
                <button onClick={this.startTimer}>start</button>
                {Math.floor((timeLeft / 1000 / 60) % 60).toFixed(0)}:
                {(timeLeft / 1000 % 60).toFixed(2).padStart(5, '0')}
            </div>
        )
    }
}
