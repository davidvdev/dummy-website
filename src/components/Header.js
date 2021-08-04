import React from 'react'
import { Link } from 'react-router-dom'

import Menu from './Menu'

const Header = (props) => {
    return (
        <header>
            <Link to="/" onClick={()=> window.scrollTo(0,0)}>
            <div className="branding">
                <img src='https://i.imgur.com/IZFreUE.png' alt='logo' />
                <h4>Fav Space</h4>
            </div>
            </Link>
            <div className="menu-container">
                <Menu />
            </div>
        </header>
    )
}

export default Header