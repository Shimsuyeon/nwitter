//import logo from './logo.svg';
import React from 'react';
//import Router from './Router';
import AppRouter from './Router';
import { useEffect, useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <AppRouter isLogggedIn ={isLoggedIn} />;
}

export default App;
