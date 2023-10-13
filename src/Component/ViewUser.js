import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './ViewUsersCss.css';
import { Link, useParams } from 'react-router-dom';


const ViewUser = () => {

    // const [id,setId]=useState('');
    // let i=parseInt(id);
    const [user, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    //  const {id}=useParams();
    const deleteUser = async(id) => {
        await axios.delete(`http://localhost:8080/${id}`).then((response) => {


                alert("User deleted successfully");

            })
            .catch((error) => {

                // console.log(error);
                alert("Please check id");
            });
        // setUsers()
    }

    useEffect(() => {

        axios.get('http://localhost:8080/users')
            .then((response) => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);


    return ( <
        div >
        <
        h1 > User Information < /h1>


        <
        thead >
        <
        tr >
        <
        th > id < /th> <
        th > email < /th> <
        th > name < /th> <
        th > password < /th> <
        th > confPassword < /th>

        <
        th > Action < /th> <
        /tr> <
        /thead> <
        tbody > {
            user.map(
                users => ( <
                    tr key = { users.id } >
                    <
                    td > { users.id } < /td> <
                    td > { users.email } < /td> <
                    td > { users.name } < /td> <
                    td > { users.password } < /td> <
                    td > { users.confPassword } < /td> <
                    Link className = 'edit'
                    to = { `/edit/${users.id}` } > Edit <
                    /Link> <
                    button className = 'bt'
                    onClick = {
                        () => deleteUser(users.id) } > Delete < /button>

                    <
                    /tr>
                ))
        }

        <
        /tbody>

        <
        /div>
    )
}

export default ViewUser