// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Animate skill bars on scroll
const skillLevels = document.querySelectorAll('.skill-level');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.8;
  skillLevels.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    if (skillTop < triggerBottom) {
      skill.style.width = skill.getAttribute('data-level');
    }
  });
});

// Light/Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const icon = themeToggle.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});
