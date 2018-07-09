import React from 'react';
import WeekDay from './WeekDay';

const WeightList = ({ weekplan, store }) => (
    <div className="w3-container w3-left-align">
        {
            weekplan.map((day, i) => (
                <WeekDay key={i} {...day} store={store} />
            ))
        }
    </div>
)

export default WeightList;