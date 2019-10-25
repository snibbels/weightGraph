import React from 'react';
import { cardStyleClasses } from '../ui/FlexCardRow';
import ExerciseItem from './ExerciseItem';
import { setCurrentExercise } from '../redux/actions';
import store from '../redux/store'

const CurrentSplit = ({ split }) => {
    if (!split) return null;

    const { exercises = [], exerciseId = "" } = store.getState().workout;

    const selectCurrentExercise = id => {
        console.log(setCurrentExercise(id))
        store.dispatch(setCurrentExercise(id))
    }

    return (
        <div className={cardStyleClasses}>
            <ul className="w3-ul">
                {exercises.map(
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

export default CurrentSplit;