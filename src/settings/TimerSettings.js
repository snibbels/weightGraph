import React from 'react'

import StoreComponent from '../HOCs/StoreComponent';
import { changeTimerSettings } from '../redux/actions';

const _TimerSettings = ({ store, ...props }) => {
    const { timeBetweenSets, timeBetweenExercises } = store.getState().settings;
    let tbs, tbe;
    const saveSettings = () => store.dispatch(
        changeTimerSettings(tbs.value * 1000, tbe.value * 1000)
    );

    return (
        <div {...props} >
            <h2>Timer Einstellungen</h2>
            <p>
                <label
                    className="w3-label"
                    htmlFor="timeBetweenSets">
                    Pause zwischen den Sätzen (Sekunden)
                </label>
                <input
                    className="w3-input"
                    onBlur={saveSettings}
                    type="number"
                    ref={v => tbs = v}
                    defaultValue={timeBetweenSets / 1000} />
            </p>
            <p>
                <label
                    className="w3-label"
                    htmlFor="timeBetweenExercises">
                    Pause zwischen den Übungen (Sekunden)
                </label>
                <input
                    className="w3-input"
                    onBlur={saveSettings}
                    type="number"
                    ref={v => tbe = v}
                    defaultValue={timeBetweenExercises / 1000} />
            </p>
        </div>
    );
}
const TimerSettings = StoreComponent(_TimerSettings)

export default TimerSettings;