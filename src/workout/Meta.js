import React from 'react'

const Meta = ({ className, split, exercise, weight = 0 }) => (
    <div className={className}>
        <h2>{split ? split.name : ""}</h2>
        <h3>{exercise ? exercise.name : ""}</h3>
        <p>letztes Gewicht:<b> {weight} kg </b></p>
    </div>
);

export default Meta;