import React from 'react'
import StoreComponent from '../HOCs/StoreComponent';

const _Week = ({ store, ...props }) => {
    return (
        <div {...props}>
            [Week]
        </div>
    );
}

const Week = StoreComponent(_Week);

export default Week;