import React from 'react';
import pic from '../../images/me.bg.png'

function AboutMe(props) {
    return (
            <div className='wrapper flex flex-col  mt-3 pb-3 pl-1 pr-1'>

                    <div className='flex flex-row gap-4 pt-5' id='about'>
                        <div className='w-4/12 sm:w-4/12 px-4'>
                        <h3 className='font-bold'>The Programmer</h3>
                        <img src={pic} alt="..." className="shadow rounded-full max-w-full h-72 align-middle border-none" />  
                        </div>
                        <div className='w-8/12 sm:w-4/12 px-4'>
                        <h2 className='font-bold'>About Me</h2>
                        My name is Twinlock Ncube and I am a programmer with over 3 years of professional experience in PHP and JavaScript, including React. I have also programmed in Java and have a deep understanding of programming concepts and software development principles.

My passion for programming began in college, where I studied computer science and honed my skills in PHP and JavaScript. Since then, I have worked on a variety of projects, from small websites to large-scale applications. I am always looking to expand my skill set and stay up-to-date with the latest technologies and trends in the industry.
                        </div>
                    </div>
                </div>
    );
}

export default AboutMe;