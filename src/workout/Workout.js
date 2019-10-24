import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';
import { addHistoryEntry, cancelWorkout, changeWeight, finishWorkout, startWorkout } from '../redux/actions';
import store from '../redux/store';
import FlexCardRow, { cardStyleClasses } from '../ui/FlexCardRow';
import CurrentSplit from './CurrentSplit';
import Meta from './Meta';
import Timer from './Timer';
import Weights from './Weights';


class Workout extends Component {
    constructor(props) {
        super(props);

        this.addWeight = this.addWeight.bind(this);
        this.start = this.start.bind(this);
        this.cancel = this.cancel.bind(this);
        this.finish = this.finish.bind(this);
    }

    componentWillMount() {
        this.start();
        this.isActive = true;
        this.setState({
            isPaused: false
        })
    }

    componentWillUnmount() {
        if (this.isActive) {
            this.cancel();
        }
        clearTimeout(this.timeout);
    }

    addWeight(value) {
        const { weight } = store.getState().workout;
        store.dispatch(
            changeWeight(weight + value)
        )
    }

    start() {
        const state = store.getState();
        const { splitIndex, history } = state;
        const { splits } = state.workoutPlan;
        const split = splits[splitIndex];
        store.dispatch(startWorkout(split, history));
    }
    cancel() {
        this.props.store.dispatch(cancelWorkout());
    }

    finish() {
        const { splitIndex, workoutPlan, workout } = store.getState();
        const { exerciseId, weight } = workout;
        const { splits = [] } = workoutPlan;
        this.isActive = false;
        store.dispatch(
            addHistoryEntry(exerciseId, weight)
        )
        store.dispatch(
            finishWorkout(splitIndex, splits)
        )
    }

    render() {
        const state = store.getState();
        const { exercises, workout, workoutPlan, settings, history } = state;
        const { weight, exerciseId, splitId } = workout;
        const exercise = exercises.find(e => e.id === exerciseId);
        const split = workoutPlan.splits.find(s => s.id === splitId);

        return (
            <FlexCardRow>
                <Meta
                    className={cardStyleClasses}
                    exercise={exercise}
                    split={split}
                    weight={weight}
                />
                <CurrentSplit
                    exercises={exercises}
                    exerciseId={exerciseId}
                    split={split}
                    history={history}
                />
                <Timer className={cardStyleClasses}
                    timeBetweenExercises={settings.timeBetweenExercises}
                    timeBetweenSets={settings.timeBetweenSets}
                />
                <Weights
                    className={`${cardStyleClasses}`}
                    addWeight={this.addWeight}
                    sum={weight}
                    displayedDiscs={settings.displayedDiscs}
                />
                <Prompt when={this.isActive} message="Möchtest du dein Training wirklich abbrechen? Alle Fortschritte gehen verloren!" />
            </FlexCardRow>
        )
    }
}


export default Workout;