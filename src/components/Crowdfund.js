import React, { useState, useEffect } from 'react';
import '../styles/crowdfund.css';
import Navigation from './Navigation';
import ProjectInfo from './ProjectInfo';
import AboutProject from './AboutProject';


const Crowdfund = () => {

    const [money, setMoney] = useState(37583);
    const [backers, setBackers] = useState(5007);

    return (
        <div className="app-container">
            <div>
                <Navigation />
            </div>
            <div className="app-info">
                <ProjectInfo 
                    money={money} 
                    backers={backers} 
                />
                <AboutProject 
                setMoney={setMoney} 
                setBackers={setBackers} 
                money={money} 
                backers={backers}
            />
            </div>
        </div>
    );
}

export default Crowdfund;