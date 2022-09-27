import React, { useState } from 'react';
import '../styles/about-project.css';
import PledgeComponent from './PledgeComponent';
import DonatePage from './DonatePage';


const AboutProject = () => {

    const [pledge25Left, setPledge25Left] = useState(101);
    const [pledge75Left, setPledge75Left] = useState(64);
    const [pledge200Left, setPledge200Left] = useState(2);


    return (
        <div className="about-full-container">
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
            <div className="donations-container">
                <PledgeComponent 
                    pledgesLeft={pledge25Left} 
                    name="Bamboo Stand"
                    price="25"
                    text="You get an ergonomic stand made of natural 
                        bamboo. You've helped us launch our promotional campaign, 
                        and you’ll be added to a special Backer member list.
                    "
                />
                <PledgeComponent 
                    pledgesLeft={pledge75Left} 
                    name="Black Edition Stand"
                    price="75"
                    text="You get a Black Special Edition computer stand 
                        and a personal thank you. You’ll be added to our 
                        Backer member list. Shipping is included.
                    "
                />
                <PledgeComponent 
                    pledgesLeft={pledge200Left}
                    name="Mahogany Special Edition"
                    price="200"
                    text="You get two Special Edition Mahogany stands, 
                        a Backer T-Shirt, and a personal thank you. 
                        You’ll be added to our Backer member list. 
                        Shipping is included. 
                    "
                />
            </div>
        </div>
    );
}

export default AboutProject;