import React from 'react';
import { FaPlus } from 'react-icons/lib/fa'

const WeightForm = ({ id, onAddWeight, currentWeight = 0 }) => {
    const onSubmit = e => {
        e.preventDefault();
        if (!_weight) return;
        onAddWeight(_weight.value, id);
        _weight.value = '';
    };

    let _weight;

    return (
        <form onSubmit={onSubmit} >
            <input
                style={{ width: "5em" }}
                className="w3-input w3-half"
                ref={input => _weight = input}
                type='number'
                placeholder={currentWeight}
            />
            <button className="w3-button w3-half" type="submit">
                <FaPlus />
            </button>
        </form>
    );
}

export default WeightForm;
