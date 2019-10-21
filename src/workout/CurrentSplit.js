import React from 'react';
import { cardStyleClasses } from '../ui/FlexCardRow';
import ExerciseItem from './ExerciseItem';
import StoreComponet from '../HOCs/StoreComponent'
import { setCurrentExercise } from '../redux/actions';

const _CurrentSplit = ({ store, split, exercises, exerciseId, history = [] }) => {
    if (!split) return null;
    const currentExercises = split.exercises.map(
        e => ({
            ...history.find(h => h.exerciseId === e),
            ...exercises.find(ex => ex.id === e),
        })
    );

    const selectCurrentExercise = id => {
        store.dispatch(setCurrentExercise(id))
    }

    return (
        <div className={cardStyleClasses}>
            <ul className="w3-ul">
                {currentExercises.map(
                    (e, i) => (
                        <ExerciseItem
                            activate={selectCurrentExercise}
                            current={e.id === exerciseId}
                            key={i}
                            {...e} />
                    )
                )}
            </ul>
        </div>
    );
}

const CurrentSplit = StoreComponet(_CurrentSplit)

export default CurrentSplit;