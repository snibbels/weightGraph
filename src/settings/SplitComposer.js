import React from 'react'

import StoreComponent from '../HOCs/StoreComponent';
import SplitComposerItem from './SplitComposerItem';

const _SplitComposer = ({ store, ...props }) => {
    const { splits } = store.getState().workoutPlan;

    return (
        <div  {...props}>
            <h2>Splits konfigurieren</h2>
            <ul className="w3-ul">
                {splits.map((s, i) => (
                    <SplitComposerItem key={i} split={s} />
                ))}
            </ul>
        </div>
    );
}

const SplitComposer = StoreComponent(_SplitComposer)

export default SplitComposer;