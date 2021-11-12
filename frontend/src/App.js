import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import Berkeley from "./components/Berkeley";
import Oakland from "./components/Oakland";
import SanFrancisco from "./components/SanFrancisco";
import SanJose from './components/SanJose'
import SingleSpot from "./components/SingleSpot";
import CreateListing from "./components/CreateListing";
import EditListing from "./components/EditListing";
import AllSpots from "./components/AllSpots";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/berkeley'>
            <Berkeley />
          </Route>
          <Route path='/oakland'>
            <Oakland />
          </Route>
          <Route path='/sanfrancisco'>
            <SanFrancisco />
          </Route>
          <Route path='/sanjose'>
            <SanJose />
          </Route>
          <Route path='/spot/:id'>
            <SingleSpot />
          </Route>
          <Route path='/createlisting'>
            <CreateListing />
          </Route>
          <Route path='/editlisting/:id'>
            <EditListing isLoaded={isLoaded} />
          </Route>
          <Route path='/allspots'>
            <AllSpots />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;