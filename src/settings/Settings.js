import React from 'react'
import FlexCardRow, { cardStyleClasses } from '../ui/FlexCardRow'
import TimerSettings from './TimerSettings';
import RestoreDefaults from './RestoreDefaults';

const Settings = () => (
    <FlexCardRow>
        <TimerSettings className={cardStyleClasses} />
        <RestoreDefaults className={cardStyleClasses} />
    </FlexCardRow>
);

export default Settings;