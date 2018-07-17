import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTrash } from 'react-icons/lib/fa';
import chart from '../icons/chart.svg';
import dumbbell from '../icons/dumbbell.svg';

const activeStyle = {
    borderBottom: "4px solid #2395F3"
}

const icon = {
    width: "1.5em",
    margin: "0.5em"
}

const MainMenu = () => (
    <div className="w3-bar w3-white">
        <NavLink
            activeStyle={activeStyle}
            className="w3-bar-item w3-button"
            exact
            to="/">
            <img src={dumbbell} style={icon} alt="" />
            <span className="w3-hide-small">
                Mein Trainingsplan
            </span>
        </NavLink>
        <NavLink
            activeStyle={activeStyle}
            className="w3-bar-item w3-button"
            to="/stats">
            <img src={chart} style={icon} alt="" />
            <span className="w3-hide-small">
                Meine Statistik
            </span>
        </NavLink>
        <div
            onClick={localStorage.clear('localWeights')}
            className="w3-bar-item w3-button">
            <FaTrash style={icon} />
        </div>
    </div>
)

export default MainMenu;