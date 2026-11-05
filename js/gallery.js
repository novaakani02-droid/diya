/**
 * ====================================================================
 * THE DIYA EDIT — ISSUE NO. 21
 * SOUL MOMENTS: GALLERY & LIGHTBOX CONTROLLER (PHOTOS & VIDEOS)
 * ====================================================================
 */

import { memoriesArchive } from './data/memories.js';

let currentFilter = 'all';

export function initGallery() {
  setupFilterTabs();
  setupLightbox();
}

function setupFilterTabs() {
  const container = document.getElementById('memory-filter-tabs');
  if (!container) return;

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    const cat = btn.dataset.category || 'all';
    currentFilter = cat;
    
    // Update active class on buttons
    container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Filter static memory cards in index.html
    filterMemories(cat);
  });
}

function filterMemories(category) {
  // 1. Featured Spotlight Card (Kenkey Chronicles: category 'shs')
  const featured = document.querySelector('.featured-memory-card');
  if (featured) {
    if (category === 'all' || category === 'shs') {
      featured.style.display = 'grid';
    } else {
      featured.style.display = 'none';
    }
  }

  // 2. Scrapbook Polaroid Grid Items
  const cards = document.querySelectorAll('#memories-grid .memory-item');
  cards.forEach(card => {
    const cardCat = card.dataset.category;
    if (category === 'all' || cardCat === category) {
      card.style.display = 'flex';
      card.style.animation = 'fadeInUp 0.4s ease forwards';
    } else {
      card.style.display = 'none';
    }
  });
}

function setupLightbox() {
  const overlay = document.getElementById('lightbox-modal');
  if (!overlay) return;

  const closeBtn = document.getElementById('lightbox-close');
  const closeLightbox = () => {
    overlay.classList.remove('active');
    const vidEl = document.getElementById('lightbox-video');
    if (vidEl) {
      vidEl.pause();
      vidEl.src = '';
    }
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeLightbox();
    }
  });
}

// Global hook to open lightbox directly from any <img>, <video>, or container element in index.html
window.openLightbox = function(target) {
  if (!target) return;
  const mediaEl = target.tagName === 'IMG' || target.tagName === 'VIDEO'
    ? target
    : (target.querySelector('video') || target.querySelector('img'));
  if (!mediaEl) return;

  const isVideo = mediaEl.tagName === 'VIDEO' || (mediaEl.dataset && mediaEl.dataset.video);
  const videoSrc = isVideo ? (mediaEl.dataset.video || mediaEl.currentSrc || mediaEl.src) : null;

  const overlay = document.getElementById('lightbox-modal');
  const imgEl = document.getElementById('lightbox-image');
  const vidEl = document.getElementById('lightbox-video');
  const titleEl = document.getElementById('lightbox-title');
  const captionEl = document.getElementById('lightbox-caption');
  const noteEl = document.getElementById('lightbox-note');
  const metaEl = document.getElementById('lightbox-meta');

  if (isVideo && vidEl && videoSrc) {
    if (imgEl) imgEl.style.display = 'none';
    vidEl.style.display = 'block';
    vidEl.src = videoSrc;
    vidEl.play().catch(() => {});
  } else if (imgEl) {
    if (vidEl) {
      vidEl.pause();
      vidEl.style.display = 'none';
    }
    imgEl.style.display = 'block';
    imgEl.src = mediaEl.src;
    imgEl.alt = mediaEl.alt || 'Memory Frame';
  }
  
  const title = mediaEl.dataset.title || mediaEl.alt || 'Cherished Memory';
  const caption = mediaEl.dataset.caption || '';
  const note = mediaEl.dataset.note || '';
  const meta = mediaEl.dataset.meta || 'THE DIYA EDIT · SPECIAL ARCHIVE';

  if (titleEl) titleEl.textContent = title;
  if (captionEl) captionEl.textContent = caption;
  if (noteEl) noteEl.textContent = note ? (note.startsWith('“') ? note : `“${note}”`) : '';
  if (metaEl) metaEl.textContent = meta;

  if (overlay) overlay.classList.add('active');
};

// Backwards-compatible ID opener
window.openLightboxById = function(id) {
  const item = memoriesArchive.find(m => m.id === id);
  if (!item) return;

  const overlay = document.getElementById('lightbox-modal');
  const imgEl = document.getElementById('lightbox-image');
  const vidEl = document.getElementById('lightbox-video');
  const titleEl = document.getElementById('lightbox-title');
  const captionEl = document.getElementById('lightbox-caption');
  const noteEl = document.getElementById('lightbox-note');
  const metaEl = document.getElementById('lightbox-meta');

  if (vidEl) {
    vidEl.pause();
    vidEl.style.display = 'none';
  }
  if (imgEl) {
    imgEl.style.display = 'block';
    imgEl.src = item.image;
    imgEl.onerror = () => {
      imgEl.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
    };
  }
  if (titleEl) titleEl.textContent = item.title;
  if (captionEl) captionEl.textContent = item.caption;
  if (noteEl) noteEl.textContent = `“${item.note}”`;
  if (metaEl) metaEl.textContent = `${item.categoryLabel} · ${item.date}`;

  if (overlay) overlay.classList.add('active');
};
