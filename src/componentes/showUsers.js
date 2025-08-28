import {useState, useEffect} from 'react';
import { getUsers } from './api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';


export const ShowUsers = () => {

    const [users, setUsers] = useState([])

   
const fetchUsers = async () => {


 const res = await getUsers(); //Extrair os users do JSON ...
   
    console.log("users:", res.data);
    setUsers(res.data);

    

}

useEffect (() => {

fetchUsers();

}, [])


    return (
        <div>
            <h2>Lista de Usuários</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.password} - 
            <FontAwesomeIcon icon={faTrashCan} className='heart_icon'/>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}