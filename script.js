// CURSOR
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a,button,.svc,.mosaic-item,.showcase-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
    cursorRing.classList.add('hover');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    cursorRing.classList.remove('hover');
  });
});

// NAV SCROLL
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

// MOBILE MENU
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.add('open');
});
document.getElementById('mobileClose').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.remove('open');
});
document.querySelectorAll('.mobile-link').forEach(a => {
  a.addEventListener('click', () => document.getElementById('mobileMenu').classList.remove('open'));
});

// SCROLL REVEAL
const srEls = document.querySelectorAll('.sr,.sr-left,.sr-right,.sr-scale');
const srObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
    }
  });
}, { threshold: 0.1 });

srEls.forEach(el => srObs.observe(el));

// PARALLAX HERO
window.addEventListener('scroll', () => {
  const sy = window.scrollY;
  const heroContent = document.getElementById('heroContent');
  const heroBg = document.getElementById('heroBg');

  if (sy < window.innerHeight) {
    heroContent.style.transform = `translateY(${sy * 0.3}px)`;
    heroContent.style.opacity = 1 - (sy / (window.innerHeight * 0.7));
    heroBg.style.transform = `scale(${1 + sy * 0.00005}) translateY(${sy * 0.15}px)`;
  }
});



// FORM SUBMIT
function handleSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  form.style.opacity = '0';
  form.style.transition = 'opacity .4s';

  setTimeout(() => {
    form.style.display = 'none';
    success.style.display = 'block';
    success.style.opacity = '0';
    success.style.transition = 'opacity .5s';
    requestAnimationFrame(() => {
      success.style.opacity = '1';
    });
  }, 400);
}

// TEXT SPLITTING EFFECT FOR HERO TITLE
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
  const lines = heroTitle.querySelectorAll('.line-1, .line-2');
  lines.forEach((line) => {
    line.style.clipPath = 'inset(0 0 0 0)';
  });
}

// SMOOTH ANCHOR SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});



