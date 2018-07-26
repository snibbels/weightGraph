import React from 'react'
import WorkoutPlan from './WorkoutPlan';
import {addWorkout} from '../redux/actions';
import StoreComponent from '../HOCs/StoreComponent';

const _Workouts = ({store}) =>{
    let name;
    const action = ()=>{
        store.dispatch(addWorkout(name));
    }

    return (
    <div>
        <WorkoutPlan
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