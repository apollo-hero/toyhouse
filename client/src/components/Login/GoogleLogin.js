import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {

        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
      }

      if(user){
        navigate('/');
      }

    return (
        <div>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='bg-primary w-100 h3 p-2 text-white'>Connect Using Google</button>
            
        </div>
    );
};

export default GoogleLogin;