import React from 'react';
import PopUp from '../HOCs/PopUp'

const _Confirm = ({ onAccept = f => f, onDecline = f => f, onHide = f => f, message }) => (
    <div className="w3-white" >
        <p>{message}</p>
        <div className="w3-display-bottomright w3-padding">
            <button
                className="w3-button"
                onClick={e => {
                    e.stopPropagation();
                    onDecline();
                    onHide();
                }}>
                Abbrechen
            </button>
            <button
                className="w3-button w3-blue"
                onClick={e => {
                    e.stopPropagation();
                    onAccept();
                    onHide();
                }}>
                Bestätigen
            </button>
        </div>
    </div>
);

const Confirm = PopUp(_Confirm);

export default Confirm;