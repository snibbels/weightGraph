import React from 'react'

const Disc = ({ weight = 1, selected = false, addWeight = f => f }) => {
    const onAddWeight = () => {
        if (selected) addWeight(weight * -1);
        else addWeight(weight);
    }

    return (
        <svg height="100" width="100" onClick={onAddWeight} >
            <circle
                cx="50"
                cy="50"
                r="40"
                fill={selected ? "#2395F3" : "#fff"}
                stroke={selected ? "white" : "lightgrey"}
                strokeWidth="3"
            />
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                stroke={selected ? "white" : "black"}
                dy=".3em">
                {weight}
            </text>
        </svg >
    );
}

export default Disc;