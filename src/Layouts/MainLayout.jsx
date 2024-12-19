import React from 'react'
import './MainLayout.css'
import { NavLink } from 'react-router-dom'
import LogoPicture from '../assets/images/logo-picture.webp'

function MainLayout({ children }) {
    return (
        <div className='containers-Logo'>
            <header className="header">
                <img src={LogoPicture} alt="" />
                <div className="links">
                    <NavLink className="one" to='/'>Homework One</NavLink>
                    <NavLink className="one" to='/homeworkTwo'>Homework Two</NavLink>
                </div>
            </header>

            {children}
        </div>
    )
}

export default MainLayout
