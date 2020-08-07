import React, { Component } from 'react';
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';






export default class HomePage extends Component {
    render() {
        return (
           
            <Hero tall title="awesome gadgets" max="true">
                <Link to="/products" className="main-link" style={{ margin: "2rem" }}>
          our products
        </Link>
            </Hero>
            
            
                
            
        )
    }
}
