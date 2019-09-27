import React from 'react'

const Meta = ({ className, split, exercise, weight = 0, set }) => (
    <div className={className}>
        <h2>{split ? split.name : ""}</h2>
        <h3>{exercise ? exercise.name : ""}</h3>
        <p>letztes Gewicht:<b> {weight} kg </b></p>
        <p>Satz:<b> {set}</b></p>
        <p>Wiederholungen: 12</p>
    </div>
);

export default Meta;