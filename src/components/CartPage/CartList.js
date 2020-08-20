import React from 'react'
import CartItem from './CartItem';
import {ProductConsumer} from '../../context/context';

export default function CartList() {
    return (
        <ProductConsumer>
        {value => {
                    const { Cart } = value;
                    
                    return (

                        Cart.map(item=> <CartItem  id={item.id} item={item} /> )
                   )}}
        </ProductConsumer>
    )
}
