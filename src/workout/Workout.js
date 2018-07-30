import React, { Component } from 'react'
import StoreComponent from '../HOCs/StoreComponent'
import { cancelWorkout, startWorkout, finishWorkout, iterateWorkout } from '../redux/actions';

class _Workout extends Component {
    constructor(props) {
        super(props);
        this.start = this.start.bind(this);
        this.cancel = this.cancel.bind(this);
        this.finish = this.finish.bind(this);
        this.iterate = this.iterate.bind(this);
    }

    start() {
        const { store } = this.props;
        const state = store.getState();
        const { splitIndex } = state.workout;
        const { splits } = state.workoutPlan;
        const { exercises } = state;
        const split = splits[splitIndex];
        const maxSets = 3;
        store.dispatch(startWorkout(
            split,
            exercises.filter(
                ex => (ex.selected && !!split.muscles.find(
                    m => ex.muscles.indexOf(m) > -1
                ))
            ),
            maxSets
        ));
    }
    cancel() {
        this.props.store.dispatch(cancelWorkout());
    }
    finish() {
        const { store } = this.props;
        const state = store.getState();
        const { splitIndex } = state.workout;
        const { splits } = state.workoutPlan;
        store.dispatch(finishWorkout(splitIndex, splits));
    }

    iterate() {
        const { store } = this.props;
        const state = store.getState();
        const { exercises, exerciseIndex, set, maxSets } = state.workout;
        store.dispatch(iterateWorkout(exercises, exerciseIndex, set, maxSets))
    }

    render() {
        const { exercise, set, split, isLastIteration } =
            this.props.store.getState().workout;
        return (
            <div>
                <h2>{split.name}</h2>
                <p>{exercise ? exercise.name : ""}</p>
                <p>{set}</p>
                <div className="w3-button" onClick={this.start}>
                    start
                </div>
                <div className="w3-button" onClick={this.iterate}>
                    iterate
                </div>
                <div className="w3-button" onClick={this.cancel}>
                    cancel
                </div>
                {
                    isLastIteration ?
                        (<div className="w3-button" onClick={this.finish}>
                            finish
                </div>) : ""
                }
            </div>
        )
    }
}

const Workout = StoreComponent(_Workout);

export default Workout;