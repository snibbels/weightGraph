import React from 'react'
import WorkoutPlan from './WorkoutPlan';
import {addWorkout, addSplit} from '../redux/actions';
import StoreComponent from '../HOCs/StoreComponent';

const _Workouts = ({store}) =>{
    let name;
    const plan = store.getState().workoutPlan;
    const action = ()=>{
        store.dispatch(addWorkout(name));
        store.dispatch(addSplit("Brust & Bizeps", true));
        store.dispatch(addSplit("Rücken & Trizeps", true));
        store.dispatch(addSplit("Beine & Schultern", true));
    }

    return (
    <div>
        <WorkoutPlan 
            {...plan}
            className="w3-row-padding w3-border-bottom" />
        <div className="w3-row-padding w3-container 
                w3-center ">
            <div className="w3-card w3-padding w3-margin
                w3-hover-blue" onClick={action}>
                Einen Trainingsplan hinzufügen +
            </div>
        </div>
    </div>
);}

const Workouts = StoreComponent(_Workouts);

export default Workouts;