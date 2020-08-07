import React from 'react'
import Hero from '../components/Hero';
import defaultBcg from '../images/defaultBcg.jpeg';
import {Link} from 'react-router-dom';


export default function Defeault() {
    return (
        
        <Hero title="404 page not found" img={defaultBcg} className='banner'>
       <Link to="/home" className="main-link" style={{ margin: "2rem" }}>
          return to home page
        </Link>
      
        </Hero>
    )
}

