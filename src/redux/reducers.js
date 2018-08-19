import C from './constants';

export const logger = (state, action) => {
    console.log("dispatch", action.type);
    return null;
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
        case C.FINISH_WORKOUT:
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
        case C.RESTORE_DEFAULT_SETTINGS:
            console.log({
                ...action.defaults
            })
            return {
                ...action.defaults
            }
        default:
            return state;
    }
}

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
        case C.SELECT_EXERCISE:
        case C.UNSELECT_EXERCISE:
            return {
                ...state,
                splits: splits(state.splits, action)
            };
        case C.FINISH_WORKOUT:
            return {
                ...state,
                lastWorkout: action.timestamp
            };
        default:
            return state;
    }
};

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
            }
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