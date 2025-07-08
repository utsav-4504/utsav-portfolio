const toggleBtn = document.getElementById('themeToggle');

toggleBtn.addEventListener('click', () => {
  const html = document.documentElement;
  html.setAttribute(
    'data-theme',
    html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  );
});

