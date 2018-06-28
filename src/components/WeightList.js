import React, { Component } from 'react';

import WeightEntry from './WeightEntry';
import WeightForm from './WeightForm';

// TODO: add input form

const WeightList = ({ weights = [], onAddWeight = f => f }) => (
    <div className="w3-container">
        <h2 className="w3-cell-row">
            <span className="w3-col">Weights</span>
        </h2>

        <WeightForm onAddWeight={onAddWeight} />
        {
            (weights.length) ?
                weights.map((w, i) => <WeightEntry key={i} {...w} />) :
                <div className="w3-row">No entries yet. Add your first weight!</div>
        }
    </div>
)

export default WeightList;