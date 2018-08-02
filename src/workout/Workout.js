import React, { Component } from 'react'
import StoreComponent from '../HOCs/StoreComponent'
import { cancelWorkout, startWorkout, finishWorkout, iterateWorkout, addHistoryEntry } from '../redux/actions';
import { cardStyleClasses, flexCardContainer, flexCardRow } from '../App';
import IterationButton from './IterationButton';
import PauseButton from './PauseButton';
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
        const { exercise, set, split, isLastExercise, isLastSet } =
            this.props.store.getState().workout;
        const { weight } = this.state;
        return (
            <div className={flexCardRow}>
                <div className={`${flexCardContainer}`}>
                    <div className={`${cardStyleClasses}`}>
                        <h2>{split.name}</h2>
                        <h3>{exercise ? exercise.name : ""}</h3>
                        <p>letztes Gewicht:
                            <b> {weight} kg </b>
                        </p>
                        <p>Satz:<b> {set + 1}</b></p>
                        <p>Wiederholungen: 12</p>
                    </div>
                </div>
                <div className={`${flexCardContainer}`}>
                    <div className={`${cardStyleClasses}`}>
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
                </div>
                <div className={`${flexCardContainer}`}>
                    <Weights className={`${cardStyleClasses}`} addWeight={this.addWeight} sum={weight} />
                </div>
            </div>
        )
    }
}

const Workout = StoreComponent(_Workout);

export default Workout;