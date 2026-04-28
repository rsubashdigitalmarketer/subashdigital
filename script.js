/* ==============================================
   PREMIUM PORTFOLIO — DIGITAL MARKETING SPECIALIST
   Style: Dark Luxury with Gold Accents
   Fonts: Playfair Display + Syne + DM Sans
   ============================================== */

/* ---- CSS VARIABLES ---- */
:root {
  --bg-primary: #08090d;
  --bg-secondary: #0d0f1a;
  --bg-card: #111320;
  --bg-card-hover: #161829;
  --border: rgba(201,170,113,0.15);
  --border-light: rgba(255,255,255,0.06);

  --gold: #c9aa71;
  --gold-light: #e0c890;
  --gold-dark: #a8882f;
  --gold-glow: rgba(201,170,113,0.15);

  --white: #f5f5f5;
  --text-primary: #e8e8f0;
  --text-secondary: #8f90a1;
  --text-muted: #5a5b6e;

  --accent-blue: #3d6eff;
  --accent-blue-glow: rgba(61,110,255,0.2);

  --gradient-gold: linear-gradient(135deg, #c9aa71, #e0c890);
  --gradient-dark: linear-gradient(135deg, #08090d, #0d1117);
  --gradient-card: linear-gradient(135deg, #111320, #0d0f1a);

  --font-display: 'Playfair Display', serif;
  --font-heading: 'Syne', sans-serif;
  --font-body: 'DM Sans', sans-serif;

  --radius: 12px;
  --radius-lg: 20px;
  --radius-xl: 28px;

  --shadow-sm: 0 4px 20px rgba(0,0,0,0.3);
  --shadow-md: 0 8px 40px rgba(0,0,0,0.4);
  --shadow-gold: 0 8px 40px rgba(201,170,113,0.15);
  --shadow-card: 0 2px 30px rgba(0,0,0,0.5);

  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Light Mode */
body.light-mode {
  --bg-primary: #f5f5fa;
  --bg-secondary: #eeeef8;
  --bg-card: #ffffff;
  --bg-card-hover: #f0f0fa;
  --border: rgba(201,170,113,0.3);
  --border-light: rgba(0,0,0,0.08);
  --text-primary: #1a1a2e;
  --text-secondary: #4a4a6a;
  --text-muted: #8888a0;
  --shadow-card: 0 4px 30px rgba(0,0,0,0.1);
}

/* ---- RESET & BASE ---- */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  font-family: var(--font-body);
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
  cursor: none;
}
img { max-width: 100%; height: auto; display: block; }
a { text-decoration: none; color: inherit; }
ul { list-style: none; }
button { border: none; cursor: none; font-family: inherit; }

/* ---- CUSTOM CURSOR ---- */
.cursor-dot {
  width: 6px; height: 6px;
  background: var(--gold);
  border-radius: 50%;
  position: fixed; top: 0; left: 0;
  pointer-events: none; z-index: 9999;
  transform: translate(-50%, -50%);
  transition: transform 0.1s;
}
.cursor-outline {
  width: 32px; height: 32px;
  border: 1.5px solid rgba(201,170,113,0.5);
  border-radius: 50%;
  position: fixed; top: 0; left: 0;
  pointer-events: none; z-index: 9998;
  transform: translate(-50%, -50%);
  transition: transform 0.15s, width 0.3s, height 0.3s, border-color 0.3s;
}
.cursor-outline.hover {
  width: 50px; height: 50px;
  border-color: var(--gold);
  background: rgba(201,170,113,0.05);
}
@media (max-width: 768px) { .cursor-dot, .cursor-outline { display: none; } body { cursor: auto; } button { cursor: pointer; } }

/* ---- PAGE LOADER ---- */
.page-loader {
  position: fixed; inset: 0;
  background: var(--bg-primary);
  display: flex; align-items: center; justify-content: center;
  z-index: 10000;
  transition: opacity 0.5s, visibility 0.5s;
}
.page-loader.hidden { opacity: 0; visibility: hidden; }
.loader-content { text-align: center; }
.loader-logo {
  font-family: var(--font-heading);
  font-size: 3rem; font-weight: 800;
  color: var(--white);
  margin-bottom: 2rem;
  letter-spacing: -2px;
}
.loader-bar {
  width: 200px; height: 2px;
  background: rgba(255,255,255,0.1);
  border-radius: 2px; overflow: hidden;
}
.loader-fill {
  height: 100%;
  background: var(--gradient-gold);
  width: 0%;
  animation: loadBar 1.8s ease forwards;
}
@keyframes loadBar { to { width: 100%; } }

/* ---- GLOBAL ---- */
.container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
.section { padding: 100px 0; }
.gold { color: var(--gold); }
.section-label {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1rem;
  position: relative;
  padding-left: 2rem;
}
.section-label::before {
  content: '';
  position: absolute; left: 0; top: 50%;
  transform: translateY(-50%);
  width: 22px; height: 1px;
  background: var(--gold);
}
.section-header { text-align: center; margin-bottom: 4rem; }
.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.15;
  color: var(--white);
  margin-bottom: 1rem;
}
.section-sub {
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 500px;
  margin: 0 auto;
}

/* ---- BUTTONS ---- */
.btn {
  display: inline-flex; align-items: center; gap: 0.6rem;
  padding: 0.85rem 2rem;
  font-family: var(--font-heading);
  font-size: 0.9rem; font-weight: 600;
  border-radius: 100px;
  transition: var(--transition);
  white-space: nowrap;
  cursor: pointer;
}
.btn-primary {
  background: var(--gradient-gold);
  color: #0d0d0d;
  box-shadow: 0 4px 20px rgba(201,170,113,0.3);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(201,170,113,0.45);
}
.btn-outline {
  background: transparent;
  color: var(--gold);
  border: 1.5px solid var(--gold);
}
.btn-outline:hover {
  background: var(--gold-glow);
  transform: translateY(-2px);
}
.btn-ghost {
  background: rgba(255,255,255,0.05);
  color: var(--text-primary);
  border: 1.5px solid var(--border-light);
}
.btn-ghost:hover { background: rgba(255,255,255,0.1); transform: translateY(-2px); }
.btn-whatsapp { background: #25d366; color: #fff; }
.btn-whatsapp:hover { background: #1da851; transform: translateY(-2px); }
.btn-sm { padding: 0.6rem 1.3rem; font-size: 0.82rem; }
.btn-full { width: 100%; justify-content: center; }

/* ---- NAVBAR ---- */
.navbar {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 1.2rem 0;
  transition: var(--transition);
}
.navbar.scrolled {
  background: rgba(8,9,13,0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  padding: 0.8rem 0;
  box-shadow: var(--shadow-sm);
}
body.light-mode .navbar.scrolled { background: rgba(245,245,250,0.95); }
.nav-container {
  max-width: 1300px; margin: 0 auto; padding: 0 2rem;
  display: flex; align-items: center; justify-content: space-between;
}
.nav-logo {
  font-family: var(--font-heading);
  font-size: 1.8rem; font-weight: 800;
  color: var(--white);
  letter-spacing: -1px;
}
.nav-links {
  display: flex; align-items: center; gap: 0.2rem;
}
.nav-links a {
  font-family: var(--font-heading);
  font-size: 0.85rem; font-weight: 600;
  color: var(--text-secondary);
  padding: 0.5rem 0.9rem;
  border-radius: 100px;
  transition: var(--transition);
  letter-spacing: 0.5px;
}
.nav-links a:hover { color: var(--gold); background: var(--gold-glow); }
.nav-links .nav-cta {
  background: var(--gradient-gold);
  color: #0d0d0d;
  font-weight: 700;
  margin-left: 0.5rem;
  padding: 0.5rem 1.4rem;
}
.nav-links .nav-cta:hover { transform: translateY(-1px); box-shadow: 0 4px 15px rgba(201,170,113,0.4); }
.nav-actions { display: flex; align-items: center; gap: 0.8rem; }
.theme-toggle {
  width: 40px; height: 40px;
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--border-light);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
  transition: var(--transition);
}
.theme-toggle:hover { color: var(--gold); border-color: var(--gold); cursor: pointer; }
.hamburger {
  display: none; flex-direction: column; gap: 5px;
  width: 36px; padding: 4px;
  background: transparent;
}
.hamburger span {
  display: block; height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: var(--transition);
}
.hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

/* ---- HERO ---- */
.hero {
  min-height: 100vh;
  display: flex; align-items: center;
  position: relative;
  overflow: hidden;
  padding: 120px 0 80px;
}
.hero-bg-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(201,170,113,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(201,170,113,0.04) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
}
.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  animation: orbFloat 8s ease-in-out infinite alternate;
}
.orb-1 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(201,170,113,0.08) 0%, transparent 70%);
  top: -100px; right: -100px;
}
.orb-2 {
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(61,110,255,0.06) 0%, transparent 70%);
  bottom: -100px; left: -50px;
  animation-delay: -4s;
}
@keyframes orbFloat {
  from { transform: translate(0, 0) scale(1); }
  to { transform: translate(30px, -30px) scale(1.05); }
}
.hero-container {
  max-width: 1200px; margin: 0 auto; padding: 0 2rem;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 4rem; align-items: center;
}
.hero-badge {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: rgba(201,170,113,0.08);
  border: 1px solid rgba(201,170,113,0.25);
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-family: var(--font-heading);
  font-size: 0.8rem; font-weight: 600;
  color: var(--gold);
  margin-bottom: 1.5rem;
  width: fit-content;
}
.badge-dot {
  width: 8px; height: 8px;
  background: #4ade80;
  border-radius: 50%;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.3); }
}
.hero-name {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 5vw, 5rem);
  font-weight: 900;
  line-height: 1.05;
  color: var(--white);
  margin-bottom: 1rem;
  letter-spacing: -2px;
}
.name-highlight { color: var(--gold); }
.hero-titles {
  font-family: var(--font-heading);
  font-size: 1.2rem; font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  display: flex; align-items: center; gap: 0.3rem;
  flex-wrap: wrap;
}
.typing-wrapper { display: flex; align-items: center; gap: 2px; }
#typingText { color: var(--gold); font-weight: 700; }
.cursor-blink { color: var(--gold); animation: blink 1s infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
.hero-tagline {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-style: italic;
  color: var(--text-primary);
  margin-bottom: 1.2rem;
  line-height: 1.4;
}
.hero-bio {
  font-size: 1rem;
  color: var(--text-secondary);
  max-width: 500px;
  margin-bottom: 2.5rem;
  line-height: 1.8;
}
.hero-ctas { display: flex; gap: 0.8rem; flex-wrap: wrap; margin-bottom: 2rem; }
.hero-socials { display: flex; gap: 0.8rem; }
.social-link {
  width: 42px; height: 42px;
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--border-light);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: var(--text-secondary);
  font-size: 1rem;
  transition: var(--transition);
}
.social-link:hover {
  border-color: var(--gold);
  color: var(--gold);
  background: var(--gold-glow);
  transform: translateY(-3px);
}
.scroll-indicator {
  position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
  font-family: var(--font-heading); font-size: 0.7rem;
  letter-spacing: 3px; text-transform: uppercase;
  color: var(--text-muted);
}
.scroll-line {
  width: 1px; height: 50px;
  background: linear-gradient(to bottom, var(--gold), transparent);
  animation: scrollLine 2s ease-in-out infinite;
}
@keyframes scrollLine {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  51% { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

/* Profile Frame */
.hero-visual { display: flex; justify-content: center; align-items: center; }
.profile-frame {
  position: relative;
  width: 340px;
}
.profile-img-wrap {
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 2px solid var(--border);
  box-shadow: var(--shadow-gold);
  position: relative;
}
.profile-img-wrap::before {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(to bottom, transparent 60%, rgba(8,9,13,0.6));
  z-index: 1;
}
.profile-img { width: 100%; height: 500px; object-fit: cover; }
.profile-badge {
  position: absolute;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.8rem 1rem;
  display: flex; align-items: center; gap: 0.75rem;
  backdrop-filter: blur(10px);
  animation: badgeFloat 4s ease-in-out infinite alternate;
  box-shadow: var(--shadow-sm);
  z-index: 5;
}
.profile-badge i { font-size: 1.4rem; color: var(--gold); }
.profile-badge div { display: flex; flex-direction: column; }
.profile-badge strong { font-family: var(--font-heading); font-size: 1rem; font-weight: 800; color: var(--white); }
.profile-badge span { font-size: 0.72rem; color: var(--text-secondary); }
.badge-top { top: 20px; right: -20px; }
.badge-bottom { bottom: 60px; left: -20px; animation-delay: -2s; }
@keyframes badgeFloat {
  from { transform: translateY(0); }
  to { transform: translateY(-8px); }
}
.floating-tag {
  position: absolute;
  background: var(--gradient-gold);
  color: #0d0d0d;
  font-family: var(--font-heading);
  font-size: 0.75rem; font-weight: 700;
  padding: 0.4rem 0.9rem;
  border-radius: 100px;
  z-index: 5;
}
.tag-1 { bottom: 20px; right: 10px; }
.tag-2 { top: 80px; left: -10px; }

/* ---- ABOUT ---- */
.about-section { background: var(--bg-secondary); }
.about-grid {
  display: grid; grid-template-columns: 1fr 1.4fr;
  gap: 5rem; align-items: center;
}
.about-img-frame {
  position: relative;
  border-radius: var(--radius-xl); overflow: visible;
}
.about-img-frame img {
  width: 100%;
  border-radius: var(--radius-xl);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-gold);
}
.about-exp-badge {
  position: absolute; bottom: -20px; right: -20px;
  background: var(--gradient-gold);
  color: #0d0d0d;
  border-radius: var(--radius);
  padding: 1.2rem 1.5rem;
  text-align: center;
  box-shadow: 0 8px 30px rgba(201,170,113,0.4);
}
.exp-num {
  display: block;
  font-family: var(--font-display);
  font-size: 3rem; font-weight: 900;
  line-height: 1;
}
.exp-label { font-family: var(--font-heading); font-size: 0.72rem; font-weight: 700; line-height: 1.3; }
.about-heading {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 2.5vw, 2.2rem);
  font-weight: 700;
  line-height: 1.3;
  color: var(--white);
  margin-bottom: 1.5rem;
}
.about-text { color: var(--text-secondary); margin-bottom: 1.2rem; line-height: 1.8; }
.about-mission {
  border-left: 3px solid var(--gold);
  padding: 1rem 1.5rem;
  margin: 2rem 0;
  background: var(--gold-glow);
  border-radius: 0 var(--radius) var(--radius) 0;
}
.about-mission blockquote {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.05rem;
  color: var(--gold-light);
  line-height: 1.7;
}
.about-highlights { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem; }
.highlight-item {
  display: flex; align-items: flex-start; gap: 1rem;
  padding: 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius);
  transition: var(--transition);
}
.highlight-item:hover { border-color: var(--border); transform: translateX(4px); }
.highlight-item i { font-size: 1.2rem; margin-top: 2px; }
.highlight-item div { display: flex; flex-direction: column; }
.highlight-item strong { font-family: var(--font-heading); font-size: 0.9rem; color: var(--white); }
.highlight-item span { font-size: 0.85rem; color: var(--text-secondary); }

