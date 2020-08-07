import React, { Component } from 'react'
import Contact from '../components/contact';
import Hero from '../components/Hero';
import contactBcg from '../images/contactBcg.jpeg';

import styled from 'styled-components';

export default class ContactPage extends Component {
    render() {
        return (
            <Contactwarper>
            <div className='caontainer-contact'>
            <div className='hero-tech'>
             <Hero  img={contactBcg}/>
             </div>
             <div className='caontainer-c'>
               <Contact/>
               </div>
               </div>
               </Contactwarper>
           
        )
    }
}
const Contactwarper=styled.div` 

.caontainer-contact{
    width:100%;
height:100%;
display:flex;
flex-direction:column;
}

`