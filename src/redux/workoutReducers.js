import C from "./constants";

export const workout = (state = {}, action) => {
    switch (action.type) {
        case C.START_WORKOUT:
            return {
                splitId: action.splitId,
                exerciseId: action.exerciseId,
                exercises: action.exercises,
                historyId: action.historyId,
                weight: action.weight,
                set: 1,
                isLastExercise: false,
                isLastSet: false
            }
        case C.NEXT_EXERCISE:
            return {
                ...state,
                set: action.set,
                exerciseId: action.exerciseId,
                weight: action.weight,
                isLastExercise: action.isLastExercise,
                isLastSet: false
            }
        case C.NEXT_SET:
            return {
                ...state,
                set: action.set,
                isLastSet: action.isLastSet
            }
        case C.CANCEL_WORKOUT:
        case C.FINISH_WORKOUT:
            return {}
        case C.CHANGE_WEIGHT:
            return {
                ...state,
                weight: action.weight
            }
        default:
            return state
    }
}

export const splitIndex = (state = 0, action) => {
    switch (action.type) {
        case C.FINISH_WORKOUT:
            return action.splitIndex
        default:
            return state;
    }
}

export const split = (state = {}, action) => {
    switch (action.type) {
        case C.START_WORKOUT:
        case C.FINISH_WORKOUT:
            return action.split;
        default:
            return state;
    }
}

export const exercises = (state = [], action) => {
    switch (action.type) {
        case C.START_WORKOUT:
            return action.exercises;
        case C.CANCEL_WORKOUT:
        case C.FINISH_WORKOUT:
            return [];
        default:
            return state;
    }
}

export const exerciseIndex = (state = 0, action) => {
    switch (action.type) {
        case C.START_WORKOUT:
        case C.ITERATE_WORKOUT:
            return action.exerciseIndex;
        case C.CANCEL_WORKOUT:
        case C.FINISH_WORKOUT:
            return 0;
        default:
            return state;
    }
}

export const exercise = (state = {}, action) => {
    switch (action.type) {
        case C.START_WORKOUT:
        case C.ITERATE_WORKOUT:
            return action.exercise;
        case C.CANCEL_WORKOUT:
        case C.FINISH_WORKOUT:
            return 0;
        default:
            return state;
    }
}

export const set = (state = 0, action) => {
    switch (action.type) {
        case C.START_WORKOUT:
        case C.ITERATE_WORKOUT:
            return action.set;
        case C.CANCEL_WORKOUT:
        case C.FINISH_WORKOUT:
            return 0;
        default:
            return state;
    }
}

export const maxSets = (state = 3, action) => {
    switch (action.type) {
        case C.START_WORKOUT:
            return action.maxSets;
        default:
            return state;
    }
}

export const isLastExercise = (state = false, action) => {
    switch (action.type) {
        case C.START_WORKOUT:
        case C.ITERATE_WORKOUT:
            return action.isLastExercise;
        case C.CANCEL_WORKOUT:
        case C.FINISH_WORKOUT:
            return false;
        default:
            return state;
    }
}

export const isLastSet = (state = false, action) => {
    switch (action.type) {
        case C.START_WORKOUT:
        case C.ITERATE_WORKOUT:
            return action.isLastSet;
        case C.CANCEL_WORKOUT:
        case C.FINISH_WORKOUT:
            return false;
        default:
            return state;
    }
}

export const weight = (state = 0, action) => {
    switch (action.type) {
        case C.START_WORKOUT:
        case C.ITERATE_WORKOUT:
            return action.weight;
        default:
            return state;
    }
}