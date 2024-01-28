import React from 'react';
import pic from '../../images/me.bg.png'

function AboutMe(props) {
    return (
            <div className='w-8/12 pt-5 mx-auto'>
                    <div className='flex flex-row  pt-5 bg-black'>
                        <div className=' px-1 text-xl text-white bg-blue-600'>
                        <h2 className='font-bold'>About Me</h2>
                        My name is Twinlock Ncube and I am a programmer with years of professional experience in PHP and JavaScript, including React. I have also programmed in Java and have a deep understanding of programming concepts and software development principles.

                        My passion for programming began in college, where I studied computer science and honed my skills in PHP and JavaScript. Since then, I have worked on a variety of projects, from small websites to large-scale applications. I am always looking to expand my skill set and stay up-to-date with the latest technologies and trends in the industry.
                        </div>
                    </div>
                </div>
    );
}

export default AboutMe;