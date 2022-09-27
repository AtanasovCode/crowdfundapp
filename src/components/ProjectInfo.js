import React, { useState } from 'react';
import '../styles/project-info.css';
import projectLogo from '../assets/images/logo-mastercraft.svg';
import BookmarkBtn from './BookmarkBtn';
import ProjectStats from '../components/ProjectStats';
import DonatePage from './DonatePage';
import close from '../assets/images/icon-close-menu.svg';


const ProjectInfo = () => {

    const [moneyRaised, setMoneyRaised] = useState(37583);
    const [backers, setBackers] = useState(5007);
    const [openDonatePage, setOpenDonatePage] = useState(0);
    const [pledge25Left, setPledge25Left] = useState(101);
    const [pledge75Left, setPledge75Left] = useState(64);
    const [pledge200Left, setPledge200Left] = useState(2);


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
                    <DonatePage
                        moneyRaised={moneyRaised}
                        backers={backers}
                    />
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
        <div className="full-project-info-container">
            {display()}
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