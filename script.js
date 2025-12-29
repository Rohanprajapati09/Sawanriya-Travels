// Responsive Navbar Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu on link click (mobile UX)
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === "A") navLinks.classList.remove('open');
});