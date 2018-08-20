import React from 'react'

export const cardStyleClasses = ["w3-card", "w3-left-align", "w3-padding", "w3-display-container"].join(' ');
export const flexCardRow = ["w3-row"].join(' ');
export const flexCardContainer = ["w3-col", "s12 m12 l4", "w3-padding"].join(' ');

const FlexCardRow = ({ children }) => (
    <div className={flexCardRow}>
        {
            Array.isArray(children) ?
                children.filter(i => i).map(
                    (c, i) => (
                        <div className={flexCardContainer} key={i}>
                            {c}
                        </div>
                    )
                ) : (
                    <div className={flexCardContainer}>
                        {children}
                    </div>
                )
        }
    </div>
);

export default FlexCardRow;