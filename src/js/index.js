/* Lightweight interactions — no framework or build step required. */
(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('#navbar');
  const menu = document.querySelector('#nav-menu');
  const navLinks = menu ? Array.from(menu.querySelectorAll('a')) : [];

  const syncHeader = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 12);
  };
  syncHeader();
  window.addEventListener('scroll', syncHeader, { passive: true });

  function closeMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
    header?.classList.remove('menu-open');
  }

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('open', open);
      header?.classList.toggle('menu-open', open);
    });
    navLinks.forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
    document.addEventListener('click', (event) => {
      if (!menu.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 700) closeMenu();
    });
  }

  // Highlight the current section when the homepage is in view.
  if ('IntersectionObserver' in window && window.location.pathname.match(/(?:\/|index\.html)$/)) {
    const sections = document.querySelectorAll('main section[id]');
    const io = new IntersectionObserver((entries) => {
      entries.filter(e => e.isIntersecting).forEach(entry => {
        const activeHash = `#${entry.target.id}`;
        navLinks.forEach(link => {
          const active = link.getAttribute('href') === activeHash;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-30% 0px -55% 0px' });
    sections.forEach(section => io.observe(section));
  }

  // There is no mail server/backend in the original portfolio. Use an honest
  // mailto flow instead of falsely implying the message was sent from the site.
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const name = form.elements.namedItem('name').value.trim();
      const email = form.elements.namedItem('email').value.trim();
      const message = form.elements.namedItem('message').value.trim();
      const subject = encodeURIComponent(`Pesan dari portfolio — ${name}`);
      const body = encodeURIComponent(`${message}\n\n---\nDari: ${name}\nAlamat balasan: ${email}`);
      window.location.href = `mailto:arjunabangka12@gmail.com?subject=${subject}&body=${body}`;
    });
  }
})();
