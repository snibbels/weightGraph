import C from "./constants";

export const workout = (state = {}, action) => {
    switch (action.type) {
        case C.START_WORKOUT:
        case C.CANCEL_WORKOUT:
        case C.FINISH_WORKOUT:
        case C.ITERATE_WORKOUT:
        default:
            return state;
    }
}

export const currentSplit = (state = {}, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export const currentExercises = (state = [], action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export const currentExerciseIndex = (state = 0, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export const currentExercise = (state = {}, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export const currentSet = (state = {}, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export const maxSets = (state = 3, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export const isLastIteration = (state = false, action) => {
    switch (action.type) {

        default:
            return state;
    }
}