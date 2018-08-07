import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdEdit } from 'react-icons/lib/md';
import chart from '../icons/chart.svg';
import Dumbbell from '../icons/Dumbbell.js';

const activeStyle = {
    borderBottom: "4px solid #2395F3",
    color: "#2395F3"
}

const icon = {
    width: "1.5em",
    margin: "0.5em"
}

const mdIcon = {
    fontSize: "1.25em",
}

const isActive = (match, location) => match.isExact || location.pathname === "/workout";

const MainMenu = () => (
    <div className="w3-bar w3-white">
        <NavLink
            activeStyle={activeStyle}
            style={{ textDecoration: "none" }}
            className="w3-bar-item"
            isActive={isActive}
            to="/">
            <Dumbbell style={{ ...icon, ...mdIcon }} />
            <span className="w3-hide-small">
                Start
            </span>
        </NavLink>
        {/* <NavLink
            activeStyle={activeStyle}
            style={{textDecoration: "none"}}
            className="w3-bar-item"
            to="/stats">
            <img src={chart} style={icon} alt="" />
            <span className="w3-hide-small">
                Meine Statistik
            </span>
        </NavLink> */}
        <NavLink
            activeStyle={activeStyle}
            style={{ textDecoration: "none" }}
            className="w3-bar-item"
            to="/edit">
            <MdEdit style={{ ...icon, ...mdIcon }} />
            <span className="w3-hide-small">
                Mein Trainingsplan
            </span>

        </NavLink>
    </div>
)

export default MainMenu;