import React, { useState } from 'react';
import '../styles/about-project.css';

const Pledge25 = () => {

    const [positionsleft, setPositionsLeft] = useState(101);

    return (
        <div className="pledge-container">
            <div className="pledge-name-container">
                <div className="item-name">
                    <h3>Bamboo Stand</h3>
                </div>
                <div className="pledge-money">
                    Pledge $25 or more
                </div>
            </div>
            <div className="item-desc">
                You get an ergonomic stand made of natural bamboo. 
                You've helped us launch our promotional campaign, 
                and you’ll be added to a special Backer member list. 
            </div>
            <div className="pledge-number-container">
                <div>
                    <span className="positions-left">101</span> left
                </div>
                <div>
                    <input
                        className="contribute-btn"
                        value="Select Reward"
                     />
                </div>
            </div>
        </div>
    );
}

export default Pledge25;