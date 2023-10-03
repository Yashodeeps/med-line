import React from 'react'
import Header from './Header';
import { useState, useRef } from 'react';
import { checkValidData } from '../utils/validation';
import { auth } from '../utils/firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate, useNavigate } from 'react-router-dom';


const Login = () => {
    const [isSignedInForm, setIsSignedInForm] = useState(true);
    const [errorMessage, setErrorMessage]= useState(null)
    const navigate = useNavigate();

    const email = useRef(null);
    const password = useRef(null);


    function handleToggle(){
        setIsSignedInForm(!isSignedInForm)
    }


    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        if (message) return;

        //Sign in/up logic

        if(!isSignedInForm){
            //sign  up form
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              console.log(user);
              navigate("/Dashboard")
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage)
              // ..
            });


        }
        else {
            //sign in form
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              navigate("/Dashboard")

              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode+ "-" + errorMessage)
            });
                      
            
        }
    }

  return (
    <div>
        <Header/>
        <div>
            <img className='absolute' src='https://blog.ipleaders.in/wp-content/uploads/2020/11/binary-fountain-telemedicine-patient-experience.jpg' alt='background_image'></img>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='absolute p-8 bg-blue-950 w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-70'>
            <h1 className='py-4 text-3xl font-bold'>{isSignedInForm ? "Sign In" : "Sign Up"}</h1>

            {!isSignedInForm && <div>
                <input type='text' placeholder='Full Name' className='text-black rounded-lg p-4 my-4 w-full'/>
                <input type='text' placeholder='Adress' className='text-black rounded-lg p-4 my-4 w-full'/>
            </div>}

            <input ref={email} type='text' placeholder='email' className='text-black rounded-lg p-4 my-4 w-full'/>
            <input ref={password} type='password' placeholder='Enter password' className='text-black rounded-lg p-4 my-4 w-full'/>
            
            <p className='bg-black p-2 text-red-500 font-bold'>{errorMessage}</p>
            <button className='rounded-lg w-full bg-red-500 p-4 my-6' onClick={handleButtonClick} >SigIn</button>

            <p className='p-4 cursor-pointer' onClick={handleToggle}>{ isSignedInForm ? "Havent registered yet? Register now" : "Already Registered? Sign in now"}</p>
        </form>
    </div>
  )
}

export default Login; 