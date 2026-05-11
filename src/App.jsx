import React, { useState, useEffect, useMemo } from "react";
import { CONTENT } from "./content";
import "./styles.css";

/* ===================================================================
   9093 A Level English Language — Paper 3 & 4 Revision App
   Cambridge International AS & A Level English Language 9093
   A LEVEL ONLY (Papers 3 + 4)
   =================================================================== */

const STORAGE_KEY = "cie-9093-revision-v2";

const loadProgress = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { flashcards: {} };
  } catch {
    return { flashcards: {} };
  }
};
const saveProgress = (p) => {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch {}
};

/* ===================================================================
   APP SHELL
   =================================================================== */
export default function App() {
  const [tab, setTab] = useState("papers");
  const [progress, setProgress] = useState(loadProgress());

  useEffect(() => { saveProgress(progress); }, [progress]);

  return (
    <div className="app">
      <Header />
      <Nav active={tab} onChange={setTab} />
      <main className="main">
        {tab === "papers"     && <PapersPage />}
        {tab === "skills"     && <SkillsPage />}
        {tab === "glossary"   && <GlossaryPage />}
        {tab === "flashcards" && <FlashcardsPage progress={progress} setProgress={setProgress} />}
        {tab === "practice"   && <PracticePage />}
      </main>
      <Footer />
    </div>
  );
}

/* ===================================================================
   HEADER + NAV
   =================================================================== */
function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <button className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-text">9093</span>
          <span className="logo-dot">·</span>
          <span className="logo-sub">English</span>
        </button>
        <div className="header-meta">
          <strong>A Level English Language</strong>
          <span>Cambridge 9093 · Papers 3 &amp; 4</span>
        </div>
      </div>
    </header>
  );
}

