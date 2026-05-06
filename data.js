// ─────────────────────────────────────────────────────────────────────────────
// Site configuration — edit this file each week to update the site.
// ─────────────────────────────────────────────────────────────────────────────

// ─── Social links ─────────────────────────────────────────────────────────────
const facebookUrl      = "https://www.facebook.com/truthchurchtx";
const youtubeChannelUrl = "https://www.youtube.com/@TruthChurchTexas";

// ─── Recent Sermon ────────────────────────────────────────────────────────────
// Replace with the YouTube video ID (e.g. "dQw4w9WgXcQ"). Set to null to show placeholder.
const recentSermonVideoId = null;

// ─── Known Locations ──────────────────────────────────────────────────────────
// Each entry: { address, mapUrl }
const locations = {
  southsideClubhouse: {
    location: "Edgar B. Davis South Side Clubhouse, 1035 S. Magnolia Ave., Luling, TX 78648",
    mapUrl:   "https://maps.google.com/?q=1035+S+Magnolia+Ave+Luling+TX+78648",
  },
  northsideClubhouse: {
    location: "Edgar B. Davis North Side Clubhouse, 300 Trinity St., Luling, TX 78648",
    mapUrl:   "https://maps.google.com/?q=300+Trinity+St+Luling+TX+78648",
  },
};

// ─── Next Gathering ───────────────────────────────────────────────────────────
const nextGathering = {
  date:     "Sunday, May 10, 2026",
  time:     "10:00 AM",
  ...locations.southsideClubhouse,

  // Each item: { name, title?, bibleRef?, person? }
  // name     — the bold label (e.g. "Sermon", "Song", "Welcome")
  // title    — song or sermon title; rendered in double quotes automatically
  // bibleRef — scripture reference (e.g. "Matthew 15:1–9")
  // person   — who is leading this item; shown right-aligned
  orderOfWorship: [
    { name: "Welcome",                                                                person: "Eric" },
    { name: "Call to Worship",                                                        person: "Walter" },
    { name: "Prayer of Adoration" },
    { name: "Song",   title: "TBD" },
    { name: "Song",   title: "TBD" },
    { name: "Song",   title: "TBD" },
    { name: "Prayer of Confession" },
    { name: "Sermon", title: "Tradition vs. Scripture", bibleRef: "Matthew 15:1–9", person: "Eric" },
    { name: "Prayer of Thanksgiving" },
    { name: "Song",   title: "TBD",                                                   person: "Walter" },
    { name: "Corporate Prayer",                                                       person: "Eric" },
    { name: "Ordination of Pastor Eric",                                              person: "Joshua, Walter, Joey" },
    { name: "Dismissal" },
  ],
};

// ─── Dev flags ────────────────────────────────────────────────────────────────
// These can also be toggled via URL query params without editing this file:
//   ?stale=y        force the stale gathering overlay
//   ?smashburger=y  enable smashburger trail mode
const DEV_FORCE_STALE_GATHERING = false;
const DEV_SMASHBURGER           = false;
