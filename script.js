const body = document.body;
const btn = document.getElementById('toggle-btn');

// Load saved theme preference from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark');
}

// Toggle theme and animate text
btn.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');

  // Save to localStorage
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  // Trigger subtle animation
  animateText();
});

function animateText() {
  const desc = document.querySelector('.description');
  desc.style.opacity = 0;
  setTimeout(() => {
    desc.textContent = `Theme: ${body.classList.contains('dark') ? 'Dark' : 'Light'} mode saved.`;
    desc.style.opacity = 1;
  }, 300);
}
