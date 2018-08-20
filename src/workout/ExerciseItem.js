import React from 'react'
import { muscleColors } from '../redux/constants';

const ExerciseItem = ({ current = false, muscles = [], name, weight }) => (
    <li style={{ fontWeight: current ? "bold" : "normal" }}>
        <span style={{ width: "80%", display: "inline-block" }}>
            {muscles.map((m, i) => (
                <span
                    key={i}
                    className="w3-xlarge"
                    style={{
                        verticalAlign: "middle",
                        color: muscleColors[m]
                    }}>
                    &bull;
                </span>
            ))}
            <span className="w3-padding" style={{
                verticalAlign: "middle"
            }}>
                {name}
            </span>
        </span>
        <span style={{ textAlign: "right", width: "20%", display: "inline-block" }}>
            {weight} {weight !== undefined ? "kg" : ""}
        </span>
    </li>
);

export default ExerciseItem;