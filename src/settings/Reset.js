import React from 'react'
import { defaults } from '../redux/constants';
import store from '../redux/store'
import { showPopUp, hidePopUp } from '../redux/actions';
import Confirm from '../ui/Confirm';


const Reset = ({ className, style }) => {

    const clearLocalStorageAndReload = ()=>setTimeout(() => {
        localStorage.clear(defaults.LOCALSTORAGE_NAME);
        window.location.reload();
    }, 500);

    const id = "RESET_APP";
    const onHide = () => store.dispatch(hidePopUp());
    const showConfirm = () => store.dispatch(showPopUp(id));
    const { popUpId } = store.getState().ui;
    const isVisible = popUpId === id;


    return (
        <div className={className} style={style}
            onClick={showConfirm}>
            <span>
                Reset
            </span>
            <Confirm
                message="Die Anwendung komplett zurücksetzen?"
                onHide={onHide}
                isVisible={isVisible}
                onAccept={clearLocalStorageAndReload} />
        </div>
    );
}

export default Reset;