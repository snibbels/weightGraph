import React from 'react';
import StoreComponent from '../HOCs/StoreComponent';
import ExerciseList from './ExerciseList';
import Reset from './Reset';
import WorkoutPlan from './WorkoutPlan';

const _Workouts = ({ store }) => {
    const plan = store.getState().workoutPlan;
    const exercises = store.getState().exercises

    return (
        <div>
            <WorkoutPlan
                {...plan}
                className="w3-row-padding w3-border-bottom" />
            <ExerciseList exercises={exercises} className="w3-row-padding" />
            <Reset className="w3-card w3-padding w3-margin" />
        </div>
    );
}

const Workouts = StoreComponent(_Workouts);

export default Workouts;