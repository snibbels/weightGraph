import C from "./constants";

export const workout = (state = {}, action) => {
    switch (action.type) {
        case C.START_WORKOUT:
        case C.CANCEL_WORKOUT:
        case C.FINISH_WORKOUT:
        case C.ITERATE_WORKOUT:
        default:
            return {
                splitIndex: splitIndex(state.splitIndex, action),
                split: split(state.split, action),
                exercises: exercises(state.exercises, action),
                exerciseIndex: exerciseIndex(state.exerciseIndex, action),
                exercise: exercise(state.exercise, action),
                set: set(state.set, action),
                maxSets: maxSets(state.maxSets, action),
                isLastIteration: isLastIteration(state.isLastIteration, action),
            }
    }
}

export const splitIndex = (state = 0, action) => {
    switch (action.type) {
        case C.START_WORKOUT:
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

export const isLastIteration = (state = false, action) => {
    switch (action.type) {
        case C.START_WORKOUT:
        case C.ITERATE_WORKOUT:
            return action.isLastIteration;
        case C.CANCEL_WORKOUT:
        case C.FINISH_WORKOUT:
            return false;
        default:
            return state;
    }
}