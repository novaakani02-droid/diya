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
  setupBackgroundMusic();
});

function setupBackgroundMusic() {
  const audio = document.getElementById('background-music');
  const button = document.getElementById('music-toggle');
  const label = document.getElementById('music-toggle-label');
  const status = document.getElementById('music-status');
  if (!audio || !button || !label || !status) return;

  audio.volume = 0.25;

  const updatePlaybackState = () => {
    const isPlaying = !audio.paused;
    label.textContent = isPlaying ? 'Pause music' : 'Play music';
    button.setAttribute('aria-label', `${isPlaying ? 'Pause' : 'Play'} background music`);
    button.setAttribute('aria-pressed', String(isPlaying));
    if (isPlaying) status.textContent = '';
  };

  const showLoadError = () => {
    status.textContent = `Could not load the song. Check the audio file at "${audio.getAttribute('src')}".`;
  };

  button.addEventListener('click', () => {
    if (!audio.paused) {
      audio.pause();
      return;
    }

    status.textContent = '';
    audio.play().catch(showLoadError);
  });

  audio.addEventListener('play', updatePlaybackState);
  audio.addEventListener('pause', updatePlaybackState);
  audio.addEventListener('error', showLoadError);
}

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
