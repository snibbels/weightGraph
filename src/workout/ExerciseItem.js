import React from 'react'
import { muscleColors } from '../redux/constants';
import BellTypeIndicator from './BellTypeIndicator';

const ExerciseItem = ({ id, current = false, muscles = [], name, weight, bellType, activate = f => f }) => (
    <li
        className="w3-display-container"
        onClick={() => activate(id)}
        style={{ fontWeight: current ? "bold" : "normal" }}>
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
        <span className="w3-display-right">
            {weight} {weight !== undefined ? "kg" : ""}
            <BellTypeIndicator bellType={bellType} />
        </span>
    </li>
);

export default ExerciseItem;