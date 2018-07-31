import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import 'w3-css';
import { addSplit, addWorkout, addExercise } from './redux/actions'
import './App.css';
import { exercises, history, logger, workoutPlan } from './redux/reducers';
import { workout } from './redux/workoutReducers';
import Start from './start/Start';
import Statistics from './stats/Statistics';
import PageTemplate from './ui/PageTemplate';
import Workouts from './workouts/Workouts';
import { defaults, muscles } from './redux/constants';
import Action from './start/Action';
import Workout from './workout/Workout';

const location = window.location;
const { protocol, host, pathname } = location;
const exerciseUrl = `${protocol}//${host}${pathname}/exercises.json`


const setup = () => {
  store.dispatch(addWorkout());
  store.dispatch(addSplit("Brust & Bizeps", [muscles.BIZEPS, muscles.CHEST]));
  store.dispatch(addSplit("Rücken & Trizeps", [muscles.BACK, muscles.TRIZEPS]));
  store.dispatch(addSplit("Beine & Schultern", [muscles.LEGS, muscles.SHOULDER]));
  fetch(exerciseUrl)
    .then(response => response.json())
    .then(data => data.map(
      exercise => store.dispatch(
        addExercise(exercise.name, exercise.muscles)
      )
    ))
}

const store = createStore(combineReducers({
  logger, exercises, workoutPlan, history, workout
}), (
  localStorage['localWeights']) ?
    JSON.parse(localStorage['localWeights']) :
    undefined
);

export const StoreContext = React.createContext({ store });
export const cardStyleClasses = ["w3-card", "w3-left-align", "w3-margin", "w3-padding"].join(' ');

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
            <Route path="/workout" component={Workout} />
          </PageTemplate>
        </HashRouter>
      </div>
    );
  }
}

export default App;
