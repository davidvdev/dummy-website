import React from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => {
    return (
        <nav className="menu">
            <ul>
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/page">
                <div>Favs</div>
            </Link>
            </ul>
        </nav>
    )
}

export default Menu