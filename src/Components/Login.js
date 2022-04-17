import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../firebase.init';
import { useLocation, useNavigate } from "react-router-dom";


const auth = getAuth(app);

const Login = () => {



    // const { signInWithGoogle } = useFirebase();

    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })
    }

    return (
        <div>
            <h3>Please log in</h3>
            <button onClick={handleGoogleSignIn}>Google Sign in</button>

            <form>

                <input type="email" placeholder='Your email' />
                <br />
                <input type="password" name="" id="" placeholder='Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;