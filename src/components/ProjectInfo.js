import React, { useState } from 'react';
import '../styles/project-info.css';
import projectLogo from '../assets/images/logo-mastercraft.svg';
import BookmarkBtn from './BookmarkBtn';
import ProjectStats from '../components/ProjectStats';
import close from '../assets/images/icon-close-menu.svg';


const ProjectInfo = ({ money, backers }) => {
    return (
        <div className="full-project-info-container">
            <div className="project-container">
                <div className="project-info-container" id="scroll-when-donated">
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
                            onClick={() => {
                                const anchor = document.querySelector('#scroll-to-pledges')
                                anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
                            }}
                        >
                            Back this project
                        </button>
                        <BookmarkBtn />
                    </div>
                </div>
                </div>
                <div>
                    <ProjectStats
                        money={money}
                        backers={backers}
                    />
                </div>
        </div>
    );
}


export default ProjectInfo;