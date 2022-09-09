import React from 'react'
import AppBar from '@mui/material/AppBar';
import { useRouter } from 'next/router';

function Nav() {

    const router = useRouter();
    return (
        <AppBar position="static" color="primary" enableColorOnDark>
            {console.log(router.pathname)}
            <h1>William Francoletti</h1>
            <ul>
                <li><a className={router.pathname == "/" ? "active" : ""} href="/">Home</a></li>
                <li><a className={router.pathname == "/About" ? "active" : ""} href="/About">About Me</a></li>
                <li><a className={router.pathname == "/Calendar" ? "active" : ""} href="/Calendar">Calendar</a></li>
                <li><a className={router.pathname == "/Contact" ? "active" : ""} href="/Contact">Contact</a></li>
            </ul>

            <img src='/assets/willy.jpeg' alt="William Francoletti" />
        </AppBar>

    )
}

export default Nav
