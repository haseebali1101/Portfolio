# Haseeb Ali, portfolio

Plain static site, no build step. Everything lives in `index.html` (inline CSS and JS, Google Fonts only).

- `assets/headshot.jpg`: hero photo
- `assets/Ali_Haseeb_Resume.pdf`: resume linked from the nav and contact section
- `vercel.json`: tells Vercel to skip install/build and serve the repo root

Run locally: `python3 -m http.server 8000`, then open http://localhost:8000
