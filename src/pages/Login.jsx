
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect } from "react";

import {auth,provider} from "../config/firebase";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const Navigate=useNavigate();
    
  
    useEffect(()=>{
        const login=async()=>{
            console.log("test");
           const result=await (signInWithPopup(auth, provider))
    //   .then((result) => {
        console.log(result);
        Navigate('/');}
    },[])
    return(
        <>
        
        </>
    )
    }
export default Login;