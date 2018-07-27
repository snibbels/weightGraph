import React from 'react'
import StoreComponent from '../HOCs/StoreComponent';
import { unselectExercise } from '../redux/actions';

const _SplitItem = ({ id, name, className, store }) => (
    < li className={className + " w3-display-container"}>
        <span>
            {name}
        </span>
        <span className="w3-display-right"
            onClick={() => store.dispatch(unselectExercise(id))}>
            <div className="w3-padding w3-button w3-hover-blue">
                &times;
            </div>
        </span>
    </li>
);

const SplitItem = StoreComponent(_SplitItem);

export default SplitItem;