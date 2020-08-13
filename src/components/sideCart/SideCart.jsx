import React, { Component } from 'react'

import styled from 'styled-components';
import {ProductConsumer} from '../../context/context';


export default class SideCart extends Component {
    render() {
        return (
      
            <ProductConsumer>

            {value=>{
const {cartopen,Cart}= value;
return(      <SidebarWallper show={cartopen}>
    <ul>
       {Cart.map(car=>{
          return(
           <li key={car.id} className="cart-item mb-4">
                    <img
                      width="35"
                      src={car.image}
                      // src={item.image}
                      alt="cart item"
                    />
                    <div className="mt-3">
                      <h6 className="text-uppercase">{car.title}</h6>
                      <h6 className="text-title text-capitalize">
                        amount : {car.count}
                      </h6>
                    </div>
                  </li>
                  )
           
                }
       
       )}
       </ul>
            </SidebarWallper>)}}
            </ProductConsumer>
         
        )
    }
}
const SidebarWallper = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  border-left: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  @media (min-width: 576px) {
    width: 20rem;
  }
  overflow: scroll;
  padding: 2rem;
  ul {
    padding: 0 !important;
  }
  .cart-item {
    list-style-type: none;
  }
`;