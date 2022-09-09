import React from 'react'
import AppBar from '@mui/material/AppBar';

function Nav() {
    return (
        <AppBar position="static" color="primary" enableColorOnDark>
            <h1>William Francoletti</h1>

            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Calendar</li>
                <li>Contact</li>
            </ul>

            <img src="" alt="William francoletti" />
        </AppBar>

    )
}

export default Nav
