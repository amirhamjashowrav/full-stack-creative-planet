import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from '../../App';
import googleIcon from '../../images/icons/Group 573.png';
import './Login.css';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div className="container signup-card">
            <h2 className="text-dark text-center">Log in</h2>
            <button class="btn btn-block btn-dark loginButtonSection" onClick={handleGoogleSignIn}>
                <img src={googleIcon} style={{ width: "25px" }} alt="" />  Continue with Google
            </button>
        </div>
    );
};

export default Login;
