import React from 'react';
import StartButton from './StartButton';
const Start = ({ week = 0, nextWorkout = "", progress = 0, onStartWorkout = f => f }) => (
    <div className="w3-card w3-left-align w3-margin w3-padding" >
        <h2>Dein Training</h2>
        <ul className="w3-list">
            <p>Woche <b>{week}</b></p>
            <p>Fortschritt <b>{progress}</b></p>
            <p>Nächste Einheit <b>{nextWorkout}</b></p>
        </ul>
        <StartButton
            className="w3-large w3-hover-blue w3-border w3-round-large" />
    </div>
);

export default Start;