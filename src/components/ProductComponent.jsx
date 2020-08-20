import React, { Component } from 'react'
import { ProductConsumer } from '../context/context';
import {Link} from 'react-router-dom';
import { FaSearch, FaCartPlus } from "react-icons/fa";
import styled from 'styled-components';

export default class ProductComponent extends Component {
    render() {
        return (
            <ProductConsumer>

                {value => {

                    const {setSingleProduct, ProductList,addToCart } = value;
                    return (
                        <ProductWarper >
                        <section className="py-5">
                            <div className="container">
                                <div className="row">


                                    {ProductList.map(item => {console.log('product',item)
                                        return (

                                            <div className="col-10 mx-auto col-sm-8 col-md-6  col-lg-4 my-3">
                                                <div className="card" key={item.id}>
                                                    <div className="img-container">
                                                        <img src={item.image} alt="product" className="card-img-top p-5"
                                                            style={{ height: "320px" }} />
                                                    </div>
                                                    <div className="product-icons">
                                                        <Link
                                                            to={`/products/${item.id}`}
                                                            onClick={()=>setSingleProduct(item.id)}
                                                        >
                                                            <FaSearch className="icon" />
                                                        </Link>
                                                        <FaCartPlus
                                                            className="icon"
                                                            onClick={()=>addToCart(item.id)}

                                                        />
                                                    </div>
                                                    <div className="card-body d-flex justify-content-between" >
                                                        <p className="mb-0">{item.title}</p>
                                                        <p style={{ color: "rgb(98, 221, 243)" }} className="mb-0 text-main">${item.price}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    }
                                    )}
                                </div>

                            </div>
                        </section>
                        </ProductWarper>
                        )
                }}
            </ProductConsumer>
        )
    }
}
const ProductWarper=styled.div`


.card {
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    transition: var(--mainTransition);
    height: 100%;
  }
  .card:hover {
    box-shadow: 7px 10px 5px 0px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  .card-img-top {
    transition: var(--mainTransition);
  }
  .card:hover .card-img-top {
    transform: scale(1.15);
    opacity: 0.2;
  }
  .img-container {
    position: relative;
  }
  .product-icons {
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  .icon {
    font-size: 2.5rem;
    margin: 1rem;
    padding: 0.5rem;
    color: var(--primaryColor);
    background: var(--mainBlack);
    border-radius: 0.5rem;
  }
  .card:hover .product-icons {
    opacity: 1;
  }
  .card-body {
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`