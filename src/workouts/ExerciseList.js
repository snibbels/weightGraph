import React from 'react'
import Exercise from './Exercise';
import AddDeleteButton from '../ui/AddDeleteButton';
import AddExerciseForm from './AddExerciseForm';

const ExerciseList = ({ exercises = [], className, style }) => (
    <div className={className} style={style}>
        <h2 className="w3-display-container">
            <span>
                Übungen
            </span>
            <AddDeleteButton className="w3-display-right" />
        </h2>
        {/* TODO: make form hidable */}
        <AddExerciseForm />
        {
            exercises.map((e, i) => (
                <Exercise {...e} key={i} />
            ))
        }
    </div>
);

export default ExerciseList;