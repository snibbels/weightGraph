import React from 'react'
import { muscleColors } from '../redux/constants';

const ExerciseItem = ({ current = false, muscles = [], name, weight }) => (
    <li style={{ fontWeight: current ? "bold" : "normal" }}>
        <span style={{ width: "90%", display: "inline-block" }}>
            {muscles.map((m, i) => (
                <span
                    key={i}
                    className="w3-xlarge w3-padding"
                    style={{
                        verticalAlign: "middle",
                        color: muscleColors[m]
                    }}>
                    &bull;
                </span>
            ))}
            <span style={{
                verticalAlign: "middle"
            }}>
                {name}
            </span>
        </span>
        <span style={{ textAlign: "right", width: "10%", display: "inline-block" }}>
            {weight} {weight !== undefined ? "kg" : ""}
        </span>
    </li>
);

export default ExerciseItem;