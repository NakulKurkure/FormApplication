import React from 'react'
import './Navbar.css';
import './Home'
import { Link } from 'react-router-dom';



function Nav() {
    return ( <
        div className = 'navbar' >
        <
        ul >
        <
        li > < Link className = 'nav'
        to = "/home" > Home < /Link></li >
        <
        li > < Link className = 'nav'
        to = "/about" > About < /Link></li >
        <
        li > < Link className = 'nav'
        to = "/services" > Services < /Link></li >
        <
        li > < Link className = 'nav'
        to = "/contact" > Contact < /Link></li >
        <
        li > < Link className = 'nav'
        to = "/viewUser" > ViewUser < /Link></li >
        <
        /ul>


        <
        /div>
    )
}

export default Nav