document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    // Optionally, you can add code to handle form submission here
});



document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: ["Crafting Exceptional Digital Experiences", 
            "Creating Outstanding Portfolios",
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
