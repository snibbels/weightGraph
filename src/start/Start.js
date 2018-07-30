import React from 'react';
import StartButton from './StartButton';
import NextSplit from './NextSplit';
import Week from './Week';
import Progress from './Progress';
import {Link} from 'react-router-dom'

const Start = () => (
    <div className="w3-card w3-left-align w3-margin w3-padding" >
        <h2>Dein Training</h2>
        <ul className="w3-list">
            <Progress/>
            <Week/>
            <NextSplit/>
        </ul>
        <span className="w3-row">
        <Link to="/workout">
            <StartButton className="
                    w3-large 
                    w3-hover-blue 
                    w3-border 
                    w3-round-large 
                    w3-col s12 m6 l3" />
            </Link>
        </span>
    </div>
);

export default Start;