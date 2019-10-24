import React from 'react';
import ExerciseList from './ExerciseList';
import WorkoutPlan from './WorkoutPlan';
import { flexCardRow, cardStyleClasses, flexCardContainer } from '../App';
import store from '../redux/store'

const Editor = () => {
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
        </div>
    );
}

export default Editor;