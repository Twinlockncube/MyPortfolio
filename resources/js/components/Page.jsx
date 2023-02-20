import React from 'react';
import ReactDOM from 'react-dom/client';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Footer from './Footer';
import Navbar from './Navbar';
import Projects from './Projects';


if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <React.StrictMode>
            <div className='flex flex-col space-y-0'>
                <Navbar/>
                <Banner/>
                <Projects/>
                <AboutMe/>
                <Footer/>
            </div>
        </React.StrictMode>
    )
}


