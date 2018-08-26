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

export const incrementSplitIndex = (currentIndex, maxIndex) => ({
    type: C.INCREMENT_SPLITINDEX,
    newIndex: (currentIndex < maxIndex) ?
        ++currentIndex :
        0
});

export const changeWeight = weight => ({
    type: C.CHANGE_WEIGHT,
    weight
})

export const startWorkout = (split, history = []) => {
    const { exercises, id } = split;
    const exerciseId = exercises[0];
    const historyId = history.filter(
        item => item.exerciseId === exerciseId
    ).map(item => item.id)[0]
    const latest = history.find(h => h.id === historyId);
    const weight = latest ? latest.weight : 0;

    return {
        type: C.START_WORKOUT,
        splitId: id,
        exerciseId,
        exercises,
        historyId,
        weight
    }
}

export const cancelWorkout = () => ({
    type: C.CANCEL_WORKOUT
});

export const finishWorkout = (splitIndex, splits = []) => ({
    type: C.FINISH_WORKOUT,
    splitIndex: (splitIndex < splits.length - 1) ? splitIndex + 1 : 0,
    timestamp: Date.now()
});

export const nextExercise = (exerciseId, history = [], isLastExercise = false) => {

    const latest = history.find(h => h.exerciseId === exerciseId);
    const weight = latest ? latest.weight : 0;

    return {
        type: C.NEXT_EXERCISE,
        set: 1, exerciseId, weight, isLastExercise
    }
}

export const nextSet = (set, isLastSet) => ({
    type: C.NEXT_SET,
    set,
    isLastSet
})

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