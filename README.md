# 9093 Revision — A Level English Language (Papers 3 & 4)

A self-contained revision web app for **Cambridge International A Level English Language 9093**, covering **Paper 3 (Language Analysis)** and **Paper 4 (Language Topics)** only — not AS, not Papers 1 or 2.

Built around the four A Level subject areas:

- Language Change *(Paper 3, Section A)*
- Child Language Acquisition *(Paper 3, Section B)*
- English in the World *(Paper 4, Section A)*
- Language and the Self *(Paper 4, Section B)*

---

## What's inside

- **Flashcards** for every topic — concepts, theorists, terminology — with self-grading (Hard / Medium / Easy) and progress saved in the browser
- **Short-answer practice** with model answers, key terms students must include, and examiner notes
- **Long-answer / essay practice** matching real Cambridge format: 25-mark questions with stimulus material, model essay plans, mark scheme bands, examiner tips, and a self-check checklist
- **Theory hub** for each topic — clean, expandable reference cards for every named theorist
- **Mark scheme decoder** — the AO weightings for both papers and what they mean in practice
- **Common pitfalls** — examiner-report-derived warnings, including the Paper 4 "don't do feature analysis" trap

Progress (mastered cards, completed essays, checked items) is saved in `localStorage` per browser. No accounts, no servers, no cost.

---

## Deploying via GitHub Pages — step by step

This is the simplest free path. The whole thing runs as a static site.

### 1. Create the repository

1. Go to **github.com** and click **New repository**.
2. Name it (e.g. `9093-revision`). Leave it Public. Don't initialise with a README — you have one already.
3. Click **Create repository**.

### 2. Upload the files

Easiest path (no command line):

1. On your new empty repo page, click **uploading an existing file**.
2. Drag in everything in this folder **except** `node_modules` and `dist` (those don't exist yet anyway).
3. Commit.

Or, if you're comfortable with git:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/9093-revision.git
git push -u origin main
```

### 3. Build and publish — the easiest path: Vercel

You don't have to use GitHub Pages. **Vercel** is genuinely the easiest deployment for this kind of project:

1. Go to **vercel.com** and sign in with your GitHub account.
2. Click **Add New… → Project**, pick your `9093-revision` repo.
3. Click **Deploy**. That's it. You'll get a live URL like `9093-revision.vercel.app` within about 30 seconds.
4. Every time you push a change to GitHub, Vercel re-deploys automatically.

Vercel auto-detects Vite. No config needed.

### 3b. Or: GitHub Pages

If you'd rather use GitHub Pages:

1. Make sure you have **Node.js** installed on your computer ([nodejs.org](https://nodejs.org), pick the LTS version).
2. Open a terminal in the project folder and run:
   ```bash
   npm install
   npm run build
   ```
   This creates a `dist/` folder.
3. To publish that folder to GitHub Pages:
   ```bash
   npx gh-pages -d dist
   ```
4. In your repo on GitHub: **Settings → Pages → Source → Deploy from a branch → `gh-pages` / `(root)` → Save**.
5. Wait a minute. Your site will be live at `https://YOUR-USERNAME.github.io/9093-revision/`.

---

## Running it locally first (recommended)

Before you deploy, see it on your own machine:

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`). Edit anything in `/src` and the page hot-reloads.

---

## Editing the content

All teaching content is in **`src/content.js`**. You can edit any flashcard, short-answer model, long-answer question, theorist entry, or pitfall directly in that file — it's structured by topic (`languageChange`, `childLanguage`, `englishWorld`, `languageSelf`) and then by section (`flashcards`, `shortAnswers`, `longAnswers`, `theory`).

The visual styling lives in **`src/styles.css`**. The app shell and all components are in **`src/App.jsx`**.

---

## Project structure

```
9093-app/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── .gitignore
└── src/
    ├── main.jsx        ← entry point
    ├── App.jsx         ← all components
    ├── content.js      ← all teaching content (edit this)
    └── styles.css      ← all styling
```

---

## Notes on the content

- Mark-scheme bands and AO weightings are derived from the official Cambridge 9093 syllabus.
- Examiner tips and pitfalls draw from published examiner reports for the 2024 sessions.
- Practice essay questions are written in genuine Cambridge format with original stimulus scenarios — Cambridge's own past paper texts are copyrighted, so this app uses pedagogically equivalent practice prompts.
- The Paper 4 "discursive, not analytical" warning is enforced throughout — students are reminded that Paper 4 has zero AO5 marks.
