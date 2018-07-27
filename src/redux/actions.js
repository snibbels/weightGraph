import C from './constants';
import { v4 } from 'uuid';

export const addExercise = (name, category) => ({
    type: C.ADD_EXERCISE,
    id: v4(),
    name,
    category,
    timestamp: Date.now()
});

export const editWorkout = (id) => ({
    type: C.EDIT_WORKOUT,
    id,
    editmode: true
});

export const addWorkout = (name = "Mein Plan") => ({
    type: C.ADD_WORKOUT,
    id: v4(),
    name,
    timestamp: Date.now(),
    tags: [],
    splits: []
});

export const updateWorkout = (id, name, tags, splits) => ({
    type: C.ADD_WORKOUT,
    id, name,
    timestamp: Date.now(),
    tags,
    splits
});

export const addSplit = (name = "split", editmode = false) => ({
    type: C.ADD_SPLIT,
    name,
    id: v4(),
    exercises: [],
    editmode
});