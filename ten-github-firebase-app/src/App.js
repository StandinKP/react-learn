import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import firebase from 'firebase/app';
import 'firebase/auth';

import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { UserContext } from './context/UserContext';
import Footer from './layout/Footer';
import Header from './layout/Header';
import firebaseConfig from './Config/firebaseConfig';

//Init Firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={Signin} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="*" component={PageNotFound} exact />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
