import React, { useState } from 'react';
import '../styles/about-project.css';
import PledgesComponent from './PledgesComponent';
import thanksIcon from '../assets/images/icon-check.svg';


const AboutProject = ({ money, backers, setMoney, setBackers }) => {

    const [pledges25Left, setPledges25Left] = useState(101);
    const [pledges75Left, setPledges75Left] = useState(64);
    const [pledges200Left, setPledges200Left] = useState(2);
    const [moneyInput, setMoneyInput] = useState("");
    const [displayThankYou, setDisplayThankYou] = useState(0);


    const onBtnThankYou = () => {
        if (displayThankYou === 1) {
            setDisplayThankYou(displayThankYou - 1);
        }
        //console.log(moneyInput);
        setMoneyInput("");
        setMoney(money + parseInt(moneyInput));
        setBackers(backers + 1);
    }


    const thankYou = () => {
        if (displayThankYou === 1) {
            return (
                <div className="full-thank-you-container">
                    <div className="thanks-icon-container">
                        <img
                            src={thanksIcon}
                            alt="thank-you-icon"
                            className="thank-you-icon"
                        />
                    </div>
                    <div className="thank-you-heading">
                        <h2>Thanks for your support!</h2>
                    </div>
                    <div className="thank-you-text">
                        <span>
                            Your pledge brings us one step closer to
                            sharing Mastercraft Bamboo Monitor
                            Riser worldwide. You will get an email
                            once our campaign is completed.
                        </span>
                    </div>
                    <div className="thank-you-btn-container">
                        <input
                            type="button"
                            value="Got It"
                            className="thank-you-btn"
                            onClick={onBtnThankYou}
                        />
                    </div>
                </div>
            );
        }
    }


    return (
        <div className="about-full-container">
            {thankYou()}
            <div className="about-info">
                <div className="about-heading">
                    <h3>About This Project</h3>
                </div>
                <div>
                    The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
                    platform that elevates your screen to a more comfortable viewing height.
                    Placing your monitor at eye level has the potential to improve your
                    posture and make you more comfortable while at work, helping you
                    stay focused on the task at hand.
                </div>
                <div>
                    Featuring artisan craftsmanship, the simplicity of design creates extra desk
                    space below your computer to allow notepads, pens, and USB sticks to be stored
                    under the stand.
                </div>
            </div>
            <div className="donations-container" id="scroll-to-pledges">
                <PledgesComponent
                    setMoney={setMoney}
                    setBackers={setBackers}
                    money={money}
                    backers={backers}
                    pledgesLeft={pledges25Left}
                    setPledgesLeft={setPledges25Left}
                    displayThankYou={displayThankYou}
                    setDisplayThankYou={setDisplayThankYou}
                    moneyInput={moneyInput}
                    setMoneyInput={setMoneyInput}
                    name="Bamboo Stand"
                    price="25"
                    scrollDown="scroll-down-25"
                    text="You get an ergonomic stand made of natural bamboo. 
                        You've helped us launch our promotional campaign, 
                        and you’ll be added to a special Backer member list.
                    "
                />
                <PledgesComponent
                    setMoney={setMoney}
                    setBackers={setBackers}
                    money={money}
                    backers={backers}
                    pledgesLeft={pledges75Left}
                    setPledgesLeft={setPledges75Left}
                    displayThankYou={displayThankYou}
                    setDisplayThankYou={setDisplayThankYou}
                    moneyInput={moneyInput}
                    setMoneyInput={setMoneyInput}
                    name="Black Edition Stand"
                    price="75"
                    scrollDown="scroll-down-75"
                    text="You get a Black Special Edition computer 
                        stand and a personal thank you. You’ll be added 
                        to our Backer member list. Shipping is included. 
                    "
                />
                <PledgesComponent
                    setMoney={setMoney}
                    setBackers={setBackers}
                    money={money}
                    backers={backers}
                    pledgesLeft={pledges200Left}
                    setPledgesLeft={setPledges200Left}
                    displayThankYou={displayThankYou}
                    setDisplayThankYou={setDisplayThankYou}
                    moneyInput={moneyInput}
                    setMoneyInput={setMoneyInput}
                    name="Mahogany Special Edition"
                    price="200"
                    scrollDown="scroll-down-200"
                    text="You get two Special Edition Mahogany stands, a Backer
                        T-Shirt, and a personal thank you. You’ll be added to our
                         Backer member list. Shipping is included. 
                    "

                />
            </div>
        </div>
    );
}

export default AboutProject;