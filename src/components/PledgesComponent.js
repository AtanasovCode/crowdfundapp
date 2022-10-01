import React, { useState } from 'react';
import '../styles/about-project.css';

const Pledge25Comp = ({
    displayThankYou,
    setDisplayThankYou,
    moneyInput,
    setMoneyInput,
    text,
    name,
    price,
    pledgesLeft,
    setPledgesLeft,
    scrollDown
}) => {

    const [displayDonate, setDisplayDonate] = useState(0);

    const onBtnSubmit = () => {
        const anchor = document.querySelector(`#${scrollDown}`);
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })

        if (displayDonate === 0) {
            setDisplayDonate(displayDonate + 1);
        }
        if (displayDonate === 1) {
            setDisplayDonate(displayDonate - 1);
        }
    }

    const onBtnDonate = () => {
        if (moneyInput === "" || moneyInput < parseInt(price)) {
            setMoneyInput("");
            console.log("Empty Field or Not Enough Money");
            return;
        } else {
            if (pledgesLeft >= 1) {
                setPledgesLeft(pledgesLeft - 1);
            }
            const anchor = document.querySelector("#scroll-when-donated");
            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
            if (displayDonate === 1) {
                setDisplayDonate(displayDonate - 1);
            }
            if(displayThankYou === 0) {
                setDisplayThankYou(displayThankYou + 1);
            }
        }
    }



    const display = () => {
        if (displayDonate === 0) {
            return (
                <div className="donate-full-container">
                    <div>
                        Enter Your Pledge
                    </div>
                    <div>
                        <input
                            type="number"
                            className="input-donation"
                            onChange={(e) => setMoneyInput(e.target.value)}
                            placeholder="$ 0.00"
                            value={moneyInput}
                        />
                    </div>
                    <div>
                        <input
                            type="button"
                            value="Contribute"
                            className="btn-donation"
                            onClick={onBtnDonate}
                        />
                    </div>
                </div>
            );
        } else if (displayDonate === 1) {
            return (
                <div className="donate-full-container show">
                    <div>
                        Enter Your Pledge
                    </div>
                    <div>
                        <input
                            type="number"
                            className="input-donation"
                            onChange={(e) => setMoneyInput(e.target.value)}
                            placeholder="$ 0.00"
                            value={moneyInput}
                        />
                    </div>
                    <div>
                        <input
                            type="button"
                            value="Contribute"
                            className="btn-donation"
                            onClick={onBtnDonate}
                        />
                    </div>
                </div>
            );
        }
    }

    const submitBtn = () => {
        if (displayDonate === 1) {
            return (
                <input
                    type="button"
                    className="cancel-btn"
                    value="Cancel"
                    onClick={onBtnSubmit}
                    id={scrollDown}
                />
            );
        } else {
            return (
                <input
                    type="button"
                    className="contribute-btn"
                    value="Select Reward"
                    onClick={onBtnSubmit}
                    id={scrollDown}
                />
            );
        }
    }

    return (
        <div className="full-pledge-container">
            <div className="pledge-container">
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
                        {submitBtn()}
                    </div>
                </div>
            </div>
            {display()}
        </div>
    );
}

export default Pledge25Comp;