function Nav({ active, onChange }) {
  const tabs = [
    { id: "papers",     icon: "📋", label: "Papers" },
    { id: "skills",     icon: "🎯", label: "Skills" },
    { id: "glossary",   icon: "📖", label: "Glossary" },
    { id: "flashcards", icon: "🃏", label: "Flashcards" },
    { id: "practice",   icon: "✍️", label: "Practice" },
  ];
  return (
    <nav className="nav">
      <div className="nav-inner">
        {tabs.map(t => (
          <button
            key={t.id}
            className={`nav-tab ${active === t.id ? "active" : ""}`}
            onClick={() => onChange(t.id)}
          >
            <span className="nav-icon">{t.icon}</span>
            <span>{t.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>9093 Revision · A Level English Language · Papers 3 &amp; 4</p>
      <p><em>Built for Cambridge International candidates</em></p>
    </footer>
  );
}

/* ===================================================================
   PAGE 1: PAPERS — Exam at a glance
   =================================================================== */
function PapersPage() {
  return (
    <div>
      <div className="page-head">
        <h1>The Exam at a Glance</h1>
        <p>Cambridge International A Level English Language 9093 · Papers 3 and 4</p>
      </div>

      {/* Paper 3 */}
      <section className="hero-panel">
        <h2>Paper 3 — Language Analysis</h2>
        <p>2 hours 15 minutes · 50 marks · 50% of A Level</p>
        <p>Two compulsory questions · No dictionary</p>
        <span className="ao-pill">AO2 10% · AO4 40% · AO5 50%</span>
      </section>

      <div className="card">
        <h3>What does Paper 3 test?</h3>
        <p>Paper 3 tests your ability to <strong>analyse language data</strong>. You are given short, authentic source materials (extracts, corpus tables, n-gram graphs, transcripts) and must produce two essays: one on <strong>Language Change</strong> and one on <strong>Child Language Acquisition</strong>.</p>
        <div className="tip-box">
          <strong>📚 Key principle:</strong> Paper 3 is data-driven. Every claim you make must be tied to specific details from the texts. Vague theory dumps without textual evidence score in the lower bands.
        </div>
      </div>

      <div className="card">
        <h3>Question Breakdown — Paper 3</h3>
        <div className="card-row">
          <span className="card-row-tag">Q1</span>
          <div className="card-row-body">
            <h4 style={{margin:'0 0 6px'}}>Section A — Language Change</h4>
            <p>Analyse how Text A exemplifies how English has changed over time. You will be given Text A (a historic source, often 17th–19th century) plus Texts B and C (corpus data and/or an n-gram graph). Your essay should integrate evidence from all three texts with theoretical frameworks.</p>
          </div>
          <span className="card-row-marks">25 marks</span>
        </div>
        <div className="card-row" style={{marginTop:'18px'}}>
          <span className="card-row-tag">Q2</span>
          <div className="card-row-body">
            <h4 style={{margin:'0 0 6px'}}>Section B — Child Language Acquisition</h4>
            <p>Analyse a transcript of a child interacting with a caregiver. Identify the child's developmental stage, comment on their grammatical, phonological, lexical and pragmatic features, and analyse the caregiver's child-directed speech (CDS).</p>
          </div>
          <span className="card-row-marks">25 marks</span>
        </div>
        <div className="tip-box" style={{marginTop:'20px'}}>
          <strong>⏱ Timing:</strong> Approximately 1 hour per essay, with 15 minutes spare for reading the source texts and planning. Aim for 600–800 words per response.
        </div>
      </div>

      {/* Paper 4 */}
      <section className="hero-panel" style={{marginTop:'40px'}}>
        <h2>Paper 4 — Language Topics</h2>
        <p>2 hours 15 minutes · 50 marks · 50% of A Level</p>
        <p>Two compulsory questions · No dictionary</p>
        <span className="ao-pill">AO1 40% · AO2 20% · AO4 40%</span>
      </section>

      <div className="card">
        <h3>What does Paper 4 test?</h3>
        <p>Paper 4 tests your ability to <strong>discuss linguistic ideas</strong>. You are given a stimulus text (article, interview, op-ed) and must write a <strong>discursive essay</strong> engaging with the issues it raises, drawing on theory and your own examples.</p>
        <div className="warn-box">
          <strong>⚠️ Critical warning:</strong> Paper 4 is <em>not</em> Paper 3. You must <strong>not</strong> apply linguistic feature analysis (graphology, lexis, grammar etc.) to the stimulus text. AO5 (data handling) is worth <strong>0 marks</strong> on Paper 4. Reward goes to discursive engagement with ideas, theorists, and counter-arguments.
        </div>
      </div>

      <div className="card">
        <h3>Question Breakdown — Paper 4</h3>
        <div className="card-row">
          <span className="card-row-tag">Q1</span>
          <div className="card-row-body">
            <h4 style={{margin:'0 0 6px'}}>Section A — English in the World</h4>
            <p>Discuss the issues raised by the stimulus text relating to the global use of English. Bring in Kachru, Crystal, Phillipson, Schneider, and your own examples of varieties of English (Indian English, Singlish, AAVE, etc.).</p>
          </div>
          <span className="card-row-marks">25 marks</span>
        </div>
        <div className="card-row" style={{marginTop:'18px'}}>
          <span className="card-row-tag">Q2</span>
          <div className="card-row-body">
            <h4 style={{margin:'0 0 6px'}}>Section B — Language and the Self</h4>
            <p>Discuss the issues raised by the stimulus text relating to language, identity, and thought. Bring in Sapir-Whorf, Giles' Communication Accommodation Theory, Labov, Trudgill, and theories of identity construction through language.</p>
          </div>
          <span className="card-row-marks">25 marks</span>
        </div>
      </div>

      {/* AOs explained */}
      <h2 className="page-head" style={{fontFamily:'var(--serif)', fontSize:'30px', fontWeight:500, color:'var(--ink-deep)', marginTop:'48px', marginBottom:'16px'}}>Assessment Objectives — What is Being Marked?</h2>

      <div className="ao-grid">
        <div className="ao-card">
          <strong>AO1</strong>
          <span>Understanding</span>
          <p>Read and demonstrate understanding of texts</p>
        </div>
        <div className="ao-card">
          <strong>AO2</strong>
          <span>Writing</span>
          <p>Write effectively, accurately, appropriately</p>
        </div>
        <div className="ao-card">
          <strong>AO4</strong>
          <span>Conceptualisation</span>
          <p>Demonstrate understanding of linguistic concepts</p>
        </div>
        <div className="ao-card">
          <strong>AO5</strong>
          <span>Data Handling</span>
          <p>Analyse and synthesise language data</p>
        </div>
      </div>

      <div className="card">
        <h3>AO weightings — at a glance</h3>
        <p><strong>Paper 3:</strong> AO2 = 5 marks · AO4 = 5 marks · AO5 = 15 marks (per question, for Section A)</p>
        <p><strong>Paper 3:</strong> AO1 = 5 marks · AO4 = 15 marks · AO5 = 5 marks (per question, for Section B — note the shift)</p>
        <p><strong>Paper 4:</strong> AO1 = 10 marks · AO2 = 5 marks · AO4 = 10 marks · AO5 = 0 (per question)</p>
        <div className="tip-box">
          <strong>What this tells you:</strong> Paper 3 Section A heavily rewards data handling — you must integrate Texts A, B and C. Paper 3 Section B rewards conceptualisation — you must reference theorists in detail. Paper 4 rewards understanding of ideas in the stimulus and conceptual engagement, but <em>does not</em> reward data handling, which is why feature analysis is the wrong approach.
        </div>
      </div>
    </div>
  );
}

/* ===================================================================
   PAGE 2: SKILLS
   =================================================================== */
function SkillsPage() {
  return (
    <div>
      <div className="page-head">
        <h1>Skills Guide</h1>
        <p>What examiners want · How to do it · Phrases that work</p>
      </div>

      {CONTENT.skills.map(skill => (
        <div key={skill.tag} className="skill-card">
          <div className="skill-card-head">
            <span className="skill-card-tag">{skill.tag}</span>
            <h3>{skill.title}</h3>
          </div>
          <div className="skill-card-body">
            <p>{skill.intro}</p>
            <ul className="bullet-list">
              {skill.points.map((p,i) => <li key={i} dangerouslySetInnerHTML={{__html:p}}/>)}
            </ul>
            {skill.example && (
              <div className="good-box">
                <strong>✓ Model:</strong> {skill.example}
              </div>
            )}
            {skill.warning && (
              <div className="warn-box">
                <strong>⚠️ Common error:</strong> {skill.warning}
              </div>
            )}
          </div>
        </div>
      ))}

      <h2 style={{fontFamily:'var(--serif)', fontSize:'30px', fontWeight:500, color:'var(--ink-deep)', marginTop:'48px', marginBottom:'16px'}}>Mark Scheme Bands</h2>

      <div className="card">
        <h3>Paper 3 — Section A (Language Change)</h3>
        <p style={{fontStyle:'italic',color:'var(--ink-mute)'}}>AO2 + AO4 + AO5 — out of 25 marks</p>
        <div className="bands">
          {CONTENT.bands.p3a.map((b,i) => (
            <div key={i} className="band">
              <div>
                <div className="band-num">Band {b.num}</div>
                <div className="band-marks">{b.marks} marks</div>
              </div>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h3>Paper 3 — Section B (Child Language Acquisition)</h3>
        <p style={{fontStyle:'italic',color:'var(--ink-mute)'}}>AO1 + AO4 — out of 25 marks (AO4 worth 15)</p>
        <div className="bands">
          {CONTENT.bands.p3b.map((b,i) => (
            <div key={i} className="band">
              <div>
                <div className="band-num">Band {b.num}</div>
                <div className="band-marks">{b.marks} marks</div>
              </div>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h3>Paper 4 — Both Sections</h3>
        <p style={{fontStyle:'italic',color:'var(--ink-mute)'}}>AO1 + AO2 + AO4 — out of 25 marks</p>
        <div className="bands">
          {CONTENT.bands.p4.map((b,i) => (
            <div key={i} className="band">
              <div>
                <div className="band-num">Band {b.num}</div>
                <div className="band-marks">{b.marks} marks</div>
              </div>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <h2 style={{fontFamily:'var(--serif)', fontSize:'30px', fontWeight:500, color:'var(--ink-deep)', marginTop:'48px', marginBottom:'16px'}}>Common Pitfalls</h2>

      {CONTENT.pitfalls.map((p, i) => (
        <div key={i} className="card">
          <h3>{p.title}</h3>
          <p>{p.body}</p>
          <div className="good-box">
            <strong>✓ Fix:</strong> {p.fix}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ===================================================================
   PAGE 3: GLOSSARY (theorists + key terms)
   =================================================================== */
function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const all = CONTENT.glossary;
  const filtered = useMemo(() => {
    let items = all;
    if (filter !== "all") items = items.filter(g => g.category === filter);
    if (search.trim()) {
      const s = search.toLowerCase();
      items = items.filter(g =>
        g.term.toLowerCase().includes(s) ||
        g.definition.toLowerCase().includes(s) ||
        (g.example || "").toLowerCase().includes(s)
      );
    }
    return items;
  }, [all, filter, search]);

  const categories = [
    { id: "all", label: "All" },
    { id: "theorist-lc", label: "Language Change" },
    { id: "theorist-cla", label: "Child Language" },
    { id: "theorist-eiw", label: "English in the World" },
    { id: "theorist-las", label: "Language & Self" },
    { id: "term", label: "Key Terms" },
  ];

  return (
    <div>
      <div className="page-head">
        <h1>Key Terms &amp; Theorists</h1>
        <p>Reference all major theorists and concepts across Papers 3 and 4</p>
      </div>

      <div className="glossary-search">
        <input
          type="search"
          placeholder="Search theorists, concepts, terms…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="glossary-filters">
        {categories.map(c => (
          <button
            key={c.id}
            className={`gloss-filter ${filter === c.id ? "active" : ""}`}
            onClick={() => setFilter(c.id)}
          >{c.label}</button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="empty">No matching terms — try a different search.</div>
      ) : (
        <div className="glossary-list">
          {filtered.map((g,i) => (
            <div key={i} className="glossary-item">
              <span className="glossary-tag">{categoryLabel(g.category)}</span>
              <h4>{g.term}</h4>
              <p dangerouslySetInnerHTML={{__html:g.definition}} />
              {g.example && <div className="example">{g.example}</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function categoryLabel(cat) {
  return {
    "theorist-lc": "Language Change · Theorist",
    "theorist-cla": "Child Language · Theorist",
    "theorist-eiw": "English in the World · Theorist",
    "theorist-las": "Language & Self · Theorist",
    "term": "Key Term",
  }[cat] || cat;
}

/* ===================================================================
   PAGE 4: FLASHCARDS
   =================================================================== */
function FlashcardsPage({ progress, setProgress }) {
  const topics = Object.keys(CONTENT.topics);
  const [topic, setTopic] = useState(topics[0]);
  const [filter, setFilter] = useState("all");
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => { setIdx(0); setFlipped(false); }, [topic, filter]);

  const allCards = CONTENT.topics[topic].flashcards;

  const filteredCards = useMemo(() => {
    if (filter === "all") return allCards;
    if (filter === "new") return allCards.filter(c => !progress.flashcards[c.id]);
    if (filter === "review") return allCards.filter(c => progress.flashcards[c.id] === "hard" || progress.flashcards[c.id] === "medium");
    if (filter === "mastered") return allCards.filter(c => progress.flashcards[c.id] === "easy");
    return allCards;
  }, [allCards, filter, progress]);

  const card = filteredCards[idx];
  const status = card ? progress.flashcards[card.id] : null;

  const grade = (g) => {
    if (!card) return;
    setProgress(p => ({...p, flashcards: {...p.flashcards, [card.id]: g}}));
    if (idx < filteredCards.length - 1) {
      setTimeout(() => { setIdx(i => i+1); setFlipped(false); }, 200);
    }
  };

  return (
    <div>
      <div className="page-head">
        <h1>Flashcards</h1>
        <p>Tap the card to flip · Grade your confidence to track progress</p>
      </div>

      <div className="flash-topic-pick">
        <label>Topic</label>
        <select value={topic} onChange={e => setTopic(e.target.value)}>
          {topics.map(t => (
            <option key={t} value={t}>{CONTENT.topics[t].title}</option>
          ))}
        </select>
      </div>

      <div className="flash-controls">
        {[
          {id:"all", label:"All"},
          {id:"new", label:"New"},
          {id:"review", label:"Review"},
          {id:"mastered", label:"Mastered"},
        ].map(f => (
          <button
            key={f.id}
            className={`flash-filter ${filter === f.id ? "active" : ""}`}
            onClick={() => setFilter(f.id)}
          >{f.label}</button>
        ))}
        <span className="flash-counter">
          {filteredCards.length === 0 ? "0 of 0" : `${idx+1} of ${filteredCards.length}`}
        </span>
      </div>

      {filteredCards.length === 0 ? (
        <div className="empty">No cards match this filter — try "All".</div>
      ) : (
        <>
          {status && <div className={`status-pill ${status}`}>{status}</div>}
          <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(f => !f)}>
            <div className="flashcard-inner">
              <div className="flashcard-face front">
                <div className="flash-tag">{card.tag}</div>
                <h3>{card.front}</h3>
                <div className="flash-hint">Tap to reveal</div>
              </div>
              <div className="flashcard-face back">
                <div className="flash-tag">Definition</div>
                <h3>{card.front}</h3>
                <div className="flash-back-text">{card.back}</div>
                {card.example && <div className="flash-example">{card.example}</div>}
              </div>
            </div>
          </div>

          <div className="flash-nav">
            <button
              className="nav-btn"
              onClick={() => { setIdx(i => Math.max(0, i-1)); setFlipped(false); }}
              disabled={idx === 0}
            >← Prev</button>
            <button
              className="nav-btn"
              onClick={() => { setIdx(i => Math.min(filteredCards.length-1, i+1)); setFlipped(false); }}
              disabled={idx >= filteredCards.length - 1}
            >Next →</button>
          </div>

          <div className="grade-row">
            <button className="grade hard" onClick={() => grade("hard")}>✗ Again</button>
            <button className="grade medium" onClick={() => grade("medium")}>~ Almost</button>
            <button className="grade easy" onClick={() => grade("easy")}>✓ Got it</button>
          </div>
        </>
      )}
    </div>
  );
}

/* ===================================================================
   PAGE 5: PRACTICE — past papers with full source texts + model essays
   =================================================================== */
function PracticePage() {
  const [section, setSection] = useState(null);

  if (!section) {
    return (
      <div>
        <div className="page-head">
          <h1>Practice Questions</h1>
          <p>Authentic exam questions and original practice papers · with model essays</p>
        </div>
        <div className="section-pick">
          {CONTENT.practice.map(s => (
            <button key={s.id} className="section-pick-card" onClick={() => setSection(s.id)}>
              <span className="pill">{s.paper}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const sec = CONTENT.practice.find(s => s.id === section);

  return (
    <div>
      <button className="back-btn" onClick={() => setSection(null)}>← All sections</button>
      <div className="page-head">
        <h1>{sec.title}</h1>
        <p>{sec.paper} · {sec.desc}</p>
      </div>
      {sec.questions.map((q, i) => (
        <PracticeQuestion key={i} q={q} paper={sec.paper} />
      ))}
    </div>
  );
}

function PracticeQuestion({ q, paper }) {
  const [tab, setTab] = useState("question");
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="paper-question">
      <div className="paper-q-head">
        <div>
          <h3>{q.title}</h3>
          <div className="paper-q-meta">{q.session || ""}</div>
        </div>
        <div className="paper-q-marks">{q.marks} marks</div>
      </div>

      <div className="paper-q-prompt" dangerouslySetInnerHTML={{__html: q.prompt}} />

      <div className="subtab-bar">
        <button className={`subtab ${tab === "question" ? "active" : ""}`} onClick={() => setTab("question")}>📄 Source Texts</button>
        <button className={`subtab ${tab === "plan" ? "active" : ""}`}     onClick={() => setTab("plan")}>📝 Plan</button>
        <button className={`subtab ${tab === "model" ? "active" : ""}`}    onClick={() => setTab("model")}>✍️ Model Essay</button>
        <button className={`subtab ${tab === "marks" ? "active" : ""}`}    onClick={() => setTab("marks")}>📊 Mark Scheme</button>
      </div>

      <div className="subtab-body">
        {tab === "question" && (
          <div>
            {q.sources && q.sources.length > 0 ? (
              q.sources.map((src, i) => (
                <div key={i}>
                  <div className="source-text">
                    <span className="source-text-meta">{src.label}</span>
                    <div dangerouslySetInnerHTML={{__html: src.text}} />
                  </div>
                </div>
              ))
            ) : (
              <p><em>No source text required for this question.</em></p>
            )}
          </div>
        )}

        {tab === "plan" && (
          <div>
            <h4>How to approach this question</h4>
            <p>{q.plan?.intro || "Plan your essay carefully before writing."}</p>
            {q.plan?.structure && (
              <div className="plan-box">
                <h5>Suggested structure</h5>
                <ol>
                  {q.plan.structure.map((p, i) => <li key={i} dangerouslySetInnerHTML={{__html:p}} />)}
                </ol>
              </div>
            )}
            {q.plan?.theorists && (
              <>
                <h4>Theorists to deploy</h4>
                <ul>
                  {q.plan.theorists.map((t, i) => <li key={i} dangerouslySetInnerHTML={{__html:t}} />)}
                </ul>
              </>
            )}
            {q.plan?.tips && (
              <div className="tip-box" style={{marginTop:'16px'}}>
                <strong>📚 Examiner tip:</strong> {q.plan.tips}
              </div>
            )}
          </div>
        )}

        {tab === "model" && (
          <div>
            {!revealed ? (
              <>
                <p>This is a complete Band 5 model essay. Try writing your own response first, then reveal to compare.</p>
                <button className="reveal-btn" onClick={() => setRevealed(true)}>Reveal model essay</button>
              </>
            ) : (
              <div className="model-essay">
                <h5>Model Essay · Band 5</h5>
                <div dangerouslySetInnerHTML={{__html: q.model || "<p><em>Model essay coming soon.</em></p>"}} />
                {q.markBreakdown && (
                  <div className="essay-mark">
                    <strong>Examiner mark:</strong> {q.markBreakdown}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {tab === "marks" && (
          <div>
            <h4>Mark scheme — what examiners reward</h4>
            <div dangerouslySetInnerHTML={{__html: q.markScheme || "<p>Mark scheme details below.</p>"}} />
          </div>
        )}
      </div>
    </div>
  );
}
