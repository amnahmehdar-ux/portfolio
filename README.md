# Amnah O. Almohdar — Personal Portfolio

A modern, professional personal portfolio for **Amnah O. Almohdar**, an Information Technology graduate from King Abdulaziz University (KAU), positioned toward **Artificial Intelligence, Data Analysis, and Software Development**.

Built with **React + Vite + TypeScript + Tailwind CSS** and **Lucide React** icons.

---

## 1. Running the project

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build
npm run preview  # preview the production build
npm run typecheck
```

The dev server starts automatically in this environment — you don't need to run it yourself.

---

## 2. Changing personal information

All personal details live in **`src/data/profile.ts`**:

```ts
export const profile = {
  name: 'Amnah O. Almohdar',
  linkedin: 'https://www.linkedin.com/in/amnahalmohdar',   // ← replace with your real link
  github: 'https://github.com/amnahmehdar-ux',       // ← replace with your real link
  email: 'Amnahmehdar@gmail.com',     // ← replace with your real email
  // ...
};
```

Replace the placeholder strings (`LINKEDIN_URL`, `GITHUB_URL`, `EMAIL_ADDRESS`) with your real links. Until you do, the link buttons stay disabled and show a tooltip telling you where to edit — so there are no broken links on the live site.

Project links use the same pattern in **`src/data/projects.ts`** (`DENTEK_PROJECT_URL`, `DENTEK_GITHUB_URL`, `IEEE_CHATBOT_GITHUB_URL`).

---

## 3. Adding or editing projects

Projects are defined in **`src/data/projects.ts`** as a single `projects` array. Each project uses the same card style. Dentek (the first entry) is marked `featured: true` and has a `badge: 'Graduation Project'` so it renders full-width with slightly stronger emphasis.

To add a new project, append an object to the `projects` array:

```ts
{
  id: 'my-project',
  number: '04',
  title: 'My New Project',
  category: 'ML + Data',
  description: 'What it does and why it matters.',
  tags: ['Python', 'AI'],
  highlights: ['Feature one', 'Feature two'],
  buttons: [{ label: 'GitHub', href: 'MY_PROJECT_GITHUB_URL', variant: 'ghost' }],
  image: 'MY_PROJECT_IMAGE',
  imagePlaceholder: 'Add a screenshot here',
}
```

The first project in the array renders full-width; the rest appear in a two-column grid.

---

## 4. Replacing project images

Every project card has an image area at the top. While the `image` field still contains a placeholder string (e.g. `DENTEK_PROJECT_IMAGE`, `IEEE_CHATBOT_IMAGE`, `BANK_LOAN_IMAGE`), the card shows an elegant placeholder telling you where the screenshot goes.

To use a real screenshot:

1. Drop your image into `public/` (e.g. `public/dentek-screenshot.png`).
2. In **`src/data/projects.ts`**, set the project's `image` field to the path:

```ts
image: '/dentek-screenshot.png',
```

As long as the value doesn't contain `_IMAGE`, the card renders the image automatically — no component edits needed.

---

## 5. Changing the accent color

The entire site is themed from a single color ramp in **`tailwind.config.js`**:

```js
colors: {
  accent: {
    50: '#eef6ff',
    // ...
    500: '#3b82f6',  // ← primary accent
    // ...
  },
}
```

Change the `accent` ramp to re-theme every button, icon, tag, and highlight across the site. Neutral tones use the `ink` ramp in the same file.

---

## 6. Editing skills, experience, and achievements

- **Skills** → `src/data/skills.ts` (grouped by category; each skill has a level: `core`, `working`, or `familiar` which controls its visual emphasis).
- **Timeline / university journey** → `src/data/experience.ts` (`timeline` array).
- **Achievements** → `src/data/experience.ts` (`achievements` array — placeholder cards included for future certificates).

---

## 7. Deploying the website

This is a static site — the production build in `dist/` can be hosted anywhere.

### Netlify
1. Push the repo to GitHub.
2. Import the repo in Netlify.
3. Build command: `npm run build` · Publish directory: `dist`.

### Vercel
1. Push the repo to GitHub.
2. Import in Vercel — it auto-detects Vite. Output directory: `dist`.

### GitHub Pages
```bash
npm run build
# deploy the contents of dist/ to the gh-pages branch
```

---

## Project structure

```
src/
  components/        # one file per section
    Navbar.tsx
    Hero.tsx
    About.tsx
    Projects.tsx
    ProjectCard.tsx      # shared card used by every project
    Skills.tsx
    Education.tsx        # Education + Achievements
    Experience.tsx       # Leadership & Technical Experience
    Contact.tsx
    Footer.tsx
    Section.tsx          # shared section + heading helpers
  data/                  # all editable content lives here
    profile.ts
    projects.ts
    skills.ts
    experience.ts
  hooks/
    useReveal.ts         # scroll-reveal animation hook
  App.tsx
  main.tsx
  index.css
```

All content (text, links, skills, projects) is kept in `src/data/` so you can update the portfolio without touching the components.
