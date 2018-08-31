import React from 'react'

import StoreComponent from '../HOCs/StoreComponent';
import ExerciseGraph from './ExerciseGraph';
import FlexCardRow from '../ui/FlexCardRow';

const _ExerciseGraphList = ({ store, ...props }) => {
    const { history, exercises } = store.getState();

    return (
        <FlexCardRow >
            {exercises.filter(e => e.selected).map((e, i) => (
                <ExerciseGraph key={i} history={history} exercise={e} />
            ))}
        </FlexCardRow>
    );
}

const ExerciseGraphList = StoreComponent(_ExerciseGraphList)

export default ExerciseGraphList;