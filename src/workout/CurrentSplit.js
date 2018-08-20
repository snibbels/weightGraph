import React from 'react';
import { cardStyleClasses } from '../ui/FlexCardRow';
import ExerciseItem from './ExerciseItem';

const CurrentSplit = ({ split, exercises, exerciseId, history = [] }) => {
    if (!split) return null;
    const currentExercises = split.exercises.map(
        e => ({
            ...history.find(h => h.exerciseId === e),
            ...exercises.find(ex => ex.id === e),
        })
    );

    return (
        <div className={cardStyleClasses}>
            <ul className="w3-ul">
                {currentExercises.map(
                    (e, i) => (
                        <ExerciseItem
                            current={e.id === exerciseId}
                            key={i}
                            {...e} />
                    )
                )}
            </ul>
        </div>
    );
}

export default CurrentSplit;