import React from 'react';
import StoreComponent from '../HOCs/StoreComponent';
import { addHistoryEntry, setSplitIndex } from '../redux/actions';
import QuickEditItem from './QuickEditItem';
import { Link } from 'react-router-dom'
import { MdCheck } from 'react-icons/lib/md';

const _QuickEditForm = ({ exercises, history, split,
    splitIndex, onSave = f => f, savedSplitIds = [],
    store, ...props }) => {
    const currentExercises = split.exercises.map(
        e => ({
            ...history.find(h => h.exerciseId === e),
            ...exercises.find(ex => ex.id === e),
        })
    );
    let currentEntries = currentExercises.map(ce => ({
        id: ce.id,
        weight: ce.weight
    }));
    const saveWeights = () => {
        currentEntries.forEach(({ id, weight }) => {
            if (weight !== undefined)
                store.dispatch(addHistoryEntry(id, weight));
        });
        onSave(split.id);
    }
    const onChangeWeight = (id, weight) => {
        currentEntries = currentEntries.map(
            ce => (ce.id !== id ? ce : ({ id, weight }))
        )
    }
    const onSelectAsNext = () => store.dispatch(setSplitIndex(splitIndex));
    const controlButtonStyle = {
        width: "50%",
        display: "inline-block",
        textAlign: "center"
    }

    return (
        <div {...props}>
            <ul className="w3-ul">
                <li><h2>{split.name}</h2></li>
                {!!savedSplitIds.find(id => id === split.id) ?
                    <li className="w3-green w3-center">
                        <MdCheck className="w3-large" />
                        <span className="w3-padding">
                            Gespeichert
                        </span>
                    </li> : null}
                {currentExercises.map((ce, i) => (
                    <QuickEditItem
                        {...ce}
                        onChangeWeight={onChangeWeight}
                        key={i} />
                ))}
                <li>
                    <div
                        className="w3-button"
                        style={{ ...controlButtonStyle, width: "100%" }}
                        onClick={onSelectAsNext}>
                        Diesen Split als Nächsten auswählen
                        </div>
                </li>
                <li>
                    <div
                        className="w3-button"
                        style={controlButtonStyle}
                        onClick={saveWeights}
                    >Speichern</div>
                    <Link
                        to="/"
                        className="w3-button"
                        style={controlButtonStyle}
                    >Zurück</Link>
                </li>
            </ul>
        </div>
    );
}

const QuickEditForm = StoreComponent(_QuickEditForm)

export default QuickEditForm;