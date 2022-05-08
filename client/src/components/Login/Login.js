import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleLogin from './GoogleLogin';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordlRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      if(user){
          navigate(from, { replace: true });
      }

    const handleLoginButton = event =>{
        event.preventDefault();
        const email =  emailRef.current.value;
        const password =  passwordlRef.current.value;
       
        signInWithEmailAndPassword(email, password);
    }
    const register =  event =>{
        navigate('/register');

    }

    const resetPassword = async () =>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Resent Password Link Sent');
    }

    return (
        <div className='login-form container w-50 mx-auto'>
            <h2 className='text-center'>Login Now</h2>
            <form onSubmit={handleLoginButton}>
                
                <input type="email" ref={emailRef} name="email" id="" placeholder='Your Email' />
                <br />
                <input type="password" ref={passwordlRef} name="password" id="" placeholder='Your Password' />
                <br />
                <input type="submit" value="Login Now" />

            </form>
            <h4>Forget Password? <button className='btn btn-link text-danger pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></h4>
            <h4>Dont Have an Account? <Link to='/register' className='text-danger pe-auto' onClick={register}>Join Now!</Link></h4>
            <p>Or</p>
            <GoogleLogin></GoogleLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;