import React from 'react';
import StoreComponent from '../HOCs/StoreComponent';
import ExerciseList from './ExerciseList';
import Reset from './Reset';
import WorkoutPlan from './WorkoutPlan';
import { flexCardRow, cardStyleClasses, flexCardContainer } from '../App';

const _Workouts = ({ store }) => {
    const plan = store.getState().workoutPlan;
    const exercises = store.getState().exercises;
    const isWorkoutEmpty = !store.getState().exercises
        .map(e => e.selected).filter(e => e).length;

    // TODO: splits 
    return (
        <div>
            {
                isWorkoutEmpty ?
                    (
                        <div className={flexCardRow + " w3-border-bottom"}>
                            <div className={flexCardContainer}>
                                <div className={cardStyleClasses}>
                                    <h3>Willkommen im Editor</h3>
                                    <p>Hier siehst Du deine Splits und alle Übungen.</p>
                                    <p>Du kannst die Übungen durch antippen deinem Trainingsplan hinzufügen.</p>
                                </div>
                            </div>
                        </div>
                    ) : ""
            }
            <WorkoutPlan
                {...plan}
                className={`${flexCardRow} w3-border-bottom w3-row-padding`} />
            <ExerciseList exercises={exercises} className="w3-row-padding" />
            <Reset className="w3-card w3-padding w3-margin" />
        </div>
    );
}

const Workouts = StoreComponent(_Workouts);

export default Workouts;