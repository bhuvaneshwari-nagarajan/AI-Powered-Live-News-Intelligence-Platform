# NewsSphere — AI-Powered Live News Intelligence Platform

> **Frontend Demo** — A premium editorial interface prototype. All content is sample data, not a real news service.

---

## 🚀 How to Run

No build tools or server required for this frontend-only phase.

### Option 1 — Open directly in browser
Double-click `index.html` to open in any modern browser.

### Option 2 — Local development server (recommended)

**Using Python (built-in):**
```bash
# Python 3
python -m http.server 8080
# Then open http://localhost:8080
```

**Using Node.js / npx:**
```bash
npx serve .
# Then open the URL shown in the terminal
```

**Using VS Code:**
Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) and click **Go Live** in the status bar.

---

## 📁 Project Structure

```
AI-Powered-Live-News-Intelligence-Platform/
├── index.html                  # Main homepage
├── css/
│   ├── style.css               # Design tokens, reset, all section styles
│   └── components.css          # Responsive, utility, print styles
├── js/
│   ├── data.js                 # Demo news articles, horoscope, ticker data
│   └── script.js               # All UI interactions and rendering
└── assets/
    ├── favicon.svg             # SVG favicon
    └── images/
        ├── hero-placeholder.svg
        ├── placeholder-world.svg
        ├── placeholder-tech.svg
        ├── placeholder-business.svg
        ├── placeholder-science.svg
        ├── placeholder-sports.svg
        ├── placeholder-generic.svg
        └── card-placeholder-*.svg
```

---

## ✅ Implemented Features

### Design System
- Navy-and-white editorial palette with restrained red accents
- CSS custom properties for consistent theming
- Playfair Display (serif headlines) + Inter (body) + Noto Sans Tamil
- Smooth, reduced-motion-aware transitions
- Responsive desktop, tablet, and mobile layouts
- No JavaScript dependencies — plain HTML/CSS/JS

### Sections Completed
| Section | Status |
|---|---|
| Professional header with globe branding | ✅ |
| Responsive primary navigation (9 items) | ✅ |
| Search bar with live filtering | ✅ |
| English / Tamil language toggle | ✅ |
| Breaking news ticker | ✅ |
| Featured hero with sidebar stories | ✅ |
| AI Intelligence strip | ✅ |
| Latest News grid with category filters | ✅ |
| World News section | ✅ |
| Politics section | ✅ |
| Technology News (horizontal scroll) | ✅ |
| Business + Science split columns | ✅ |
| AI News Intelligence dashboard | ✅ |
| TV preview player (no stream connected) | ✅ |
| Sports scoreboard + news | ✅ |
| Weather (current + 5-day + cities) | ✅ |
| Daily Horoscope — all 12 Rasi | ✅ |
| Professional footer with newsletter | ✅ |

### Interactions
- **Mobile navigation** — hamburger toggle with smooth open/close
- **Search** — live filtering across articles, keyboard accessible
- **Category filters** — instant filter with empty-state handling
- **Language toggle** — full EN/Tamil switch, persists in session
- **Article modal** — full article view, ESC/backdrop close
- **Ticker** — scroll animation with pause/resume
- **Back to top** — appears after scrolling 400px
- **Newsletter** — demo feedback on submission
- **Channel switching** — with demo toast notification
- **Scroll spy** — active nav link updates on scroll
- **Scroll animations** — subtle fade-in on section visibility
- **Load more** — paginated news grid

### Accessibility
- Semantic HTML5 landmarks (`header`, `nav`, `main`, `footer`, `article`, `aside`)
- Skip-to-main-content link
- ARIA labels, `role`, `aria-live`, `aria-expanded`, `aria-current`
- Full keyboard navigation with visible focus rings
- Reduced-motion support via `prefers-reduced-motion`
- `forced-colors` (high contrast) partial support
- Screen reader compatible demo notices

---

## ⚠️ Demo Data Notice

All headlines, articles, scores, weather data, horoscope content, and broadcast references are **sample/demonstration content only**. The platform does **not**:
- Connect to any live news APIs
- Provide real-time data
- Broadcast live video
- Offer verified astrological advice
- Represent real events

Editorial photography is illustrative sample imagery loaded from Unsplash. Local category SVGs are used as image fallbacks; remote photography requires an internet connection.

---

## 🔜 Next Phase (Backend)

When ready to add backend capabilities:

1. **News API integration** — Replace `js/data.js` with real API calls (e.g., NewsAPI, Reuters, IPTC-compliant sources)
2. **Authentication** — User accounts, saved articles, language preferences
3. **Database** — Article storage, search indexing (Elasticsearch recommended)
4. **Live TV** — HLS/DASH video stream integration replacing the player placeholder
5. **Weather API** — OpenWeatherMap or similar
6. **Horoscope API** — Connect verified content source
7. **AI Summarization** — LLM API integration for real AI briefings
8. **Search backend** — Full-text search with relevance ranking
9. **Notifications** — WebSocket for breaking news push

### Suggested Stack
- **Backend**: Node.js/Express or Python/FastAPI
- **Database**: PostgreSQL + Redis cache
- **Search**: Elasticsearch or Typesense
- **CDN**: Cloudflare for assets
- **Hosting**: Vercel/Netlify (frontend) + Railway/Render (backend)

---

## 🌐 Browser Support

Tested / expected to work in:
- Chrome 100+
- Firefox 100+
- Safari 15+
- Edge 100+
- Mobile Chrome / Safari (iOS 15+)

---

*© 2026 NewsSphere — Demo Product. Not a live news service.*
