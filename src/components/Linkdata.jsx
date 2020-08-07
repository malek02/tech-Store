import React from 'react'
import {FaHospitalSymbol,FaInfoCircle,FaLayerGroup,FaEnvelopeOpenText,FaFileAlt} from "react-icons/fa"


export  const LinkData=[
    {
        id:1,
        name:'Home',
        path:'/Home',
        icon:<FaHospitalSymbol/>
    },
    {
        id:2,
        name:'About',
        path:'/About',
        icon:<FaInfoCircle/>
    },
    {
        id:3,
        name:'products',
        path:'/products',
        icon:<FaLayerGroup/>
    },
    {
        id:4,
        name:'contact',
        path:'/contact',
        icon:<FaEnvelopeOpenText/>
    },
    {
        id:5,
        name:'cart',
        path:'/cart',
        icon:<FaFileAlt/>
    }
]