import 'bootstrap';
import './../css/main.scss';
import './vendor/popover';
import './vendor/tooltip';

const FadeTime = 2000;
const SlideTime = 500;
const FadeClass = "fadein";
const SlideClass = "slidein";

let ticking = false;

window.onload = () => {
    scrollAnimCls(document, FadeClass, FadeTime, fadeInOne);
    scrollAnimCls(document, SlideClass, SlideTime, slideInRightOne);
}

document.addEventListener("scroll", e => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            scrollAnimCls(document, FadeClass, FadeTime, fadeInOne);
            scrollAnimCls(document, SlideClass, SlideTime, slideInRightOne);

            ticking = false;
        });

        ticking = true;
    }
});

const scrollAnimCls = (doc, cls, duration, fn) => {
    let i = 0;

    [].forEach.call(doc.getElementsByClassName(cls), el => {
        if (onScreen(el)) {
            setTimeout(() => {
                fn(el, cls, duration);

                // Wait for animation to play before removing class
                setTimeout(() => {
                    el.classList.remove(cls);
                }, duration);
            }, duration / 12 * i++);
        }
    });
}

const fadeInOne = (el, cls, duration) => {
    el.classList.add("fadedin");
}

const slideInRightOne = (el, cls, duration) => {
    el.classList.add("slidin");
}

const onScreen = el => {
    let portHeight =
        Math.max(document.documentElement.clientHeight || 0,
                 window.innerHeight || 0);

    let bottom = el.getBoundingClientRect().top +
        el.getBoundingClientRect().height / 2;

    return 0 <= bottom && bottom <= portHeight;
}
