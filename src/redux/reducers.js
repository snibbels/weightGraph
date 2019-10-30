import C from './constants';

export const logger = (state, action) => {
    console.log("dispatch", action.type);
    return null;
}

export const workout = (state = {}, action) => {
    switch (action.type) {
        case C.SET_CURRENT_EXERCISE:
            return {
                ...state,
                exerciseId: action.id
            }
        case C.START_WORKOUT:
            return {
                exercises: action.exercises,
                exerciseId: action.exerciseId
            }
        case C.CHANGE_WEIGHT:
            return {
                ...state,
                exercises: state.exercises.map(
                    item => item.id !== action.exerciseId ?
                        item : { ...item, weight: action.weight }
                )
            }
        case C.SET_BELL_TYPE:
            return {
                ...state,
                exercises: state.exercises.map(
                    item => item.id !== action.exerciseId ?
                        item : { ...item, bellType: action.bellType }
                )
            }
        case C.FINISH_WORKOUT:
        case C.CANCEL_WORKOUT:
            return {}
        default:
            return state
    }
}

export const exercises = (state = [], action) => {
    switch (action.type) {
        case C.ADD_EXERCISE:
            return [
                exercise(state, action),
                ...state
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

export const splitIndex = (state = 0, action) => {
    switch (action.type) {
        case C.SET_SPLITINDEX:
            return action.splitIndex
        default:
            return state;
    }
}

// TODO: start from defaults but restore settings OR
// TODO: store defaults in component props
export const settings = (state = {}, action) => {
    switch (action.type) {
        case C.CHANGE_TIMER_SETTINGS:
            return {
                ...state,
                timeBetweenSets: action.timeBetweenSets,
                timeBetweenExercises: action.timeBetweenExercises
            }
        case C.CHANGE_DISPLAYED_DISCS:
            return {
                ...state,
                displayedDiscs: action.discs
            }
        case C.RESTORE_DEFAULT_SETTINGS:
            return {
                ...action.defaults
            }
        default:
            return state;
    }
}

export const ui = (state = {}, action) => {
    switch (action.type) {
        case C.TOGGLE_ADD_EXERCISE_FORM:
            return {
                ...state,
                showAddExerciseForm: showAddExerciseForm(state.showAddExerciseForm, action)
            }
        case C.SHOW_POPUP:
            return {
                ...state,
                popUpId: action.id
            }
        case C.HIDE_POPUP:
            return {
                ...state,
                popUpId: ""
            }
        default:
            return {
                ...state,
                showAddExerciseForm: showAddExerciseForm(state.showAddExerciseForm, action),
                popUpId: ""
            };
    }
}

export const showAddExerciseForm = (state = false, action) => {
    switch (action.type) {
        case C.TOGGLE_ADD_EXERCISE_FORM:
            return !state
        default:
            return state;
    }
}

export const history = (state = [], action) => {
    switch (action.type) {
        case C.ADD_HISTORY_ENTRY:
            return [
                historyEntry(state, action),
                ...state
            ];
        default:
            return state;
    }
};

export const historyEntry = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_HISTORY_ENTRY:
            return {
                id: action.id,
                exerciseId: action.exerciseId,
                weight: action.weight,
                timestamp: action.timestamp
            }
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
        case C.EDIT_SPLIT:
            return state.map(s =>
                split(s, action)
            );
        case C.DELETE_SPLIT:
            return state.filter(split =>
                split.id !== action.id
            );
        case C.SELECT_EXERCISE:
        case C.UNSELECT_EXERCISE:
            return state.map(
                s => split(s, action)
            );
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
            };
        case C.EDIT_SPLIT:
            return state.id !== action.id ? {
                ...state
            } : {
                    ...state,
                    name: action.name,
                    muscles: action.muscles
                };
        case C.SELECT_EXERCISE:
            return !state.muscles.find(muscle => (action.muscles.indexOf(muscle) > -1)) ?
                state :
                {
                    ...state,
                    exercises: [
                        ...state.exercises, action.id
                    ]
                }
        case C.UNSELECT_EXERCISE:
            return {
                ...state,
                exercises: state.exercises.filter(e => e !== action.id)
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