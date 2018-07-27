import React from 'react'

const SplitItem = ({ id, name, className }) => (
    < li className={className}>
        <span>
            {name}
        </span>
        <span className="w3-display-right">
            <div className="w3-padding">
                &times;
            </div>
        </span>
    </li>
);

export default SplitItem;