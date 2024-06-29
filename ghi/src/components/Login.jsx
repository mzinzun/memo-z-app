import React from 'react';
import { Link } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
// import { useForm } from 'react-hook-form';
// import { useHistory } from 'react-router-dom';

function Login() {
    // const { login } = useAuth();
    // const { register, handleSubmit } = useForm();
    // const history = useHistory();

    const onSubmit = async (data) => {
        // try {
        //     await login(data);
        //     history.push('/');
        // } catch (error) {
        //     console.error(error);
        // }
    };

    return (
        <div className='login w-50'>
            <h1>Login</h1>
            <form onSubmit=''>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' className='form-control' id='email' name='email'  />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' className='form-control' id='password' name='password' />
                </div>
                <button type='submit' className='btn btn-primary'>Login</button>
            </form>

        </div>
    );
}

export default Login;
