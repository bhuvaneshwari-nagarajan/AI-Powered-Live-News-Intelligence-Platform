/* ============================================================
   NewsSphere — Main Application Script
   js/script.js — All UI interactions and dynamic rendering
   ============================================================ */

'use strict';

// ── State ────────────────────────────────────────────────────
const state = {
  lang: 'en',
  activeFilter: 'all',
  displayedCount: 6,
  tickerPaused: false,
  modalOpen: false,
};

// ── DOM Helpers ──────────────────────────────────────────────
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

// ── Language Toggle ──────────────────────────────────────────
function initLangToggle() {
  const btn = $('#langToggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    state.lang = state.lang === 'en' ? 'ta' : 'en';
    applyLanguage();
  });
}

function applyLanguage() {
  const body = document.body;
  const enOpt = $('.en-opt');
  const taOpt = $('.ta-opt');
  const btn = $('#langToggle');

  if (state.lang === 'ta') {
    body.classList.remove('lang-en');
    body.classList.add('lang-ta');
    body.setAttribute('lang', 'ta');
    enOpt && enOpt.classList.remove('active');
    taOpt && taOpt.classList.add('active');
    btn && btn.setAttribute('aria-pressed', 'true');

    // Update search placeholder
    const searchInput = $('#searchInput');
    if (searchInput) searchInput.placeholder = 'செய்தி தேடல்…';
  } else {
    body.classList.remove('lang-ta');
    body.classList.add('lang-en');
    body.setAttribute('lang', 'en');
    enOpt && enOpt.classList.add('active');
    taOpt && taOpt.classList.remove('active');
    btn && btn.setAttribute('aria-pressed', 'false');

    const searchInput = $('#searchInput');
    if (searchInput) searchInput.placeholder = 'Search news…';
  }

  // Re-render ticker for language change
  renderTicker();
}

// ── Nav Toggle (Mobile) ──────────────────────────────────────
function initNavToggle() {
  const toggle = $('#navToggle');
  const nav    = $('#primaryNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open', !expanded);
  });

  // Close nav on outside click
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    }
  });

  // Close nav on nav link click (mobile)
  $$('.nav-link', nav).forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 1024) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      }
    });
  });
}

// ── Search Toggle ────────────────────────────────────────────
function initSearch() {
  const toggleBtn = $('#searchToggle');
  const wrapper   = $('#searchBarWrapper');
  const closeBtn  = $('#searchClose');
  const input     = $('#searchInput');
  const form      = $('#searchForm');
  const results   = $('#searchResults');
  if (!toggleBtn || !wrapper) return;

  function openSearch() {
    wrapper.classList.add('open');
    wrapper.setAttribute('aria-hidden', 'false');
    toggleBtn.setAttribute('aria-expanded', 'true');
    input && setTimeout(() => input.focus(), 50);
  }

  function closeSearch() {
    wrapper.classList.remove('open');
    wrapper.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
    if (results) results.innerHTML = '';
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = wrapper.classList.contains('open');
    isOpen ? closeSearch() : openSearch();
  });

  closeBtn && closeBtn.addEventListener('click', closeSearch);

  // ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && wrapper.classList.contains('open')) closeSearch();
  });

  // Live search
  input && input.addEventListener('input', debounce(() => {
    const query = input.value.trim().toLowerCase();
    if (!query) {
      results.innerHTML = '';
      return;
    }
    performSearch(query, results);
  }, 250));

  form && form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = input ? input.value.trim().toLowerCase() : '';
    if (query) performSearch(query, results);
  });
}

function performSearch(query, resultsEl) {
  const matches = NEWS_ARTICLES.filter(article => {
    const titleEn   = article.title.en.toLowerCase();
    const titleTa   = article.title.ta.toLowerCase();
    const summaryEn = article.summary.en.toLowerCase();
    return titleEn.includes(query) || titleTa.includes(query) || summaryEn.includes(query);
  });

  if (matches.length === 0) {
    resultsEl.innerHTML = `<p style="color:var(--text-muted); font-size:var(--fs-sm)">
      ${state.lang === 'ta' ? 'முடிவுகள் எதுவும் இல்லை' : 'No results found'} for "<strong>${escapeHtml(query)}</strong>"
    </p>`;
    return;
  }

  const html = matches.slice(0, 5).map(a => `
    <div class="search-result-item" role="button" tabindex="0"
         style="padding:var(--space-2) 0; border-bottom:1px solid var(--surface-divider); cursor:pointer;"
         data-article-id="${a.id}"
         onclick="openArticleModal(${a.id})"
         onkeydown="if(event.key==='Enter'||event.key===' ')openArticleModal(${a.id})">
      <span class="category-badge ${a.badgeClass}" style="font-size:10px; margin-right:6px;">
        ${state.lang === 'ta' ? a.categoryLabel.ta : a.categoryLabel.en}
      </span>
      <span style="font-size:var(--fs-sm); color:var(--text-primary)">
        ${escapeHtml(state.lang === 'ta' ? a.title.ta : a.title.en)}
      </span>
    </div>
  `).join('');

  resultsEl.innerHTML = `
    <p style="font-size:var(--fs-xs); color:var(--text-muted); margin-bottom:var(--space-2)">
      ${matches.length} ${state.lang === 'ta' ? 'முடிவுகள்' : 'result(s)'} for "${escapeHtml(query)}"
    </p>
    ${html}
  `;
}

