//import logo from './logo.svg';
import React from 'react';
//import Router from './Router';

import fbase from "fbase";
import AppRouter from 'components/Router';
import { useEffect, useState } from "react";

import { authService} from "fbase";
function App() {
  console.log(authService.currentUser);
  //const auth = fbase.auth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
  <AppRouter isLogggedIn ={isLoggedIn} />
  <footer> &copy;  {new Date().getFullYear()}Nwitter</footer>
  </>
  );
}

export default App;
