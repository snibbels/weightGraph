import React, { Component } from 'react'
import WorkoutPlan from './WorkoutPlan';

const mockData = {
    name: "Mein erster Plan",
    splits: [
        {
            name: "Brust & Bizeps", exercises: [
                { name: "Überzüge", id: 0 }
            ]
        },
        {
            name: "Rücken & Trizeps", exercises: [
                { name: "Rudern", id: 1 }
            ]
        },
        {
            name: "Beine & Schulter", exercises: [
                { name: "Kniebeugen", id: 0 }
            ],
            editmode: true
        }
    ]
}

const Workouts = () => (
    <div>
        <WorkoutPlan
            className="w3-row-padding w3-border-bottom"
            {...mockData} />
        <div className="w3-row-padding w3-container 
                w3-center ">
            <div className="w3-card w3-padding w3-margin
                w3-hover-blue">
                Einen Trainingsplan hinzufügen +
            </div>
        </div>
    </div>
);

export default Workouts;