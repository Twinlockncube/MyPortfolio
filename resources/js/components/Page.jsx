import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './Banner';
import Navbar from './Navbar';


if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <React.StrictMode>
            <div className='top_container'>
                <Navbar/>
                <Banner/>
            </div>
        </React.StrictMode>
    )
}


