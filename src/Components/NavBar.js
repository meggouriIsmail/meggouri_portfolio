import '../script.js';
import '../style/style.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <a className="logo" href="#about">Meggo</a>
                <div className="nav-links">
                    <ul className="links">
                        <li className="link">
                            <a href="#about">About</a>
                        </li>
                        <li className="link">
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li className="link">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="humburbr">
                    <div className="toogle toogle1"></div>
                    <div className="toogle toogle2"></div>
                    <div className="toogle toogle3"></div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;