import React from 'react';
import FlexCardRow, { cardStyleClasses } from '../ui/FlexCardRow';
import AverageMuscleWeights from './AverageMuscleWeights';
import Test from './Test'
import ExerciseGraphList from './ExerciseGraphList';

const Statistics = () => (
    <FlexCardRow>
        {/* <Test className={cardStyleClasses} />
        <AverageMuscleWeights className={cardStyleClasses} /> */}
        <ExerciseGraphList />
    </FlexCardRow>
)

export default Statistics;