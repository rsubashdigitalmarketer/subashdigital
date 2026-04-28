/* ==============================================
   PREMIUM PORTFOLIO — script.js
   Features: Loader, Cursor, Nav, Typing,
   Counters, Skill Bars, Filter, Slider,
   Scroll Reveal, Form Validation, Back-to-Top
   ============================================== */

/* ---- PAGE LOADER ---- */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('pageLoader');
    if (loader) {
      loader.classList.add('hidden');
      // Trigger initial reveals after loader hides
      triggerReveal();
    }
  }, 2000);
});

/* ---- CUSTOM CURSOR ---- */
const cursorDot = document.getElementById('cursorDot');
const cursorOutline = document.getElementById('cursorOutline');

if (cursorDot && cursorOutline) {
  let mouseX = 0, mouseY = 0;
  let outlineX = 0, outlineY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
  });

  function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.12;
    outlineY += (mouseY - outlineY) * 0.12;
    cursorOutline.style.left = outlineX + 'px';
    cursorOutline.style.top = outlineY + 'px';
    requestAnimationFrame(animateOutline);
  }
  animateOutline();

  // Hover effect
  const hoverTargets = document.querySelectorAll('a, button, .btn, .service-card, .project-card, .filter-btn, .tool-item');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => cursorOutline.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hover'));
  });
}

/* ---- NAVBAR ---- */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Active nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});

/* ---- TYPING ANIMATION ---- */
const typingEl = document.getElementById('typingText');
const phrases = [
  'Digital Marketing Specialist',
  'SEO Expert',
  'Performance Marketer',
  'Google Ads Manager',
  'Content Strategist',
  'Growth Hacker'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 80;

function typeText() {
  if (!typingEl) return;
  const current = phrases[phraseIndex];

  if (isDeleting) {
    typingEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 40;
  } else {
    typingEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 80;
  }

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    typingSpeed = 1800; // pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingSpeed = 400;
  }

  setTimeout(typeText, typingSpeed);
}
setTimeout(typeText, 1500);

/* ---- SCROLL REVEAL ---- */
function triggerReveal() {
  const revealEls = document.querySelectorAll('[data-reveal]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Trigger skill bars when skill section reveals
        if (entry.target.classList.contains('skill-category')) {
          animateSkillBars(entry.target);
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  revealEls.forEach(el => observer.observe(el));
}
triggerReveal();

/* ---- COUNTER ANIMATION ---- */
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString();
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('.counter');
      counters.forEach(counter => animateCounter(counter));
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const resultsSection = document.getElementById('results');
if (resultsSection) counterObserver.observe(resultsSection);

/* ---- SKILL BARS ---- */
function animateSkillBars(container) {
  const fills = container.querySelectorAll('.skill-fill');
  fills.forEach(fill => {
    const width = fill.getAttribute('data-width');
    setTimeout(() => {
      fill.style.width = width + '%';
    }, 200);
  });
}

/* ---- PROJECT FILTER ---- */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        card.classList.remove('hidden');
        // Re-trigger reveal animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
          card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        }, 50);
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/* ---- TESTIMONIAL SLIDER ---- */
const track = document.getElementById('testimonialsTrack');
const prevBtn = document.getElementById('testiPrev');
const nextBtn = document.getElementById('testiNext');
const dotsContainer = document.getElementById('testiDots');

let currentSlide = 0;
const cards = track ? track.querySelectorAll('.testimonial-card') : [];
const totalSlides = Math.ceil(cards.length / 2);
let isMobile = window.innerWidth <= 768;
const visibleCards = isMobile ? 1 : 2;
const maxSlide = cards.length - visibleCards;

