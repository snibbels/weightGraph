import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTrash } from 'react-icons/lib/fa'

const activeStyle = {
    borderBottom: "4px solid lightgray"
}

const MainMenu = () => (
    <div className="w3-bar w3-blue">
        <NavLink
            activeStyle={activeStyle}
            className="w3-bar-item w3-button"
            to="/">Mein Trainingsplan</NavLink>
        <NavLink
            activeStyle={activeStyle}
            className="w3-bar-item w3-button"
            to="/stats">Meine Statistik</NavLink>
        <div
            onClick={localStorage.clear('localWeights')}
            className="w3-bar-item w3-button">
            <FaTrash />
        </div>
    </div>
)

export default MainMenu;