import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Memos() {
    const [users, setUsers] = useState([]);
    async function getUsers() {
        const results = await axios.get('http://localhost:8000/users/');
        const users = results.data;
        console.log('users here!!', users);
        setUsers(users);
    }
    useEffect(() => {
        getUsers();
    }, []);
    return (
        <main className='row'>
            <aside className='col-4 border'>

            </aside>
            <section className='col-8 border memoSec'>
                <ul >
                    {users.map(user => (
                        <li key={user.id}>{user.first_name} {user.last_name} username: {user.user_name}</li>
                    ))}
                </ul>
            </section>

        </main>
    );

}
export default Memos;
