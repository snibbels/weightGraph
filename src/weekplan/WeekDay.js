import React from 'react';
import Exercise from './Exercise';

const WeekDay = ({ name, exercises }) => (
    <React.Fragment>
        <h3>{name}</h3>
        <table>
            <tbody>
                <tr>
                    <th>Übung</th>
                    <th>Sätze</th>
                    <th>Wiederholungen</th>
                    <th>letztes Gewicht</th>
                </tr>
                {
                    exercises.map((e, i) => (
                        <Exercise key={i} {...e} />
                    ))
                }
            </tbody>
        </table>
    </React.Fragment>
)

export default WeekDay;