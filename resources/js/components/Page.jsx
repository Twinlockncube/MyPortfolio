import React from 'react';
import ReactDOM from 'react-dom/client';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Footer from './Footer';
import Navbar from './Navbar';
import Projects from './Projects';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../containers/Home';


if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <React.StrictMode>
            <Router>
            <Navbar/>
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<AboutMe/>}/>
                </Routes>
            </Router>
        </React.StrictMode>
    )
}


