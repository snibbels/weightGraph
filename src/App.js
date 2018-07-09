import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import 'w3-css';
import './App.css';
import data from './mockdata/data.json';
import { weekplan } from './redux/reducers';
import Statistics from './stats/Statistics';
import PageTemplate from './ui/PageTemplate';
import WeightList from './weekplan/WeightList';
import { v4 } from 'uuid';



const store = createStore(combineReducers({ weekplan }), (
  localStorage['localWeights']) ?
  JSON.parse(localStorage['localWeights']) :
  {
    weekplan: data.weekplan.map(weekday => ({
      ...weekday,
      exercises: weekday.exercises.map(e => ({
        ...e,
        id: v4()
      }))
    }))
  }
);

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
            <Route exact path="/" render={() => (
              <WeightList
                {...store.getState()} store={store} />
            )} />
            <Route path="/stats" component={Statistics} />
          </PageTemplate>
        </HashRouter>
      </div>
    );
  }
}

export default App;
