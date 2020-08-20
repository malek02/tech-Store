import React from 'react'
import CartTotal from './CartTotal';
import CartColums from './CartColums';

import CartList from './CartList';
import Title from '../Title';



export default function Cart() {
    return (




        <section className="py-5">
            <div className="container ">
                <Title Titele="your cart items" center />
            </div>
            <div className="mt-5">
            <CartColums />
            <CartList />
            <CartTotal />
            </div>
        </section>
    );
}
