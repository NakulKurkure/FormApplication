import React, { useState } from 'react'
import './HomeCss.css';
import { Link } from 'react-router-dom';
import './Nav'
import axios from 'axios';

const Home = () => {

    const [name, setname] = useState('Enter your name');
    const [email, setemail] = useState('Enter your email');
    const [password, setpassword] = useState('Enter your password');
    const [confPassword, setconfPassword] = useState('Enter your conf password');
    const [errorname, seterrorname] = useState(false);
    // const [erroremail,erroremail]=useState('Enter your email');
    // const [errorpassword,errorpassword]=useState('Enter your password');
    // const [errorconfPassword,errorconfPassword]=useState('Enter your conf password');


    //isNameValid = true

    async function ValidateForm(event) {
        event.preventDefault();

        try {
            // setError(ValidateForm()); //Validation

            const res = await axios.post('http://localhost:8080/api/users/addUser', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword,

            });

            // Navigate("/")
            alert("Form Submitted ");
            setname("");
            setemail("");
            setpassword("");
            setconfPassword("");

            //
        } catch (error) {
            alert(error);
        }

        //Perform validation

        alert("From is Submitted");

    }

    return ( <
        div className = 'container' >

        <
        form action = '/Nav'
        className = 'frm'
        onSubmit = { ValidateForm } >
        <
        h3 className = 'regi' > Registration < /h3> <
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
        id = "confPassword"
        onChange = {
            (e) => setconfPassword(e.target.value) }
        /> <
        /div>

        <
        div className = 'box' >
        <
        input type = 'checkbox'
        className = 'chck'
        required / > < p > I accept all terms & Conditions < /p> <
        /div>

        <
        div className = 'btnx' >
        <
        button type = 'submit'
        className = 'btn' > Register Now < /button> <
        /div>

        <
        div className = 'box' >
        <
        p > Already have an account ? < /p><Link className='login' to='/login
        '>Login Now</Link> <
        /div>


        <
        /form> <
        /div>
    )
}

export default Home