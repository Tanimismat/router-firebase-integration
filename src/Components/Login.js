import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../firebase.init';


const auth = getAuth(app);

const Login = () => {

    // const { signInWithGoogle } = useFirebase();

    const [signInWithGoogle] = useSignInWithGoogle(auth);

    return (
        <div>
            <h3>Please log in</h3>
            <button onClick={() => signInWithGoogle()}>Google Sign in</button>

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