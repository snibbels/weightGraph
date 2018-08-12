import React from 'react'
import StoreComponent from '../HOCs/StoreComponent';

const _NextSplit = ({ store, ...props }) => {

    const { splitIndex, workoutPlan } = store.getState();
    const split = workoutPlan.splits[splitIndex];
    return (
        <div {...props}>
            <span>
                {
                    (!!split && !!split.name) ?
                        `Nächste Einheit: ${split.name}` :
                        "Beginne jetzt mit deinem ersten Training"
                }
            </span>
        </div>
    );
}

const NextSplit = StoreComponent(_NextSplit);

export default NextSplit;