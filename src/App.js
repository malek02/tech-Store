import React, { Component } from 'react';

import {Switch,Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import SingleProduct from './pages/SingleProduct';
import CartPage from './pages/CartPage';
import Navbar from './components/navbar/navbar'
import SideBar from './components/Sidebar/SideBar';
import SideCart from './components/sideCart/SideCart';




export default class App extends Component {
  render() {
    return (
<>
      
      <Route  path="/" component={Navbar}/>
      <Route  path="/" component={SideBar}/>
      <Route  path="/" component={SideCart}/>
      <Switch>

      <Route excat path="/singelpage" component={SingleProduct}/>
      <Route excat  path="/cartpage" component={CartPage}/>
      <Route excat path="/home" component={HomePage}/>
     </Switch>


     
     </>
    )
  }
}
