import React from 'react'
import store from '../redux/store'
import SplitComposerItem from './SplitComposerItem';
import { muscles } from '../redux/constants';

const SplitComposer = ({ ...props }) => {
    const { splits } = store.getState().workoutPlan;
    const unselectedMuscles = Object
        .values(muscles)
        .filter(m => !(splits
            .map(s => [...s.muscles])
            .reduce((c1, c2) => [...c1, ...c2], [])
            .find(muscle => m === muscle)))

    return (
        <div  {...props}>
            <h2>Splits konfigurieren</h2>
            <ul className="w3-ul">
                {splits.map((s, i) => (
                    <SplitComposerItem key={i} {...s}
                        unselectedMuscles={unselectedMuscles} />
                ))}
                {(unselectedMuscles && unselectedMuscles.length) ?
                    <SplitComposerItem
                        name="neuer Split"
                        unselectedMuscles={unselectedMuscles}
                    /> : null}
            </ul>
        </div>
    );
}

export default SplitComposer;