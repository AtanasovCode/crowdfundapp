import React, { useState } from 'react';
import '../styles/about-project.css';
import close from '../assets/images/icon-close-menu.svg';
import DonatePage from './DonatePage';

const PledgeComponent = (props) => {

    const { name, text, pledgesLeft, price } = props;

    const [openDonatePage, setOpenDonatePage] = useState(0);


    const onBtnSubmit = () => {
        if (openDonatePage === 0) {
            setOpenDonatePage(openDonatePage + 1);
        }
        if (openDonatePage === 1) {
            setOpenDonatePage(openDonatePage - 1);
        }
    }

    const display = () => {
        if (openDonatePage === 1) {
            return (
                <div className="donate-full-container">
                    <DonatePage />
                    <div>
                        <img
                            src={close}
                            className="close-icon"
                            onClick={onBtnSubmit}
                        />
                    </div>
                </div>
            );
        }
    }

    return (
        <div className="pledge-container">
            {display()}
            <div className="pledge-name-container">
                <div className="item-name">
                    <h3>{name}</h3>
                </div>
                <div className="pledge-money">
                    Pledge ${price} or more
                </div>
            </div>
            <div className="item-desc">
                {text}
            </div>
            <div className="pledge-number-container">
                <div>
                    <span className="positions-left">{pledgesLeft}</span> left
                </div>
                <div>
                    <input
                        className="contribute-btn"
                        value="Select Reward"
                        onClick={onBtnSubmit}
                     />
                </div>
            </div>
        </div>
    );
}

export default PledgeComponent;