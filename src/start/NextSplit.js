import React from 'react'
import StoreComponent from '../HOCs/StoreComponent';

const _NextSplit = ({ store, ...props }) => {

    const { split } = store.getState().workout;
    return (
        <div {...props}>
            <span>
                {
                    (!!split) ?
                        `Nächste Einheit: ${split.name}` :
                        ""
                }
            </span>
        </div>
    );
}

const NextSplit = StoreComponent(_NextSplit);

export default NextSplit;