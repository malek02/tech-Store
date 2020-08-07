import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch,Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import SingleProduct from './pages/SingleProduct';

import Navbar from './components/navbar/navbar'
import SideBar from './components/Sidebar/SideBar';

import Defeault from './pages/defeault';
import AboutPgae from './pages/AboutPgae';
import ContactPage from './pages/ContactPgae'

export default class App extends Component {
  render() {
    return (
<>
      
      <Route  path="/" component={Navbar}/>
      <Route  path="/" component={SideBar}/>
      <Switch>

      <Route excat path="/singelpage" component={SingleProduct}/>
      <Route excat  path="/contact" component={ContactPage}/>
      <Route excat path="/home" component={HomePage}/>
      <Route excat path="/About" component={AboutPgae}/>
      <Route component={Defeault}/>
     </Switch>


     
     </>
    )
  }
}
