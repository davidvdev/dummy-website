import React from 'react'

import Menu from './Menu'

const Header = (props) => {
    return (
        <header>
            <div className="branding">
                <img src='https://i.imgur.com/IZFreUE.png' alt='logo' />
                <h4>Fav Space</h4>
            </div>
            <div className="menu-container">
                <Menu />
            </div>
        </header>
    )
}

export default Header