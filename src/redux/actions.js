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
    exersise: exercises[0],
    set: 0,
    maxSets,
    isLastIteration: (
        exercises.length === 1 &&
        maxSets === 0
    )
});

export const cancelWorkout = () => ({
    type: C.CANCEL_WORKOUT
});

export const finishWorkout = (splitIndex, splits) => ({
    type: C.FINISH_WORKOUT,
    splitIndex: (splitIndex < splits.length - 1) ? splitIndex + 1 : 0,
    split: splits[(splitIndex < splits.length - 1) ? splitIndex + 1 : 0]
});

export const iterateWorkout = (exercises, exerciseIndex, set, maxSets) => ({
    type: C.ITERATE_WORKOUT,
    exerciseIndex: (exerciseIndex < exercises.length - 1) ? exerciseIndex + 1 : 0,
    exercise: exercises[(exerciseIndex < exercises.length - 1) ? exerciseIndex + 1 : 0],
    set: (set < maxSets - 1) ? ++set : 0,
    isLastIteration: (
        exerciseIndex >= exercises.length - 1 &&
        set >= maxSets - 1
    )
});