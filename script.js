// ─── Background Maps ──────────────────────────────────────────────────────
const colorGold        = "#f5c842";
const colorStreetlight = "#a8c8f0";

const maps = [
  // — Light / warm —
  { enabled: false, file: "luling_autumn.svg",        bg: "#fbf7f0", fade: 0.72, text: "#221508", sub: "#9a7a5a", dot: "#c0623a" },
  { enabled: false, file: "luling_warm_beige.svg",    bg: "#f5f0e8", fade: 0.72, text: "#221508", sub: "#8a6a50", dot: "#b85c38" },
  { enabled: false, file: "luling_japanese_ink.svg",  bg: "#faf8f5", fade: 0.72, text: "#1a1a1a", sub: "#888888", dot: "#7a6050" },
  { enabled: false, file: "luling_sunset.svg",        bg: "#fdf5f0", fade: 0.72, text: "#280e08", sub: "#886050", dot: "#c05840" },
  { enabled: false, file: "luling_pastel_dream.svg",  bg: "#faf7f2", fade: 0.72, text: "#1a1a28", sub: "#6a7a8a", dot: "#7090a8" },
  { enabled: false, file: "luling_terracotta.svg",    bg: "#f5ede4", fade: 0.72, text: "#281a10", sub: "#5a7878", dot: "#c06848" },
  { enabled: false, file: "luling_copper_patina.svg", bg: "#e8f0f0", fade: 0.72, text: "#1a2828", sub: "#5a7878", dot: "#6a9898" },
  // — Light / cool —
  { enabled: false, file: "luling_ocean.svg",           bg: "#f0f8fa", fade: 0.72, text: "#0a1e2a", sub: "#3a6878", dot: "#3a8898" },
  { enabled: false, file: "luling_forest.svg",          bg: "#f0f4f0", fade: 0.72, text: "#1a281a", sub: "#5a7870", dot: "#507868" },
  { enabled: false, file: "luling_monochrome_blue.svg", bg: "#f5f8fa", fade: 0.72, text: "#0a1828", sub: "#3a5870", dot: "#4878a0" },
  // — White —
  { enabled: false, file: "luling_contrast_zones.svg",  bg: "#ffffff", fade: 0.78, text: "#1a1a1a", sub: "#888888", dot: "#888888" },
  { enabled: false, file: "luling_feature_based.svg",   bg: "#ffffff", fade: 0.78, text: "#1a1a1a", sub: "#888888", dot: "#888888" },
  { enabled: false, file: "luling_gradient_roads.svg",  bg: "#ffffff", fade: 0.78, text: "#1a1a1a", sub: "#888888", dot: "#888888" },
  // — Dark —
  { enabled: false, file: "luling_blueprint.svg",      bg: "#1a3a5c", fade: 0.68, text: "#e0ecf8", sub: "#6888aa", dot: "#88bcd8" },
  { enabled: false, file: "luling_midnight_blue.svg",  bg: "#0a1628", fade: 0.68, text: "#d8e8f8", sub: "#486888", dot: "#6898c0" },
  { enabled: true,  file: "luling_noir.svg",           bg: "#0a0a0a", fade: 0.68, text: "#e0e0e0", sub: "#a0a0a0", dot: colorGold, trailColor: colorStreetlight },
  { enabled: false, file: "luling_neon_cyberpunk.svg", bg: "#0d0d1a", fade: 0.68, text: "#d8d8f0", sub: "#484860", dot: "#8888c8" },
];