// ── Ticker ───────────────────────────────────────────────────
function renderTicker() {
  const container = $('#tickerContent');
  if (!container) return;

  const headlines = TICKER_HEADLINES[state.lang] || TICKER_HEADLINES.en;
  // Duplicate for seamless loop
  const items = [...headlines, ...headlines].map(h => `
    <span class="ticker-item">${escapeHtml(h)}</span>
  `).join('');
  container.innerHTML = items;
}

function initTicker() {
  renderTicker();
  const pauseBtn = $('#tickerPause');
  const ticker   = $('#tickerContent');
  if (!pauseBtn || !ticker) return;

  pauseBtn.addEventListener('click', () => {
    state.tickerPaused = !state.tickerPaused;
    ticker.style.animationPlayState = state.tickerPaused ? 'paused' : 'running';
    pauseBtn.setAttribute('aria-label', state.tickerPaused ? 'Resume ticker' : 'Pause ticker');
    pauseBtn.innerHTML = state.tickerPaused
      ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>'
      : '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>';
  });
}

// ── News Card HTML Builder ───────────────────────────────────
function buildNewsCard(article, variant = 'standard') {
  const title   = state.lang === 'ta' ? article.title.ta   : article.title.en;
  const summary = state.lang === 'ta' ? article.summary.ta : article.summary.en;
  const catName = state.lang === 'ta' ? article.categoryLabel.ta : article.categoryLabel.en;
  const readTime = state.lang === 'ta' ? article.readTime.ta : article.readTime.en;

  const imgSrc = article.image || 'assets/images/placeholder-generic.svg';
  const fallbackSrc = article.category === 'politics'
    ? 'assets/images/placeholder-generic.svg'
    : `assets/images/placeholder-${article.category}.svg`;
  const isFeatured = variant === 'featured';

  return `
    <article
      class="news-card${isFeatured ? ' featured' : ''}"
      tabindex="0"
      role="article"
      data-category="${article.category}"
      data-article-id="${article.id}"
      aria-label="${escapeHtml(title)}"
      onclick="openArticleModal(${article.id})"
      onkeydown="if(event.key==='Enter'||event.key===' ')openArticleModal(${article.id})"
    >
      <div class="card-img-wrap">
        <img
          src="${imgSrc}"
          alt="${escapeHtml(article.imageAlt)}"
          loading="lazy"
          onerror="this.onerror=null; this.src='${fallbackSrc}'"
        />
        <div class="card-category">
          <span class="category-badge ${article.badgeClass}">${escapeHtml(catName)}</span>
        </div>
      </div>
      <div class="card-body">
        <h3 class="card-title">${escapeHtml(title)}</h3>
        <p class="card-summary">${escapeHtml(summary)}</p>
        <div class="card-meta">
          <time class="card-time" datetime="${article.datetime}">${article.date}</time>
          <span class="read-more-link">${readTime}</span>
        </div>
      </div>
    </article>
  `;
}

// ── List News Item ───────────────────────────────────────────
function buildListItem(article) {
  const title   = state.lang === 'ta' ? article.title.ta   : article.title.en;
  const catName = state.lang === 'ta' ? article.categoryLabel.ta : article.categoryLabel.en;
  const fallbackSrc = article.category === 'politics'
    ? 'assets/images/placeholder-generic.svg'
    : `assets/images/placeholder-${article.category}.svg`;

  return `
    <div class="list-news-item" tabindex="0"
         data-article-id="${article.id}"
         onclick="openArticleModal(${article.id})"
         onkeydown="if(event.key==='Enter'||event.key===' ')openArticleModal(${article.id})">
      <div class="list-news-img">
        <img src="${article.image || fallbackSrc}"
             alt="${escapeHtml(article.imageAlt)}" loading="lazy"
             onerror="this.onerror=null; this.src='${fallbackSrc}'"/>
      </div>
      <div class="list-news-body">
        <span class="category-badge ${article.badgeClass}" style="margin-bottom:4px;">${escapeHtml(catName)}</span>
        <p class="list-news-title">${escapeHtml(title)}</p>
        <span class="list-news-meta"><time datetime="${article.datetime}">${article.date}</time></span>
      </div>
    </div>
  `;
}

