import React, { useEffect, useState } from 'react';
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';
import Login from '../components/Login';
import './App.css';

function ComingSoon() {

    return (
        <div className='coming-soon bg-info'>
            <h1 className='bg-light display-1 '>Coming Soon!</h1>
            <p>Check back soon for updates!</p>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
        <div className='app'>
             <header className='px-4'>
                <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                    <div className='container'>
                        <a className='navbar-brand' href='/'>
                        <img src='../assets/memoZ_logo.png' height='75px' />
                        </a>
                        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarNav'>
                            <ul className='navbar-nav'>
                                <li className='nav-item'>
                                    <a className='nav-link' href='/'>Home</a>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/login'>Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<ComingSoon />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </main>
            <footer className='px-4'>memo-z &copy;2024</footer>
        </div>
        </BrowserRouter>
    );
}
export default App;
