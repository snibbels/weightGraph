import React from 'react';
import SplitItem from './SplitItem';


const Split = ({ name, exercises = [], className, style }) => (
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


export default Split;