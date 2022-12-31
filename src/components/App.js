//import logo from './logo.svg';
//import React from 'react';
//import Router from './Router';

import fbase from "fbase";
import AppRouter from 'components/Router';
import React, { useEffect, useState } from "react";

import { authService} from "fbase";
function App() {
  //console.log(authService.currentUser);
  //const auth = fbase.auth();
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      if(user){
      setIsLoggedIn(true);
      setUserObj(user);
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  },[]);
/*  setInterval(()=>{
    console.log(authService.currentUser);

  }, 2000);*/

  return (
    <>
  {init ? (<AppRouter isLogggedIn ={isLoggedIn} userObj = {userObj} />) : ("Initializing...")}
  <footer> &copy;  {new Date().getFullYear()}Nwitter</footer>
  </>
  );
}

export default App;
