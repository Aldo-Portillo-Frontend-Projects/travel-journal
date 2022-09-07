import React from 'react';
import world from '../assets/worldIcon.png'

function Header () {
    return (
        <header>
            <img src={world} alt="" />
            <h1>my travel journal</h1>
        </header>
    )
}

export default Header