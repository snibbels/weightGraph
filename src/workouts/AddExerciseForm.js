import React from 'react';
import StoreComponent from '../HOCs/StoreComponent';
import { addExercise } from '../redux/actions';
import { muscles } from '../redux/constants';
import { cardStyleClasses } from '../ui/FlexCardRow';

const _AddExerciseForm = ({ store, toggleView }) => {
    let _muscle, _name;
    const submit = () => {
        if (!_muscle.value || !_name.value) return;
        store.dispatch(addExercise(_name.value, [_muscle.value]));
        _name.value = _muscle.value = null
    }

    const cancel = () => {
        _name.value = null;
        _muscle.value = "default";
        toggleView();
    }

    return (
        <div className="w3-padding">
            <div className={cardStyleClasses}>
                <input
                    ref={el => _name = el}
                    type="text"
                    placeholder="Name"
                    className="w3-input" />
                <select
                    defaultValue="default"
                    ref={el => _muscle = el}
                    className="w3-select w3-white">
                    <option value="default" disabled >Muskelgruppe</option>
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
                <input type="button" value="Hinzufügen" className="w3-button" onClick={submit} />
                <input type="button" value="Abbrechen" className="w3-button" onClick={cancel} />
            </div>
        </div >
    );
}

const AddExerciseForm = StoreComponent(_AddExerciseForm);

export default AddExerciseForm;