# Umair Azam | MERN Stack Developer Portfolio

A React (Vite) portfolio with dark/light theme, scroll and motion effects (Motion), a project showcase, CV preview and a contact form.

## Run locally

```bash
npm install
npm run dev      # development server
npm run build    # production build (output in dist/)
npm run preview  # preview the production build
npm run lint     # ESLint
```

## Update your content

Almost everything you will edit is in `src/data/`:

| What to change | File |
| --- | --- |
| Name, title, intro, email, WhatsApp, GitHub, LinkedIn, nav links | `src/data/profile.js` |
| About text, education, development journey, goals | `src/data/about.js` |
| Skills and categories | `src/data/skills.js` |
| Projects (name, description, tech, screenshot, GitHub, live demo) | `src/data/projects.js` |
| Certifications (replace the placeholder) | `src/data/certifications.js` |
| CV PDF | replace `public/Umair-Azam-CV.pdf` (keep the same name, or update `cvPath` in `profile.js`) |
| Profile photo | replace `src/assets/profile.jpg` (4:5 portrait works best) |

Text in `[square brackets]` is a placeholder and should be replaced.

## Project structure

```
src/
  components/      Sections (Hero, About, Skills, Projects, ...), Navbar, Footer, Icons
  components/effects/  Motion effects: reveal, particles, custom cursor, page loader, ambient background
  data/            Your content (edit these files)
  hooks/           useTheme, useActiveSection, useTilt
  utils/           Contact form validation
  index.css        Design tokens (colors, type, spacing) and base styles
public/            Static files (CV PDF, favicon)
```

## Design tokens

Colors, fonts, spacing and radii are defined as CSS variables at the top of `src/index.css`. Change them there to update the whole site.

## Notes

- The contact form does not send to a server. It opens the visitor's email app or WhatsApp with the message filled in.
- Motion respects the visitor's `prefers-reduced-motion` setting. The particles and custom cursor are turned off for those users.
