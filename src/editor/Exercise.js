import React from 'react'
import { unselectExercise, selectExercise } from '../redux/actions';
import AddDeleteButton from '../ui/AddDeleteButton';
import MuscleTag from '../ui/MuscleTag';
import { flexCardContainer, cardStyleClasses } from '../App';
import store from '../redux/store'

const Exercise = ({ id, name, muscles, selected }) => {
    const toggleSelect = ()=> store.dispatch(
        selected ? 
        unselectExercise(id, name, muscles):
        selectExercise(id, name, muscles)
    );
    
    return (
        <div className={flexCardContainer}>
            <div 
                onClick={toggleSelect}
                style ={{cursor: "pointer"}}
                className={`${cardStyleClasses} w3-display-container
                ${selected ? "w3-blue" : ""}
                `}>
                <p>{name}</p>
                <AddDeleteButton 
                    className="w3-display-topright w3-padding, w3-button
                    w3-hover-blue w3-large"
                    deleteMode={selected}/>
                {muscles.map((m, i)=> (
                    <MuscleTag muscle={m} key={i}/>
                ))}
            </div>
        </div>
);}

export default Exercise;