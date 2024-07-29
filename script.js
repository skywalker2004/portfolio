document.addEventListener('DOMContentLoaded', function() {
    // Typed.js initialization
    var typed = new Typed('.typed-text', {
        strings: ["Software Developer", "Web Designer", "Tech Enthusiast"],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 2000,
        loop: true
    });

    // Navigation toggle for mobile view
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Update the year in the footer
    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Placeholder for form submission logic, e.g., AJAX request
    alert('Thank you for your message. We will get back to you soon!');
});
