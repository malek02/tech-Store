import React, { Component } from 'react'
import {LinkData} from '../Linkdata';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ProductConsumer} from '../../context/context';


export default class SideBar extends Component {
    render() {
        return (
      
            <ProductConsumer>

            {value=>{
const {sidebaropen}= value;
return(      <SidebarWallper show={sidebaropen}>
            <ul>
               {LinkData.map(link=>
                <li key={link.id}>
                {link.icon}
                <Link className="Sidebar-link" to={`${link.path}`}>{link.name}</Link>
                </li>
)}
            </ul>
            </SidebarWallper>)}}
            </ProductConsumer>
         
        )
    }
}
const SidebarWallper =styled.nav`
position:fixed;

left:0;
width:100%;
height:100%;
background:rgb(243, 243, 243);
z-index:1;
border-right:4px solid rgb(98, 221, 243);
transition:2s;
transform:${props => props.show ? 'translateX(0%)':"translateX(-100%)"};
ul{
    list-style-type:none;
    padding:10px 0px 0px 30px;
}
li{
    diplay:block;
    font-size:1.3rem;
    margin:20px;
    
    
}
.Sidebar-link{
    text-decoration:none;
    color: black;
    
    font-size:1.5rem; 
    text-transform:capitalize;
    margin: 10px;
    transition:rgb(98, 221, 243);
}
.Sidebar-link:hover{
    background:rgb(98, 221, 243);
    color:white;
    text-decoration:none;
    padding:0.5rem 2rem 1rem 2.5rem;
border-radius:60%
}
@media (min-width: 56px){
    width:18rem;
}

`
