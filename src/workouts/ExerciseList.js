import React from 'react'
import Exercise from './Exercise';

const ExerciseList = ({ exercises = [], className, style }) => (
    <div className={className} style={style}>
        <h2>Übungen</h2>
        {
            exercises.map((e, i) => (
                <Exercise {...e} key={i} />
            ))
        }
    </div>
);

export default ExerciseList;