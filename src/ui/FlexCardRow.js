import React from 'react'

export const cardStyleClasses = ["w3-card", "w3-left-align", "w3-padding", "w3-display-container"].join(' ');
export const flexCardRow = ["w3-row"].join(' ');
export const flexCardContainer = ["w3-col", "s12 m6 l4", "w3-padding"].join(' ');

const FlexCardRow = ({ children }) => (
    <div className={flexCardRow}>
        {
            children.map(
                (c, i) => (
                    <div className={flexCardContainer} key={i}>
                        {c}
                    </div>
                )
            )
        }
    </div>
);

export default FlexCardRow;