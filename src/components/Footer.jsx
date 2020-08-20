import React from 'react';
import { FaXbox,FaTwitterSquare,FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
      <div style={{marginTop:'1.5rem', display:'flex', justifyContent:'space-between',
      backgroundColor:"gray"}}>

    
        <p style ={{color:'rgb(197, 197, 197)'}}>Copyright ® Officiel © 2020 Malek Mechi</p>

        <FaXbox style ={{ fontSize:'25px', color:'rgb(197, 197, 197)'}} />
        <FaTwitterSquare style ={{ fontSize:'25px',color:'rgb(197, 197, 197)'}} />
        <FaLinkedin style ={{fontSize:'25px',color:'rgb(197, 197, 197)'}} />
     
        </div>
    )
}
