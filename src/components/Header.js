import React, { useEffect } from 'react'
import {auth} from "../utils/firebase.js"
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice.js';


const Header = () => {

  const user= useSelector(store => store.user)
  const navigate = useNavigate();
  const dispatch = useDispatch()


  const handleLogout =() =>{

    signOut(auth).then(() => {
      // Sign-out successful.

    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(()=> {

    const unSubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          const {uid, email, displayName} = user;
          dispatch(addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
          );
          navigate("/Dashboard")
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/")

        }
      });
      //unsubscribe when component unmounts
      return ()=> unSubscribe();
}, [])

  return (
    <div className='bg-slate-300 shadow-lg px-8 py-2 z-10 flex justify-between'>
        <img className='w-36' src='https://seeklogo.com/images/M/medline-logo-15ABFFC14F-seeklogo.com.png'
            alt='logo'
        />
        
      { user && <div>
       <button className="bg-black m-2 p-2 text-white rounded-xl w-20 h-12" onClick={handleLogout}>LogOut</button>
       <h1>User Name: {user?.displayName}</h1>
      </div>}
    </div>
  
  )
}

export default Header;