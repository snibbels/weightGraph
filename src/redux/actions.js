import C from './constants';

export const addWeight = (id, weight) => ({
    type: C.ADD_WEIGHT,
    id,
    weight,
    timestamp: Date.now()
});

export const addExercise = (id, weekday, name, sets = 3, wraps = 12, weight = 0) => ({
    type: C.ADD_EXERCISE,
    id,
    weekday,
    name,
    sets,
    wraps,
    weight
});

export const addWeekday = (id, name, exercises = []) => ({
    type: C.ADD_WEEKDAY,
    id,
    name,
    exercises
});

