import React from 'react'
import {FaRegTrashAlt,FaAngleUp,FaAngleDown} from "react-icons/fa"
import { ProductConsumer } from '../../context/context';



export default function CartItem({item,id}) {
    return (
        <ProductConsumer>
        {value => {
            const { deletCart} = value;
            
            return (
    
                    <div className="container-fluid text-center align-items-center">
                    <div className="row">
                    <div class="col-md-2 mt-1 " >
                    <img class="img-thumbnail" src={item.image} alt="cartimg"  style={{width:"150px"}} />
                    </div>
  <div class="col-lg-2 mt-5 text-uppercase">{item.company}</div>
  <div class="col-lg-2 mt-5  text-uppercase">{item.price} </div>
  <div class="col-lg-2 mt-5 d-flex justify-content-around  text-primary" >
 <FaAngleDown />
  {item.count}
  <FaAngleUp />
  </div>

  <div class="col-lg-2 mt-5  pointer text-danger" onClick={()=>deletCart(id)} ><FaRegTrashAlt /></div>
  <div class="col-lg-2 mt-5  text-uppercase">${item.Total}</div>
  </div>
</div>


       
    )}}
    </ProductConsumer>
    )
}
