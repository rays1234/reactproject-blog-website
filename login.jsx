import React from "react";
import {auth,provider} from "../firebase-config.js";
import {signInWithPopup} from "firebase/auth";
import {useNavigate} from 'react-router-dom';
function Login({setIsAuth}){
    let navigate=useNavigate();   
    
    const siwg=()=>{
        signInWithPopup(auth,provider).then((result)=>{localStorage.setItem("isAuth",true)});
        setIsAuth(true);
        navigate("/Createblog");
    }
    return(
        <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={siwg}>
        Sign in with Google
      </button>
    </div>
    );
}

export default Login;