import React from 'react';
import { MdEdit, MdSettings } from 'react-icons/lib/md';
import { NavLink } from 'react-router-dom';
import Dumbbell from '../icons/Dumbbell.js';
import Chart from '../icons/Chart'

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
        <NavLink
            activeStyle={activeStyle}
            style={{ textDecoration: "none" }}
            className="w3-bar-item"
            to="/stats">
            <Chart style={{ ...icon, ...mdIcon }} />
            <span className="w3-hide-small">
                Meine Statistik
            </span>
        </NavLink>
        <NavLink
            activeStyle={activeStyle}
            style={{ textDecoration: "none" }}
            className="w3-bar-item"
            to="/edit">
            <MdEdit style={{ ...icon, ...mdIcon }} />
            <span className="w3-hide-small">
                Editor
            </span>
        </NavLink>
        <NavLink
            activeStyle={activeStyle}
            style={{ textDecoration: "none" }}
            className="w3-bar-item"
            to="/settings">
            <MdSettings style={{ ...icon, ...mdIcon }} />
            <span className="w3-hide-small">
                Einstellungen
            </span>
        </NavLink>
    </div>
)

export default MainMenu;