// ── MOBILE NAV TOGGLE ──
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Close nav when a link is clicked on mobile
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ── ACTIVE NAV LINK ON SCROLL ──
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) {
      current = s.getAttribute('id');
    }
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) {
      a.classList.add('active');
    }
  });
});

// ── CONTACT FORM SUBMIT ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  // Simulate sending (replace with real EmailJS or backend later)
  setTimeout(() => {
    btn.textContent = '✅ Message Sent!';
    btn.style.background = '#059669';
    e.target.reset();
    setTimeout(() => {
      btn.textContent = 'Send Message ✉️';
      btn.style.background = '';
      btn.disabled = false;
    }, 3000);
  }, 1200);
}

// ── ANIMATE SKILL BARS ON SCROLL ──
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => { bar.style.transition = 'width 1s ease'; bar.style.width = width; }, 100);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-grid').forEach(el => skillObserver.observe(el));

// ── FADE IN SECTIONS ON SCROLL ──
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .cert-item, .skill-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  fadeObserver.observe(el);
});
