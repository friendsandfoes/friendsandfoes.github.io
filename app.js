const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  html.setAttribute('data-color-mode', savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
  html.setAttribute('data-color-mode', 'light');
}

toggle.addEventListener('click', () => {
  const current = html.getAttribute('data-color-mode');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-color-mode', next);
  localStorage.setItem('theme', next);
});
