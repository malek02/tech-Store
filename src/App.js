import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch,Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import SingleProduct from './pages/SingleProduct';
import CartPage from './pages/CartPage';
import Navbar from './components/navbar/navbar'
import SideBar from './components/Sidebar/SideBar';
import SideCart from './components/sideCart/SideCart';
import Defeault from './pages/defeault';
import AboutPgae from './pages/AboutPgae';


export default class App extends Component {
  render() {
    return (
<>
      
      <Route  path="/" component={Navbar}/>
      <Route  path="/" component={SideBar}/>
      <Switch>

      <Route excat path="/singelpage" component={SingleProduct}/>
      <Route excat  path="/cartpage" component={CartPage}/>
      <Route excat path="/home" component={HomePage}/>
      <Route excat path="/About" component={AboutPgae}/>
      <Route component={Defeault}/>
     </Switch>


     
     </>
    )
  }
}
