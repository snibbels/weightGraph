import React from 'react';
import { MdPlayArrow } from 'react-icons/lib/md';

const buttonStyle = {
    fontSize: "2em"
};

const StartButton = ({ className }) => (
    <div className={className + " w3-button"}>
        <MdPlayArrow
            style={buttonStyle}
            className="w3-circle w3-border w3-margin" />
        <span>Jetzt starten</span>
    </div>
);

export default StartButton;