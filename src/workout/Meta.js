import React from 'react'
import { getLastExerciseData } from '../redux/utils';
import store from '../redux/store';
import { changeWeight } from '../redux/actions';
import BellTypeIndicator from './BellTypeIndicator';

const Meta = ({ className, split, exercise = {} }) => {
    const { name = "", id = "" } = exercise
    const { weight = 0, bellType } = getLastExerciseData(id)
    console.log(bellType)
    // TODO: um belltype erweitern
    const confirmLastWeightAsRecent = () => store.dispatch(
        changeWeight(id, weight)
    )
    return (
        <div className={className}>
            <h2>{split ? split.name : ""}</h2>
            <h3>{name}</h3>
            <p>letztes Gewicht:<b> {weight} kg </b>
                <BellTypeIndicator
                    bellType={bellType} />
            </p>
            <button
                onClick={confirmLastWeightAsRecent}
                className="w3-button w3-blue">
                Gewicht wiederverwenden
                </button>
        </div>
    );
}

export default Meta;