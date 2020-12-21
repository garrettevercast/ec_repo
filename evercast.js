// Add config JS to all config pages
const pageURL = window.location.href;
const s = document.createElement("script");
const css = document.createElement("link");
css.rel = "stylesheet";
css.href = "https://assets.evercast.us/mb/css/config.css?v=3";
s.type = "text/javascript";
s.src = "https://assets.evercast.us/mb/js/config.js?v=8";
if(pageURL.indexOf("config") > -1) {
    document.head.appendChild(css);
    document.body.appendChild(s);
}

const loginBtn = document.querySelector('.right-nav-menu .button');
loginBtn.addEventListener('click', function(){
    _gaq.push(['_trackEvent', 'Login', 'Click', 'Log in button clicked']);
});

// Hamburger Menu
jQuery(function($) {
    $('.hamburger').click(function(){
        $(this).toggleClass('is-active');
    });
});

alert("hey test");