# Projects Section — Design Spec
**Date:** 2026-03-24

## Summary

Add a Projects section to the homepage (`pages/index.js`) showcasing 4 projects, with one hidden until complete.

## Projects Data

| Project | URL | One-liner | Visible |
|---|---|---|---|
| Concept Atlas | https://ahmedsliman.github.io/concept-atlas/ | Interactive visual explorer for DDD concepts and software design patterns. | Yes |
| Wordle DE | https://ahmedsliman.github.io/wordle-de/ | German Wordle with single-player and 2-player online multiplayer modes. | Yes |
| Terminal Gym | https://github.com/ahmedsliman/terminal-gym | Learn Linux by doing — 17 hands-on missions straight from your terminal. | Yes |
| Security Gym | https://github.com/ahmedsliman/security-gym | *(hidden until finished)* | No |

## Page Order (final)

1. Header (name)
2. Hero bio section
3. **Projects section** ← new
4. Blog section
5. Social links section (LinkedIn, GitHub, X)

## Layout

All styling uses inline styles to match the existing pattern in `index.js` (no CSS module classes added).

- Section wrapper: `maxWidth: "900px"`, `margin: "3rem auto"`, `padding: "0 1rem"`
- Section heading: `textAlign: "center"`, `fontSize: "2rem"`, `marginBottom: "2rem"`, `color: "#111"` (same as Blog heading inline style)
- Grid: CSS grid via inline style — `display: "grid"`, `gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))"`, `gap: "1rem"`
- Each card: `padding: "1rem 1.5rem"`, `borderRadius: "10px"`, `backgroundColor: "#fff"`, `boxShadow: "0 6px 15px rgba(0,0,0,0.05)"` (matches blog card exactly)
- Card link: `fontWeight: "600"`, `fontSize: "1.1rem"`, `color: "#0070f3"`, `textDecoration: "none"`, `target="_blank"`, `rel="noopener noreferrer"`
- One-liner text: `color: "#666"`, `fontSize: "0.85rem"`, `marginTop: "0.25rem"`

## Visibility Logic

Projects defined as a static array with a `hidden` boolean:
```js
const PROJECTS = [
  { name: "Concept Atlas", url: "...", description: "...", hidden: false },
  { name: "Wordle DE",     url: "...", description: "...", hidden: false },
  { name: "Terminal Gym",  url: "...", description: "...", hidden: false },
  { name: "Security Gym",  url: "...", description: "...", hidden: true  },
];
```
Filtered before render: `PROJECTS.filter(p => !p.hidden)`. To publish security-gym, flip `hidden` to `false`.

## Files Changed

- `pages/index.js` only — add `PROJECTS` array and projects section JSX using inline styles

## Out of Scope

- No screenshots or preview images
- No filtering or sorting UI
- No separate `/projects` page