/* ---- RESULTS ---- */
.results-section { position: relative; overflow: hidden; }
.results-bg {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at 50% 50%, rgba(201,170,113,0.06) 0%, transparent 70%);
}
.counters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}
.counter-card {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 2rem;
  text-align: center;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}
.counter-card::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0;
  height: 2px;
  background: var(--gradient-gold);
  transform: scaleX(0);
  transition: var(--transition);
}
.counter-card:hover { border-color: var(--border); transform: translateY(-6px); box-shadow: var(--shadow-gold); }
.counter-card:hover::before { transform: scaleX(1); }
.counter-icon {
  width: 56px; height: 56px;
  background: var(--gold-glow);
  border: 1px solid rgba(201,170,113,0.25);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.3rem; color: var(--gold);
  margin: 0 auto 1.2rem;
}
.counter-num {
  font-family: var(--font-display);
  font-size: 2.8rem; font-weight: 900;
  color: var(--white);
  line-height: 1;
  margin-bottom: 0.5rem;
}
.counter-num .counter { color: var(--gold); }
.counter-label {
  font-family: var(--font-heading);
  font-size: 0.85rem; font-weight: 700;
  color: var(--white);
  margin-bottom: 0.5rem;
}
.counter-desc { font-size: 0.8rem; color: var(--text-muted); line-height: 1.4; }

