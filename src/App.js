import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import 'w3-css';
import './App.css';
import data from './mockdata/data.json';
import { logger, currentSplitIndex, history, workoutPlan } from './redux/reducers';
import Start from './start/Start';
import Statistics from './stats/Statistics';
import PageTemplate from './ui/PageTemplate';
import Workouts from './workouts/Workouts';

const store = createStore(combineReducers({
  logger, workoutPlan, history, currentSplitIndex
}), (
  localStorage['localWeights']) ?
    JSON.parse(localStorage['localWeights']) :
    undefined
);

export const StoreContext = React.createContext({ store });

class App extends Component {
  constructor() {
    super();
    this.state = { ...data };
    store.subscribe(() => {
      localStorage['localWeights'] = JSON.stringify(store.getState());
    });
    store.subscribe(() => this.forceUpdate());
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