// ── Render Latest News ───────────────────────────────────────
function renderLatestNews() {
  const grid  = $('#latestNewsGrid');
  const empty = $('#latestEmpty');
  if (!grid) return;

  let filtered = NEWS_ARTICLES;
  if (state.activeFilter !== 'all') {
    filtered = NEWS_ARTICLES.filter(a => a.category === state.activeFilter);
  }

  const visible = filtered.slice(0, state.displayedCount);

  // Load more button visibility
  const loadMore = $('#loadMoreBtn');
  if (loadMore) {
    loadMore.hidden = filtered.length <= state.displayedCount;
  }

  // Empty state
  if (empty) empty.hidden = visible.length > 0;

  if (visible.length === 0) {
    grid.innerHTML = '';
    return;
  }

  grid.innerHTML = visible.map((a, i) =>
    buildNewsCard(a, i === 0 && state.activeFilter === 'all' ? 'featured' : 'standard')
  ).join('');
}

// ── Category Filter ──────────────────────────────────────────
function initCategoryFilter() {
  const buttons = $$('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeFilter = btn.dataset.filter;
      state.displayedCount = 6;
      renderLatestNews();
    });
  });

  const loadMore = $('#loadMoreBtn');
  if (loadMore) {
    loadMore.addEventListener('click', () => {
      state.displayedCount += 6;
      renderLatestNews();
    });
  }
}

// ── Render World News ────────────────────────────────────────
function renderWorldNews() {
  const grid = $('#worldNewsGrid');
  if (!grid) return;

  const worldArticles = NEWS_ARTICLES.filter(a => a.category === 'world').slice(0, 3);
  grid.innerHTML = worldArticles.map((a, i) =>
    buildNewsCard(a, i === 0 ? 'featured' : 'standard')
  ).join('');
}

// ── Render Politics News ─────────────────────────────────────
function renderPoliticsNews() {
  const grid = $('#politicsNewsGrid');
  if (!grid) return;

  const articles = NEWS_ARTICLES.filter(a => a.category === 'politics');
  grid.innerHTML = articles.map(article => buildNewsCard(article)).join('');
}

// ── Render Tech News (horizontal scroll) ────────────────────
function renderTechNews() {
  const grid = $('#techNewsGrid');
  if (!grid) return;

  const techArticles = NEWS_ARTICLES.filter(a => a.category === 'tech').slice(0, 4);
  grid.innerHTML = techArticles.map(a => buildNewsCard(a)).join('');

  // Add scroll hint for mobile
  const hint = document.createElement('p');
  hint.className = 'scroll-hint';
  hint.textContent = state.lang === 'ta' ? '← உருட்டு →' : '← Scroll →';
  grid.parentNode.insertBefore(hint, grid);
}

// ── Render Business News ─────────────────────────────────────
function renderBusinessNews() {
  const list = $('#businessNewsList');
  if (!list) return;

  const articles = NEWS_ARTICLES.filter(a => a.category === 'business').slice(0, 4);
  list.innerHTML = articles.map(buildListItem).join('');
}

// ── Render Science News ──────────────────────────────────────
function renderScienceNews() {
  const list = $('#scienceNewsList');
  if (!list) return;

  const articles = NEWS_ARTICLES.filter(a => a.category === 'science').slice(0, 4);
  list.innerHTML = articles.map(buildListItem).join('');
}

// ── Render Sports News ───────────────────────────────────────
function renderSportsNews() {
  const grid = $('#sportsNewsGrid');
  if (!grid) return;

  const articles = NEWS_ARTICLES.filter(a => a.category === 'sports').slice(0, 4);
  grid.innerHTML = articles.map(a => buildNewsCard(a)).join('');
}

