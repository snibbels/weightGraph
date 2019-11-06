import React from 'react'
import ExerciseHistoryGraph from './ExerciseHistoryGraph'
import FlexCardRow, { cardStyleClasses } from '../ui/FlexCardRow'

export default function Stats() {
    return (
        <FlexCardRow>
            <ExerciseHistoryGraph className={cardStyleClasses} />
        </FlexCardRow>
    )
}
