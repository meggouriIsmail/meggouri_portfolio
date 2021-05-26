const Footer = () => {
    return (
        <footer>
            <div class="social">
                <p>Connect socially with <span class="logo-footer"> Meggo </span></p>
                <div class="social-media">
                    <a href="https://ma.linkedin.com/in/ismail-meggouri-7437a71b4" target="_blank" rel="noreferrer">
                        <img src="../assets/icons/linkedin_64px.png" class="fa" alt="linkedin" />
                    </a>
                    <a href="https://www.instagram.com/ismail_meggouri/?hl=en" target="_blank" rel="noreferrer">
                        <img src="../assets/icons/instagram_64px.png" class="fa" alt="instagram" />
                    </a>
                    <a href="https://www.facebook.com/el.meggo" target="_blank" rel="noreferrer">
                        <img src="../assets/icons/facebook_64px.png" class="fa" alt="facebook" />
                    </a>
                    <a href="https://github.com/meggouriIsmail" target="_blank" rel="noreferrer">
                        <img src="../assets/icons/github_64px.png" class="fa" alt="github" />
                    </a>
                </div>
                <img src="../assets/icons/Portfolio_Logo_sm.png" class="footer-logo" alt="Meggo" />
            </div>
            <div class="nav-bottom">
                <h3 class="copy-right">Copyright &copy; <span class="logo-footer"> Meggo </span>
                    2021</h3>
            </div>
        </footer>
    );
}

export default Footer;