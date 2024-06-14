// Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul>
                <li>
                    <NavLink to="/events" activeClassName="active">Мероприятия</NavLink>
                </li>
                <li>
                    <NavLink to="/create-event" activeClassName="active">Создать мероприятие</NavLink>
                </li>
                <li>
                    <NavLink to="/visitors" activeClassName="active">Посетители</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;