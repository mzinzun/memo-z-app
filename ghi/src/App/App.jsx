import React, {useEffect, useState}from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function ComingSoon() {
    const [users, setUsers] = useState([]);
    async function getUsers() {
        // axios.get('http://localhost:8000/users')
        //     .then(function (response) {
        //         // handle success
        //         console.log(response.data);
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
        const results = await axios.get('http://localhost:8000/users');
        setUsers(results.data);
        console.log('users here!!', users);
    }
    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            <h1>Coming Soon</h1>
            <h1>Sample Users list</h1>
            {users.map((user) => (
                <div key={user.id}>
                    <h2>User name: {user.first_name} {user.last_name}</h2>
                    <h3>username: {user.user_name}</h3>
                </div>
            ))}
        </div>
    );
}

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ComingSoon />} />
                </Routes>
            </BrowserRouter>
        </div>

    );
}
export default App;
