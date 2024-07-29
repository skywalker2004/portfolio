document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
  
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('nav-menu_visible');
    });
  
    // Update year dynamically in footer
    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();
  
    // Initialize typed.js for the hero section
    const typed = new Typed('.typed-text', {
      strings: ['Software Developer', 'Web Designer', 'Tech Enthusiast'],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    });
  
    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Here you can handle the form submission, like sending data to a server
      alert('Message sent!');
    });
  
    // Modal functionality
    const modalLinks = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');
  
    modalLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = link.getAttribute('href');
        document.querySelector(modalId).style.display = 'block';
      });
    });
  
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        modals.forEach(modal => {
          modal.style.display = 'none';
        });
      });
    });
  
    window.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
      }
    });
  });
  