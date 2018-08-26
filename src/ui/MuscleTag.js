import React from 'react'
import { muscleColors } from '../redux/constants';

const color = m => muscleColors[m];
const baseStyle = {
    borderRadius: "4px",
    padding: "2px",
    marginRight: "2px",
};
const selectedStyle = {
    border: "1px solid currentColor!important",
    opacity: 0.6
};
const unselectedStyle = {
    border: "1px dashed black",
    backgroundColor: "white",
    color: "black"
};

const MuscleTag = ({ muscle, ...props, selected = true }) => (
    <span
        style={{ ...baseStyle, ...(selected ? selectedStyle : unselectedStyle) }}
        className={
            selected ?
                `w3-small w3-${color(muscle)} ${props.className}` :
                props.className
        } >
        {muscle}
    </span >
);

export default MuscleTag;