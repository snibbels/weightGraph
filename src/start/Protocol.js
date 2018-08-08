import React from 'react'

const Protocol = ({ lastWorkout, className }) => (
    (lastWorkout) ? (
        <div className={className}>
            <h3>letztes Training</h3>
            <p>Datum: {new Date(lastWorkout).toLocaleDateString()}</p>
        </div>
    ) : ""
);

export default Protocol;