import React from 'react'
import { bellTypes } from '../redux/constants'
import { setBellType } from '../redux/actions'
import store from '../redux/store'
import Dumbbell from '../icons/Dumbbell'
import Barbell from '../icons/Barbell'


const BellTypeSelector = ({ exercise = {}, ...props }) => {
    const { dumbbell, barbell } = bellTypes
    const { id = "" } = exercise
    const generateListener = type => () => store.dispatch(setBellType(type, id))
    const style = { height: "2em", width: "2em" }
    const labels = {}
    labels['undefined'] = "Keine Auswahl"
    labels[bellTypes.barbell] = "Langhantel"
    labels[bellTypes.dumbbell] = "Kurzhantel"
    const currentLabel = labels[exercise.bellType]

    return (
        <div {...props}>
            <h3>Hanteltyp wählen</h3>
            <h4>{currentLabel}</h4>
            <span className="w3-blue w3-round w3-padding w3-margin-right">
                <Barbell
                    style={style}
                    onClick={generateListener(barbell)} />
            </span>
            <span className="w3-blue w3-round w3-padding w3-margin-right">
                <Dumbbell
                    style={style}
                    onClick={generateListener(dumbbell)} />
            </span>
        </div>
    )
}

export default BellTypeSelector