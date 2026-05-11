# 9093 Revision — A Level English Language (Papers 3 & 4)

A self-contained revision web app for **Cambridge International A Level English Language 9093**, covering **Paper 3 (Language Analysis)** and **Paper 4 (Language Topics)** only — not AS, not Papers 1 or 2.

Built around the four A Level subject areas:

- **Language Change** *(Paper 3, Section A)*
- **Child Language Acquisition** *(Paper 3, Section B)*
- **English in the World** *(Paper 4, Section A)*
- **Language and the Self** *(Paper 4, Section B)*

---

## What's inside

**Five top-tab sections** (matching the SAIS English site structure):

1. **Papers** — Exam-at-a-glance overview of Papers 3 and 4: timing, marks, AO weightings, question breakdowns
2. **Skills** — How to write for each AO, mark scheme bands, examiner-derived pitfalls (including the Paper 4 feature-analysis trap)
3. **Glossary** — Searchable database of every theorist and key term, filterable by topic
4. **Flashcards** — Spaced self-grading flashcards for all four topics, with progress saved in browser
5. **Practice** — Full Cambridge past papers and invented practice questions, each with:
   - Full source texts (Text A, B and C for Paper 3; full stimulus for Paper 4)
   - Plan with the **seven-paragraph structure** for Paper 3 Section A
   - Complete model essays — including Emma's actual 23/25 models for the 2022 Letter from a Father and Bailey transcript
   - Mark scheme notes

**Past papers included:**
- 2022 Nov 31 — Letter from a Father (Paper 3 Section A) and Bailey (Section B)
- 2021 Nov 32 — Education of Outdoor Paupers (Paper 3 Section A)
- 2022 May/Jun 41 — Indian English / Mohan (Paper 4 Section A)
- 2023 May/Jun 41 — Ableist language BBC (Paper 4 Section B)
- 2025 Oct/Nov 41 — Female email rules (Paper 4 Section B)

**Plus invented practice questions** with original source texts and full model essays:
- A Treatise of Health (1689) — Paper 3 Section A
- Singlish op-ed — Paper 4 Section A
- Code-switching essay — Paper 4 Section B

---

## How to update content

Everything lives in three data files inside `src/`:

- `src/content.js` — skills, pitfalls, mark scheme bands, flashcards by topic
- `src/glossary-data.js` — theorist and term definitions
- `src/practice-data.js` — past papers, source texts, plans and model essays

Edit any of these directly on GitHub (web editor) and Vercel will auto-redeploy in ~30 seconds. No build step needed locally.

---

## Updating the site (Vercel auto-deploy)

The live site rebuilds whenever you push changes to the GitHub repo. Workflow:

1. Open your repo on GitHub
2. Navigate to the file you want to edit (e.g. `src/practice-data.js`)
3. Click the pencil icon to edit, make changes, scroll down to commit
4. Vercel detects the push and rebuilds automatically — your live URL updates within a minute

---

## Local development (optional)

If you want to test changes before pushing:

```bash
npm install
npm run dev      # starts a local server at http://localhost:5173
npm run build    # produces dist/ for production
```

---

Built for Emma's 9093 students. Navy-and-copper aesthetic; SAIS-inspired structure.
