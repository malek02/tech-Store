import React, { Component } from 'react';

import 'tachyons';
import {ProductConsumer} from '../context/context';

class SignIn extends Component {
constructor(props){
  super(props);
    this.state={
     
      }
  
}


  render() {
   
    
    return (
        <ProductConsumer>
        {value => {

            const {handelchange1,handelchange2, handelSubmit} = value;
            return (
        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
        <main class="pa4 black-80">
  <form class="measure">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0 ">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" >Email</label>
        <input onChange={e=>handelchange1(e)} value={this.state.email} name="email"
        className="pa2 input-reset ba bg-transparent hover-bg-black  w-100" type="email"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" >Password</label>
        <input onChange={e=>handelchange2(e)} value={this.state.password} name='password'
        className="b pa2 input-reset ba bg-transparent hover-bg-black  w-100" type="password"   id="password"/>
      </div>
      
    </fieldset>
    <div className="">
      <input onClick={e=>handelSubmit(e)} class="b ph3 pv2 input-reset  b--black bg-transparent grow pointer f6 dib center" type="submit" value="Sign in"/>
    </div>
    
  </form>
</main>
</article>)}}
</ProductConsumer>
    )
  }
}



export default SignIn;