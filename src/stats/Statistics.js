import React from 'react';
import FlexCardRow, { cardStyleClasses } from '../ui/FlexCardRow';
import AverageMuscleWeights from './AverageMuscleWeights';

const Statistics = () => (
    <FlexCardRow>
        <AverageMuscleWeights className={cardStyleClasses} />
    </FlexCardRow>
)

export default Statistics;