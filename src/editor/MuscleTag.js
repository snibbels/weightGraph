import React from 'react'
import { muscleColors } from '../redux/constants';

const color = m => muscleColors[m];

const MuscleTag = ({ muscle }) => (
    <span
        style={{ padding: "2px", marginRight: "1px", opacity: 0.6 }}
        className={`w3-round w3-small
        w3-${color(muscle)}`}>
        {muscle}
    </span >
);

export default MuscleTag;