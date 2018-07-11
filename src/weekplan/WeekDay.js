import React from 'react';
import Exercise from './Exercise';

const WeekDay = ({ name, exercises, store }) => (
    <React.Fragment>
        <h3>{name}</h3>
        <table className="w3-table w3-responsive">
            <tbody>
                <tr>
                    <th>Übung</th>
                    <th>Sätze</th>
                    <th>Wdh</th>
                    <th>Gewicht</th>
                </tr>
                {
                    exercises.map((e, i) => (
                        <Exercise key={i} {...e} store={store} />
                    ))
                }
            </tbody>
        </table>
    </React.Fragment>
)

export default WeekDay;