import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch,Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import SingleProduct from './pages/SingleProduct';
import ProductPage from './pages/ProductPage'
import Navbar from './components/navbar/navbar'
import SideBar from './components/Sidebar/SideBar';
import SideCart from './components/sideCart/SideCart'
import Defeault from './pages/defeault';
import AboutPgae from './pages/AboutPgae';
import ContactPage from './pages/ContactPgae'

export default class App extends Component {
  render() {
    return (
<>
      
      <Route  path="/" component={Navbar}/>
      <Route  path="/" component={SideBar}/>
      <Route  path="/" component={SideCart}/>
      <Switch>
      <Route  path="/" exact component={HomePage}/>
      <Route  path="/singelpage" exact component={SingleProduct}/>
      <Route   path="/contact"  exact component={ContactPage}/>
      <Route   path="/Product"  exact component={ProductPage}/>
      <Route  path="/About" exact component={AboutPgae}/>
      <Route component={Defeault}/>
     </Switch>


     
     </>
    )
  }
}