// ── Render Horoscope ─────────────────────────────────────────
function renderHoroscope() {
  const grid = $('#rasiGrid');
  if (!grid) return;

  grid.innerHTML = HOROSCOPE_DATA.map(rasi => {
    const prediction = state.lang === 'ta' ? rasi.predictionTa : rasi.predictionEn;
    const name       = state.lang === 'ta' ? rasi.nameTa       : rasi.nameEn;
    const stars      = Array.from({ length: 5 }, (_, i) =>
      `<span class="star ${i < rasi.stars ? 'filled' : ''}" aria-hidden="true">★</span>`
    ).join('');

    return `
      <div class="rasi-card" style="--rasi-color:${rasi.color}" tabindex="0"
           aria-label="${rasi.nameEn} horoscope demo">
        <div class="rasi-header">
          <span class="rasi-symbol" aria-hidden="true">${rasi.symbol}</span>
          <div class="rasi-name-group">
            <span class="rasi-name-en">${escapeHtml(rasi.nameEn)}</span>
            <span class="rasi-name-ta">${escapeHtml(rasi.nameTa)}</span>
          </div>
        </div>
        <div class="rasi-date-range">${rasi.dateRange}</div>
        <p class="rasi-prediction">${escapeHtml(prediction)}</p>
        <div class="rasi-rating" role="img" aria-label="${rasi.stars} out of 5 stars (demo)">
          ${stars}
        </div>
      </div>
    `;
  }).join('');
}

// ── Article Modal ────────────────────────────────────────────
function openArticleModal(articleId) {
  const article = NEWS_ARTICLES.find(a => a.id === articleId);
  if (!article) return;

  const modal   = $('#articleModal');
  const content = $('#modalContent');
  if (!modal || !content) return;

  const title   = state.lang === 'ta' ? article.title.ta   : article.title.en;
  const body    = state.lang === 'ta' ? article.body.ta     : article.body.en;
  const catName = state.lang === 'ta' ? article.categoryLabel.ta : article.categoryLabel.en;
  const readTime = state.lang === 'ta' ? article.readTime.ta : article.readTime.en;
  const fallbackSrc = article.category === 'politics'
    ? 'assets/images/placeholder-generic.svg'
    : `assets/images/placeholder-${article.category}.svg`;

  content.innerHTML = `
    <div class="modal-category">
      <span class="category-badge ${article.badgeClass}">${escapeHtml(catName)}</span>
    </div>
    <h2 class="modal-headline" id="modalTitle">${escapeHtml(title)}</h2>
    <div class="modal-meta">
      <time datetime="${article.datetime}">${article.date}</time>
      <span>${readTime}</span>
      <span>${state.lang === 'ta' ? 'மாதிரி தலையங்க குழு' : 'Demo Editorial Team'}</span>
    </div>
    <img
      src="${article.image || 'assets/images/placeholder-generic.svg'}"
      alt="${escapeHtml(article.imageAlt)}"
      class="modal-hero-img"
      loading="lazy"
      onerror="this.onerror=null; this.src='${fallbackSrc}'"
    />
    <div class="modal-body">
      ${body.split('\n\n').map(p => p.trim() ? `<p>${escapeHtml(p.trim())}</p>` : '').join('')}
    </div>
    <div class="modal-demo-note">
      ⚠ ${state.lang === 'ta'
        ? 'இது மாதிரி உள்ளடக்கம். இந்தக் கட்டுரை உண்மையான நிகழ்வுகளை குறிக்கவில்லை மற்றும் சரிபார்க்கப்பட்ட தகவல் அல்ல.'
        : 'This is demo content. This article does not represent real events and is not verified reporting.'}
    </div>
  `;

  modal.hidden = false;
  modal.removeAttribute('hidden');
  state.modalOpen = true;
  document.body.style.overflow = 'hidden';

  // Focus management
  const closeBtn = $('#modalClose');
  closeBtn && closeBtn.focus();
}

function closeArticleModal() {
  const modal = $('#articleModal');
  if (!modal) return;

  modal.hidden = true;
  modal.setAttribute('hidden', '');
  state.modalOpen = false;
  document.body.style.overflow = '';
}

function initModal() {
  const modal    = $('#articleModal');
  const closeBtn = $('#modalClose');

  if (closeBtn) closeBtn.addEventListener('click', closeArticleModal);

  // Close on overlay click
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeArticleModal();
    });
  }

  // ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.modalOpen) closeArticleModal();
  });

  // Hero section read-more buttons
  $$('[data-article-id]').forEach(el => {
    if (el.classList.contains('read-more-btn')) {
      el.addEventListener('click', () => {
        const id = parseInt(el.dataset.articleId, 10);
        openArticleModal(id);
      });
    }
  });

  // Hero card click
  $$('.hero-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.articleId, 10);
      if (id) openArticleModal(id);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const id = parseInt(card.dataset.articleId, 10);
        if (id) openArticleModal(id);
      }
    });
  });
}