/* ---- SKILLS ---- */
.skills-section { background: var(--bg-secondary); }
.skills-categories {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}
.skill-category {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 2rem;
  transition: var(--transition);
}
.skill-category:hover { border-color: var(--border); box-shadow: var(--shadow-card); }
.cat-title {
  font-family: var(--font-heading);
  font-size: 1rem; font-weight: 700;
  color: var(--white);
  margin-bottom: 1.5rem;
  display: flex; align-items: center; gap: 0.6rem;
}
.skill-bars { display: flex; flex-direction: column; gap: 1.2rem; }
.skill-bar-item {}
.skill-info {
  display: flex; justify-content: space-between;
  font-family: var(--font-heading);
  font-size: 0.82rem; font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 0.4rem;
}
.skill-track {
  height: 6px;
  background: rgba(255,255,255,0.06);
  border-radius: 6px;
  overflow: hidden;
}
.skill-fill {
  height: 100%;
  background: var(--gradient-gold);
  border-radius: 6px;
  width: 0%;
  transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.skill-tags {
  display: flex; flex-wrap: wrap; gap: 0.7rem;
  justify-content: center;
}
.skill-tag {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  color: var(--text-secondary);
  font-family: var(--font-heading);
  font-size: 0.8rem; font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  transition: var(--transition);
  display: flex; align-items: center; gap: 0.4rem;
}
.skill-tag:hover { border-color: var(--gold); color: var(--gold); background: var(--gold-glow); }

/* ---- SERVICES ---- */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}
.service-card {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}
.service-card::after {
  content: '';
  position: absolute; bottom: 0; left: 0; right: 0;
  height: 3px;
  background: var(--gradient-gold);
  transform: scaleX(0);
  transform-origin: left;
  transition: var(--transition);
}
.service-card:hover { transform: translateY(-6px); border-color: var(--border); box-shadow: var(--shadow-gold); }
.service-card:hover::after { transform: scaleX(1); }
.service-card.featured {
  border-color: rgba(201,170,113,0.4);
  background: linear-gradient(135deg, rgba(201,170,113,0.05), var(--bg-card));
}
.featured-badge {
  display: inline-block;
  background: var(--gradient-gold);
  color: #0d0d0d;
  font-family: var(--font-heading);
  font-size: 0.7rem; font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0.3rem 0.9rem;
  border-radius: 100px;
  margin-bottom: 1rem;
}
.service-icon {
  width: 60px; height: 60px;
  background: var(--gold-glow);
  border: 1px solid rgba(201,170,113,0.25);
  border-radius: var(--radius);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.5rem; color: var(--gold);
  margin-bottom: 1.5rem;
  transition: var(--transition);
}
.service-card:hover .service-icon { background: var(--gold); color: #0d0d0d; }
.service-card h3 {
  font-family: var(--font-heading);
  font-size: 1.15rem; font-weight: 700;
  color: var(--white);
  margin-bottom: 0.8rem;
}
.service-card p { font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.5rem; line-height: 1.7; }
.service-list { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 2rem; }
.service-list li {
  display: flex; align-items: center; gap: 0.6rem;
  font-size: 0.85rem; color: var(--text-secondary);
}
.service-list .fa-check { color: var(--gold); font-size: 0.7rem; }
.service-cta {
  font-family: var(--font-heading);
  font-size: 0.85rem; font-weight: 700;
  color: var(--gold);
  display: inline-flex; align-items: center; gap: 0.4rem;
  transition: var(--transition);
}
.service-cta:hover { gap: 0.8rem; }

/* ---- PROJECTS ---- */
.projects-section { background: var(--bg-secondary); }
.filter-btns {
  display: flex; gap: 0.6rem; flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 3rem;
}
.filter-btn {
  font-family: var(--font-heading);
  font-size: 0.82rem; font-weight: 700;
  padding: 0.55rem 1.3rem;
  border-radius: 100px;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  color: var(--text-secondary);
  transition: var(--transition);
  cursor: pointer;
}
.filter-btn:hover, .filter-btn.active {
  background: var(--gradient-gold);
  color: #0d0d0d;
  border-color: transparent;
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}
.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 2rem;
  transition: var(--transition-slow);
  overflow: hidden;
}
.project-card:hover {
  border-color: var(--border);
  transform: translateY(-4px);
  box-shadow: var(--shadow-gold);
}
.project-card.hidden { display: none; }
.project-header {
  display: flex; gap: 0.6rem;
  margin-bottom: 1.2rem;
}
.project-category {
  background: var(--gold-glow);
  color: var(--gold);
  border: 1px solid rgba(201,170,113,0.25);
  font-family: var(--font-heading);
  font-size: 0.75rem; font-weight: 700;
  padding: 0.3rem 0.8rem;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.project-industry {
  background: rgba(255,255,255,0.05);
  color: var(--text-muted);
  font-family: var(--font-heading);
  font-size: 0.75rem; font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 100px;
  border: 1px solid var(--border-light);
}
.project-title {
  font-family: var(--font-heading);
  font-size: 1.1rem; font-weight: 700;
  color: var(--white);
  margin-bottom: 0.8rem;
  line-height: 1.4;
}
.project-desc { font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.5rem; line-height: 1.7; }
.project-kpis {
  display: flex; gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(201,170,113,0.04);
  border-radius: var(--radius);
  border: 1px solid rgba(201,170,113,0.1);
}
.kpi { text-align: center; flex: 1; }
.kpi-val {
  display: block;
  font-family: var(--font-display);
  font-size: 1.4rem; font-weight: 800;
  color: var(--gold);
  line-height: 1;
  margin-bottom: 0.25rem;
}
.kpi-key { font-family: var(--font-heading); font-size: 0.7rem; color: var(--text-muted); font-weight: 600; }
.project-tools { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.5rem; }
.project-tools span {
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border-light);
  color: var(--text-muted);
  font-family: var(--font-heading);
  font-size: 0.72rem; font-weight: 600;
  padding: 0.25rem 0.7rem;
  border-radius: 4px;
}
.project-actions { display: flex; gap: 0.7rem; flex-wrap: wrap; }

