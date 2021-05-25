const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('.navbar');
const links = document.querySelector('.links');
const burger = document.querySelector('.humburbr');

// burger.addEventListener('click', showLinks);
// window.addEventListener('scroll', fixNav);

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



document.addEventListener('scroll', handlScroll);

function handlScroll() {
    const section = document.querySelector(".portfolio-section");

    const pre = [...document.querySelectorAll(".pre")];

    const pre1 = pre[0];
    const pre2 = pre[1];

    const bool = window.scrollY;

    if (bool >= section.offsetTop - 332.5) {
        pre1.classList.add("animation-img-r");
        pre1.classList.remove("animation-img-back-r");
        pre2.classList.add("animation-img-l");
        pre2.classList.remove("animation-img-back-l");
    } else {
        pre1.classList.remove("animation-img-r");
        pre1.classList.add("animation-img-back-r");
        pre2.classList.remove("animation-img-l");
        pre2.classList.add("animation-img-back-l");
    }
}
