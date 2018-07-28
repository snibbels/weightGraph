import React from 'react'
import StoreComponent from '../HOCs/StoreComponent';

const _Progress = ({ store, ...props }) => {
    return (
        <div {...props}>
            [Progress]
        </div>
    );
}

const Progress = StoreComponent(_Progress);

export default Progress;