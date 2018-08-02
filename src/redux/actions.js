import C from './constants';
import { v4 } from 'uuid';

export const addExercise = (name, muscles) => ({
    type: C.ADD_EXERCISE,
    id: v4(),
    name,
    selected: false,
    muscles,
    timestamp: Date.now()
});

export const selectExercise = id => ({
    type: C.SELECT_EXERCISE,
    id
});

export const unselectExercise = id => ({
    type: C.UNSELECT_EXERCISE,
    id
});

export const addWorkout = (name = "Mein Plan") => ({
    type: C.ADD_WORKOUT,
    id: v4(),
    name,
    timestamp: Date.now(),
    tags: [],
    splits: []
});

export const addSplit = (name = "split", muscles = []) => ({
    type: C.ADD_SPLIT,
    name,
    id: v4(),
    exercises: [],
    muscles
});

export const incrementSplitIndex = (currentIndex, maxIndex) => ({
    type: C.INCREMENT_SPLITINDEX,
    newIndex: (currentIndex < maxIndex) ?
        ++currentIndex :
        0
});

export const startWorkout = (split, exercises, maxSets) => ({
    type: C.START_WORKOUT,
    split,
    exercises,
    exerciseIndex: 0,
    exercise: exercises[0],
    set: 0,
    maxSets,
    isLastExercise: (exercises.length === 1),
    isLastSet: (maxSets === 1)
});

export const cancelWorkout = () => ({
    type: C.CANCEL_WORKOUT
});

export const finishWorkout = (splitIndex, splits) => ({
    type: C.FINISH_WORKOUT,
    splitIndex: (splitIndex < splits.length - 1) ? splitIndex + 1 : 0,
    split: splits[(splitIndex < splits.length - 1) ? splitIndex + 1 : 0]
});

export const iterateWorkout = (exercises, exerciseIndex, set, maxSets) => {
    const _set = (set < maxSets - 1) ? (set + 1) : 0;
    const _exerciseIndex = (set < maxSets - 1) ? exerciseIndex : (
        (exerciseIndex < exercises.length - 1) ? exerciseIndex + 1 : 0
    );

    return ({
        type: C.ITERATE_WORKOUT,
        set: _set,
        exerciseIndex: _exerciseIndex,
        exercise: exercises[_exerciseIndex],
        isLastExercise: (_exerciseIndex >= exercises.length - 1),
        isLastSet: (_set >= maxSets - 1)
    });
}

export const addHistoryEntry = (exerciseId, weight) => ({
    type: C.ADD_HISTORY_ENTRY,
    id: v4(),
    exerciseId,
    weight,
    timestamp: Date.now()
});