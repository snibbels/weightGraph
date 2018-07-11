
import React from 'react';
import WeightForm from './WeightForm';


const Exercise = ({ id, name, sets, wraps, weight, editmode, editWeight = f => f }) => (
    <tr>
        <td>{name}</td>
        <td>{sets}</td>
        <td>{wraps}</td>
        <td>
            {(editmode) ?
                <WeightForm
                    id={id}
                    onAddWeight={editWeight}
                    currentWeight={(weight + "kg")}
                /> :
                (weight + "kg")}
        </td>
    </tr >
)

export default Exercise