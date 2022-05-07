import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../firebase.init';
import GoogleLogin from '../Login/GoogleLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const navigate = useNavigate();
    const login = () =>{
        navigate('/login')
    }

    if(user){
        navigate('/');
    }
    const handleregisterButton = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }


    return (
        <div className='register-form container'>
            <h2>Please Register Now</h2>
            <form onSubmit={handleregisterButton}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="password" id="" placeholder='Your Password' />
                <br />
                <input type="submit" value="Join Now" />
                <h4>Already Have an Account? <Link to='/login' className='text-danger pe-auto' onClick={login}>Login Now!</Link></h4>

            </form>
            <p>Or</p>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Register;