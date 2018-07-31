import React, { Component } from 'react'
import StoreComponent from '../HOCs/StoreComponent'
import { cancelWorkout, startWorkout, finishWorkout, iterateWorkout } from '../redux/actions';
import { cardStyleClasses } from '../App';
import IterationButton from './IterationButton';
import PauseButton from './PauseButton';
class _Workout extends Component {
    constructor(props) {
        super(props);

        this.start = this.start.bind(this);
        this.cancel = this.cancel.bind(this);
        this.finish = this.finish.bind(this);
        this.iterate = this.iterate.bind(this);
        this.pause = this.pause.bind(this);
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
        this.isActive = false;
    }

    iterate() {
        const { store } = this.props;
        const state = store.getState();
        const { exercises, exerciseIndex, set, maxSets } = state.workout;
        store.dispatch(iterateWorkout(exercises, exerciseIndex, set, maxSets))
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
        const { exercise, set, split, isLastExercise, isLastSet } =
            this.props.store.getState().workout;
        return (
            <div className={cardStyleClasses}>
                <h2>{split.name}</h2>
                <h3>{exercise ? exercise.name : ""}</h3>
                <p>Satz:<b> {set + 1}</b></p>
                <p>Wiederholungen: 12</p>
                {
                    this.state.isPaused ?
                        (<PauseButton
                            progress={this.state.progress}
                            className="w3-jumbo" />) :
                        (<IterationButton
                            className="w3-jumbo"
                            isLastExercise={isLastExercise} isLastSet={isLastSet}
                            finish={this.finish} iterate={this.iterate} pause={this.pause}
                        />)
                }
            </div>
        )
    }
}

const Workout = StoreComponent(_Workout);

export default Workout;