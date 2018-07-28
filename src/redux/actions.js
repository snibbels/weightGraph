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