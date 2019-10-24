import React from 'react'
import FlexCardRow, { cardStyleClasses } from '../ui/FlexCardRow'
import Reset from './Reset';
import RestoreDefaults from './RestoreDefaults';
import DisplayedDisks from './DisplayedDisks';
import SplitComposer from './SplitComposer';

const Settings = () => (
    <FlexCardRow>
        <SplitComposer className={cardStyleClasses} />
        <DisplayedDisks className={cardStyleClasses} />
        <RestoreDefaults className={cardStyleClasses} />
        <Reset className={cardStyleClasses} />
    </FlexCardRow>
);

export default Settings;