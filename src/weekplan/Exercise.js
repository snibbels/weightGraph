import React from 'react'
import WeightForm from './WeightForm';

// TODO: integrate weightform and current weight to reduce space

const Exercise = ({ id, name, sets, wraps, weight, store }) => {
    return (
        <tr >
            <td>{name}</td>
            <td>{sets}</td>
            <td>{wraps}</td>
            <td >{weight} kg</td>
            <td> <WeightForm store={store} id={id} /></td>
        </tr >
    );
}

export default Exercise;