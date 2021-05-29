const Footer = () => {
    return (
        <footer>
            <div className="social">
                <p>Connect socially with Meggo</p>
                <div className="social-media">
                    <a href="https://ma.linkedin.com/in/ismail-meggouri-7437a71b4" target="_blank" rel="noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/assets/icons/linkedin_64px.png`} className="fa" alt="linkedin" />
                    </a>
                    <a href="https://www.instagram.com/ismail_meggouri/?hl=en" target="_blank" rel="noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/assets/icons/instagram_64px.png`} className="fa" alt="instagram" />
                    </a>
                    <a href="https://www.facebook.com/el.meggo" target="_blank" rel="noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/assets/icons/facebook_64px.png`} className="fa" alt="facebook" />
                    </a>
                    <a href="https://github.com/meggouriIsmail" target="_blank" rel="noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/assets/icons/github_64px.png`} className="fa" alt="github" />
                    </a>
                </div>
                <img src={`${process.env.PUBLIC_URL}/assets/icons/Portfolio_Logo_sm.png`} className="footer-logo" alt="Meggo" />
                <span>(+212)696110578</span>
            </div>
            <div className="nav-bottom">
                <h3 className="copy-right">Copyright &copy; <span className="logo-footer"> Meggo </span>
                    2021</h3>
            </div>
        </footer>
    );
}

export default Footer;