import React from 'react';
import SplitItem from './SplitItem';
import StoreComponent from '../HOCs/StoreComponent'


const _Split = ({ name, muscles, className, style, store }) => {
    const exercises = store.getState().exercises.filter(
        e => (e.selected && !!muscles.find(
            muscle => (e.muscles.indexOf(muscle) > -1)
        ))
    );

    return (
        <div className={className} style={style}>
            <h4>{name}</h4>
            <ul className="w3-ul">
                {exercises.map((e, i) => (
                    <SplitItem {...e} key={i}
                        className="w3-display-container w3-hover-blue" />
                ))}
            </ul>
        </div>
    );
}

const Split = StoreComponent(_Split);

export default Split;