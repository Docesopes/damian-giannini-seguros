document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Floating WhatsApp button (injected so it appears on every blog page) ----
  if (!document.querySelector('.wa-float')) {
    const waLink = document.createElement('a');
    waLink.className = 'wa-float';
    waLink.href = 'https://wa.me/5491136411895?text=Hola%20Dami%C3%A1n%2C%20quiero%20consultar%20sobre%20un%20seguro';
    waLink.target = '_blank';
    waLink.rel = 'noopener';
    waLink.setAttribute('aria-label', 'Escribir por WhatsApp');
    waLink.innerHTML = '<svg viewBox="0 0 32 32" fill="#fff"><path d="M16.02 2.67c-7.36 0-13.33 5.97-13.33 13.33 0 2.35.62 4.64 1.79 6.66L2.7 29.33l6.86-1.8a13.26 13.26 0 0 0 6.46 1.65h.01c7.36 0 13.33-5.97 13.33-13.33S23.38 2.67 16.02 2.67Zm0 24.4h-.01a11.1 11.1 0 0 1-5.66-1.55l-.4-.24-4.07 1.07 1.09-3.97-.26-.41a11.07 11.07 0 0 1-1.7-5.9c0-6.13 4.99-11.12 11.13-11.12 2.97 0 5.76 1.16 7.86 3.26a11.05 11.05 0 0 1 3.26 7.87c0 6.13-5 11.12-11.14 11.12Zm6.1-8.33c-.33-.17-1.96-.97-2.27-1.08-.3-.11-.53-.17-.75.17-.22.33-.86 1.08-1.06 1.3-.2.22-.39.25-.72.08-.33-.17-1.4-.51-2.66-1.63-.98-.87-1.65-1.95-1.84-2.28-.19-.33-.02-.5.15-.67.15-.15.33-.39.5-.58.16-.2.22-.33.33-.56.11-.22.06-.42-.03-.58-.08-.17-.75-1.8-1.03-2.47-.27-.65-.55-.56-.75-.57l-.64-.01c-.22 0-.58.08-.88.42-.3.33-1.15 1.13-1.15 2.75 0 1.63 1.18 3.2 1.34 3.42.16.22 2.32 3.55 5.63 4.97.79.34 1.4.55 1.88.7.79.25 1.51.21 2.08.13.63-.09 1.96-.8 2.24-1.57.28-.77.28-1.43.19-1.57-.08-.14-.3-.22-.63-.39Z"/></svg>';
    document.body.appendChild(waLink);
  }

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const setTheme = (dark) => {
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
      localStorage.setItem('dg-theme', dark ? 'dark' : 'light');
      themeToggle.setAttribute('aria-label', dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    };
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      setTheme(!isDark);
    });
  }
});
