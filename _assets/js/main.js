import 'bootstrap';
import './../css/main.scss';
import './vendor/popover';
import './vendor/tooltip';

const AnimTime = 2000;
const FadeClass = "fadein";

let ticking = false;

window.onload = () => {
    fadeInAll(document, FadeClass, AnimTime);
}

document.addEventListener("scroll", e => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            fadeInAll(document, FadeClass, AnimTime);

            ticking = false;
        });

        ticking = true;
    }
});

const fadeInAll = (doc, cls, duration) => {
    let i = 0;

    [].forEach.call(doc.getElementsByClassName(cls), el => {
        if (onScreen(el)) {
            setTimeout(() => {
                el.style.opacity = 1;
                el.style.transform = "translateY(0px)";

                // Wait for animation to play before removing class
                setTimeout(() => {
                    el.classList.remove(cls);
                }, duration);
            }, duration / 12 * i++);
        }
    });
}

const onScreen = el => {
    let portHeight =
        Math.max(document.documentElement.clientHeight || 0,
                 window.innerHeight || 0);

    let bottom = el.getBoundingClientRect().top +
        el.getBoundingClientRect().height / 2;

    return 0 <= bottom && bottom <= portHeight;
}
