import React, { Component } from 'react'

import aboutBcg from '../images/aboutBcg.jpeg';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Info from '../components/info';
import "bootstrap/dist/css/bootstrap.min.css";

export default class AboutPgae extends Component {
    render() {
        return (
            <DefeautlWarper>
                <div className='up'>
                  <img src={aboutBcg} alt="heropic" className='bannner' />
                    <Info />
                    <div className='footer'>
                        <Footer></Footer>
                    </div>
                </div>
            </DefeautlWarper>

        )
    }
}
const DefeautlWarper = styled.div`
.up{
    
    display:flex;
    flex-direction:column;
    
  
height:100%;
}


.bannner{
    z-index:-1;
    opacity: 0.6;
    height:450px;
   width:100%; }
.image{

width:30%;
border:5px solid black;
position:relative;
top:10px;
z-index:-1;

}






.infoo{
    position:relative;
    left:40%;
    
    width:30%;
    
}

.footer{
background-color:rgb(88, 88, 88);

}

`