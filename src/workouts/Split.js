import React from 'react';
import SplitItem from './SplitItem';
import StoreComponent from '../HOCs/StoreComponent'
import MuscleTag from './MuscleTag';


const _Split = ({ name, muscles, className, style, store }) => {
    const exercises = store.getState().exercises.filter(
        e => (e.selected && !!muscles.find(
            muscle => (e.muscles.indexOf(muscle) > -1)
        ))
    );

    return (
        <div className={className} style={style}>
            <h4>{name}</h4>
            {muscles.map(m => (
                <MuscleTag muscle={m} />
            ))}
            <ul className="w3-ul">
                {exercises.map((e, i) => (
                    <SplitItem {...e} key={i} className="w3-hover" />
                ))}
            </ul>
        </div>
    );
}

const Split = StoreComponent(_Split);

export default Split;