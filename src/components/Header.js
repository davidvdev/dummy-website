import React from 'react'

import Menu from './Menu'

const Header = (props) => {
    return (
        <header>
            <div className="branding">
                <img src='../img/colorful-hexagon-300dpi-logo.png' alt='logo' />
                <h4>BRANDING</h4>
            </div>
            <div className="menu-container">
                <Menu />
            </div>
        </header>
    )
}

export default Header