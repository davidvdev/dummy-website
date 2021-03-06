import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    // menu toggle assembled with help from:
    // https://ibaslogic.com/how-to-add-hamburger-menu-in-react/

    const handleToggle = () => {
        setMenuOpen(prev => !prev)
    }

    const closeMenu = () => {
        setMenuOpen(false)
        window.scrollTo(0,0)
    }

    return (
        <nav className="menu">
            <i className="fas fa-bars" onClick={handleToggle}></i>
            <ul className={`menuNav ${menuOpen ? " showMenu" : ""}`}>
            <Link to="/" onClick={() => closeMenu()}>
                <div>Home</div>
            </Link>
            <Link to="/page/favorites" onClick={() => closeMenu()}>
                <div>Favs</div>
            </Link>
            <a href="https://www.davidvdev.com" target="_blank" rel="noreferrer"><div>Site by David</div></a>
            </ul>
        </nav>
    )
}

export default Menu