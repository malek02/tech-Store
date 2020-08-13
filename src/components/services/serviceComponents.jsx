import React from 'react'
import {DataService} from './DataService';
import styled from 'styled-components';

export default function Service() {
    return (
        <ServicEWorp>
        <div className="row">
       {DataService.map(ser=>{
           return(
            <section key={ser.id} className="col-md-4 col-md-offset-4">
            <artical className="artical-service">
        <div  className='logo'>

            {ser.logo}
        
        <h5>{ser.service}</h5>
        <h6>{ser.info}</h6>
        </div>
        </artical>
        </section>                       
           )
       }) 
} 
        </div>
</ServicEWorp>
    )
}

const ServicEWorp=styled.div`
background-color:#5fb7ea;
.row{
    
    margin: 0rem 2rem;
    
}

.logo{
    margin:2rem 15rem 5rem 4rem;
    font-size:30px;
    color:#5f5e5e;
   text-align:center;
  
   

}
h5{
    margin:2rem 2rem 2rem 2rem;
    color:black;
}
h6{
    color:black;
}
`