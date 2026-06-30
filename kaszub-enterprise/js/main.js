document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  document.querySelectorAll('.md-content[data-md]').forEach(loadMarkdown);
});

async function loadMarkdown(el) {
  const filename = el.dataset.md;
  if (!filename) return;

  try {
    const response = await fetch(siteUrl(`content/${filename}`));
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const text = await response.text();
    el.innerHTML = marked.parse(text);
  } catch (err) {
    el.innerHTML = `<p style="color:#c0392b">Nie udało się załadować treści (${filename}). Uruchom lokalny serwer HTTP.</p>`;
    console.error(`Błąd ładowania ${filename}:`, err);
  }
}
