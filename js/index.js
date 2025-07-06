document.addEventListener("DOMContentLoaded", function () {
  initializeTheme();

  //Tech slider
  const track = document.querySelector('.tech-slider-track');
  if (track) {
    track.innerHTML += track.innerHTML; // Duplicate the images for seamless loop
  }

  //Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-bs-theme', newTheme);

    themeIcon.className = newTheme === 'light' ? 'bi bi-moon-fill' : 'bi bi-sun-fill';

    localStorage.setItem('theme', newTheme);
  });
});

function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const themeIcon = document.getElementById('themeIcon');

  document.documentElement.setAttribute('data-bs-theme', savedTheme);
  themeIcon.className = savedTheme === 'light' ? 'bi bi-moon-fill' : 'bi bi-sun-fill';
}

AOS.init({
    duration: 1000,
    // once: true
});
