import React, { Component } from 'react';
import { cardStyleClasses, flexCardContainer, flexCardRow } from '../App';
import StoreComponent from '../HOCs/StoreComponent';
import { addHistoryEntry, cancelWorkout, finishWorkout, iterateWorkout, startWorkout } from '../redux/actions';
import Meta from './Meta';
import Timer from './Timer';
import Weights from './Weights';
class _Workout extends Component {
    constructor(props) {
        super(props);

        this.addWeight = this.addWeight.bind(this);
        this.start = this.start.bind(this);
        this.cancel = this.cancel.bind(this);
        this.finish = this.finish.bind(this);
        this.iterate = this.iterate.bind(this);
        this.pause = this.pause.bind(this);
    }

    componentWillMount() {
        this.start();
        this.isActive = true;
        const { weight = 0 } = this.props.store.getState().workout;
        this.setState({
            isPaused: false,
            weight
        })
    }

    componentWillUnmount() {
        if (this.isActive) {
            this.cancel();
        }
        clearTimeout(this.timeout);
    }

    addWeight(value) {
        this.setState({
            weight: (this.state.weight + value)
        });
    }

    start() {
        const { store } = this.props;
        const state = store.getState();
        const { splitIndex } = state.workout;
        const { splits } = state.workoutPlan;
        const { exercises, history } = state;
        const split = splits[splitIndex];
        const maxSets = 3;
        store.dispatch(startWorkout(
            split,
            exercises.filter(
                ex => (ex.selected && !!split.muscles.find(
                    m => ex.muscles.indexOf(m) > -1
                ))
            ),
            maxSets,
            history
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
        this.isActive = false;
    }

    iterate() {
        const { store } = this.props;
        const state = store.getState();
        const { weight } = this.state;
        const { history } = state;
        const { exercise, exercises, exerciseIndex, set, maxSets } = state.workout;
        if (!exercise || !exercises) return;
        store.dispatch(iterateWorkout(exercises, exerciseIndex, set, maxSets, history))
        store.dispatch(addHistoryEntry(exercise.id, weight))
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
        const { weight } = this.state;
        return (
            <div className={flexCardRow}>
                <div className={`${flexCardContainer}`}>
                    <Meta
                        className={cardStyleClasses}
                        {...this.props.store.getState().workout}
                        {...this.state}
                    />
                </div>
                <div className={`${flexCardContainer}`}>
                    <Timer className={cardStyleClasses}
                        {...this.state}
                        {...this.props.store.getState().workout}
                        iterate={this.iterate}
                        pause={this.pause}
                        start={this.start}
                        finish={this.finish}
                    />
                </div>
                <div className={`${flexCardContainer}`}>
                    <Weights
                        className={`${cardStyleClasses}`}
                        addWeight={this.addWeight}
                        sum={weight} />
                </div>
            </div>
        )
    }
}

const Workout = StoreComponent(_Workout);

export default Workout;