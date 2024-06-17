import React, {useEffect, useState}from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Memos from '../components/Memos';
import './App.css';

function ComingSoon() {

    return (
        <div>
            <h1>Coming Soon</h1>
            <h1>Sample Users list</h1>
            <Memos />

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
