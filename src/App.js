import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import 'w3-css';
import { addSplit, addWorkout, addExercise } from './redux/actions'
import './App.css';
import { currentSplitIndex, exercises, history, logger, workoutPlan } from './redux/reducers';
import Start from './start/Start';
import Statistics from './stats/Statistics';
import PageTemplate from './ui/PageTemplate';
import Workouts from './workouts/Workouts';
import { defaults } from './redux/constants';

const location = window.location;
const { protocol, host } = location;
const exerciseUrl = `${protocol}//${host}/exercises.json`


const setup = () => {
  store.dispatch(addWorkout());
  store.dispatch(addSplit("Brust & Bizeps", true));
  store.dispatch(addSplit("Rücken & Trizeps", true));
  store.dispatch(addSplit("Beine & Schultern", true));
  fetch(exerciseUrl)
    .then(response => response.json())
    .then(data => data.map(
      exercise => store.dispatch(
        addExercise(exercise.name, exercise.category)
      )
    ))
}

const store = createStore(combineReducers({
  logger, exercises, workoutPlan, history, currentSplitIndex
}), (
  localStorage['localWeights']) ?
    JSON.parse(localStorage['localWeights']) :
    undefined
);

export const StoreContext = React.createContext({ store });

class App extends Component {
  constructor() {
    super();
    store.subscribe(() => {
      localStorage[defaults.LOCALSTORAGE_NAME] = JSON.stringify(store.getState());
    });
    store.subscribe(() => this.forceUpdate());
  }

  componentWillMount() {
    if (!localStorage.getItem(defaults.LOCALSTORAGE_NAME)) {
      setup();
    }
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <PageTemplate>
            <Route exact path="/" component={Start} />
            <Route path="/stats" component={Statistics} />
            <Route path="/edit" component={Workouts} />
          </PageTemplate>
        </HashRouter>
      </div>
    );
  }
}

export default App;
