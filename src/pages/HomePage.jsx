import React, { Component } from 'react';
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';
import Service from '../components/services/serviceComponents';
import Title from '../components/Title'
import Featured from '../components/featured'





export default class HomePage extends Component {
    render() {
        return (
           <>
            <Hero tall title="awesome gadgets" max="true">
                <Link to="/Product" className="main-link" style={{ margin: "2rem" }}>
          our products
        </Link>
            </Hero>
            <Service />
            <Title Titele="Featrud product" center />
               <Featured /> 
           </> 
        )
    }
}
