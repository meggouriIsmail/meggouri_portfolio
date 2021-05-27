import Name from "./Name";
import NavBar from "./NavBar";
import '../style/style.css';

const Header = () => {
    return (
        <section className="hero" id="about">
            <div className="info">
                <h2 className="profile">🅼🅴🅶🅶🅾🆄🆁🅸 🅸🆂🅼🅰🅸🅻</h2>
                <img src={`${process.env.PUBLIC_URL}/assets/images/alsoMee.jpeg`} alt="avatar" className="avatar" />
            </div>
            <NavBar />
            <Name />
        </section>
    );
}

export default Header;