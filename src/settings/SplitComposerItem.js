import React from 'react'
import { muscles } from '../redux/constants';
import MuscleTag from '../ui/MuscleTag';

const SplitComposerItem = ({ name, muscles = [], unselectedMuscles = [] }) => (
    <li style={{ maxWidth: "100%" }}>
        <h3>{name}</h3>
        {muscles.map((m, i) => (
            <MuscleTag
                key={i}
                muscle={m}
                className="w3-large"
            />
        ))}
        {unselectedMuscles.map((m, i) => (
            <MuscleTag
                selected={false}
                key={i}
                muscle={m}
                className="w3-large"
            />
        ))}
    </li>
);

export default SplitComposerItem;