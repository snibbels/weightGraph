import React from 'react';

import MainMenu from './MainMenu';

const PageTemplate = ({ children }) => (
    <div>
        <MainMenu />
        {children}
    </div>
)

export default PageTemplate;