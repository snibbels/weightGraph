import React from 'react'


const QuickEditItem = ({ name, id, weight = 0, onChangeWeight = f => f }) => {
    let input;

    return (
        <li className="w3-display-container">
            <span style={{ width: "70%", display: "inline-block" }}>
                {name}
            </span>
            <span
                className="w3-display-right"
                style={{
                    width: "30%",
                }}>
                <input
                    min="0"
                    step="0.25"
                    type="number"
                    defaultValue={weight}
                    ref={v => input = v}
                    className="w3-input"
                    onChange={() => onChangeWeight(id, input.value)} />
            </span>
        </li>
    );
}

export default QuickEditItem;