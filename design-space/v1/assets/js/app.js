// ACOCI homepage — accordion + light carousel scroll

(function () {
  // ===== Events accordion =====
  document.querySelectorAll('.event-item__head').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.event-item');
      const body = item.querySelector('.event-item__body');
      const isOpen = item.classList.contains('event-item--open');

      if (!body) {
        item.classList.toggle('event-item--open');
        btn.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
        return;
      }

      if (isOpen) {
        body.style.height = body.scrollHeight + 'px';
        requestAnimationFrame(() => { body.style.height = '0px'; });
        btn.setAttribute('aria-expanded', 'false');
        body.addEventListener('transitionend', function handler(e) {
          if (e.propertyName !== 'height') return;
          item.classList.remove('event-item--open');
          body.style.height = '';
          body.removeEventListener('transitionend', handler);
        });
      } else {
        item.classList.add('event-item--open');
        const target = body.scrollHeight;
        body.style.height = '0px';
        requestAnimationFrame(() => { body.style.height = target + 'px'; });
        btn.setAttribute('aria-expanded', 'true');
        body.addEventListener('transitionend', function handler(e) {
          if (e.propertyName !== 'height') return;
          body.style.height = 'auto';
          body.removeEventListener('transitionend', handler);
        });
      }
    });
  });

  // ===== Stories carousel — soft scroll on prev/next =====
  const track = document.querySelector('.stories__track');
  const navButtons = document.querySelectorAll('.stories__nav .carousel-btn');

  if (track && navButtons.length) {
    // The grid is full-width on desktop; on smaller viewports we let it scroll.
    // We give the user prev/next that scroll the track horizontally on
    // tablet/mobile, no-op on desktop where everything is already visible.
    const scrollByCard = (dir) => {
      const card = track.querySelector('.story-card');
      if (!card) return;
      const cardWidth = card.getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(track).columnGap || '24');
      const delta = (cardWidth + gap) * (dir === 'next' ? 1 : -1);
      track.scrollBy({ left: delta, behavior: 'smooth' });
    };

    navButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        scrollByCard(btn.dataset.dir);
        navButtons.forEach((b) => b.classList.toggle('carousel-btn--active', b === btn));
      });
    });
  }

  // ===== Smooth-scroll polish for in-page nav links =====
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    const href = a.getAttribute('href');
    if (href.length < 2) return;
    a.addEventListener('click', (e) => {
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const headerOffset = 88;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
