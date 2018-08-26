import React from 'react'
import MuscleTag from '../ui/MuscleTag';
import StoreComponent from '../HOCs/StoreComponent';
import { deleteSplit, addSplit, editSplit, unselectExercise, selectExercise } from '../redux/actions';
import { muscleLabels } from '../redux/constants';

const generateSplitName = (muscles = []) => {
    const string = muscles
        .map(m => muscleLabels[m])
        .join(", ");
    const lastIndex = string.lastIndexOf(",");
    return [...string].map((s, i) => i !== lastIndex ? s : " &").join('');
}

const _SplitComposerItem = ({ store, id, name, muscles = [], unselectedMuscles = [] }) => {
    const reselectExercises = () => {
        const { exercises } = store.getState();
        exercises.forEach(e => {
            if (e.selected) {
                const { id, name, muscles } = e;
                store.dispatch(unselectExercise(id, name, muscles));
                store.dispatch(selectExercise(id, name, muscles));
            }
        });
    }

    const onUnselectedMuscleTagClick = muscle => {
        if (!!id) {
            const newMuscles = [...muscles, muscle];
            store.dispatch(editSplit(
                id, generateSplitName(newMuscles), newMuscles))
            reselectExercises();
        } else {
            store.dispatch(addSplit(
                generateSplitName([muscle]), [muscle]
            ))
            reselectExercises();
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
        reselectExercises();
    }

    return (
        <li style={{ maxWidth: "100%" }} className="w3-display-container">
            <div
                onClick={() => store.dispatch(deleteSplit(id))}
                className="w3-display-right w3-padding w3-xlarge w3-button">
                <span>&times;</span>
            </div>
            <div style={{ width: "80%" }}>
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
            </div>
        </li>
    );
}

const SplitComposerItem = StoreComponent(_SplitComposerItem)

export default SplitComposerItem;