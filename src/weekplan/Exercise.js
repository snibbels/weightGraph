import React from 'react'
import { addWeight } from '../redux/actions';

const Exercise = ({ id, name, sets, wraps, weight, store }) => {
    const plusOne = () => store.dispatch(addWeight(id, weight + 1, Date.now()));
    return (
        <tr >
            <td>{name}</td>
            <td>{sets}</td>
            <td>{wraps}</td>
            <td >{weight} kg</td>
            <td><button onClick={plusOne} className="w3-button">+</button></td>
        </tr>
    );
}

export default Exercise;