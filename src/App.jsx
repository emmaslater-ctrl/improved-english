import React, { useState, useEffect, useMemo } from "react";
import { CONTENT } from "./content";
import "./styles.css";

/* ===================================================================
   9093 A Level English Language — Paper 3 & 4 Revision App
   Built for Cambridge International AS & A Level English Language 9093
   A LEVEL ONLY (Papers 3 + 4)
   =================================================================== */

const STORAGE_KEY = "cie-9093-revision-v1";

const loadProgress = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { flashcards: {}, short: {}, long: {} };
  } catch {
    return { flashcards: {}, short: {}, long: {} };
  }
};
const saveProgress = (p) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {}
};

/* ---------------- Top-level shell ---------------- */
export default function App() {
  const [view, setView] = useState("home");
  const [topic, setTopic] = useState(null);
  const [progress, setProgress] = useState(loadProgress());

  useEffect(() => saveProgress(progress), [progress]);

  const goto = (v, t = null) => {
    setView(v);
    setTopic(t);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <Header onHome={() => goto("home")} />
      <main className="main">
        {view === "home" && <Home goto={goto} progress={progress} />}
        {view === "topic" && (
          <TopicHub topic={topic} goto={goto} progress={progress} />
        )}
        {view === "flashcards" && (
          <Flashcards
            topic={topic}
            progress={progress}
            setProgress={setProgress}
            back={() => goto("topic", topic)}
          />
        )}
        {view === "short" && (
          <ShortAnswers
            topic={topic}
            progress={progress}
            setProgress={setProgress}
            back={() => goto("topic", topic)}
          />
        )}
        {view === "long" && (
          <LongAnswers
            topic={topic}
            progress={progress}
            setProgress={setProgress}
            back={() => goto("topic", topic)}
          />
        )}
        {view === "theory" && (
          <TheoryHub topic={topic} back={() => goto("topic", topic)} />
        )}
        {view === "marks" && <MarkSchemeGuide back={() => goto("home")} />}
        {view === "pitfalls" && <Pitfalls back={() => goto("home")} />}
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header({ onHome }) {
  return (
    <header className="header">
      <button className="logo" onClick={onHome} aria-label="Home">
        <span className="logo-mark">9093</span>
        <span className="logo-text">
          <strong>A Level English Language</strong>
          <em>Paper 3 + Paper 4 Revision</em>
        </span>
      </button>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        Cambridge International AS &amp; A Level English Language 9093 — A
        Level Papers 3 &amp; 4. Independent revision tool. Not endorsed by
        Cambridge Assessment International Education.
      </p>
    </footer>
  );
}

/* ---------------- Home ---------------- */
function Home({ goto, progress }) {
  const topics = Object.entries(CONTENT.topics);

  const totalFlash = topics.reduce(
    (s, [, t]) => s + t.flashcards.length,
    0
  );
  const masteredFlash = Object.values(progress.flashcards).filter(
    (v) => v === "easy"
  ).length;

  return (
    <div className="home">
      <section className="hero">
        <p className="hero-eyebrow">Cambridge 9093 · A Level only</p>
        <h1 className="hero-title">
          Master Papers 3 &amp; 4
          <span className="hero-accent">.</span>
        </h1>
        <p className="hero-sub">
          Flashcards, short-answer drills, full essay practice with
          examiner-aligned mark schemes, and a complete theory reference for
          all four A Level topics.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">{masteredFlash}</span>
            <span className="stat-lbl">cards mastered</span>
          </div>
          <div className="stat">
            <span className="stat-num">{totalFlash}</span>
            <span className="stat-lbl">total cards</span>
          </div>
          <div className="stat">
            <span className="stat-num">4</span>
            <span className="stat-lbl">A Level topics</span>
          </div>
        </div>
      </section>

      <section className="papers">
        <div className="paper-block">
          <div className="paper-tag">Paper 3 · Language Analysis · 50 marks</div>
          <p className="paper-meta">
            AO1 10% · AO2 10% · AO4 40% · AO5 40% · 2h 15m
          </p>
          <div className="topic-grid">
            {topics
              .filter(([, t]) => t.paper === 3)
              .map(([key, t]) => (
                <TopicCard
                  key={key}
                  k={key}
                  t={t}
                  progress={progress}
                  onClick={() => goto("topic", key)}
                />
              ))}
          </div>
        </div>

        <div className="paper-block">
          <div className="paper-tag paper-tag--alt">
            Paper 4 · Language Topics · 50 marks
          </div>
          <p className="paper-meta">
            AO1 40% · AO2 20% · AO4 40% · 2h 15m · Discursive essays
          </p>
          <div className="topic-grid">
            {topics
              .filter(([, t]) => t.paper === 4)
              .map(([key, t]) => (
                <TopicCard
                  key={key}
                  k={key}
                  t={t}
                  progress={progress}
                  onClick={() => goto("topic", key)}
                />
              ))}
          </div>
        </div>
      </section>

      <section className="quick-links">
        <button className="ql" onClick={() => goto("marks")}>
          <span className="ql-arrow">→</span>
          <span>
            <strong>Mark scheme decoder</strong>
            <em>How AOs are weighted &amp; what examiners reward</em>
          </span>
        </button>
        <button className="ql" onClick={() => goto("pitfalls")}>
          <span className="ql-arrow">→</span>
          <span>
            <strong>Common pitfalls</strong>
            <em>Mistakes to avoid (drawn from examiner reports)</em>
          </span>
        </button>
      </section>
    </div>
  );
}

function TopicCard({ k, t, onClick, progress }) {
  const total = t.flashcards.length;
  const mastered = t.flashcards.filter(
    (c) => progress.flashcards[`${k}:${c.id}`] === "easy"
  ).length;
  const pct = total ? Math.round((mastered / total) * 100) : 0;
  return (
    <button className="topic-card" onClick={onClick}>
      <div className="topic-card-top">
        <span className="topic-icon">{t.icon}</span>
        <span className="topic-pct">{pct}%</span>
      </div>
      <h3>{t.name}</h3>
      <p>{t.tagline}</p>
      <div className="bar">
        <div className="bar-fill" style={{ width: `${pct}%` }} />
      </div>
    </button>
  );
}

/* ---------------- Topic hub ---------------- */
function TopicHub({ topic, goto, progress }) {
  const t = CONTENT.topics[topic];
  if (!t) return null;
  const flashTotal = t.flashcards.length;
  const flashDone = t.flashcards.filter(
    (c) => progress.flashcards[`${topic}:${c.id}`] === "easy"
  ).length;
  const shortTotal = t.short.length;
  const shortDone = t.short.filter(
    (q) => progress.short[`${topic}:${q.id}`]
  ).length;
  const longTotal = t.long.length;
  const longDone = t.long.filter(
    (q) => progress.long[`${topic}:${q.id}`]
  ).length;

  return (
    <div className="topic-hub">
      <button className="back" onClick={() => goto("home")}>
        ← All topics
      </button>
      <div className="topic-head">
        <span className="topic-head-icon">{t.icon}</span>
        <div>
          <p className="topic-head-paper">Paper {t.paper}</p>
          <h2>{t.name}</h2>
          <p className="topic-head-tag">{t.tagline}</p>
        </div>
      </div>

      <div className="hub-grid">
        <HubCard
          label="Flashcards"
          desc="Theorists, concepts and terminology. Self-grade to track mastery."
          done={flashDone}
          total={flashTotal}
          onClick={() => goto("flashcards", topic)}
        />
        <HubCard
          label="Short-answer practice"
          desc="Quick recall and definition questions with model answers."
          done={shortDone}
          total={shortTotal}
          onClick={() => goto("short", topic)}
        />
        <HubCard
          label="Essay practice (25 marks)"
          desc="Full Cambridge-style questions with mark scheme &amp; model plan."
          done={longDone}
          total={longTotal}
          onClick={() => goto("long", topic)}
        />
        <HubCard
          label="Theory reference"
          desc="Clean summaries of all the theorists and concepts you need."
          done={null}
          total={null}
          onClick={() => goto("theory", topic)}
        />
      </div>
    </div>
  );
}

function HubCard({ label, desc, done, total, onClick }) {
  const pct = total ? Math.round((done / total) * 100) : null;
  return (
    <button className="hub-card" onClick={onClick}>
      <h3>{label}</h3>
      <p dangerouslySetInnerHTML={{ __html: desc }} />
      {total !== null && (
        <div className="hub-progress">
          <span>
            {done} / {total}
          </span>
          <div className="bar">
            <div className="bar-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>
      )}
    </button>
  );
}

/* ---------------- Flashcards ---------------- */
function Flashcards({ topic, progress, setProgress, back }) {
  const t = CONTENT.topics[topic];
  const cards = t.flashcards;

  const [filter, setFilter] = useState("all"); // all | new | review | mastered
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const filtered = useMemo(() => {
    return cards.filter((c) => {
      const k = `${topic}:${c.id}`;
      const status = progress.flashcards[k];
      if (filter === "all") return true;
      if (filter === "new") return !status;
      if (filter === "review") return status === "hard" || status === "medium";
      if (filter === "mastered") return status === "easy";
      return true;
    });
  }, [cards, filter, progress, topic]);

  useEffect(() => {
    setIdx(0);
    setFlipped(false);
  }, [filter, topic]);

  if (filtered.length === 0) {
    return (
      <div className="page">
        <button className="back" onClick={back}>
          ← Back to {t.name}
        </button>
        <h2 className="page-title">Flashcards · {t.name}</h2>
        <FlashFilters filter={filter} setFilter={setFilter} />
        <div className="empty">
          No cards in this filter. Try another category.
        </div>
      </div>
    );
  }

  const card = filtered[idx];
  const cardKey = `${topic}:${card.id}`;
  const status = progress.flashcards[cardKey];

  const grade = (g) => {
    setProgress((p) => ({
      ...p,
      flashcards: { ...p.flashcards, [cardKey]: g },
    }));
    setFlipped(false);
    setIdx((i) => (i + 1 < filtered.length ? i + 1 : 0));
  };

  return (
    <div className="page">
      <button className="back" onClick={back}>
        ← Back to {t.name}
      </button>
      <h2 className="page-title">Flashcards · {t.name}</h2>
      <FlashFilters filter={filter} setFilter={setFilter} />

      <p className="counter">
        Card {idx + 1} of {filtered.length}
        {status && <span className={`status status--${status}`}>{status}</span>}
      </p>

      <div
        className={`flashcard ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped((f) => !f)}
      >
        <div className="flashcard-inner">
          <div className="flashcard-face front">
            <span className="flash-tag">{card.category}</span>
            <h3>{card.front}</h3>
            <p className="flash-hint">Click to reveal</p>
          </div>
          <div className="flashcard-face back">
            <span className="flash-tag">{card.category}</span>
            <div
              className="flash-back-text"
              dangerouslySetInnerHTML={{ __html: card.back }}
            />
            {card.example && (
              <p className="flash-example">
                <strong>Example:</strong> {card.example}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flash-nav">
        <button
          className="nav-btn"
          onClick={() => {
            setFlipped(false);
            setIdx((i) => (i - 1 + filtered.length) % filtered.length);
          }}
        >
          ← Prev
        </button>
        {flipped ? (
          <div className="grade-row">
            <button className="grade hard" onClick={() => grade("hard")}>
              Hard
            </button>
            <button className="grade medium" onClick={() => grade("medium")}>
              Medium
            </button>
            <button className="grade easy" onClick={() => grade("easy")}>
              Easy
            </button>
          </div>
        ) : (
          <button className="reveal" onClick={() => setFlipped(true)}>
            Reveal answer
          </button>
        )}
        <button
          className="nav-btn"
          onClick={() => {
            setFlipped(false);
            setIdx((i) => (i + 1) % filtered.length);
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

function FlashFilters({ filter, setFilter }) {
  const opts = [
    ["all", "All"],
    ["new", "Unseen"],
    ["review", "To review"],
    ["mastered", "Mastered"],
  ];
  return (
    <div className="filters">
      {opts.map(([k, label]) => (
        <button
          key={k}
          className={`filter ${filter === k ? "active" : ""}`}
          onClick={() => setFilter(k)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

/* ---------------- Short Answers ---------------- */
function ShortAnswers({ topic, progress, setProgress, back }) {
  const t = CONTENT.topics[topic];
  const qs = t.short;
  const [idx, setIdx] = useState(0);
  const [answer, setAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setAnswer("");
    setRevealed(false);
  }, [idx, topic]);

  if (qs.length === 0) return null;
  const q = qs[idx];
  const key = `${topic}:${q.id}`;
  const attempted = progress.short[key];

  const markComplete = () => {
    setProgress((p) => ({
      ...p,
      short: { ...p.short, [key]: true },
    }));
  };

  return (
    <div className="page">
      <button className="back" onClick={back}>
        ← Back to {t.name}
      </button>
      <h2 className="page-title">Short-answer practice · {t.name}</h2>
      <p className="counter">
        Question {idx + 1} of {qs.length}
        {attempted && <span className="status status--easy">attempted</span>}
      </p>

      <div className="short-card">
        <span className="short-tag">{q.category}</span>
        <h3 className="short-q">{q.question}</h3>
        {q.marks && <p className="short-marks">[{q.marks} marks]</p>}

        <textarea
          className="short-input"
          placeholder="Type your answer here. Aim for the suggested length and include relevant terminology."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          rows={6}
        />
        <p className="word-count">
          {answer.trim() ? answer.trim().split(/\s+/).length : 0} words
        </p>

        {!revealed ? (
          <button
            className="reveal"
            onClick={() => {
              setRevealed(true);
              markComplete();
            }}
          >
            Reveal model answer
          </button>
        ) : (
          <div className="model-answer">
            <h4>Model answer</h4>
            <div dangerouslySetInnerHTML={{ __html: q.model }} />
            {q.keyTerms && (
              <div className="key-terms">
                <h5>Key terms to include</h5>
                <ul>
                  {q.keyTerms.map((kt) => (
                    <li key={kt}>{kt}</li>
                  ))}
                </ul>
              </div>
            )}
            {q.examinerNote && (
              <div className="examiner-note">
                <strong>Examiner note: </strong>
                {q.examinerNote}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flash-nav">
        <button
          className="nav-btn"
          onClick={() => setIdx((i) => (i - 1 + qs.length) % qs.length)}
        >
          ← Prev
        </button>
        <button
          className="nav-btn"
          onClick={() => setIdx((i) => (i + 1) % qs.length)}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

/* ---------------- Long Answers (Essay practice) ---------------- */
function LongAnswers({ topic, progress, setProgress, back }) {
  const t = CONTENT.topics[topic];
  const qs = t.long;
  const [idx, setIdx] = useState(0);
  const [draft, setDraft] = useState("");
  const [tab, setTab] = useState("question"); // question | plan | mark | examiner | check

  useEffect(() => {
    setDraft("");
    setTab("question");
  }, [idx, topic]);

  if (qs.length === 0) return null;
  const q = qs[idx];
  const key = `${topic}:${q.id}`;

  const markComplete = () => {
    setProgress((p) => ({
      ...p,
      long: { ...p.long, [key]: true },
    }));
  };

  const wordCount = draft.trim() ? draft.trim().split(/\s+/).length : 0;

  return (
    <div className="page">
      <button className="back" onClick={back}>
        ← Back to {t.name}
      </button>
      <h2 className="page-title">Essay practice · {t.name}</h2>
      <p className="counter">
        Question {idx + 1} of {qs.length}
        {progress.long[key] && (
          <span className="status status--easy">attempted</span>
        )}
      </p>

      <div className="long-card">
        <div className="long-question">
          <span className="long-tag">
            Paper {t.paper} · {q.section || ""}
          </span>
          <p className="long-q-text">{q.question}</p>
          {q.stimulus && (
            <div className="stimulus">
              <h5>Stimulus / source</h5>
              <div dangerouslySetInnerHTML={{ __html: q.stimulus }} />
            </div>
          )}
          <p className="long-marks">[25 marks]</p>
        </div>

        <div className="long-tabs">
          {[
            ["question", "Plan & write"],
            ["plan", "Model plan"],
            ["mark", "Mark scheme"],
            ["examiner", "Examiner tips"],
            ["check", "Self-check"],
          ].map(([k, label]) => (
            <button
              key={k}
              className={`tab ${tab === k ? "active" : ""}`}
              onClick={() => setTab(k)}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === "question" && (
          <div className="tab-body">
            <p className="hint">
              Plan first, then write. Aim for 600–900 words. Set a 50–60 minute
              timer for exam realism.
            </p>
            <textarea
              className="long-input"
              placeholder="Type your essay or essay plan here..."
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              rows={18}
            />
            <p className="word-count">{wordCount} words</p>
            <button
              className="reveal"
              onClick={() => {
                setTab("plan");
                markComplete();
              }}
            >
              Done — show model plan
            </button>
          </div>
        )}

        {tab === "plan" && (
          <div className="tab-body">
            <h4>Model essay plan</h4>
            <div dangerouslySetInnerHTML={{ __html: q.plan }} />
            {q.theorists && (
              <div className="theorists-box">
                <h5>Theorists / concepts to deploy</h5>
                <ul>
                  {q.theorists.map((th) => (
                    <li key={th}>{th}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {tab === "mark" && (
          <div className="tab-body">
            <h4>Mark scheme — what each band looks like</h4>
            <p className="hint">
              <strong>AO weightings for Paper {t.paper}: </strong>
              {t.paper === 3 ? (
                <>AO1 10% · AO2 10% · AO4 40% · AO5 40%</>
              ) : (
                <>AO1 40% · AO2 20% · AO4 40%</>
              )}
            </p>
            <BandsTable bands={CONTENT.bands[`p${t.paper}`]} />
            {q.markScheme && (
              <div className="mark-extra">
                <h5>Specific to this question</h5>
                <div dangerouslySetInnerHTML={{ __html: q.markScheme }} />
              </div>
            )}
          </div>
        )}

        {tab === "examiner" && (
          <div className="tab-body">
            <h4>What examiners actually reward</h4>
            <div dangerouslySetInnerHTML={{ __html: q.examinerTips }} />
          </div>
        )}

        {tab === "check" && (
          <div className="tab-body">
            <h4>Self-check before submitting</h4>
            <ul className="checklist">
              {q.checklist.map((c, i) => (
                <li key={i}>
                  <label>
                    <input type="checkbox" />
                    <span>{c}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flash-nav">
        <button
          className="nav-btn"
          onClick={() => setIdx((i) => (i - 1 + qs.length) % qs.length)}
        >
          ← Prev essay
        </button>
        <button
          className="nav-btn"
          onClick={() => setIdx((i) => (i + 1) % qs.length)}
        >
          Next essay →
        </button>
      </div>
    </div>
  );
}

function BandsTable({ bands }) {
  return (
    <div className="bands">
      {bands.map((b) => (
        <div key={b.band} className="band">
          <div className="band-head">
            <span className="band-num">Band {b.band}</span>
            <span className="band-marks">{b.marks}</span>
          </div>
          <p>{b.descriptor}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------------- Theory Hub ---------------- */
function TheoryHub({ topic, back }) {
  const t = CONTENT.topics[topic];
  return (
    <div className="page">
      <button className="back" onClick={back}>
        ← Back to {t.name}
      </button>
      <h2 className="page-title">Theory reference · {t.name}</h2>
      <p className="theory-intro">{t.theoryIntro}</p>
      <div className="theory-list">
        {t.theory.map((th, i) => (
          <details key={i} className="theory-item">
            <summary>
              <strong>{th.name}</strong>
              {th.label && <em> — {th.label}</em>}
            </summary>
            <div dangerouslySetInnerHTML={{ __html: th.body }} />
          </details>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Mark scheme guide ---------------- */
function MarkSchemeGuide({ back }) {
  return (
    <div className="page">
      <button className="back" onClick={back}>
        ← Home
      </button>
      <h2 className="page-title">Mark scheme decoder</h2>
      <p className="theory-intro">
        Both A Level papers are 50 marks, sat in 2 hours 15 minutes, and
        contain two 25-mark questions. The AO weightings are very different
        between papers — this controls what you should actually be doing.
      </p>

      <div className="ao-grid">
        <div className="ao-card">
          <h3>Paper 3 — Language Analysis</h3>
          <ul>
            <li>
              <strong>AO1 — 10%</strong> — Read &amp; show understanding of
              texts.
            </li>
            <li>
              <strong>AO2 — 10%</strong> — Write effectively (not heavily
              tested here).
            </li>
            <li>
              <strong>AO4 — 40%</strong> — Linguistic concepts, methods,
              theorists.
            </li>
            <li>
              <strong>AO5 — 40%</strong> — Analyse &amp; synthesise data from
              multiple sources.
            </li>
          </ul>
          <p>
            <strong>Implication: </strong>Paper 3 rewards analysis of the
            actual data (texts, transcripts, n-grams) using precise
            terminology, then linking it to theory. Don't write a theory
            essay — analyse the data.
          </p>
        </div>

        <div className="ao-card">
          <h3>Paper 4 — Language Topics</h3>
          <ul>
            <li>
              <strong>AO1 — 40%</strong> — Read &amp; understand the texts.
            </li>
            <li>
              <strong>AO2 — 20%</strong> — Write effectively, fluently,
              accurately.
            </li>
            <li>
              <strong>AO4 — 40%</strong> — Apply theory to discuss issues.
            </li>
            <li>
              <strong>AO5 — 0%</strong> — Not assessed in Paper 4.
            </li>
          </ul>
          <p>
            <strong>Implication: </strong>Paper 4 is a discursive essay debating
            the <em>ideas</em> raised in the source text. Use theorists to
            argue a case — do <strong>not</strong> do graphological, lexical,
            grammatical or phonological feature analysis. That's Paper 1
            territory.
          </p>
        </div>
      </div>

      <h3 className="sub-h">How responses are graded (5 bands)</h3>
      <div className="ao-grid">
        <div>
          <h4>Paper 3 bands</h4>
          <BandsTable bands={CONTENT.bands.p3} />
        </div>
        <div>
          <h4>Paper 4 bands</h4>
          <BandsTable bands={CONTENT.bands.p4} />
        </div>
      </div>
    </div>
  );
}

/* ---------------- Common pitfalls ---------------- */
function Pitfalls({ back }) {
  return (
    <div className="page">
      <button className="back" onClick={back}>
        ← Home
      </button>
      <h2 className="page-title">Common pitfalls</h2>
      <p className="theory-intro">
        Drawn directly from Cambridge examiner reports. These are the mistakes
        that drag students out of the top bands.
      </p>
      <div className="pit-list">
        {CONTENT.pitfalls.map((p, i) => (
          <div key={i} className="pit-card">
            <span className="pit-tag">{p.tag}</span>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
            {p.fix && (
              <div className="pit-fix">
                <strong>Fix: </strong>
                {p.fix}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
