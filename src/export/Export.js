import React from 'react'

import StoreComponent from '../HOCs/StoreComponent';

const _Export = ({ store }) => (
    <div style={{userSelect:"all"}} >
        {JSON.stringify(store.getState())}
    </div>
);

const Export = StoreComponent(_Export)

export default Export;