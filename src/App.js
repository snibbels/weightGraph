import './App.css';
import 'w3-css';
import data from './mockdata/data.json'
import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import PageTemplate from './ui/PageTemplate';
import WeightList from './weekplan/WeightList';
import Statistics from './stats/Statistics';

class App extends Component {
  constructor() {
    super();
    this.state = { ...data };
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <PageTemplate>
            <Route exact path="/" render={() => (
              <WeightList
                {...this.state} />
            )} />
            <Route path="/stats" component={Statistics} />
          </PageTemplate>
        </HashRouter>
      </div>
    );
  }
}

export default App;
