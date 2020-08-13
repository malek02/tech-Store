import React, { Component } from 'react'
import ProductComponent from '../components/ProductComponent';
import Hero from '../components/Hero';
import Title from '../components/Title';
import  productsBcg  from '../images/productsBcg.jpeg';

export default class ProductPage extends Component {
    render() {
        return (
            <div>
                <Hero  img={productsBcg} />
                <Title Titele="Our Product" center />
                <ProductComponent />
            </div>
        )
    }
}
