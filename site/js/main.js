/**
 * Snimio Coming Soon — www.snim.io
 * Set WAITLIST_API when Snimio backend endpoint is live.
 */
const CONFIG = {
  waitlistApi: '', // e.g. 'https://api.snim.io/v1/waitlist'
  launchIso: '2026-05-29T09:00:00+02:00',
  timezone: 'Europe/Amsterdam',
};

const STORAGE_LANG = 'snimio-lang';

function initLang() {
  const saved = localStorage.getItem(STORAGE_LANG);
  const lang = saved === 'en' ? 'en' : 'nl';
  document.body.classList.toggle('lang-en', lang === 'en');
  document.documentElement.lang = lang;

  document.querySelectorAll('.lang-toggle button').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
    btn.addEventListener('click', () => {
      const next = btn.dataset.lang;
      localStorage.setItem(STORAGE_LANG, next);
      document.body.classList.toggle('lang-en', next === 'en');
      document.documentElement.lang = next;
      document.querySelectorAll('.lang-toggle button').forEach((b) => {
        b.classList.toggle('is-active', b.dataset.lang === next);
      });
    });
  });
}

function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  document.querySelectorAll('.nav__cta, [data-scroll-cta]').forEach((el) => {
    el.addEventListener('click', (e) => {
      const target = document.getElementById('waitlist');
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
}

function pad(n) {
  return String(n).padStart(2, '0');
}

function initCountdown() {
  const launch = new Date(CONFIG.launchIso).getTime();
  const els = {
    d: document.getElementById('cd-days'),
    h: document.getElementById('cd-hours'),
    m: document.getElementById('cd-mins'),
    s: document.getElementById('cd-secs'),
  };
  if (!els.d) return;

  const tick = () => {
    const now = Date.now();
    let diff = Math.max(0, launch - now);
    const days = Math.floor(diff / 86400000);
    diff -= days * 86400000;
    const hours = Math.floor(diff / 3600000);
    diff -= hours * 3600000;
    const mins = Math.floor(diff / 60000);
    diff -= mins * 60000;
    const secs = Math.floor(diff / 1000);

    els.d.textContent = pad(days);
    els.h.textContent = pad(hours);
    els.m.textContent = pad(mins);
    els.s.textContent = pad(secs);
  };

  tick();
  setInterval(tick, 1000);
}

function initReveal() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nodes = document.querySelectorAll('.reveal');
  if (reduced) {
    nodes.forEach((n) => n.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  nodes.forEach((n) => io.observe(n));
}

function initParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const frames = document.querySelectorAll('[data-parallax]');
  if (!frames.length) return;

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const vh = window.innerHeight;
      frames.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const offset = (center - vh / 2) / vh;
        el.style.transform = `translateY(${offset * -12}px)`;
      });
      ticking = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

async function submitWaitlist(email, consent) {
  if (!CONFIG.waitlistApi) {
    return { ok: true, demo: true };
  }

  const res = await fetch(CONFIG.waitlistApi, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, consent, source: 'coming-soon', locale: document.documentElement.lang }),
  });

  if (!res.ok) {
    const err = new Error('waitlist_failed');
    err.status = res.status;
    throw err;
  }
  return res.json().catch(() => ({}));
}

function initForm() {
  const form = document.getElementById('waitlist-form');
  if (!form) return;

  const errEl = document.getElementById('form-error');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (errEl) errEl.textContent = '';

    const emailInput = form.querySelector('input[type="email"]');
    const consentInput = form.querySelector('input[type="checkbox"]');
    const email = emailInput?.value.trim() ?? '';
    const isEn = document.body.classList.contains('lang-en');

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      if (errEl) {
        errEl.textContent = isEn
          ? 'Please enter a valid email address.'
          : 'Vul een geldig e-mailadres in.';
      }
      return;
    }

    if (!consentInput?.checked) {
      if (errEl) {
        errEl.textContent = isEn
          ? 'Please agree to receive launch updates.'
          : 'Vink het vakje aan om updates te ontvangen.';
      }
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.disabled = true;
      btn.style.opacity = '0.7';
    }

    try {
      await submitWaitlist(email, true);
      sessionStorage.setItem('snimio-waitlist-email', email);
      window.location.href = 'bedankt.html';
    } catch {
      if (errEl) {
        errEl.textContent = isEn
          ? 'Something went wrong. Try again or email hello@snimio.nl.'
          : 'Er ging iets mis. Probeer opnieuw of mail hello@snimio.nl.';
      }
      if (btn) {
        btn.disabled = false;
        btn.style.opacity = '';
      }
    }
  });
}

function init() {
  initLang();
  initNav();
  initCountdown();
  initReveal();
  initParallax();
  initForm();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
