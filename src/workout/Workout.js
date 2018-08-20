import React, { Component } from 'react';
import { Link, Prompt } from 'react-router-dom';
import StoreComponent from '../HOCs/StoreComponent';
import { addHistoryEntry, cancelWorkout, changeWeight, finishWorkout, nextExercise, nextSet, startWorkout } from '../redux/actions';
import FlexCardRow, { cardStyleClasses } from '../ui/FlexCardRow';
import Meta from './Meta';
import Timer from './Timer';
import Weights from './Weights';
class _Workout extends Component {
    constructor(props) {
        super(props);

        this.addWeight = this.addWeight.bind(this);
        this.start = this.start.bind(this);
        this.cancel = this.cancel.bind(this);
        this.pause = this.pause.bind(this);
        this.finish = this.finish.bind(this);
        this.iterate = this.iterate.bind(this);
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
        const { store } = this.props;
        const { weight } = store.getState().workout;
        store.dispatch(
            changeWeight(weight + value)
        )
    }

    start() {
        const { store } = this.props;
        const state = store.getState();
        const { splitIndex, history } = state;
        const { splits } = state.workoutPlan;
        const split = splits[splitIndex];
        store.dispatch(startWorkout(split, history));
    }
    cancel() {
        this.props.store.dispatch(cancelWorkout());
    }

    iterate() {
        const { store } = this.props;
        const { workout, history } = store.getState();
        const { exercises = [], exerciseId, set = 1, weight } = workout;
        const maxSets = 3;
        const exerciseIndex = exercises.indexOf(exerciseId);

        if (set < maxSets) {
            const newSet = set + 1
            store.dispatch(nextSet(newSet, newSet >= maxSets))
        } else if (exerciseIndex < exercises.length - 1) {
            const tempIndex = exerciseIndex + 1;
            const isLastExercise = tempIndex >= exercises.length - 1
            store.dispatch(
                addHistoryEntry(exerciseId, weight)
            )
            store.dispatch(
                nextExercise(exercises[tempIndex], history, isLastExercise)
            )
        } else {
            this.finish()
        }
    }

    finish() {
        const { store } = this.props;
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

    pause(duration, next = f => f, steps = 100) {
        this.setState({
            isPaused: true,
            duration,
            progress: 0
        });
        const intervalId = setInterval(() =>
            this.setState({
                progress: (this.state.progress + (100 / steps))
            }), duration / steps)
        this.timeout = setTimeout(() => {
            this.setState({ isPaused: false })
            window.navigator.vibrate(500);
            clearInterval(intervalId);
            next();
        }, duration);
    }

    render() {
        const state = this.props.store.getState();
        const { exercises, workout, workoutPlan, settings } = state;
        const exercise = exercises.find(e => e.id === workout.exerciseId);
        const split = workoutPlan.splits.find(s => s.id === workout.splitId);
        const { weight, set, isLastExercise, isLastSet } = workout;

        return (
            <FlexCardRow>
                {
                    (!this.isActive) ?
                        <Link
                            to="/"
                            style={{ textDecoration: "none" }}>
                            <div className={cardStyleClasses}>
                                zurück zum Startbildschirm
                            </div>
                        </Link> : undefined
                }
                <Meta
                    className={cardStyleClasses}
                    exercise={exercise}
                    split={split}
                    weight={weight}
                    set={set}
                />
                <Timer className={cardStyleClasses}
                    {...this.state}
                    {...workout}
                    isLastExercise={isLastExercise || !exercise}
                    isLastSet={isLastSet || !exercise}
                    iterate={this.iterate}
                    finish={this.finish}
                    pause={this.pause}
                    start={this.start}
                    {...settings}
                />
                <Weights
                    className={`${cardStyleClasses}`}
                    addWeight={this.addWeight}
                    sum={weight}
                />
                <Prompt when={this.isActive} message="Möchtest du dein Training wirklich abbrechen? Alle Fortschritte gehen verloren!" />
            </FlexCardRow>
        )
    }
}

const Workout = StoreComponent(_Workout);

export default Workout;