import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './EditUserCss.css';
import axios from 'axios';

const EditUser = () => {

    // const [id,setid]=useParams('');
    const { id } = useParams();
    const [name, setname] = useState('Enter your name');
    const [email, setemail] = useState('Enter your email');
    const [password, setpassword] = useState('Enter your password');
    const [confPassword, setconfPassword] = useState('Enter your conf password');



    //isNameValid = true

    async function ValidateForm(event) {
        event.preventDefault();
        axios.put(`http://localhost:8080/updateUser/${parseInt(id)}`, {
                name,
                email,
                password,
                confPassword
            })
            .then((response) => {

                alert("Updated Successfully..");
                setemail("");
                setname("");
                setpassword("");
                setconfPassword("");
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

    }
    return ( <
        div className = 'container' >

        <
        form action = '/Nav'
        className = 'frm'
        onSubmit = { ValidateForm } >
        <
        h3 className = 'regi' > Edit User < /h3> <
        div className = 'box' >
        <
        input type = 'text'
        className = 'inpt'
        placeholder = 'Enter your name'
        id = "name"
        required onChange = {
            (e) => setname(e.target.value) }
        /> 

        <
        /div>

        <
        div className = 'box' >
        <
        input type = 'email'
        className = 'inpt'
        placeholder = 'Enter your email'
        id = "email"
        required onChange = {
            (e) => setemail(e.target.value) }
        />

        <
        /div>

        <
        div className = 'box' >
        <
        input type = 'password'
        className = 'inpt'
        placeholder = 'Enter your password'
        id = "password"
        required onChange = {
            (e) => setpassword(e.target.value) }
        /> <
        /div>

        <
        div className = 'box' >
        <
        input type = 'password'
        className = 'inpt'
        placeholder = 'Enter your confirm password '
        required id = "confPassword"
        onChange = {
            (e) => setconfPassword(e.target.value) }
        /> <
        /div>

        <
        div className = 'btneu' >
        <
        button type = 'submit'
        className = 'btne' > Edit User < /button> <
        /div>


        <
        /form> <
        /div>
    )
}

export default EditUser