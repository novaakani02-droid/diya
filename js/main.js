/**
 * ====================================================================
 * THE DIYA EDIT — ISSUE NO. 21
 * MAIN APP CONTROLLER
 * ====================================================================
 */

import { initGallery } from './gallery.js';
import { initLetters } from './letters.js';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  // Lock scroll initially for envelope invitation screen
  const envelopeScreen = document.getElementById('invitation-screen');
  if (envelopeScreen && !envelopeScreen.classList.contains('unlocked')) {
    document.body.style.overflow = 'hidden';
  }

  // Initialize core subsystems
  initGallery();
  initLetters();
  initAnimations();
  setupNavigation();
});

function setupNavigation() {
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navList = document.querySelector('.nav-links');

  // Mobile menu toggle
  if (mobileToggle && navList) {
    mobileToggle.addEventListener('click', () => {
      navList.classList.toggle('mobile-open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('mobile-open');
      });
    });
  }

  // Scrollspy for active nav link
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
