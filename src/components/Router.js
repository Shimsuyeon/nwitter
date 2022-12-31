import React from "react";
import {HashRouter as Router} from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import { useEffect, useState } from "react";
import Navigation from "components/Navigation";
import Profile from"routes/Profile";
import {
    Route,
    Switch,
  } from "react-router-dom";
import { Redirect } from "react-router-dom";
const AppRouter = ({isLoggedIn})=>{
    //const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <Router>
          {isLoggedIn && <Navigation />}
          <Switch>
            {isLoggedIn ? (
              <>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/profile">
                  <Profile />
                </Route>
              </>
            ) : (
                <>
                <Route exact path="/">
                  <Auth />
                </Route>
              </>
            )}
          </Switch>
        </Router>
      );
    };
export default AppRouter;