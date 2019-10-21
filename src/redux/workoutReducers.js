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
            }
        case C.SET_CURRENT_EXERCISE:
            return {
                ...state,
                exerciseId: action.id
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

export const weight = (state = 0, action) => {
    switch (action.type) {
        case C.START_WORKOUT:
        case C.ITERATE_WORKOUT:
            return action.weight;
        default:
            return state;
    }
}