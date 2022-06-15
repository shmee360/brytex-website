import 'bootstrap';
import './../css/main.scss';
import './vendor/popover';
import './vendor/tooltip';
import $ from 'jquery';

const onScreen = el => {
    let portHeight =
        Math.max(document.documentElement.clientHeight || 0,
                 window.innerHeight || 0);

    let bottom = el.getBoundingClientRect().top +
        el.getBoundingClientRect().height;

    return 0 <= bottom && bottom <= portHeight;
};

const fadeImages = () => $('.fadein').each(function(i) {
    let bottom_of_element = $(this).offset().top + $(this).outerHeight();
    let bottom_of_window = $(window).scrollTop() + $(window).height();
    
    if (bottom_of_window > bottom_of_element) {
        $(this).animate({'opacity': '1'}, 1000);
    }
});

$(document).ready(() => {
    fadeImages();

    $(window).scroll(() => {
        fadeImages();
    });
});
