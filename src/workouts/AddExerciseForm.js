import React from 'react'
import StoreComponent from '../HOCs/StoreComponent';
import { muscles } from '../redux/constants';
import { flexCardContainer, cardStyleClasses } from '../ui/FlexCardRow';
import { addExercise } from '../redux/actions';

const _AddExerciseForm = ({ store }) => {
    let _muscle, _name;
    const submit = () => {
        if (!_muscle.value || !_name.value) return;
        store.dispatch(addExercise(_name.value, [_muscle.value]));
        _name.value = _muscle.value = null
    }

    const cancel = () => {
        _name.value = _muscle.value = null;
    }

    return (
        <div className="w3-padding">
            <div className={cardStyleClasses}>
                <input
                    ref={el => _name = el}
                    type="text"
                    placeholder="Name"
                    style={{ width: "50%", display: "inline" }}
                    className="w3-input" />
                <select
                    ref={el => _muscle = el}
                    style={{ width: "50%" }}
                    className="w3-select">
                    <option value={null} disabled selected >Muskelgruppe</option>
                    {
                        Object.keys(muscles).map(
                            (k, i) => (
                                <option value={muscles[k]} key={i}>
                                    {muscles[k]}
                                </option>
                            )
                        )
                    }
                </select>
                <input type="button" value="Hinzufügen" style={{ width: "50%" }} className="w3-button" onClick={submit} />
                <input type="button" value="Abbrechen" style={{ width: "50%" }} className="w3-button" onClick={cancel} />
            </div>
        </div >
    );
}

const AddExerciseForm = StoreComponent(_AddExerciseForm);

export default AddExerciseForm;