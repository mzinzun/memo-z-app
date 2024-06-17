import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Memos() {
    const [users, setUsers] = useState([]);
    async function getUsers() {
        const results = await axios.get('http://13.52.104.92:8000/users/');
        const users = results.data;
        console.log('users here!!', users);
        setUsers(users);
    }
    useEffect(() => {
        getUsers();
    }, []);
    return (
        <div>
            <h1>Sample Users list</h1>
            <ul >
                {users.map(user => (
                    <li key={user.id}>{user.first_name} {user.last_name} username: {user.user_name}</li>
                ))}
            </ul>
        </div>
    );

}
export default Memos;
