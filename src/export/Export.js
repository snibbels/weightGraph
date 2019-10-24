import React from 'react'
import store from '../redux/store'

const Export = () => (
    <div style={{ userSelect: "all" }} >
        {JSON.stringify(store.getState())}
    </div>
);

export default Export;