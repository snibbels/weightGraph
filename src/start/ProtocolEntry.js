import React from 'react'
import store from '../redux/store'
import ExerciseItem from '../workout/ExerciseItem'


const ProtocolEntry = ({ day = "", entries = [], ...props }) => {
    if (!day || !entries.length)
        return null

    const { exercises = [] } = store.getState()

    const historyData = entries.map(e => ({
        ...e,
        ...exercises.find(ex => ex.id === e.exerciseId)
    }))

    return (
        <div {...props}>
            <h4>{day}</h4>
            <ul className="w3-ul">

                {historyData.map((item, i) => (
                    <ExerciseItem {...item} key={i} />
                ))}
            </ul>
        </div>
    )
}

export default ProtocolEntry