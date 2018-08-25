import React from 'react'
import StoreComponent from '../HOCs/StoreComponent'
import { unselectExercise, selectExercise } from '../redux/actions';
import AddDeleteButton from '../ui/AddDeleteButton';
import MuscleTag from './MuscleTag';
import { flexCardContainer, cardStyleClasses } from '../App';

const _Exercise = ({ store, id, name, muscles, selected }) => {
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

const Exercise = StoreComponent(_Exercise);

export default Exercise;