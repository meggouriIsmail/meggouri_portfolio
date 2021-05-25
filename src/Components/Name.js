import React from 'react';

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const profil = ["MEGGOURI ISMAIL", "a Full Stack Developer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < profil[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) {
            cursorSpan.classList.add("typing");
        }
        typedTextSpan.textContent += profil[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) {
            cursorSpan.classList.add("typing");
        }
        typedTextSpan.textContent = profil[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= profil.length) {
            textArrayIndex = 0;
        }
        setTimeout(type, typingDelay + 1100);
    }
}

class Name extends React.Component {
    state = {}

    componentDidMount() {
        console.log(process.env.PUBLIC_URL.toString());
        if (profil.length) {
            setTimeout(type, newTextDelay + 250);
        }
    }

    render() {
        return (
            <div className="name">
                <h1 className="fullName">I Am&nbsp;
                <span className="typed-text"></span>
                    <span className="cursor">&nbsp;</span>
                </h1>
            </div>
        );
    }
}

export default Name;