import C from './constants';

export const logger = (state, action) => {
    console.log("dispatch", action.type);
    return null;
}

export const workoutPlan = (state = {}, action) => {
    switch (action.type) {
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

export const currentSplitIndex = (state = "", action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const splits = (state = [], action) => {
    switch (action.type) {

        default:
            return state;
    }
};

export const split = (state = {}, action) => {
    switch (action.type) {

        default:
            return state;
    }
};

export const exercises = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const exercise = (state = {}, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

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