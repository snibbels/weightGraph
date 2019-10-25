import C, { defaultSettings } from './constants';
import { v4 } from 'uuid';

export const addExercise = (name, muscles) => ({
    type: C.ADD_EXERCISE,
    id: v4(),
    name,
    selected: false,
    muscles,
    timestamp: Date.now()
});

export const selectExercise = (id, name, muscles) => ({
    type: C.SELECT_EXERCISE,
    id, name, muscles
});

export const unselectExercise = (id, name, muscles) => ({
    type: C.UNSELECT_EXERCISE,
    id, name, muscles
});

export const addWorkout = (name = "Mein Plan") => ({
    type: C.ADD_WORKOUT,
    id: v4(),
    name,
    timestamp: Date.now(),
    tags: [],
    splits: []
});

export const toggleAddExerciseForm = () => ({ type: C.TOGGLE_ADD_EXERCISE_FORM });

export const addSplit = (name = "split", muscles = []) => ({
    type: C.ADD_SPLIT,
    name,
    id: v4(),
    exercises: [],
    muscles
});

export const editSplit = (id, name, muscles = []) => ({
    type: C.EDIT_SPLIT,
    id, name, muscles
});

export const deleteSplit = id => ({
    type: C.DELETE_SPLIT,
    id
});

export const setSplitIndex = splitIndex => ({
    type: C.SET_SPLITINDEX,
    splitIndex
});

export const changeWeight = (exerciseId, weight) => ({
    type: C.CHANGE_WEIGHT,
    exerciseId, weight
})

export const startWorkout = (exercises = []) => {
    const exerciseId = [...exercises.map(e => e.id), ""][0];

    return {
        type: C.START_WORKOUT,
        exercises, exerciseId
    }
}

export const setCurrentExercise = id => ({
    type: C.SET_CURRENT_EXERCISE, id
})


export const cancelWorkout = () => ({
    type: C.CANCEL_WORKOUT
});

export const finishWorkout = (splitIndex, splits = []) => ({
    type: C.FINISH_WORKOUT,
    splitIndex: (splitIndex + 1 % splits.length),
    timestamp: Date.now()
});

export const addHistoryEntry = (exerciseId, weight) => ({
    type: C.ADD_HISTORY_ENTRY,
    id: v4(),
    exerciseId,
    weight,
    timestamp: Date.now()
});

export const changeTimerSettings = (timeBetweenSets, timeBetweenExercises) => ({
    type: C.CHANGE_TIMER_SETTINGS,
    timeBetweenExercises, timeBetweenSets
});

export const restoreDefaultSettings = () => ({
    type: C.RESTORE_DEFAULT_SETTINGS,
    defaults: defaultSettings
});

export const showPopUp = id => ({
    type: C.SHOW_POPUP,
    id
});

export const hidePopUp = () => ({
    type: C.HIDE_POPUP
});

export const changeDisplayedDiscs = discs => ({
    type: C.CHANGE_DISPLAYED_DISCS,
    discs
});