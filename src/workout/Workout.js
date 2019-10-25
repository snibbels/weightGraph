import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';
import { addHistoryEntry, cancelWorkout, changeWeight, startWorkout } from '../redux/actions';
import store from '../redux/store';
import { Link } from 'react-router-dom';
import FlexCardRow, { cardStyleClasses } from '../ui/FlexCardRow';
import CurrentSplit from './CurrentSplit';
import Meta from './Meta';
import Timer from './Timer';
import Weights from './Weights';
import { activateNextSplit } from '../redux/utils';


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
        const { exercises = [], exerciseId = "" } = store.getState().workout;
        console.log(exerciseId, exercises)
        const { weight = 0 } = exercises.find(e => e.id === exerciseId)

        store.dispatch(
            changeWeight(exerciseId, weight + value)
        )
    }

    start() {
        const { splitIndex, splits = [], exercises } = store.getState();
        const split = splits[splitIndex];
        const mappedExercises = split.exercises.map(id => ({
            ...exercises.find(item => item.id === id)
        }))

        store.dispatch(startWorkout(mappedExercises));
    }
    cancel() {
        store.dispatch(cancelWorkout());
    }

    finish() {
        const { exercises = [] } = store.getState().workout;
        this.isActive = false;
        exercises.filter(e => !!e.weight).forEach(e => store.dispatch(
            addHistoryEntry(e.id, e.weight)
        ))
        activateNextSplit()
    }

    render() {
        const { workout, splits = [], settings, splitIndex } = store.getState();
        const { exercises = [], exerciseId = "" } = workout
        const exercise = exercises.find(e => e.id === exerciseId);
        const split = splits[splitIndex]

        return (
            <FlexCardRow>
                <Meta
                    className={cardStyleClasses}
                    exercise={exercise}
                    split={split}
                />
                <div className={cardStyleClasses}>
                    <Link
                        to="/"
                        onClick={this.finish}
                        className="w3-button">
                        Training beenden und Gewichte speichern
                    </Link>
                </div>
                <CurrentSplit
                    exerciseId={exerciseId}
                    exercises={exercises}
                    split={split}
                />
                <Timer className={cardStyleClasses}
                />
                <Weights
                    sum={exercise.weight}
                    className={`${cardStyleClasses}`}
                    addWeight={this.addWeight}
                    displayedDiscs={settings.displayedDiscs}
                />
                <Prompt when={this.isActive} message="Möchtest du dein Training wirklich abbrechen? Alle Fortschritte gehen verloren!" />
            </FlexCardRow>
        )
    }
}


export default Workout;