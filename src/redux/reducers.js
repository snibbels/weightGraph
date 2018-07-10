import C from './constants';

export const weekplan = (state = [], action) => {
    console.log("dispatch ", action.type);
    switch (action.type) {
        case C.ADD_WEEKDAY:
            return [
                ...state,
                weekday({}, action)
            ];
        case C.ADD_EXERCISE:
        case C.ADD_WEIGHT:
            return state.map(w => weekday(w, action));
        default:
            return state;
    }
}

export const weekday = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_WEEKDAY:
            return {
                id: action.id,
                name: action.name,
                exercises: action.exercises
            };
        case C.ADD_EXERCISE:
            return (action.weekday !== state.name) ?
                state :
                ({
                    ...state,
                    exercises: exercises(state, action)
                })
        case C.ADD_WEIGHT:
            return {
                ...state,
                exercises: exercises(state, action)
            }
        default:
            return state;
    }
}

export const exercises = (state = [], action) => {
    switch (action.type) {
        case C.ADD_EXERCISE:
            return [
                ...state,
                exercise(state, action)
            ];
        case C.ADD_WEIGHT:
            return state.exercises.map(e => exercise(e, action))
        default:
            return state;
    }
}

export const exercise = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_EXERCISE:
            return {
                id: action.id,
                name: action.name,
                sets: action.sets,
                wraps: action.wraps,
                weight: action.weight,
                history: []
            };
        case C.ADD_WEIGHT:
            return (state.id !== action.id) ? state : ({
                ...state,
                weight: action.weight,
                history: history(state.history, action)
            })
        default:
            return state;
    }
}

export const history = (state = [], action) => {
    switch (action.type) {
        case C.ADD_WEIGHT:
            return [
                ...state,
                historyEntry(state, action)
            ]
        default:
            return state;
    }

}

export const historyEntry = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_WEIGHT:
            return {
                date: action.timestamp,
                weight: action.weight
            }

        default:
            return state;
    }
}