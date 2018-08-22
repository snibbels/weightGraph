import React from 'react'

import StoreComponent from '../HOCs/StoreComponent';
import { muscles } from '../redux/constants';
import { getAverage, getDataForMuscleGroup } from './dataUtils';

const _AverageMuscleWeights = ({ store, ...props }) => {
    const { exercises, history } = store.getState();

    return (
        <div {...props} >
            {
                Object.values(muscles).map((m, i) =>
                    <p key={i}>
                        {m}

                        {getAverage(
                            getDataForMuscleGroup(history, exercises, m)
                                .map(i => i.weight)
                        )}
                    </p>
                )
            }
        </div>
    );
}

const AverageMuscleWeights = StoreComponent(_AverageMuscleWeights)

export default AverageMuscleWeights;