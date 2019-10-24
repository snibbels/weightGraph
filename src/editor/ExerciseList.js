import React from 'react'
import Exercise from './Exercise';
import AddDeleteButton from '../ui/AddDeleteButton';
import AddExerciseForm from './AddExerciseForm';
import { toggleAddExerciseForm } from '../redux/actions';
import store from '../redux/store'

const ExerciseList = ({ exercises = [], className, style }) => {
    const { showAddExerciseForm } = store.getState().ui
    const toggleView = () => store.dispatch(toggleAddExerciseForm())
    return (
        <div className={className} style={style}>
            <h2 className="w3-display-container">
                <span>
                    Übungen
            </span>
                <AddDeleteButton
                    onClick={toggleView}
                    style={{ cursor: "pointer" }}
                    deleteMode={showAddExerciseForm}
                    className="w3-display-right" />
            </h2>
            {
                showAddExerciseForm ?
                    <AddExerciseForm toggleView={toggleView} /> :
                    null
            }
            {
                exercises.map((e, i) => (
                    <Exercise {...e} key={i} />
                ))
            }
        </div>
    );
}

export default ExerciseList;