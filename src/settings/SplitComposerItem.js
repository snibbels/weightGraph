import React from 'react'
import MuscleTag from '../ui/MuscleTag';
import StoreComponent from '../HOCs/StoreComponent';
import { deleteSplit } from '../redux/actions';

const _SplitComposerItem = ({ store, id, name, muscles = [], unselectedMuscles = [] }) => (
    <li style={{ maxWidth: "100%" }} className="w3-display-container">
        <div
            onClick={() => store.dispatch(deleteSplit(id))}
            className="w3-display-right w3-padding w3-xlarge w3-button">
            <span>&times;</span>
        </div>
        <h3>{name}</h3>
        {muscles.map((m, i) => (
            <MuscleTag
                key={i}
                muscle={m}
                className="w3-large"
            />
        ))}
        {unselectedMuscles.map((m, i) => (
            <MuscleTag
                selected={false}
                key={i}
                muscle={m}
                className="w3-large"
            />
        ))}
    </li>
);

const SplitComposerItem = StoreComponent(_SplitComposerItem)

export default SplitComposerItem;