import React from 'react';
import SplitItem from './SplitItem';
import MuscleTag from '../ui/MuscleTag';
import store from '../redux/store'

const Split = ({ name, muscles, className, style, exercises = [] }) => {
    // const splitExercises = store.getState().exercises.map(
    //     e => exercises.indexOf(e.id) > -1 ? e : undefined
    // ).filter(item => item)
    const allExercises = store.getState().exercises;

    const splitExercises = exercises.map(
        e => allExercises.find(ex => ex.id === e)
    );

    return (
        <div className={className} style={style}>
            <h4>{name}</h4>
            {muscles.map((m, i) => (
                <MuscleTag muscle={m} key={i} />
            ))}
            <ul className="w3-ul">
                {splitExercises.map((e, i) => (
                    <SplitItem {...e} key={i} className="w3-hover" />
                ))}
            </ul>
        </div>
    );
}

export default Split;