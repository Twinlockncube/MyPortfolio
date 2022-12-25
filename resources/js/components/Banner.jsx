import { camelCase } from 'lodash';
import React from 'react';
import banner from '../../images/ultra.jpg';

function Banner(props) {
    const the_style ={ 
        width:'100vw',
        height:'30vh',
        backgroundImage:`url(${banner})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        
    };
    
    return (
        <div style={the_style} >
            <span></span>
        </div>
    );
}

export default Banner;