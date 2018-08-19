import React, { Component } from 'react';
import './PopUp.css'


export default ComposedComponent => class PopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    toggleVisibility() {
        this.setState({
            isVisible: !this.state.isVisible
        });
    }

    render() {
        return (
            <div className={`pop-up w3-padding w3-display-container ${this.state.isVisible ? "visible" : ""}`} >
                <div className="w3-display-topright w3-padding"
                    style={{ cursor: "pointer" }}
                    onClick={this.toggleVisibility} >
                    <span className="w3-xlarge">
                        &times;
                   </span>
                </div>
                <ComposedComponent />
            </div>
        )
    }
}
