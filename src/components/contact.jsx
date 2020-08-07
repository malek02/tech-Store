import React from 'react';
import Title from './Title';
import styled from 'styled-components';

export default function Contact() {
    return (
        <contactWrper>
        <div>
        <Title Titele="Contact Us" center></Title>
        <section className="py-5">
        <div className="row">
        <form className=" col-10 mx-auto col-md-6 my-3"
         action="https://formspree.io/mechimalek53@gmail.com"
  method="POST" >
            <div className="form-group   ">

                <input type="text" className="form-control" id="exampleFormControlInput1" name="name" placeholder="john week" />
            </div>
            <div className="form-group  ">
                <input type="email" className="form-control" name="_replyto" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="form-group ">
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="important!!!!" />
            </div>
            <div className="form-group ">
                <textarea  name="message" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="hello there buddy"></textarea>
            </div>
            <button type="submit" value="Send" className="btn btn-primary">Send Contact</button>
        </form>
        
        </div>
        
        </section>
        
        </div>
        
        </contactWrper>
    )
}
const contactWrper = styled.div`
width:100%;
background-color:red;
.container-form{
   border:5px solid black;
}

`