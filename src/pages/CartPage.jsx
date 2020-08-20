import React, { Component } from 'react'
import CartSection from '../components/CartPage';
import Hero from '../components/Hero';
import storeBcg  from '../images/storeBcg.jpeg';



export default class CartPage extends Component {
    render() {
        return (
            <div>
           <Hero img={storeBcg}  />
      
            <CartSection />
               
            </div>
        )
    }
}