// ─── Font Themes ──────────────────────────────────────────────────────────
const fontThemes = [
  { headingFont: "Georgia, 'Times New Roman', serif",        subFont: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", googleFont: null,                                                                                                           verseTextSize: 1.3 },
  { headingFont: "'Cormorant Garamond', Georgia, serif",     subFont: "'Cormorant Garamond', Georgia, serif",                      googleFont: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap",                        verseTextSize: 1.4 },
  { headingFont: "'Playfair Display', Georgia, serif",       subFont: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", googleFont: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400&display=swap",                            verseTextSize: 1.3 },
  { headingFont: "'Lora', Georgia, serif",                   subFont: "'Lora', Georgia, serif",                                    googleFont: "https://fonts.googleapis.com/css2?family=Lora:wght@400&display=swap",                                          verseTextSize: 1.2 },
  { headingFont: "'EB Garamond', Georgia, serif",            subFont: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", googleFont: "https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400&display=swap",                                  verseTextSize: 1.3 },
  { headingFont: "'Raleway', sans-serif",                    subFont: "'Raleway', sans-serif",                                     googleFont: "https://fonts.googleapis.com/css2?family=Raleway:wght@300;400&display=swap",                                   verseTextSize: 1.2 },
  { headingFont: "'Jost', sans-serif",                       subFont: "'Jost', sans-serif",                                        googleFont: "https://fonts.googleapis.com/css2?family=Jost:wght@300;400&display=swap",                                      verseTextSize: 1.3 },
  { headingFont: "'Nunito', sans-serif",                     subFont: "'Nunito', sans-serif",                                      googleFont: "https://fonts.googleapis.com/css2?family=Nunito:wght@300;400&display=swap",                                    verseTextSize: 1.3 },
  { headingFont: "'Roboto Slab', serif",                     subFont: "'Roboto Slab', serif",                                      googleFont: "https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400&display=swap",                              verseTextSize: 1.2 },
  { headingFont: "'Zilla Slab', serif",                      subFont: "'Zilla Slab', serif",                                       googleFont: "https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@300;400&display=swap",                               verseTextSize: 1.3 },
  { headingFont: "'Arvo', serif",                            subFont: "'Arvo', serif",                                             googleFont: "https://fonts.googleapis.com/css2?family=Arvo:wght@400&display=swap",                                          verseTextSize: 1.2 },
  { headingFont: "'Alfa Slab One', serif",                   subFont: "'Jost', sans-serif",                                        googleFont: "https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Jost:wght@300;400&display=swap",                verseTextSize: 1.3 },
  { headingFont: "'Courier Prime', monospace",               subFont: "'Courier Prime', monospace",                                googleFont: "https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400&display=swap",                                  verseTextSize: 1.2 },
];

// ─── Theme selection ──────────────────────────────────────────────────────
const enabledMaps = maps.filter(m => m.enabled);
const map  = enabledMaps[Math.floor(Math.random() * enabledMaps.length)];
const font = fontThemes[Math.floor(Math.random() * fontThemes.length)];

if (font.googleFont) {
  const link = document.createElement("link");
  link.rel  = "stylesheet";
  link.href = font.googleFont;
  document.head.appendChild(link);
}

// Expose fonts to CSS for body sections
document.documentElement.style.setProperty("--body-font", font.subFont);
document.documentElement.style.setProperty("--heading-font", font.headingFont);

// Dark header background — set on the header, not body, to avoid bleed
const headerEl = document.getElementById("site-header");
headerEl.style.backgroundColor = map.bg;

const mapBg = document.getElementById("map-bg");
const imgLoader = new Image();
imgLoader.onload = () => {
  mapBg.style.backgroundImage = `url('lulingmaps-notext/${map.file}')`;
  mapBg.classList.add("loaded");
};
imgLoader.src = `lulingmaps-notext/${map.file}`;

const overlay = document.getElementById("map-overlay");
overlay.style.background = map.bg;
overlay.style.opacity    = map.fade;

// Apply text colors and fonts to hero content
const heroTagline  = document.querySelector(".tagline");
const heroH1       = document.querySelector("h1");
const heroLocation = document.querySelector(".location");

heroTagline.style.color       = map.text;
heroH1.style.color            = map.text;
heroLocation.style.color      = map.sub;
heroTagline.style.fontFamily  = font.subFont;
heroH1.style.fontFamily       = font.headingFont;
heroLocation.style.fontFamily = font.subFont;


// ─── Locator dot + canvas trail ───────────────────────────────────────────
const SMASHBURGER_MODE    = new URLSearchParams(window.location.search).get("smashburger") === "y";
const VERSE_PANEL_ENABLED = new URLSearchParams(window.location.search).get("verse") === "y";

const TRAIL_ENABLED  = true;
const DRIFT_INTERVAL = 8000;
const TRAIL_RADIUS   = 120;
const FADE_RATE      = 0.004;

const canvas = document.getElementById("light-trail");
const ctx    = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width  = headerEl.offsetWidth;
  canvas.height = headerEl.offsetHeight;
}
resizeCanvas();

new ResizeObserver(resizeCanvas).observe(headerEl);

function hexRgba(hex, alpha) {
  const n = parseInt(hex.replace("#", ""), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}

// ── Trail strategies ──────────────────────────────────────────────────────
const glowTrail = {
  setupDot(dotEl) {
    dotEl.style.backgroundColor = map.dot;
    dotEl.style.color           = map.dot;
  },
  paintTrail(xPct, yPct) {
    if (!map.trailColor) return;
    const x = (xPct / 100) * canvas.width;
    const y = (yPct / 100) * canvas.height;
    const grad = ctx.createRadialGradient(x, y, 0, x, y, TRAIL_RADIUS);
    grad.addColorStop(0,   hexRgba(map.trailColor, 0.38));
    grad.addColorStop(0.4, hexRgba(map.trailColor, 0.16));
    grad.addColorStop(1,   hexRgba(map.trailColor, 0));
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, TRAIL_RADIUS, 0, Math.PI * 2);
    ctx.fill();
  },
  animateTrail() {
    if (!map.trailColor) return;
    const tick = () => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = `rgba(0,0,0,${FADE_RATE})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";
      requestAnimationFrame(tick);
    };
    tick();
  }
};

const smashburgerTrail = {
  setupDot(dotEl) {
    dotEl.style.backgroundColor = "transparent";
    dotEl.style.boxShadow       = "none";
    dotEl.style.width           = "auto";
    dotEl.style.height          = "auto";
    dotEl.style.fontSize        = "1.8rem";
    dotEl.style.lineHeight      = "1";
    dotEl.textContent           = "🍔";
  },
  paintTrail(xPct, yPct) {
    const stamp = document.createElement("div");
    stamp.className   = "burger-stamp";
    stamp.textContent = "🍔";
    stamp.style.left  = `${(xPct / 100) * headerEl.offsetWidth}px`;
    stamp.style.top   = `${(yPct / 100) * headerEl.offsetHeight}px`;
    document.body.appendChild(stamp);
    stamp.addEventListener("animationend", () => stamp.remove());
  },
  animateTrail() {}
};

const trailStrategy = SMASHBURGER_MODE ? smashburgerTrail : glowTrail;
const dot = document.getElementById("locator");
trailStrategy.setupDot(dot);
if (TRAIL_ENABLED) trailStrategy.animateTrail();

let currentX = null, currentY = null;

function moveDot() {
  if (TRAIL_ENABLED && currentX !== null) trailStrategy.paintTrail(currentX, currentY);
  currentX = 20 + Math.random() * 60; // 20–80%
  currentY = 20 + Math.random() * 60; // 20–80%
  dot.style.left = `${currentX}%`;
  dot.style.top  = `${currentY}%`;
  if (VERSE_PANEL_ENABLED) updateVersePanel();
}

// ─── Verse panel ──────────────────────────────────────────────────────────
// Declared before moveDot() is called to avoid a TDZ crash when ?verse=y
const bibleVerses = [
  { text: "Go, therefore, and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe everything I have commanded you. And remember, I am with you always, to the end of the age.", reference: "Matthew 28:19–20" },
  { text: "Christ Jesus came into the world to save sinners.", reference: "1 Timothy 1:15" },
  { text: "For God loved the world in this way: He gave his one and only Son, so that everyone who believes in him will not perish but have eternal life.", reference: "John 3:16" },
  { text: "Light shines in the darkness for the upright. He is gracious, compassionate, and righteous.", reference: "Psalm 112:4" },
  { text: "Everyone who calls on the name of the Lord will be saved.", reference: "Romans 10:13" },
  { text: "For all have sinned and fall short of the glory of God, and all are justified freely by his grace through the redemption that came by Christ Jesus.", reference: "Romans 3:23–24" },
  { text: "\"I am the light of the world. Anyone who follows me will never walk in the darkness but will have the light of life.\" —Jesus", reference: "John 8:12" },
  { text: "If we walk in the light as he himself is in the light, we have fellowship with one another, and the blood of Jesus his Son cleanses us from all sin.", reference: "1 John 1:7" },
  { text: "\"I have come as light into the world, so that everyone who believes in me would not remain in darkness.\" —Jesus", reference: "John 12:46" },
  { text: "You were once darkness, but now you are light in the Lord. Walk as children of light.", reference: "Ephesians 5:8" },
  { text: "\"Whoever hears my word and believes him who sent me has eternal life and will not be judged but has crossed over from death to life.\" —Jesus", reference: "John 5:24" },
  { text: "God has given us eternal life, and this life is in his Son. The one who has the Son has life. The one who does not have the Son of God does not have life.", reference: "1 John 5:11–12" },
  { text: "The people walking in darkness have seen a great light; a light has dawned on those living in the land of darkness.", reference: "Isaiah 9:2" },
  { text: "Your word is a lamp for my feet and a light on my path.", reference: "Psalm 119:105" },
];

const versePanel   = document.querySelector(".verse-panel");
const verseContent = document.querySelector(".verse-content");

if (VERSE_PANEL_ENABLED && versePanel && verseContent) {
  const baseFontSize = parseFloat(getComputedStyle(heroTagline).fontSize);
  const scaledSize   = `${baseFontSize * (font.verseTextSize || 1)}px`;
  versePanel.style.fontFamily   = font.subFont;
  versePanel.style.fontSize     = scaledSize;
  verseContent.style.fontFamily = font.subFont;
  verseContent.style.fontSize   = scaledSize;
  versePanel.style.color        = map.text;
  versePanel.style.borderColor  = map.dot;
  versePanel.style.boxShadow    = `0 0 24px 8px ${hexRgba(map.dot, 0.18)}`;
  versePanel.style.setProperty("--verse-glow-color", hexRgba(map.dot, 0.22));
  versePanel.style.opacity      = "0";
  versePanel.style.transition   = "opacity 0.8s ease";
} else if (!VERSE_PANEL_ENABLED && versePanel) {
  versePanel.style.display = "none";
}

let currentVerseIndex = Math.floor(Math.random() * bibleVerses.length);
let isFirstVerse = true;

function updateVersePanel() {
  if (!VERSE_PANEL_ENABLED || !verseContent) return;
  const verse = bibleVerses[currentVerseIndex];
  if (isFirstVerse) {
    verseContent.innerHTML = `<span>${verse.text}</span><strong>${verse.reference}</strong>`;
    setTimeout(() => {
      versePanel.style.opacity    = "1";
      versePanel.style.transition = "opacity 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease, height 0.5s ease";
    }, 50);
    isFirstVerse = false;
  } else {
    verseContent.classList.add("fade-out");
    setTimeout(() => {
      verseContent.innerHTML = `<span>${verse.text}</span><strong>${verse.reference}</strong>`;
      verseContent.classList.remove("fade-out");
    }, 220);
  }
  currentVerseIndex = (currentVerseIndex + 1) % bibleVerses.length;
}

// Start dot movement after verse panel is fully set up
moveDot();
setInterval(moveDot, DRIFT_INTERVAL);

// ─── Next Gathering config ────────────────────────────────────────────────
// Update date, time, and location each week.
const nextGathering = {
  date:     "Sunday, May 10, 2026",
  time:     "10:00 AM",
  location: "Edgar B. Davis South Side Clubhouse, 1035 S. Magnolia Ave., Luling, TX 78648",
  mapUrl:   "https://maps.google.com/?q=1035+S+Magnolia+Ave+Luling+TX+78648",
};

// ─── Recent Sermon config ─────────────────────────────────────────────────
// Replace TODO_VIDEO_ID with the YouTube video ID (e.g. "dQw4w9WgXcQ").
const recentSermonVideoId = "TODO_VIDEO_ID";

// ─── Dev flags ───────────────────────────────────────────────────────────
// Set DEV_FORCE_STALE_GATHERING = true, or append ?stale=y to the URL.
const DEV_FORCE_STALE_GATHERING =
  false || new URLSearchParams(window.location.search).get("stale") === "y";

// ─── Section content via HTML templates ──────────────────────────────────
function getSectionContent(key) {
  const tmpl = document.getElementById(`tmpl-${key}`);
  if (!tmpl) return null;
  const frag = tmpl.content.cloneNode(true);

  if (key === "worship" && nextGathering._stale) {
    const slot = frag.querySelector(".stale-callout-slot");
    if (slot) {
      const callout = document.createElement("div");
      callout.className = "stale-callout";
      callout.setAttribute("role", "note");
      callout.innerHTML = `<strong>Heads up:</strong> This is the Order of Worship from our previous gathering on ${nextGathering.date}. The upcoming order of worship will be posted soon.`;
      slot.replaceWith(callout);
    }
  } else {
    const slot = frag.querySelector(".stale-callout-slot");
    if (slot) slot.remove();
  }

  return frag;
}

// ─── Content view transition ──────────────────────────────────────────────
const pageBody    = document.getElementById("page-body");
const contentView = document.getElementById("content-view");
const contentBody = document.getElementById("content-body");
const backBtn     = document.getElementById("back-btn");

// Maps hash → section key. Every navigable section must have an entry here.
const hashToSection = {
  "#confession":   "confession",
  "#covenant":     "covenant",
  "#constitution": "constitution",
  "#worship":      "worship",
  "#give":         "give",
};

// Pure DOM transition — no history logic.
function showSection(sectionKey, { focusBack = true } = {}) {
  const frag = getSectionContent(sectionKey);
  if (!frag) return;

  contentBody.replaceChildren(frag);
  document.querySelectorAll(".explore-btn").forEach(b => {
    b.setAttribute("aria-expanded", b.dataset.section === sectionKey ? "true" : "false");
  });

  pageBody.classList.add("fading");
  setTimeout(() => {
    pageBody.hidden = true;
    pageBody.classList.remove("fading");
    contentView.removeAttribute("hidden");
    contentView.getBoundingClientRect();
    contentView.classList.add("visible");
    requestAnimationFrame(() => window.scrollTo(0, 0));
    if (focusBack) backBtn.focus();
  }, 220);
}

function showMainPage() {
  document.querySelectorAll(".explore-btn").forEach(b => b.setAttribute("aria-expanded", "false"));
  contentView.classList.remove("visible");
  setTimeout(() => {
    contentView.setAttribute("hidden", "");
    pageBody.classList.add("fading");
    pageBody.hidden = false;
    pageBody.getBoundingClientRect();
    pageBody.classList.remove("fading");
  }, 220);
}

// User-initiated navigation: update hash (adds browser history entry) then render.
function navigate(sectionKey) {
  const hash = "#" + sectionKey;
  if (window.location.hash.toLowerCase() !== hash) {
    history.pushState(null, "", hash);
  }
  showSection(sectionKey);
}

function navigateHome() {
  history.pushState(null, "", window.location.pathname);
  showMainPage();
}

// Browser back/forward: re-render based on the hash the browser landed on.
window.addEventListener("hashchange", () => {
  const key = hashToSection[window.location.hash.toLowerCase()];
  if (key) {
    showSection(key, { focusBack: false });
  } else {
    showMainPage();
  }
});

// Buttons and links call navigate() directly — no reliance on hashchange.
document.querySelectorAll(".explore-btn").forEach(btn => {
  btn.addEventListener("click", () => navigate(btn.dataset.section));
});

backBtn.addEventListener("click", () => navigateHome());

document.getElementById("return-top-btn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Handle hash present on initial page load (direct URL or page refresh).
const initialKey = hashToSection[window.location.hash.toLowerCase()];
if (initialKey) showSection(initialKey, { focusBack: false });

// ─── Render panels ────────────────────────────────────────────────────────
document.getElementById("gathering-date").textContent     = nextGathering.date;
document.getElementById("gathering-time").textContent     = nextGathering.time;

const locationEl = document.getElementById("gathering-location");
locationEl.textContent = nextGathering.location;
if (nextGathering.mapUrl !== "#") {
  const mapLink = document.createElement("a");
  mapLink.href      = nextGathering.mapUrl;
  mapLink.className = "panel-link";
  mapLink.target    = "_blank";
  mapLink.rel       = "noopener";
  mapLink.textContent = "map";
  locationEl.append(" (", mapLink, ")");
}

// Footer year
document.getElementById("footer-year").textContent = new Date().getFullYear();

// ─── Stale gathering detector ─────────────────────────────────────────────
// If the date in nextGathering is yesterday or older, overlay the panel with
// a notice so visitors know the details are being updated.
(function checkGatheringFreshness() {
  const parsed = new Date(nextGathering.date);
  if (isNaN(parsed.getTime())) return; // unparseable date — skip silently

  // Compare calendar dates only (ignore time-of-day)
  const today     = new Date();
  const gatheringDay = new Date(parsed.getFullYear(), parsed.getMonth(), parsed.getDate());
  const todayDay     = new Date(today.getFullYear(),  today.getMonth(),  today.getDate());

  if (!DEV_FORCE_STALE_GATHERING && gatheringDay >= todayDay) return; // upcoming or today — nothing to do

  // Mark gathering config as stale so the Order of Worship view can pick it up
  nextGathering._stale = true;

  // Overlay the Next Gathering panel
  const panel = document.getElementById("panel-gathering");
  const overlay = document.createElement("div");
  overlay.className   = "panel-stale-overlay";
  overlay.setAttribute("aria-label", "Gathering details being updated");
  overlay.innerHTML   = `<p>We&rsquo;ll post our next gathering details soon.</p>`;
  panel.appendChild(overlay);
})();

// ─── Hash-based deep linking ──────────────────────────────────────────────
const hashSectionMap = {
  "#confession":   "confession",
  "#covenant":     "covenant",
  "#constitution": "constitution",
  "#worship":      "worship",
};

function handleHash(hash, opts = {}) {
  const key = hashSectionMap[hash.toLowerCase()];
  if (key) {
    showSection(key, { ...opts, pushHistory: false });
  } else if (!contentView.hasAttribute("hidden")) {
    showMainPage({ replaceHistory: false });
  }
}

// Handle hash present on initial load
handleHash(window.location.hash, { focusBack: false });

// Handle browser back/forward navigation
window.addEventListener("hashchange", () => handleHash(window.location.hash));

const sermonIframe = document.getElementById("sermon-iframe");
if (recentSermonVideoId !== "TODO_VIDEO_ID") {
  sermonIframe.src = `https://www.youtube.com/embed/${recentSermonVideoId}`;
} else {
  const placeholder = document.createElement("p");
  placeholder.className   = "sermon-placeholder";
  placeholder.textContent = "Sermon video coming soon.";
  sermonIframe.replaceWith(placeholder);
}
