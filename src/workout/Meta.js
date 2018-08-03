import React from 'react'

const Meta = ({ className, split, exercise, weight = 0, set = 0 }) => (
    <div className={className}>
        <h2>{split ? split.name : ""}</h2>
        <h3>{exercise ? exercise.name : ""}</h3>
        <p>letztes Gewicht:
                            <b> {weight} kg </b>
        </p>
        <p>Satz:<b> {set + 1}</b></p>
        <p>Wiederholungen: 12</p>
    </div>
);

export default Meta;