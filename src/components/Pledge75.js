import '../styles/about-project.css';

const Pledge75 = () => {
    return (
        <div className="pledge-container">
            <div className="pledge-name-container">
                <div className="item-name">
                    <h3>Black Edition Stand</h3>
                </div>
                <div className="pledge-money">
                    Pledge $75 or more
                </div>
            </div>
            <div className="item-desc">
                You get a Black Special Edition computer 
                stand and a personal thank you. You’ll be 
                added to our Backer member list. Shipping is included.  
            </div>
            <div className="pledge-number-container">
                <div>
                    <span className="positions-left">64</span> left
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

export default Pledge75;