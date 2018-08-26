import React from 'react';
import { MdFastForward } from 'react-icons/lib/md';

const buttonStyle = {
    fontSize: "2em"
};

const QuickEditButton = ({ className, ...props }) => (
    <div className={className} {...props}>
        <MdFastForward
            style={buttonStyle}
            className="w3-circle w3-border w3-margin" />
        <span>Schneller Eintrag</span>
    </div>
);

export default QuickEditButton;