/* ---- EXPERIENCE ---- */
.timeline { position: relative; padding-left: 2rem; }
.timeline::before {
  content: '';
  position: absolute; left: 0; top: 0; bottom: 0;
  width: 1px;
  background: linear-gradient(to bottom, var(--gold), rgba(201,170,113,0.1));
}
.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--border-light);
}
.timeline-item:last-child { border-bottom: none; padding-bottom: 0; }
.timeline-dot {
  position: absolute; left: -2.4rem; top: 6px;
  width: 16px; height: 16px;
  background: var(--gradient-gold);
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(201,170,113,0.15);
}
.timeline-content {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 2rem;
  transition: var(--transition);
}
.timeline-content:hover { border-color: var(--border); box-shadow: var(--shadow-card); }
.job-header {
  display: flex; justify-content: space-between; align-items: flex-start;
  margin-bottom: 1.2rem;
  flex-wrap: wrap; gap: 0.5rem;
}
.job-title {
  font-family: var(--font-heading);
  font-size: 1.2rem; font-weight: 800;
  color: var(--white);
}
.job-company {
  font-size: 0.9rem; color: var(--gold);
  display: flex; align-items: center; gap: 0.4rem;
  margin-top: 0.25rem;
}
.job-duration {
  font-family: var(--font-heading);
  font-size: 0.8rem; font-weight: 600;
  color: var(--text-muted);
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border-light);
  padding: 0.35rem 0.9rem;
  border-radius: 100px;
  white-space: nowrap;
}
.job-kpis {
  display: flex; flex-wrap: wrap; gap: 0.7rem;
  margin-bottom: 1.2rem;
}
.job-kpis span {
  display: flex; align-items: center; gap: 0.4rem;
  font-family: var(--font-heading);
  font-size: 0.8rem; font-weight: 700;
  color: var(--text-secondary);
  background: rgba(201,170,113,0.05);
  border: 1px solid rgba(201,170,113,0.15);
  padding: 0.35rem 0.9rem;
  border-radius: 100px;
}
.job-responsibilities {
  display: flex; flex-direction: column; gap: 0.6rem;
  padding-left: 0;
}
.job-responsibilities li {
  font-size: 0.9rem; color: var(--text-secondary);
  padding-left: 1.2rem;
  position: relative;
  line-height: 1.6;
}
.job-responsibilities li::before {
  content: '→';
  position: absolute; left: 0;
  color: var(--gold);
  font-size: 0.8rem;
}

