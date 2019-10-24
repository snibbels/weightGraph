import React from 'react'
import store from '../redux/store'
import { changeDisplayedDiscs } from '../redux/actions';

const DisplayedDiscs = ({ ...props }) => {

    let input;
    const { displayedDiscs } = store.getState().settings;
    const addWeight = () => store.dispatch(
        changeDisplayedDiscs([
            ...displayedDiscs, input.value
        ].filter(i => i).sort((n1, n2) => n1 === n2 ? 0 : n1 > n2 ? -1 : 1))
    );
    const deleteWeight = value => store.dispatch(
        changeDisplayedDiscs(displayedDiscs.filter(
            n => n !== value
        ))
    );

    return (
        <div {...props}>
            <h2>Gewichte anpassen</h2>
            <input
                className="w3-input"
                placeholder="neues Gewicht eingeben"
                type="number"
                ref={v => input = v}
                name="newWeight" />
            <button className="w3-button" style={{ width: "100%" }} onClick={addWeight}>
                Hinzufügen
            </button>
            <ul className="w3-ul">
                {
                    displayedDiscs ?
                        displayedDiscs.map(
                            (d, i) => (
                                <li key={i} className="w3-display-container">
                                    <span>{d}</span>
                                    <div className="w3-display-right w3-padding"
                                        onClick={() => deleteWeight(d)} >
                                        &times;
                                </div>
                                </li>
                            )
                        ) : undefined
                }
            </ul>
        </div>
    );
}

export default DisplayedDiscs;