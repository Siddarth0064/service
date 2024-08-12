document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    // Optionally, you can add code to handle form submission here
});



document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: ["Creating Digital Solutions", 
                  "Crafting Impressive Portfolios",
                  "Delivering Remarkable Projects", 
                  "Offering Premium Services"],
        typeSpeed: 40,
        backSpeed: 10,
        loop: true,
        showCursor: true,
        cursorChar: '|',
    };

    var typed = new Typed("#typed-output", options);
});

document.addEventListener('DOMContentLoaded', function() {
    var aboutSection = document.getElementById('about');
    var iconWrapper = aboutSection.querySelector('.icon-wrapper');

    window.addEventListener('scroll', function() {
        var sectionPosition = aboutSection.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            iconWrapper.classList.add('show');
        }
    });
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('.navbar li');
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');

}
// Close the navbar when any nav link is clicked
navLinks.forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    };
});