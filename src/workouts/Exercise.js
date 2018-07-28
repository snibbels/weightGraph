import React from 'react'
import StoreComponent from '../HOCs/StoreComponent'
import { unselectExercise, selectExercise } from '../redux/actions';
import AddDeleteButton from '../ui/AddDeleteButton';
import MuscleTag from './MuscleTag';

const _Exercise = ({ store, id, name, muscles, selected }) => {
    const toggleSelect = ()=> store.dispatch(
        selected ? 
        unselectExercise(id):
        selectExercise(id)
    );
    
    return (
    <div 
        onClick={toggleSelect}
        style ={{cursor: "pointer"}}
        className={`w3-card w3-margin w3-padding w3-large
        w3-col s11 m4 l3 w3-display-container
        ${selected ? "w3-blue" : ""}
        `}>
        <p>{name}</p>
        <AddDeleteButton 
            className="w3-display-topright w3-padding, w3-button
            w3-hover-blue w3-large"
            deleteMode={selected}/>
        {muscles.map(m => (
            <MuscleTag muscle={m}/>
        ))}
    </div>
);}

const Exercise = StoreComponent(_Exercise);

export default Exercise;