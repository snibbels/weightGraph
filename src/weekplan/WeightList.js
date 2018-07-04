import React from 'react';
import WeekDay from './WeekDay';

// TODO: add input form

const WeightList = ({ weekplan }) => (
    <div className="w3-container w3-left-align">
        {
            weekplan.map((day, i) => (
                <WeekDay key={i} {...day} />
            ))
        }
    </div>
)

export default WeightList;