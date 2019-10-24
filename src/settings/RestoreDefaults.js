import React from 'react';
import store from '../redux/store'
import { restoreDefaultSettings, showPopUp, hidePopUp } from '../redux/actions';
import Confirm from '../ui/Confirm';


const RestoreDefaults = ({ ...props }) => {
    const restore = () => {
        store.dispatch(restoreDefaultSettings());
        window.location.reload();
    }
    const id = "RESTORE_DEFAULTS_POPUP";
    const onHide = () => store.dispatch(hidePopUp());
    const showConfirm = () => store.dispatch(showPopUp(id));
    const { popUpId } = store.getState().ui;
    const isVisible = popUpId === id;

    return (
        <div {...props}>
            <div onClick={showConfirm}>
                Restore Defaults
            </div>
            <Confirm
                message="Standardwerte wiederherstellen?"
                onHide={onHide}
                isVisible={isVisible}
                onAccept={restore} />
        </div>
    );
}

export default RestoreDefaults;