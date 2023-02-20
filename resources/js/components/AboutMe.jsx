import React from 'react';
import pic from '../../images/me.bg.png'

function AboutMe(props) {
    return (
            <div className='wrapper flex flex-col  mt-3 pb-3 pl-1 pr-1'>

                    <div className='grid grid-cols-2 gap-4 pt-5'>
                        <div className='w-6/12 sm:w-4/12 px-4'>
                        <h3>The Programmer</h3>
                        <img src={pic} alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />  
                        </div>
                        <div className='w-6/12 sm:w-4/12 px-4'>
                        <h3>About Me</h3>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore consectetur culpa ratione eaque nam illo molestiae, rerum est et quaerat, quis eos tempora itaque aliquid dignissimos suscipit illum quas doloribus.
                        </div>
                    </div>
                </div>
    );
}

export default AboutMe;