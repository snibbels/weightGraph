import React from 'react';
import Split from './Split';

const WorkoutPlan = ({ name, splits = [], className, style }) => (
    <div className={className} style={style} >
        {name ? (<h2>{name}</h2>) : ""}
        {splits.map((s, i) => (
            <Split
                key={i}
                {...s}
                className="
                    w3-card 
                    w3-col s11 m4 l3
                    w3-padding 
                    w3-margin 
                "/>
        ))}
    </div>
);

export default WorkoutPlan;