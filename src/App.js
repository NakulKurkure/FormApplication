import './App.css';
import Nav from './Component/Nav';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Abt from './Component/Abt.js';
import Service from './Component/Service';
import ViewUser from './Component/ViewUser';
import EditUser from './Component/EditUser';



function App() {
    return ( <
        div >
        <
        Nav / >

        <
        Routes >
        <
        Route path = '/home'
        element = { < Home / > }
        /> <
        Route path = '/contact'
        element = { < Contact / > }
        /> <
        Route path = '/about'
        element = { < Abt / > }
        /> { /* <Route path='/viewUser' element={<ViewUser/>}> */ } <
        Route path = '/viewUser'
        element = { < ViewUser / > }
        /> <
        Route path = '/edit/:id'
        element = { < EditUser / > } >


        <
        /Route>


        <
        /Routes> <
        /div>
    );
}

export default App;