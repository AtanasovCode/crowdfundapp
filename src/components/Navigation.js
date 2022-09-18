import logo from '../assets/images/logo.svg';
import '../styles/navigation.css';

const Navigation = () => {
    return (
        <nav className="nav-container">
            <div className="nav-content">
                <div className="nav-logo">
                    <img
                        className="logo"
                        src={logo}
                        alt="logo"
                    />
                </div>
                <div className="nav-links">
                    <div>About</div>
                    <div>Discover</div>
                    <div>Get Started</div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;