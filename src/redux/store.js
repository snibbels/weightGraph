import { combineReducers, createStore } from 'redux';
import { exercises, history, logger, settings, splitIndex, ui, splits } from './reducers';
import { workout } from './workoutReducers';

const store = createStore(combineReducers({
    logger,
    settings,
    exercises,
    splits,
    workout,
    splitIndex,
    ui,
    history,
}), (
    localStorage['localWeights']) ?
    JSON.parse(localStorage['localWeights']) :
    undefined
);

export default store