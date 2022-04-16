import { useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({})

    const signInWithGoogle = () => {
        console.log('sigining in with google');
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                console.log(user)
            }).catch((error) => {
                console.error('my error', error)
            });
    }

    const handleSignout = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                console.error(error)
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
    }, []);


    // return [user, setUser];
    return { user, signInWithGoogle, handleSignout }
}

export default useFirebase;