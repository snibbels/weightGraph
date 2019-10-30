import React from 'react'
import { bellTypes } from '../redux/constants'
import Dumbbell from '../icons/Dumbbell'
import Barbell from '../icons/Barbell'


const selectIcon = type => {
    switch (type) {
        case bellTypes.dumbbell:
            return Dumbbell
        case bellTypes.barbell:
            return Barbell
    }
}

const BellTypeIndicator = ({ bellType, ...props }) => {
    if (!bellType) return null
    const Icon = selectIcon(bellType)

    return (
        <span {...props} className=" w3-padding w3-round">
            <Icon style={{ height: "2em", width: "2em" }} />
        </span>
    )
}

export default BellTypeIndicator