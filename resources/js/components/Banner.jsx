import { camelCase } from 'lodash';
import React from 'react';
import banner from '../../images/hacker.jpg';

function Banner(props) {
    const the_style ={ 
        width:'94vw',
        height:'80vh',
        backgroundImage:`url(${banner})`,
        backgroundRepeat: 'no-repeat',
        color: 'white',
        backgroundSize: 'cover',
        
    };
    
    return (
        <div style={the_style} className='container px-4 mx-auto flex flex-col flex-wrap items-center justify-center'>
            <div className='motto'>For all Web solutions using PHP(Laravel), Javascript, CSS, HTML</div>
            <div><button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Projects</button></div>
        </div>
    );
}

export default Banner;