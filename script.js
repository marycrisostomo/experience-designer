// Nothing fancy on purpose — the design does the work.
// This just makes the sticky nav shrink slightly on scroll for a bit of polish.
const nav = document.querySelector('.nav');
let lastY = 0;

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > 40 && lastY <= 40) {
    nav.style.boxShadow = '0 2px 0 rgba(0,0,0,0.08)';
  } else if (y <= 40) {
    nav.style.boxShadow = 'none';
  }
  lastY = y;
});
