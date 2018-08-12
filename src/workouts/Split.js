import React from 'react';
import SplitItem from './SplitItem';
import StoreComponent from '../HOCs/StoreComponent'
import MuscleTag from './MuscleTag';


const _Split = ({ name, muscles, className, style, store, exercises = [] }) => {
    const splitExercises = store.getState().exercises.map(
        e => exercises.indexOf(e.id) > -1 ? e : undefined
    ).filter(item => item);

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

const Split = StoreComponent(_Split);

export default Split;