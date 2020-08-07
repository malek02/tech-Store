import React from 'react'
import styled from 'styled-components';


export default function Title({Titele,center}) {
    return (
        <TitelWarper center={center}>

<div className="col">

    <h2 className="text-title">{Titele}</h2>
    <div className="outireline"/>
</div>

        </TitelWarper>
            
        
    )
}
const TitelWarper=styled.div`
text-align:${props=>(props.center? "center": "left")};
.outireline{
    height : 0.25rem;
    width:7rem;
    background:rgb(98, 221, 243);
    margin: ${props => (props.center ? "0 auto" : "0")};
}


`