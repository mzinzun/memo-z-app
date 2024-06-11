import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

function Memos() {
    async function getUsers() {
        const results = await axios.get('http://localhost:8000/users');
        const users = results.data;
        console.log('users here!!', users);
    }
    useEffect(() => {
        getUsers();
    }, []);

}
