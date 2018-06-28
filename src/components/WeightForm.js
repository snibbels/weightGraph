import React, { Component } from 'react';

export default class WeightForm extends Component {
    constructor(props) {
        super(props);
        this.state = { inputText: "" };
    }

    render() {
        const { onAddWeight } = this.props;
        const placeholder = "Add your weight here";

        return (
            <div className="w3-margin-bottom w3-border-bottom w3-xlarge">
                <input
                    type="number"
                    placeholder={placeholder}
                    className="w3-input w3-threequarter"
                    ref="text"
                />
                <input
                    type="button"
                    value="Add Weight +"
                    className="w3-button w3-rest"
                    onClick={() => onAddWeight(this.refs.text.value)}
                />
            </div>
        )
    }
}

WeightForm.defaultProps = { onAddWeight: f => f }