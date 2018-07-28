import C from './constants';

export const logger = (state, action) => {
    console.log("dispatch", action.type);
    return null;
}

export const exercises = (state = [], action) => {
    switch (action.type) {
        case C.ADD_EXERCISE:
            return [
                ...state,
                exercise(state, action)
            ];
        case C.SELECT_EXERCISE:
        case C.UNSELECT_EXERCISE:
            return state.map(
                e => exercise(e, action)
            );
        default:
            return state;
    }
};

export const workoutPlan = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_WORKOUT:
            return {
                id: action.id,
                name: action.name,
                timestamp: action.timestamp,
                tags: action.tags,
                splits: action.splits
            };
        case C.ADD_SPLIT:
            return {
                ...state,
                splits: splits(state.splits, action)
            };
        default:
            return state;
    }
};

export const history = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const currentSplitIndex = (state = 0, action) => {
    switch (action.type) {
        case C.INCREMENT_SPLITINDEX:
            return action.newIndex;
        default:
            return state;
    }
}

export const exercise = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_EXERCISE:
            let { name, muscles, id, timestamp } = action
            return { name, muscles, id, timestamp }
        case C.SELECT_EXERCISE:
            return (state.id !== action.id) ?
                state :
                { ...state, selected: true }
        case C.UNSELECT_EXERCISE:
            return (state.id !== action.id) ?
                state :
                { ...state, selected: false }
        default:
            return state;
    }
};

export const splits = (state = [], action) => {
    switch (action.type) {
        case C.ADD_SPLIT:
            return [
                ...state,
                split(state, action)
            ];
        default:
            return state;
    }
};

export const split = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_SPLIT:
            return {
                name: action.name,
                id: action.id,
                exercises: action.exercises,
                muscles: action.muscles
            }
        default:
            return state;
    }
};

export const weights = (state = [], action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export const weight = (state = {}, action) => {
    switch (action.type) {

        default:
            return state;
    }
}