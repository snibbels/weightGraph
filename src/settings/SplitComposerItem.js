import React from 'react'
import { muscles } from '../redux/constants';
import MuscleTag from '../editor/MuscleTag';

const SplitComposerItem = ({ split }) => (
    <li>
        <h3>{split.name}</h3>
        {Object.values(muscles).map((m, i) => (
            <MuscleTag key={i} muscle={m} />
        ))}
    </li>
);

export default SplitComposerItem;