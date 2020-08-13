import React from 'react';
import styled from 'styled-components';
import mainBcg from '../images/mainBcg.jpeg';

export default function Hero({title,max,children,img,tall}) {
    return (
        <HeroWalper tall={tall} img={img}>
     
        <div>
        <h1 className='items'>{title}</h1>
        
        
        {children}
        </div>            
    
        </HeroWalper>
    )
}
const HeroWalper= styled.div`
text-align: center;
display: flex;
align-items: center;
justify-content: center;
min-height:${props=>props.tall ? "90vh":"60vh"};
background:url(${props=>props.img}) center/cover no-repeat;

.container{
    text-decoration:none;
    color:black;
    font-size:25px;
    color: white;
    border:1px solid black;
    border-radius:5px;
    padding: 0.5rem 1rem;
    background-color:rgb(98, 221, 243);
    text-transform:uppercase;
   letter-spacing:5px;
   
}
.container:hover{

    border:1px solid white;
    padding: 0.7rem 1.2rem;
    color: black;
}
.items{
    padding-top:1rem;
    font-size:60px;
    text-transform:capitalize;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    

}
`
Hero.defaultProps = {
    img: mainBcg
}