import React, { Component } from 'react'
import {FaList,FaShoppingCart} from "react-icons/fa";
import logo from "../../images/logo.svg";
import './navbar.css'
import {ProductConsumer} from '../../context/context';
import styled from 'styled-components'
export default class Navbar extends Component {
    render() {
        return (
            <>

            <ProductConsumer>
{value=>{
    const {cartitem,handelsidebar,sidebaropen} = value;
    return(
       
        <Botcap>
    <div className="nav-center">
        
        <FaList onClick={e=>handelsidebar(e)} />
        <img src={logo} alt="logo" />
        <div className='nav-cart'>
        <FaShoppingCart /> 
        <div className='cartitem'>{cartitem}</div>
        </div>      
    </div>
    </Botcap>
  
    )
}
}

            </ProductConsumer>
 
          </>
        )
    }
}
const Botcap = styled.nav`
position: -webkit-sticky;
position: sticky;
top: 0;
width: 100%;
padding: 1rem 1.5rem;

`