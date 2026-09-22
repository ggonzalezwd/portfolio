// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Dark / light theme toggle
const toggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
  toggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

toggleBtn.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', current);
  localStorage.setItem('theme', current);
  toggleBtn.textContent = current === 'dark' ? '☀️' : '🌙';
});