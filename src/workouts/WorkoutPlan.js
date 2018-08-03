import React from 'react';
import Split from './Split';
import { flexCardContainer, cardStyleClasses } from '../App';

const WorkoutPlan = ({ name, splits = [], className, style }) => (
    <div className={className} style={style} >
        {name ? (<h2>{name}</h2>) : ""}
        {splits.map((s, i) => (
            <div className={`${flexCardContainer}`} key={i}>
                <Split
                    {...s}
                    className={`${cardStyleClasses}`} />
            </div>
        ))}
    </div>
);

export default WorkoutPlan;