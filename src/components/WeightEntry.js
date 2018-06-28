import React from 'react';

const WeightEntry = ({ weight, date }) => (
    <div className="w3-row">
        <span className="w3-left">{weight}</span>
        <span className="w3-right">{date}</span>
    </div>
);

export default WeightEntry;