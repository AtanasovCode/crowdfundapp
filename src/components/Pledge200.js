import '../styles/about-project.css';

const Pledge200 = () => {
    return (
        <div className="pledge-container">
            <div className="pledge-name-container">
                <div className="item-name">
                    <h3>Mahogany Special Edition</h3>
                </div>
                <div className="pledge-money">
                    Pledge $200 or more
                </div>
            </div>
            <div className="item-desc">
                You get two Special Edition Mahogany stands, 
                a Backer T-Shirt, and a personal thank you. You’ll be added 
                to our Backer member list. Shipping is included.  
            </div>
            <div className="pledge-number-container">
                <div>
                    <span className="positions-left">2</span> left
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

export default Pledge200;