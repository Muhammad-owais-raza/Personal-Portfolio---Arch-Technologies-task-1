/**
 * ==========================================================================
 * PERSONAL PORTFOLIO - ARCH TECHNOLOGIES TASK 1
 * Candidate: Muhammad Owais Raza (Full-Stack Web Developer)
 * Modular JavaScript Engine
 * ==========================================================================
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all interactive modules
  initHeader();
  initMobileNavigation();
  initActiveNavObserver();
  initContactForm();
});

/**
 * --------------------------------------------------------------------------
 * 1. Header Scroll Shadow & Backdrop Blur
 * --------------------------------------------------------------------------
 */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * --------------------------------------------------------------------------
 * 2. Mobile Navigation Toggle, Keyboard Trap, & Auto-Close
 * --------------------------------------------------------------------------
 */
function initMobileNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navBackdrop = document.querySelector('.nav-backdrop');
  const navLinks = document.querySelectorAll('.nav-link, .nav-cta .btn');

  if (!navToggle || !navMenu) return;

  const openMenu = () => {
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Close main menu');
    navMenu.classList.add('open');
    if (navBackdrop) navBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open main menu');
    navMenu.classList.remove('open');
    if (navBackdrop) navBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  navToggle.addEventListener('click', toggleMenu);

  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeMenu);
  }

  // Close navigation menu when a link inside it is clicked
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        closeMenu();
      }
    });
  });

  // Accessible escape key listener to close menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      closeMenu();
      navToggle.focus();
    }
  });

  // Auto-close menu if resized to desktop viewport
  window.addEventListener('resize', () => {
    if (window.innerWidth > 868 && navMenu.classList.contains('open')) {
      closeMenu();
    }
  });
}

/**
 * --------------------------------------------------------------------------
 * 3. Active Navigation Scroll Observer (ScrollSpy)
 * --------------------------------------------------------------------------
 */
function initActiveNavObserver() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/**
 * --------------------------------------------------------------------------
 * 4. Accessible Client-Side Form Validation & Handling
 * --------------------------------------------------------------------------
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const statusEl = document.getElementById('formStatus');

  if (!form) return;

  const nameInput = document.getElementById('userName');
  const emailInput = document.getElementById('userEmail');
  const messageInput = document.getElementById('userMessage');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Clear errors dynamically on input
  const clearFieldError = (input, errorEl) => {
    if (input) input.classList.remove('invalid');
    if (errorEl) {
      errorEl.classList.remove('visible');
      errorEl.textContent = '';
    }
  };

  if (nameInput) nameInput.addEventListener('input', () => clearFieldError(nameInput, nameError));
  if (emailInput) emailInput.addEventListener('input', () => clearFieldError(emailInput, emailError));
  if (messageInput) messageInput.addEventListener('input', () => clearFieldError(messageInput, messageError));

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    if (statusEl) {
      statusEl.classList.remove('success');
      statusEl.textContent = '';
    }

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      nameInput.classList.add('invalid');
      if (nameError) {
        nameError.textContent = 'Please enter your name (minimum 2 characters).';
        nameError.classList.add('visible');
      }
      isValid = false;
    } else {
      clearFieldError(nameInput, nameError);
    }

    // Validate Email
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      emailInput.classList.add('invalid');
      if (emailError) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.classList.add('visible');
      }
      isValid = false;
    } else {
      clearFieldError(emailInput, emailError);
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      messageInput.classList.add('invalid');
      if (messageError) {
        messageError.textContent = 'Please enter your message (minimum 10 characters).';
        messageError.classList.add('visible');
      }
      isValid = false;
    } else {
      clearFieldError(messageInput, messageError);
    }

    if (!isValid) {
      // Focus first invalid field for accessibility
      const firstInvalid = form.querySelector('.invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Process valid submission feedback
    if (statusEl) {
      statusEl.textContent = 'Thank you! Your message has been prepared successfully.';
      statusEl.classList.add('success');
      statusEl.setAttribute('role', 'alert');
    }

    // Reset fields after successful submission
    form.reset();
  });
}
