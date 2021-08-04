import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => {

    const [menuOpen, setMenuOpen] = useState(false)

    // menu toggle assembled with help from:
    // https://ibaslogic.com/how-to-add-hamburger-menu-in-react/

    const handleToggle = () => {
        setMenuOpen(prev => !prev)
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <nav className="menu">
            <i className="fas fa-bars" onClick={handleToggle}></i>
            {/* <button onClick={handleToggle}>{menuOpen ? "Close" : "Open"}</button> */}
            <ul className={`menuNav ${menuOpen ? " showMenu" : ""}`}>
            <Link to="/" onClick={() => closeMenu()}>
                <div>Home</div>
            </Link>
            <Link to="/page/favorites" onClick={() => closeMenu()}>
                <div>Favs</div>
            </Link>
            </ul>
        </nav>
    )
}

export default Menu