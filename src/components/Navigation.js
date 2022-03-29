import React, { useContext } from 'react'
import { NavLink } from "react-router-dom"
import { AuthContext } from './AuthContext';
import { useAuth } from './useAuth';
export default function Navigation() {
    const {token,onLogout} = useAuth();
    return (

        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/admin">Admin</NavLink>

            {token && (
                <button type="button" onClick={onLogout}>
                    Sign Out
                </button>
            )}
        </nav>
    )

}
