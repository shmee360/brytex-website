import 'bootstrap';
import './../css/main.scss';
import './vendor/popover';
import './vendor/tooltip';

const AnimTime = 2000;
const FadeClass = "fadein";

let ticking = false;

window.onload = () => fadeInAll(document, FadeClass, AnimTime);

document.addEventListener('scroll', e => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            fadeInAll(document, FadeClass, AnimTime);

            ticking = false;
        });

        ticking = true;
    }
});

const fadeInAll = (doc, cls, duration) => {
    [].forEach.call(doc.getElementsByClassName(cls), i => {
        if (onScreen(i)) {
            i.style.opacity = 1;
            i.style.transform = "translateY(0px)";

            // Wait for animation to play before removing class
            setTimeout(() => {
                i.classList.remove(cls);
            }, duration);
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
