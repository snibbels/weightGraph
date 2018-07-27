import React from 'react'
import { defaults } from '../redux/constants';

const clearLocalStorageAndReload = () => {
    localStorage.clear(defaults.LOCALSTORAGE_NAME);
    window.location.reload();
}

const Reset = ({ className, style }) => (
    <div className={className} style={style}
        onClick={clearLocalStorageAndReload}>
        Reset
    </div>
);

export default Reset;