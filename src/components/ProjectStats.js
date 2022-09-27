import '../styles/project-stats.css';
import ProgressBar from './ProgressBar';

const ProjectStats = (props) => {

    const { moneyRaised, backers } = props;

    const formatNumber = (number) => {
        return number.toLocaleString('en-US'); 
    }

    return (
        <div className="project-stats-container">
            <div className="project-stats">
                <div>
                    <div>
                        <h1>
                            ${formatNumber(moneyRaised)}
                        </h1>
                    </div>
                    <div>
                        of $100,000 backed
                    </div>
                </div>
                <div>
                    <div>
                        <h1>{formatNumber(backers)}</h1>
                    </div>
                    <div>
                        total backers
                    </div>
                </div>
                <div>
                    <div>
                        <h1>56</h1>
                    </div>
                    <div>
                        Days left
                    </div>
                </div>
            </div>
            <div className="progress-bar">
                <ProgressBar progress={moneyRaised / 1000} />
            </div>
        </div>
    );
}

export default ProjectStats;