import React from 'react';

const WeightForm = ({ onAddWeight }) => {
    const onSubmit = () => {
        if (!_weight) return;
        onAddWeight(_weight.value);
        _weight.value = '';
    };

    let _weight;

    return (
        <form onSubmit={onSubmit}>
            <input
                ref={input => _weight = input}
                type='number'
                placeholder="neues Gewicht"
            />
            <button>+</button>
        </form>
    );
}

export default WeightForm;
