import React, { useState } from 'react';
import '../styles/project-info.css';
import projectLogo from '../assets/images/logo-mastercraft.svg';
import BookmarkBtn from './BookmarkBtn';
import ProjectStats from '../components/ProjectStats';


const ProjectInfo = () => {

    const [moneyRaised, setMoneyRaised] = useState(37583);
    const [backers, setBackers] = useState(5007);

    const onBtnSubmit = (e) => {
        setMoneyRaised(moneyRaised + 10000);
        setBackers(backers + 1);
    }

    return (
        <div className="full-project-info-container">
            <div className="project-container">
                <div className="project-logo">
                    <img
                        src={projectLogo}
                        alt="project logo"
                        className="project-logo"
                    />
                </div>
                <div className="project-info-container">
                    <div className="project-name">
                        <h2>
                            Mastercraft Bamboo Monitor Riser
                        </h2>
                    </div>
                    <div className="project-desc">
                        <p>
                            A beautiful & handcrafted monitor stand to reduce
                            neck and eye strain
                        </p>
                    </div>
                </div>
                <div className="project-buttons-container">
                    <div className="contribute-btn-container">
                        <button 
                            className="contribute-btn" 
                            onClick={onBtnSubmit}
                        >
                            Back This Project
                        </button>
                    </div>
                    <BookmarkBtn />
                </div>
            </div>
            <div>
                <ProjectStats
                    moneyRaised={moneyRaised}
                    backers={backers}
                />
            </div>
        </div>
    );
}


export default ProjectInfo;