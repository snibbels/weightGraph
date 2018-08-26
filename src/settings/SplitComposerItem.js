import React from 'react'
import MuscleTag from '../ui/MuscleTag';
import StoreComponent from '../HOCs/StoreComponent';
import { deleteSplit, addSplit, editSplit } from '../redux/actions';
import { muscleLabels } from '../redux/constants';

const generateSplitName = (muscles = []) => {
    return muscles
        .map(m => muscleLabels[m])
        .join(" & ");
}

const _SplitComposerItem = ({ store, id, name, muscles = [], unselectedMuscles = [] }) => {
    const onUnselectedMuscleTagClick = muscle => {
        if (!!id) {
            const newMuscles = [...muscles, muscle];
            store.dispatch(editSplit(
                id, generateSplitName(newMuscles), newMuscles))
        } else {
            store.dispatch(addSplit(
                generateSplitName([muscle]), [muscle]
            ))
        }
    }

    const onMuscleTagClick = muscle => {
        const newMuscles = muscles.filter(m => m !== muscle);

        store.dispatch(editSplit(
            id, generateSplitName(newMuscles), newMuscles
        ));

        if (!newMuscles.length) {
            store.dispatch(deleteSplit(id));
        }
    }

    return (
        <li style={{ maxWidth: "100%" }} className="w3-display-container">
            <div
                onClick={() => store.dispatch(deleteSplit(id))}
                className="w3-display-right w3-padding w3-xlarge w3-button">
                <span>&times;</span>
            </div>
            <h3>{name}</h3>
            {muscles.map((m, i) => (
                <MuscleTag
                    onClick={() => onMuscleTagClick(m)}
                    key={i}
                    muscle={m}
                    className="w3-large"
                />
            ))}
            {unselectedMuscles.map((m, i) => (
                <MuscleTag
                    onClick={() => onUnselectedMuscleTagClick(m)}
                    selected={false}
                    key={i}
                    muscle={m}
                    className="w3-large"
                />
            ))}
        </li>
    );
}

const SplitComposerItem = StoreComponent(_SplitComposerItem)

export default SplitComposerItem;