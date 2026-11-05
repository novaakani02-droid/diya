/**
 * ====================================================================
 * THE DIYA EDIT — ISSUE NO. 21
 * FOUR HEARTS: LETTERS & FRIENDSHIP ALBUMS CONTROLLER
 * ====================================================================
 */

import { friendsLetters } from './data/letters.js';

let currentFriendId = 'matilda';

export function initLetters() {
  setupLetterModal();
  setupFriendAlbumModal();
}

function setupLetterModal() {
  const overlay = document.getElementById('letter-modal');
  if (!overlay) return;

  const closeBtn = document.getElementById('modal-close-button');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
    });
  }

  const albumBtn = document.getElementById('modal-album-btn');
  if (albumBtn) {
    albumBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
      window.openFriendAlbum(currentFriendId);
    });
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      overlay.classList.remove('active');
    }
  });
}

function setupFriendAlbumModal() {
  const albumOverlay = document.getElementById('friend-album-modal');
  if (!albumOverlay) return;

  const closeBtn = document.getElementById('friend-album-close-btn');
  const doneBtn = document.getElementById('friend-album-done-btn');
  const switchLetterBtn = document.getElementById('friend-album-switch-letter');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      albumOverlay.classList.remove('active');
    });
  }

  if (doneBtn) {
    doneBtn.addEventListener('click', () => {
      albumOverlay.classList.remove('active');
    });
  }

  if (switchLetterBtn) {
    switchLetterBtn.addEventListener('click', () => {
      albumOverlay.classList.remove('active');
      window.openLetterModal(currentFriendId);
    });
  }

  albumOverlay.addEventListener('click', (e) => {
    if (e.target === albumOverlay) {
      albumOverlay.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && albumOverlay.classList.contains('active')) {
      albumOverlay.classList.remove('active');
    }
  });
}

// Global hook to open letter modal
window.openLetterModal = function(id) {
  const friend = friendsLetters.find(f => f.id === id);
  if (!friend) return;

  currentFriendId = id;

  const overlay = document.getElementById('letter-modal');
  const titleEl = document.getElementById('modal-title');
  const authorEl = document.getElementById('modal-author-name');
  const roleEl = document.getElementById('modal-author-role');
  const avatarEl = document.getElementById('modal-author-avatar');
  const contentEl = document.getElementById('modal-letter-content');

  if (titleEl) titleEl.textContent = friend.title;
  if (authorEl) authorEl.textContent = friend.name;
  if (roleEl) roleEl.textContent = friend.role;
  
  if (avatarEl) {
    // Try reading current avatar src from the card in index.html, else fallback
    const cardAvatar = document.getElementById(`friend-avatar-${id}`);
    avatarEl.src = (cardAvatar && cardAvatar.src) ? cardAvatar.src : friend.image;
    avatarEl.onerror = () => {
      avatarEl.src = friend.image;
    };
  }
  
  if (contentEl) {
    contentEl.innerHTML = friend.letterText
      .split('\n\n')
      .map(p => `<p>${p}</p>`)
      .join('');
  }

  // Close friend album if open
  const albumOverlay = document.getElementById('friend-album-modal');
  if (albumOverlay) albumOverlay.classList.remove('active');

  if (overlay) overlay.classList.add('active');
};

// Global hook to open friend memories album
window.openFriendAlbum = function(id) {
  const friend = friendsLetters.find(f => f.id === id);
  if (!friend) return;

  currentFriendId = id;

  const albumOverlay = document.getElementById('friend-album-modal');
  const nameEl = document.getElementById('friend-album-name');
  const roleEl = document.getElementById('friend-album-role');
  const avatarEl = document.getElementById('friend-album-avatar');
  const quoteEl = document.getElementById('friend-album-quote');

  if (nameEl) nameEl.textContent = `${friend.name} & Diya`;
  if (roleEl) roleEl.textContent = `SHARED MEMORY REEL · ${friend.role.toUpperCase()}`;
  if (quoteEl) quoteEl.textContent = `“${friend.postcardExcerpt}”`;

  if (avatarEl) {
    const cardAvatar = document.getElementById(`friend-avatar-${id}`);
    avatarEl.src = (cardAvatar && cardAvatar.src) ? cardAvatar.src : friend.image;
  }

  // Show only this friend's album panel
  const panels = document.querySelectorAll('.friend-album-panel');
  panels.forEach(panel => {
    panel.style.display = 'none';
  });

  const activePanel = document.getElementById(`album-panel-${id}`);
  if (activePanel) {
    activePanel.style.display = 'block';
  }

  // Close letter modal if open
  const letterOverlay = document.getElementById('letter-modal');
  if (letterOverlay) letterOverlay.classList.remove('active');

  if (albumOverlay) albumOverlay.classList.add('active');
};