// Create dots
if (dotsContainer) {
  for (let i = 0; i <= maxSlide; i++) {
    const dot = document.createElement('div');
    dot.classList.add('testi-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
}

function goToSlide(index) {
  if (!track) return;
  currentSlide = Math.max(0, Math.min(index, maxSlide));
  const cardWidth = cards[0] ? cards[0].offsetWidth + 24 : 0; // includes gap
  track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;

  // Update dots
  document.querySelectorAll('.testi-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

// Auto-play slider
let sliderTimer = setInterval(() => goToSlide(currentSlide < maxSlide ? currentSlide + 1 : 0), 5000);

if (track) {
  track.addEventListener('mouseenter', () => clearInterval(sliderTimer));
  track.addEventListener('mouseleave', () => {
    sliderTimer = setInterval(() => goToSlide(currentSlide < maxSlide ? currentSlide + 1 : 0), 5000);
  });
}

// Touch swipe for slider
let touchStartX = 0;
if (track) {
  track.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goToSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1);
  });
}

/* ---- CONTACT FORM VALIDATION ---- */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const msgError = document.getElementById('msgError');

    // Reset errors
    [name, email, message].forEach(f => f.classList.remove('error'));
    [nameError, emailError, msgError].forEach(e => e.classList.remove('show'));

    // Validate name
    if (!name.value.trim() || name.value.trim().length < 2) {
      name.classList.add('error');
      nameError.classList.add('show');
      valid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
      email.classList.add('error');
      emailError.classList.add('show');
      valid = false;
    }

    // Validate message
    if (!message.value.trim() || message.value.trim().length < 10) {
      message.classList.add('error');
      msgError.classList.add('show');
      valid = false;
    }

    if (valid) {
      const submitBtn = document.getElementById('submitBtn');
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      // Simulate form submission (replace with real backend/EmailJS)
      setTimeout(() => {
        document.getElementById('formSuccess').classList.add('show');
        contactForm.reset();
        submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
        submitBtn.disabled = false;
        // Hide success after 5s
        setTimeout(() => document.getElementById('formSuccess').classList.remove('show'), 5000);
      }, 1500);
    }
  });

  // Real-time validation clear
  ['name', 'email', 'message'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', () => {
      el.classList.remove('error');
      const errEl = document.getElementById(id === 'message' ? 'msgError' : id + 'Error');
      if (errEl) errEl.classList.remove('show');
    });
  });
}

/* ---- THEME TOGGLE ---- */
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

const savedTheme = localStorage.getItem('portfolioTheme');
if (savedTheme === 'light') {
  document.body.classList.add('light-mode');
  if (themeIcon) { themeIcon.classList.remove('fa-moon'); themeIcon.classList.add('fa-sun'); }
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('portfolioTheme', isLight ? 'light' : 'dark');
    if (themeIcon) {
      themeIcon.classList.toggle('fa-moon', !isLight);
      themeIcon.classList.toggle('fa-sun', isLight);
    }
  });
}

/* ---- BACK TO TOP ---- */
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---- SMOOTH SCROLL FOR ALL ANCHORS ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ---- NAVBAR ACTIVE LINK STYLE ---- */
// Inject active link style
const style = document.createElement('style');
style.textContent = `.nav-links a.active { color: var(--gold) !important; }`;
document.head.appendChild(style);

/* ---- RESIZE HANDLER ---- */
window.addEventListener('resize', () => {
  const newIsMobile = window.innerWidth <= 768;
  if (newIsMobile !== isMobile) {
    isMobile = newIsMobile;
    goToSlide(0);
  }
});

/* ---- PARALLAX HERO ORBS (subtle) ---- */
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const orb1 = document.querySelector('.orb-1');
  const orb2 = document.querySelector('.orb-2');
  if (orb1) orb1.style.transform = `translateY(${scrollY * 0.1}px)`;
  if (orb2) orb2.style.transform = `translateY(${-scrollY * 0.08}px)`;
});

/* ---- CONSOLE BRANDING ---- */
console.log('%c👋 Hey Recruiter!', 'font-size:22px; color:#c9aa71; font-weight:bold;');
console.log('%cThis portfolio was hand-crafted with premium HTML/CSS/JS.', 'font-size:14px; color:#8f90a1;');
console.log('%cInterested in hiring? Head to the Contact section! 🚀', 'font-size:14px; color:#c9aa71;');
