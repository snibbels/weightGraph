import React from 'react';
import { FaPlus } from 'react-icons/lib/fa'

const WeightForm = ({ onAddWeight, currentWeight = 0 }) => {
    const onSubmit = () => {
        if (!_weight) return;
        onAddWeight(_weight.value);
        _weight.value = '';
    };

    let _weight;
    let style = {
        width: "5em"
    }

    return (
        <form onSubmit={onSubmit} >
            <input
                className="w3-input w3-half"
                style={style}
                ref={input => _weight = input}
                type='number'
                placeholder={currentWeight}
            />
            <button className="w3-button w3-half">
                <FaPlus />
            </button>
        </form>
    );
}

export default WeightForm;
