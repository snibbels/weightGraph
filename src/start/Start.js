import React from 'react';
import StartButton from './StartButton';
import NextSplit from './NextSplit';
import Week from './Week';
import Progress from './Progress';
import { Link } from 'react-router-dom'
import { cardStyleClasses, flexCardRow, flexCardContainer } from '../App';

const Start = () => (
    <div className={flexCardRow} >
        <div className={flexCardContainer}>
            <div className={cardStyleClasses}>
                <h2>Dein Training</h2>
                <ul className="w3-list">
                    <Progress />
                    <Week />
                    <NextSplit />
                </ul>
            </div>
        </div>
        <div className={flexCardContainer}>
            <div className={`${cardStyleClasses} w3-hover-blue`}>
                <Link to="/workout" style={{ textDecoration: "none" }} >
                    <StartButton className="w3-large" />
                </Link>
            </div>
        </div>
    </div>
);

export default Start;