import React from 'react'
import store from '../redux/store'

const NextSplit = ({  ...props }) => {

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

export default NextSplit;