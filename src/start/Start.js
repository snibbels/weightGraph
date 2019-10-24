import React from 'react';
import StartButton from './StartButton';
import NextSplit from './NextSplit';
import { Link } from 'react-router-dom'
import { cardStyleClasses, flexCardRow, flexCardContainer } from '../App';
import store from '../redux/store'
import { MdEdit } from 'react-icons/lib/md';
import FlexCardRow from '../ui/FlexCardRow';
import Protocol from './Protocol';

const Start = () => {
    const isWorkoutEmpty = !store.getState().exercises.map(e => e.selected).filter(e => e).length;

    if (isWorkoutEmpty)
        return (
            <div className={flexCardRow} >
                <div className={flexCardContainer}>
                    <div className={cardStyleClasses}>
                        <Link to="/edit" style={{ textDecoration: "none" }}>
                            <div className="w3-display-container">
                                <div style={{ width: "75%" }}>
                                    <p>Du hast noch keinen Trainingsplan.</p>
                                    <p>Erstelle hier deinen ersten Trainingsplan.</p>
                                </div>
                                <div
                                    style={{ padding: "4px" }}
                                    className="w3-display-right w3-circle w3-blue">
                                    <MdEdit style={{ fontSize: "3em" }} />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    else
        return (
            <FlexCardRow>
                <div className={cardStyleClasses}>
                    <h2>Dein Training</h2>
                    <ul className="w3-ul">
                        <li className="w3-padding"><NextSplit /></li>
                    </ul>
                </div>
                <div className={`${cardStyleClasses} w3-hover-blue`}>
                    <Link to="/workout" style={{ textDecoration: "none" }} >
                        <StartButton className="w3-large" />
                    </Link>
                </div>
                <Protocol {...store.getState()} className={cardStyleClasses} />

            </FlexCardRow>
        );
}

export default Start;