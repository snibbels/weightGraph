import './App.css';
import 'w3-css';

import React, { Component } from 'react';

import WeightList from './components/WeightList';

class App extends Component {
  constructor() {
    super();
    const localWeights = JSON.parse(localStorage.getItem('localWeights'))
    let state = { weights: (localWeights) ? localWeights : [] };
    this.state = state;
    this.onAddWeight = this.onAddWeight.bind(this);
  }

  onAddWeight(weight) {
    if (!weight) return;
    const date = new Date().toDateString();
    const weights = [
      ...this.state.weights,
      { weight, date }
    ];
    this.setState({ weights });
    localStorage.setItem('localWeights', JSON.stringify(weights));
  }

  render() {
    return (
      <div className="App">
        <WeightList weights={this.state.weights} onAddWeight={this.onAddWeight} />
      </div>
    );
  }
}

export default App;
