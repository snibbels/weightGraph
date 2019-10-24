import React from 'react'
import { unselectExercise } from '../redux/actions';
import { muscleColors } from '../redux/constants';
import store from '../redux/store'

const SplitItem = ({ id, name, className, muscles=[] }) => (
    < li className={className + " w3-display-container"}>
        {
            muscles.map((m, i) => (
                <span
                    key={i}
                    className="w3-xlarge"
                    style={{
                        verticalAlign: "middle",
                        color: muscleColors[m]
                    }}>&bull;</span>))
        }
        <span className="w3-padding" >
            {name}
        </span>
        <span className="w3-display-right"
            onClick={() => store.dispatch(unselectExercise(id))}>
            <div className="w3-padding w3-button w3-hover-blue
            w3-large">
                &times;
            </div>
        </span>
    </li>
);

export default SplitItem;