import React, { useState, useEffect } from 'react';
import '../styles/crowdfund.css';
import Navigation from './Navigation';
import ProjectInfo from './ProjectInfo';
import AboutProject from './AboutProject';


const Crowdfund = () => {
    return (
        <div className="app-container">
            <div>
                <Navigation />
            </div>
            <div className="app-info">
                <ProjectInfo />
                <AboutProject />
            </div>
        </div>
    );
}

export default Crowdfund;