/* ---- CERTIFICATIONS ---- */
.certifications-section { background: var(--bg-secondary); }
.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}
.cert-card {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 2rem;
  text-align: center;
  transition: var(--transition);
  position: relative;
}
.cert-card:hover { border-color: var(--border); transform: translateY(-4px); box-shadow: var(--shadow-gold); }
.cert-logo {
  width: 60px; height: 60px;
  background: var(--gold-glow);
  border: 1px solid rgba(201,170,113,0.2);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.8rem; color: var(--gold);
  margin: 0 auto 1rem;
  font-family: var(--font-heading); font-weight: 900;
}
.cert-hubspot { color: #ff7a59; }
.cert-meta { color: #1877f2; }
.cert-semrush { color: #ff6900; }
.cert-ahrefs { color: #ff7c39; }
.cert-card h4 {
  font-family: var(--font-heading);
  font-size: 0.92rem; font-weight: 700;
  color: var(--white);
  margin-bottom: 0.3rem;
}
.cert-card p { font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.8rem; }
.cert-year {
  display: inline-block;
  background: rgba(201,170,113,0.08);
  color: var(--gold);
  font-family: var(--font-heading);
  font-size: 0.72rem; font-weight: 700;
  padding: 0.2rem 0.7rem;
  border-radius: 100px;
  border: 1px solid rgba(201,170,113,0.2);
  margin-bottom: 0.8rem;
}
.cert-verify {
  display: block;
  font-family: var(--font-heading);
  font-size: 0.78rem; font-weight: 600;
  color: var(--text-muted);
  transition: var(--transition);
  display: flex; align-items: center; justify-content: center; gap: 0.3rem;
}
.cert-verify:hover { color: var(--gold); }

/* ---- TOOLS ---- */
.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}
.tool-item {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius);
  padding: 1.5rem 1rem;
  text-align: center;
  transition: var(--transition);
  display: flex; flex-direction: column; align-items: center; gap: 0.7rem;
}
.tool-item:hover { border-color: var(--border); transform: translateY(-3px); box-shadow: var(--shadow-card); }
.tool-item i { font-size: 2rem; color: var(--gold); }
.tool-item span {
  font-family: var(--font-heading);
  font-size: 0.78rem; font-weight: 600;
  color: var(--text-secondary);
}

/* ---- TESTIMONIALS ---- */
.testimonials-section { background: var(--bg-secondary); }
.testimonials-wrapper { position: relative; overflow: hidden; }
.testimonials-track {
  display: flex;
  gap: 1.5rem;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.testimonial-card {
  min-width: calc(50% - 0.75rem);
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  position: relative;
}
@media (max-width: 768px) { .testimonial-card { min-width: 100%; } }
.testi-quote { font-size: 2rem; color: var(--gold); opacity: 0.4; margin-bottom: 1rem; }
.testimonial-card p { font-size: 0.95rem; color: var(--text-secondary); line-height: 1.8; margin-bottom: 1.5rem; font-style: italic; }
.testi-author { display: flex; align-items: center; gap: 1rem; }
.testi-author img { width: 50px; height: 50px; border-radius: 50%; border: 2px solid var(--border); }
.testi-author div:nth-child(2) { flex: 1; }
.testi-author strong { display: block; font-family: var(--font-heading); font-size: 0.9rem; color: var(--white); }
.testi-author span { font-size: 0.8rem; color: var(--text-muted); }
.testi-stars { color: var(--gold); font-size: 0.85rem; letter-spacing: 1px; }
.testi-controls {
  display: flex; align-items: center; justify-content: center;
  gap: 1rem; margin-top: 2rem;
}
.testi-prev, .testi-next {
  width: 44px; height: 44px;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
  transition: var(--transition);
  cursor: pointer;
}
.testi-prev:hover, .testi-next:hover { border-color: var(--gold); color: var(--gold); }
.testi-dots { display: flex; gap: 0.5rem; }
.testi-dot {
  width: 8px; height: 8px;
  background: var(--border);
  border-radius: 50%;
  transition: var(--transition);
  cursor: pointer;
}
.testi-dot.active { background: var(--gold); transform: scale(1.3); }

/* ---- BLOG ---- */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}
.blog-card {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: var(--transition);
}
.blog-card:hover { transform: translateY(-5px); border-color: var(--border); box-shadow: var(--shadow-card); }
.blog-img { overflow: hidden; height: 220px; }
.blog-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.blog-card:hover .blog-img img { transform: scale(1.05); }
.blog-body { padding: 1.5rem; }
.blog-tag {
  display: inline-block;
  background: var(--gold-glow);
  color: var(--gold);
  border: 1px solid rgba(201,170,113,0.25);
  font-family: var(--font-heading);
  font-size: 0.72rem; font-weight: 700;
  padding: 0.25rem 0.8rem;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.8rem;
}
.blog-body h3 { font-family: var(--font-heading); font-size: 1.05rem; font-weight: 700; margin-bottom: 0.7rem; line-height: 1.4; }
.blog-body h3 a { color: var(--white); transition: var(--transition); }
.blog-body h3 a:hover { color: var(--gold); }
.blog-body p { font-size: 0.87rem; color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.7; }
.blog-meta { display: flex; gap: 1rem; font-family: var(--font-heading); font-size: 0.77rem; color: var(--text-muted); }
.blog-meta i { color: var(--gold); }

/* ---- CONTACT ---- */
.contact-section {}
.contact-grid {
  display: grid; grid-template-columns: 1fr 1.2fr;
  gap: 4rem; align-items: start;
}
.contact-info h3 {
  font-family: var(--font-display);
  font-size: 1.8rem; font-weight: 700;
  color: var(--white);
  margin-bottom: 1rem;
}
.contact-info > p { color: var(--text-secondary); margin-bottom: 2rem; line-height: 1.8; }
.contact-details { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem; }
.contact-item {
  display: flex; align-items: center; gap: 1rem;
  padding: 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius);
  transition: var(--transition);
}
.contact-item:hover { border-color: var(--border); transform: translateX(4px); }
.contact-icon {
  width: 44px; height: 44px;
  background: var(--gold-glow);
  border-radius: var(--radius);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; color: var(--gold);
  flex-shrink: 0;
}
.contact-icon.whatsapp { background: rgba(37,211,102,0.1); color: #25d366; }
.contact-icon.linkedin { background: rgba(10,102,194,0.1); color: #0a66c2; }
.contact-item div strong { display: block; font-family: var(--font-heading); font-size: 0.85rem; color: var(--white); }
.contact-item div span { font-size: 0.82rem; color: var(--text-secondary); }
.contact-ctas { display: flex; gap: 0.8rem; flex-wrap: wrap; }
.contact-form-wrap {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
}
.form-group { margin-bottom: 1.3rem; }
.form-group label {
  display: block;
  font-family: var(--font-heading);
  font-size: 0.82rem; font-weight: 700;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
}
.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  background: var(--bg-secondary);
  border: 1px solid var(--border-light);
  border-radius: var(--radius);
  padding: 0.85rem 1rem;
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 0.9rem;
  transition: var(--transition);
  outline: none;
  appearance: none;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--gold);
  box-shadow: 0 0 0 3px rgba(201,170,113,0.1);
}
.form-group input.error,
.form-group textarea.error { border-color: #ef4444; }
.form-error {
  display: none;
  font-size: 0.78rem; color: #ef4444;
  margin-top: 0.35rem;
  font-family: var(--font-heading);
}
.form-error.show { display: block; }
.form-group textarea { resize: vertical; min-height: 130px; }
.form-success {
  display: none;
  align-items: center; gap: 0.6rem;
  background: rgba(74,222,128,0.1);
  border: 1px solid rgba(74,222,128,0.25);
  color: #4ade80;
  padding: 1rem;
  border-radius: var(--radius);
  font-family: var(--font-heading);
  font-size: 0.9rem;
  margin-top: 1rem;
}
.form-success.show { display: flex; }
.form-success i { font-size: 1.2rem; }

/* ---- FOOTER ---- */
.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-light);
  padding: 4rem 0 0;
}
.footer-container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;
  margin-bottom: 3rem;
}
.footer-logo {
  font-family: var(--font-heading);
  font-size: 2rem; font-weight: 800;
  color: var(--white);
  margin-bottom: 1rem;
}
.footer-brand p { font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.5rem; line-height: 1.7; }
.footer-socials { display: flex; gap: 0.7rem; }
.footer-socials a {
  width: 38px; height: 38px;
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--border-light);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: var(--text-muted); font-size: 0.9rem;
  transition: var(--transition);
}
.footer-socials a:hover { color: var(--gold); border-color: var(--gold); background: var(--gold-glow); }
.footer-links h4, .footer-services h4, .footer-cta-box h4 {
  font-family: var(--font-heading);
  font-size: 0.85rem; font-weight: 800;
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1.2rem;
}
.footer-links ul, .footer-services ul { display: flex; flex-direction: column; gap: 0.5rem; }
.footer-links a, .footer-services a {
  font-size: 0.88rem; color: var(--text-muted);
  transition: var(--transition);
}
.footer-links a:hover, .footer-services a:hover { color: var(--gold); padding-left: 4px; }
.footer-cta-box p { font-size: 0.87rem; color: var(--text-secondary); margin-bottom: 1.2rem; }
.footer-cta-box .btn { display: flex; justify-content: center; }
.footer-bottom {
  border-top: 1px solid var(--border-light);
  padding: 1.5rem 0;
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 0.5rem;
}
.footer-bottom p { font-size: 0.82rem; color: var(--text-muted); }
.footer-tagline { font-style: italic; color: var(--gold) !important; }

