import React from 'react'
import store from '../redux/store';
import ProtocolEntry from './ProtocolEntry';

const Protocol = ({ ...props }) => {
    const { history = [] } = store.getState()

    if (!history.length)
        return null

    const recordsPerDay = history
        .map(h => ({ ...h, day: (new Date(h.timestamp)).toLocaleDateString() }))
        .reduce((days, item) => {
            if (!days[item.day])
                days[item.day] = []

            days[item.day] = [
                ...days[item.day],
                item
            ]
            return days
        }, {})


    return (
        <div {...props} >
            <h3>Trainingsverlauf</h3>
            {Object.keys(recordsPerDay).map((item, i) => (
                <ProtocolEntry key={i} day={item} entries={recordsPerDay[item]} />
            ))}
        </div>
    );
}

export default Protocol;