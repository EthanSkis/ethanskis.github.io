/* ── Global Header JS ── */
function toggleTheme() {
  var isLight = document.documentElement.getAttribute('data-theme') === 'light';
  var next = isLight ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  var icon = next === 'light' ? '\u263E' : '\u2600';
  document.querySelectorAll('#themeToggle').forEach(function(el) { el.textContent = icon; });
  localStorage.setItem('site-theme', next);
  document.dispatchEvent(new CustomEvent('themechange', { detail: { theme: next } }));
}

function toggleMenu(e) {
  e.stopPropagation();
  document.getElementById('navMenu').classList.toggle('open');
}

document.addEventListener('click', function(e) {
  var menu = document.getElementById('navMenu');
  var btn = document.querySelector('.menu-btn');
  if (menu && btn && !menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove('open');
  }
});

(function initTheme() {
  var saved = localStorage.getItem('site-theme');
  var theme = saved !== null ? saved : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  var icon = theme === 'light' ? '\u263E' : '\u2600';
  document.querySelectorAll('#themeToggle').forEach(function(el) { el.textContent = icon; });
})();
