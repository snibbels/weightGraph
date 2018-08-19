import React from 'react'

import StoreComponent from '../HOCs/StoreComponent';
import { restoreDefaultSettings } from '../redux/actions';

const _RestoreDefaults = ({ store, ...props }) => {
    const restore = () => {
        store.dispatch(restoreDefaultSettings());
        window.location.reload();
    }

    return (
        <div {...props} onClick={restore} >
            Restore Defaults
        </div>
    );
}

const RestoreDefaults = StoreComponent(_RestoreDefaults)

export default RestoreDefaults;