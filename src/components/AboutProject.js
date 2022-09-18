import '../styles/about-project.css';
import Pledge200 from './Pledge200';
import Pledge25 from './Pledge25';
import Pledge75 from './Pledge75';


const AboutProject = () => {
    return (
        <div className="about-full-container">
            <div className="about-info">
                <div>
                    <h3>About this project</h3>
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
                <Pledge25 />
                <Pledge75 />
                <Pledge200 />
            </div>
        </div>
    );
}

export default AboutProject;