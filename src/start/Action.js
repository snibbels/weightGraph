import React from 'react'
import StoreComponent from '../HOCs/StoreComponent';

const _Action = ({ store }) => {
    const { currentSplitIndex } = store.getState();
    const { splits } = store.getState().workoutPlan;
    const currentSplit = splits[currentSplitIndex];

    return (
        <div className="w3-card w3-left-align w3-margin w3-padding">
            {
                currentSplit ?
                    (<h2>{currentSplit.name}</h2>) :
                    "Kein Split vorhanden"
            }
        </div>
    );
}

const Action = StoreComponent(_Action);

export default Action;