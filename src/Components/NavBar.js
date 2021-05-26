import React from 'react';

class NavBar extends React.Component {

    componentDidMount() {
        const navLinks = document.querySelector('.nav-links');
        const nav = document.querySelector('.navbar');
        const burger = document.querySelector('.humburbr');

        burger.addEventListener('click', showLinks);
        window.addEventListener('scroll', fixNav);

        function showLinks() {

            navLinks.classList.toggle('nav-links-active');
            burger.classList.toggle('toggle');
            navLinks.classList.add('nav-links-display');

            document.querySelectorAll('.link').forEach((el) => {
                el.addEventListener('click', () => {
                    navLinks.classList.remove('nav-links-active');
                    burger.classList.remove('toggle');

                });
            });
        }

        function fixNav() {
            if (window.scrollY > 20) {
                nav.classList.add('navbar-bg');
            } else {
                nav.classList.remove('navbar-bg');
            }
        }
    }

    render() {
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
}

export default NavBar;