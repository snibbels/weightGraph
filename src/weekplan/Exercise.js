import React from 'react'

const Exercise = ({ exerciseName, sets, wraps, lastWeight }) => (
    <tr>
        <td>
            {exerciseName}
        </td>
        <td>
            {sets}
        </td>
        <td>
            {wraps}
        </td>
        <td>
            {lastWeight} kg
        </td>
    </tr>
);

export default Exercise;