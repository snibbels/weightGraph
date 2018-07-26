import React from 'react'
import { StoreContext } from '../App';

const StoreComponent = ComposedComponent => (props, state) => (
    < StoreContext.Consumer >
        {
            ({ store }) => (
                <ComposedComponent {...props} {...state} store={store} />
            )
        }
    </StoreContext.Consumer >
);

export default StoreComponent;