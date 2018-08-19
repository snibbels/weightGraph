import React, { Component } from 'react';
import './PopUp.css'


export default ComposedComponent => ({ isVisible, ...props }) => {
    return (
        <div className={`pop-up w3-padding w3-white w3-display-container ${isVisible ? "visible" : ""}`} >
            <div className="w3-display-topright w3-padding"
                style={{ cursor: "pointer" }}
                onClick={props.onHide} >
                <span className="w3-xlarge">
                    &times;
                   </span>
            </div>
            <ComposedComponent {...props} />
        </div >
    );
}