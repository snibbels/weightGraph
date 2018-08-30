import React from 'react';
import FlexCardRow, { cardStyleClasses } from '../ui/FlexCardRow';
import AverageMuscleWeights from './AverageMuscleWeights';
import Test from './Test'

const Statistics = () => (
    <FlexCardRow>
        <Test className={cardStyleClasses} />
        <AverageMuscleWeights className={cardStyleClasses} />
    </FlexCardRow>
)

export default Statistics;