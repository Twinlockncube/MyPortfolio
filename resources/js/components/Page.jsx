import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './Banner';
import Navbar from './Navbar';
import Projects from './Projects';


if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <React.StrictMode>
            <div className='container top_container'>
                <Navbar/>
                <Banner/>
                <Projects/>
            </div>
        </React.StrictMode>
    )
}