// ── Back to Top ──────────────────────────────────────────────
function initBackToTop() {
  const btn = $('#backToTop');
  if (!btn) return;

  function updateVisibility() {
    const shouldShow = window.scrollY > 400;
    btn.hidden = !shouldShow;
  }

  window.addEventListener('scroll', throttle(updateVisibility, 200), { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Active Nav Link on Scroll ────────────────────────────────
function initScrollSpy() {
  const sections = $$('[id]').filter(el => el.tagName !== 'INPUT');
  const navLinks = $$('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const sectionHrefs = navLinks
    .map(a => a.getAttribute('href'))
    .filter(h => h && h.startsWith('#'));

  function onScroll() {
    let currentId = '';
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < 120) currentId = '#' + section.id;
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === currentId);
      if (href === currentId) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  window.addEventListener('scroll', throttle(onScroll, 150), { passive: true });
}

// ── Smooth scroll for anchor links ───────────────────────────
function initSmoothScroll() {
  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const headerH = document.querySelector('.site-header')?.offsetHeight || 110;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ── Newsletter form ───────────────────────────────────────────
function handleNewsletterSubmit(event) {
  event.preventDefault();
  const form     = event.target;
  const feedback = $('#nlFeedback');
  const input    = form.querySelector('input[type="email"]');
  const email    = input ? input.value : '';

  if (feedback) {
    feedback.textContent = state.lang === 'ta'
      ? `மாதிரி: ${email} பதிவு செய்யப்பட்டது! (ஆர்ப்பாட்டம் மட்டுமே)`
      : `Demo: ${email} subscribed! (Demonstration only)`;
  }

  showToast(
    state.lang === 'ta'
      ? 'நன்றி! (மாதிரி பதில்)'
      : 'Thanks! (Demo response)',
    'success'
  );

  form.reset();
}

// Make function global for inline HTML handler
window.handleNewsletterSubmit = handleNewsletterSubmit;

// ── Toast ─────────────────────────────────────────────────────
function showToast(message, type = '') {
  const existing = $('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast${type ? ' ' + type : ''}`;
  toast.textContent = message;
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'assertive');
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add('show'));
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ── Channel list interactivity ───────────────────────────────
function initChannels() {
  const items = $$('.channel-item');
  items.forEach(item => {
    function activate() {
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      showToast(
        state.lang === 'ta'
          ? 'நேரடி ஒளிபரப்பு விரைவில் கிடைக்கும் (மாதிரி)'
          : 'Live channel coming soon (demo)',
        ''
      );
    }
    item.addEventListener('click', activate);
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') activate();
    });
  });
}

// ── Intersection Observer for fade-in ───────────────────────
function initAnimations() {
  if (!('IntersectionObserver' in window)) return;

  const style = document.createElement('style');
  style.textContent = `
    .fade-in { opacity: 0; transform: translateY(16px); transition: opacity 0.5s ease, transform 0.5s ease; }
    .fade-in.visible { opacity: 1; transform: translateY(0); }
    @media (prefers-reduced-motion: reduce) {
      .fade-in { opacity: 1; transform: none; transition: none; }
    }
  `;
  document.head.appendChild(style);

  const targets = $$('.news-section, .ai-section, .live-section, .weather-section, .horoscope-section');
  targets.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });

  targets.forEach(el => observer.observe(el));
}

// ── Utility: debounce ─────────────────────────────────────────
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// ── Utility: throttle ────────────────────────────────────────
function throttle(fn, limit) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// ── Utility: escape HTML ─────────────────────────────────────
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Make openArticleModal global for inline handlers
window.openArticleModal = openArticleModal;

// ── Init ──────────────────────────────────────────────────────
function init() {
  // Language
  initLangToggle();

  // Navigation
  initNavToggle();
  initSmoothScroll();
  initScrollSpy();

  // Search
  initSearch();

  // Ticker
  initTicker();

  // Dynamic content
  renderLatestNews();
  renderWorldNews();
  renderPoliticsNews();
  renderTechNews();
  renderBusinessNews();
  renderScienceNews();
  renderSportsNews();
  renderHoroscope();

  // Category filters
  initCategoryFilter();

  // Modal
  initModal();

  // UI
  initBackToTop();
  initChannels();
  initAnimations();

  console.info('NewsSphere initialized — Demo platform. All content is sample data.');
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
