import Name from "./Name";
import NavBar from "./NavBar";
import '../style/style.css';

const Header = () => {
    return (
        <section className="hero" id="about">
            <div className="info">
                <p className="profile" style={{ color: "white" }}>
                    Hello, World.
                    I'm MEGGOURI ISMAIL.
                    An ambitious Moroccan programmer.
                    I love to communicate with people through my work.
                </p>
                <img src={`${process.env.PUBLIC_URL}/assets/images/alsoMee.jpeg`} alt="avatar" className="avatar" />
            </div>
            <NavBar />
            <Name />
        </section>
    );
}

export default Header;