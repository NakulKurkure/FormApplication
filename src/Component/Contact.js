import React from 'react'

import './ContactCss.css';
const Contact = () => {
    const submit = () => {
        alert("Thank you for Contacting US !!! . Enjoy Your day");
    }
    return ( <
        div className = 'form' >
        <
        form action = '/'
        className = 'bigBox' >
        <
        div className = 'm0' >
        <
        div className = 'header' >
        <
        h1 > Contact Us < /h1> <
        h3 > Have any questions ? We’ d love to hear from you. < /h3> <
        /div> <
        div className = 'box' >
        <
        input type = 'text'
        placeholder = 'Enter your name'
        className = 'name'
        id = "Uname" / >
        <
        /div> <
        div className = 'box' >
        <
        input type = 'email'
        placeholder = 'Enter your Email'
        className = 'name'
        id = "Uemail" / >
        <
        /div> <
        div className = 'box' >
        <
        input type = 'number'
        placeholder = 'Enter your number'
        className = 'name'
        id = "Unumber" / >
        <
        /div> <
        div className = 'message ' >
        <
        textarea type = 'text'
        placeholder = 'Enter your message'
        id = 'Umessage'
        className = 'msg' > < /textarea> <
        /div> <
        div className = 'box' >
        <
        button type = 'button'
        className = 'btn' > Submit < /button> <
        /div>

        <
        /div> <
        /form> <
        /div>
    )
}

export default Contact