/* ---- BACK TO TOP ---- */
.back-to-top {
  position: fixed; bottom: 2rem; right: 2rem;
  width: 48px; height: 48px;
  background: var(--gradient-gold);
  color: #0d0d0d;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem;
  box-shadow: 0 4px 20px rgba(201,170,113,0.4);
  opacity: 0; visibility: hidden;
  transition: var(--transition);
  z-index: 500;
  cursor: pointer;
}
.back-to-top.show { opacity: 1; visibility: visible; }
.back-to-top:hover { transform: translateY(-3px); box-shadow: 0 8px 30px rgba(201,170,113,0.5); }

/* ---- REVEAL ANIMATIONS ---- */
[data-reveal] {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
[data-reveal].revealed {
  opacity: 1;
  transform: translateY(0);
}
[data-delay="100"] { transition-delay: 0.1s; }
[data-delay="200"] { transition-delay: 0.2s; }
[data-delay="300"] { transition-delay: 0.3s; }
[data-delay="400"] { transition-delay: 0.4s; }

/* ---- RESPONSIVE ---- */
@media (max-width: 1100px) {
  .hero-container { grid-template-columns: 1fr; text-align: center; }
  .hero-content { align-items: center; display: flex; flex-direction: column; }
  .hero-bio { max-width: 600px; }
  .hero-visual { margin-top: 2rem; }
  .about-grid { grid-template-columns: 1fr; }
  .about-left { max-width: 400px; margin: 0 auto; }
  .footer-top { grid-template-columns: 1fr 1fr; }
  .contact-grid { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .section { padding: 70px 0; }
  .nav-links { display: none; position: fixed; top: 70px; left: 0; right: 0; background: rgba(8,9,13,0.98); backdrop-filter: blur(20px); flex-direction: column; padding: 2rem; gap: 0.5rem; border-bottom: 1px solid var(--border-light); }
  .nav-links.open { display: flex; }
  .hamburger { display: flex; }
  .hero-container { gap: 2rem; }
  .hero-name { letter-spacing: -1px; }
  .hero-ctas { justify-content: center; }
  .hero-socials { justify-content: center; }
  .profile-frame { width: 280px; }
  .profile-img { height: 380px; }
  .footer-top { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; text-align: center; }
  .counters-grid { grid-template-columns: repeat(2, 1fr); }
  .certs-grid { grid-template-columns: repeat(2, 1fr); }
  .timeline { padding-left: 1rem; }
  .timeline-dot { left: -1.4rem; }
  .badge-top { right: 0; }
  .badge-bottom { left: 0; }
  .floating-tag { display: none; }
  .projects-grid { grid-template-columns: 1fr; }
}
@media (max-width: 480px) {
  .hero-ctas { flex-direction: column; align-items: center; }
  .counters-grid { grid-template-columns: 1fr; }
  .certs-grid { grid-template-columns: 1fr; }
  .section-title { font-size: 1.8rem; }
}
