import React from 'react'

const AddDeleteButton = ({ deleteMode, ...props }) => (
    <div {...props}>
        {
            deleteMode ?
                (<span>&times;</span>) :
                (<span>&#x0002B;</span>)
        }
    </div>
);

export default AddDeleteButton;