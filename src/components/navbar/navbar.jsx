import React, { Component } from 'react'
import {FaList,FaShoppingCart} from "react-icons/fa";
import logo from "../../images/logo.svg";
import './navbar.css'
import {ProductConsumer} from '../../context/context';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
          

            <ProductConsumer>
{value=>{
    const {cartitem,handelsidebar,handelSidecard} = value;
    return(
        <Botcap>
    <div className="nav-center">
        <FaList className='nav-icon' onClick={e=>handelsidebar(e)} />
        <Link to='/'><img src={logo} alt="logo" /></Link>
        
        <div className='nav-cart'>
        <FaShoppingCart className='charyo' onClick={e=>handelSidecard(e)} /> 
        <div className='cartitem'>{cartitem}</div>
        </div>      
    </div>
    </Botcap>  
    )
}
}
            </ProductConsumer>
 
      
        )
    }
}
const Botcap = styled.nav`
position: -webkit-sticky;
position: sticky;
top: 0;
width: 100%;
padding: 1rem 1.5rem;
background: rgb(243, 243, 243);
border-bottom: 2px solid rgb(98, 221, 243);
z-index:1;
.nav-center{
    display:flex; 
    align-items:center;
    justify-content:space-between;
    max-width:1800px;
    margin : 0 auto;
}
.nav-icon{
    font-size:1.5rem;
cursor: pointer;
}
.nav-cart{
    position:relative;
    
}
.charyo{
    font-size: 1.4rem;
    cursor: pointer;
}
.cartitem{
    position:absolute;
    background: rgb(98, 221, 243);
    color:rgb(0, 0, 0);
    top:-15px;
    font-size:0.91rem;
    padding: 0px 5px ;
    border-radius:50%;
}
`