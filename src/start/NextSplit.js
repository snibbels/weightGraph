import React from 'react'
import StoreComponent from '../HOCs/StoreComponent';

const _NextSplit = ({ store, ...props }) => {

    const { currentSplitIndex } = store.getState();
    const { splits = [] } = store.getState().workoutPlan;
    const nextSplit = splits[currentSplitIndex];

    return (
        <div {...props}>
            <span>
                {
                    (!!nextSplit) ?
                        `Nächste Einheit: ${nextSplit.name}` :
                        "Diggah, gibt keine Splits"
                }
            </span>
        </div>
    );
}

const NextSplit = StoreComponent(_NextSplit);

export default NextSplit;