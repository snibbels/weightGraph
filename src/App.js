import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import 'w3-css';
import './App.css';
import Editor from './editor/Editor';
import { addExercise, addSplit, addWorkout, hidePopUp, restoreDefaultSettings, showPopUp } from './redux/actions';
import { defaults, muscles } from './redux/constants';
import Settings from './settings/Settings';
import Start from './start/Start';
import Confirm from './ui/Confirm';
import PageTemplate from './ui/PageTemplate';
import Workout from './workout/Workout';
import Export from './export/Export';
import store from './redux/store'
import Stats from './stats/Stats';

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
    .then(data => data.reverse().map(
      exercise => store.dispatch(
        addExercise(exercise.name, exercise.muscles)
      )
    ))
}


const isObjectEmpty = obj => !obj || !Object.keys(obj) || !Object.keys(obj).length;

export const cardStyleClasses = ["w3-card", "w3-left-align", "w3-padding", "w3-display-container"].join(' ');
export const flexCardRow = ["w3-row"].join(' ');
export const flexCardContainer = ["w3-col", "s12 m6 l4", "w3-padding"].join(' ');

const popup_id = "TRANSITION_POPUP";
let confirmMessage = "";
let confirmCallback;
const confirmTransition = (message, callback) => {
  confirmMessage = message
  store.dispatch(showPopUp(popup_id));
  callback(false); confirmCallback = callback;
}

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
    const { settings } = store.getState();
    if (isObjectEmpty(settings)) {
      store.dispatch(restoreDefaultSettings())
    }
  }

  render() {
    const { popUpId } = store.getState().ui;

    return (
      <div className="App">
        <HashRouter getUserConfirmation={confirmTransition}>
          <PageTemplate>
            <Route exact path="/" component={Start} />
            <Route path="/edit" component={Editor} />
            <Route path="/workout" component={Workout} />
            <Route path="/settings" component={Settings} />
            <Route path="/export" component={Export} />
            <Route path="/stats" component={Stats} />
            <Confirm
              message={confirmMessage}
              isVisible={popup_id === popUpId}
              onAccept={() => confirmCallback(true)}
              onDecline={() => confirmCallback(false)}
              onHide={() => store.dispatch(hidePopUp())}
            />
          </PageTemplate>
        </HashRouter>
      </div>
    );
  }
}

export default App;
