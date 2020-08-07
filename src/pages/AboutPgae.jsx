import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Hero from '../components/Hero';
import aboutBcg  from '../images/aboutBcg.jpeg';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Info from '../components/info';
import "bootstrap/dist/css/bootstrap.min.css";

export default class AboutPgae extends Component {
    render() {
        return (
        <DefeautlWarper>
        <div className='up'>
     
           <img  src={aboutBcg} alt="heropic" className='bannner' />

       
        <div className="infoo">
        <Info />
        </div>
<Link to="/home" className="main-link" style={{  width:"160px",margin: "2rem auto" }}>
         more info
        </Link>
  
        <img src={aboutBcg} alt="aboutpic" className='image' />
        
        <div className='footer'>
<Footer></Footer>
</div>
</div>
</DefeautlWarper>

        )
    }
}
const DefeautlWarper=styled.div`
.up{
    
    display:flex;
    flex-direction:column;
    
  
height:100%;
}
.bannner{
    z-index:-1;
    opacity: 0.6;
    height:450px;
   width:100%;
 position:relative;
  
}
.image{
    width:30%;
    border:5px solid black;
    position:absolute;
    top:910px;
    bottom:20px;
    margin: auto 10rem;
}
.infoo{
    position:relative;
    left:40%;
    
    width:30%;
    
}


.footer{

}
`