/* ===================================================================
   9093 A Level English Language — Content
   All flashcards, short answers, essay questions, theory, mark bands.
   A LEVEL ONLY — Papers 3 (Language Analysis) + 4 (Language Topics)
   =================================================================== */

export const CONTENT = {
  /* ====================================================
     BANDS — derived from official 9093 mark scheme structure
     5 bands per question, marks out of 25
     ==================================================== */
  bands: {
    p3: [
      {
        band: 5,
        marks: "21–25",
        descriptor:
          "Sophisticated, sustained analysis. Detailed, precise selection of language features from the data. Linguistic concepts, methods and theorists are deployed accurately and synthesised into a fluent argument. Use of corpus / n-gram / table data is integrated, not bolted on.",
      },
      {
        band: 4,
        marks: "16–20",
        descriptor:
          "Effective analysis with accurate use of terminology. Some synthesis of multiple data sources. Theory applied appropriately, though less integrated than Band 5. Most language features are correctly identified and explained for effect.",
      },
      {
        band: 3,
        marks: "11–15",
        descriptor:
          "Some accurate analysis but tends to identify rather than analyse. Theory referenced but not always used to support claims. Limited synthesis between texts/data sources. Terminology mostly accurate.",
      },
      {
        band: 2,
        marks: "6–10",
        descriptor:
          "Mostly descriptive with limited analysis. Few theorists referenced or used inaccurately. Limited grasp of linguistic concepts. Reference to data is general rather than specific.",
      },
      {
        band: 1,
        marks: "1–5",
        descriptor:
          "Very limited engagement. Little to no use of theory or terminology. Largely paraphrasing the source.",
      },
    ],
    p4: [
      {
        band: 5,
        marks: "21–25",
        descriptor:
          "Sophisticated, fluent discursive essay. Strong control of register and low-frequency lexis. Theorists, concepts and approaches are skilfully selected and used to argue a case. Counterarguments considered. Confident conclusion.",
      },
      {
        band: 4,
        marks: "16–20",
        descriptor:
          "Effective essay structure with clear argument. Theory used accurately to support points, with some critical distance. Quotes from the text are well embedded. Mostly accurate and fluent expression.",
      },
      {
        band: 3,
        marks: "11–15",
        descriptor:
          "Logically organised but tends towards description of theories rather than using them to argue. Reference to text is present but sometimes superficial. Some accurate terminology.",
      },
      {
        band: 2,
        marks: "6–10",
        descriptor:
          "Limited engagement with the issues. Theorists named but not really used. Style may slip into journalistic or rhetorical rather than discursive.",
      },
      {
        band: 1,
        marks: "1–5",
        descriptor:
          "Very limited essay. Few or no theorists. Largely opinion without linguistic grounding.",
      },
    ],
  },

  /* ====================================================
     PITFALLS — from examiner reports
     ==================================================== */
  pitfalls: [
    {
      tag: "Paper 4",
      title: "Doing feature analysis instead of debating ideas",
      body:
        "Paper 4 essays are not Paper 1. Discussing graphology, lexis, syntax or phonology of the source text is wasted writing — those frameworks are not assessed here. Paper 4 wants you to debate the issues the text raises, using language theorists to argue a case.",
      fix:
        "Treat the text as a stimulus for an argument, not data to analyse. Quote it briefly to anchor a point, then move into theory and your own argument.",
    },
    {
      tag: "Paper 3",
      title: "Writing a theory essay without analysing the data",
      body:
        "A common Band 3 trap on Paper 3 is producing a discursive essay about language change with the texts as a backdrop. Examiners want analysis of the actual data first, then theory used to explain it.",
      fix:
        "Lead each paragraph with a specific feature from Text A / B / C / the n-gram, then bring in the theorist or concept that explains it.",
    },
    {
      tag: "Paper 3",
      title: "Calling unfamiliar words 'archaic' or 'obsolete'",
      body:
        "Examiners flag this every session. If you don't recognise a word, calling it archaic when it's actually still current is a credibility loss. The safer label is 'low frequency' or 'specialised'.",
      fix:
        "Only label words archaic/obsolete if you can date them. Otherwise: 'a low-frequency item' or 'now restricted to formal registers'.",
    },
    {
      tag: "Paper 3 (CLA)",
      title: "Calling child utterances 'mistakes'",
      body:
        "Children's non-standard utterances are emerging competencies, not errors. The examiner's mark scheme rewards this framing.",
      fix:
        "Use phrases like 'virtuous error' (Chomsky), 'overgeneralisation' or 'emerging morphological control' instead of 'mistake'.",
    },
    {
      tag: "Paper 4",
      title: "Reproducing the Kachru circles in full",
      body:
        "Limited responses summarise the model. Top responses note that the boundaries Kachru drew (1985) have shifted — Outer Circle countries like India and Singapore now have huge populations of native English users.",
      fix:
        "Acknowledge the model briefly, then critique it. Reference Crystal's update or your own examples of shifted boundaries.",
    },
    {
      tag: "Paper 3 (Change)",
      title: "Citing industrialisation/globalisation as throwaway reasons",
      body:
        "Examiners specifically warn against listing 'industrialisation' or 'globalisation' as a cause of change without analysing how it caused the specific change you're discussing.",
      fix:
        "Always link the cause to the specific feature: 'globalisation introduced loanwords like X via Y industry' — show the mechanism.",
    },
    {
      tag: "Paper 4",
      title: "Journalistic style with unanswered rhetorical questions",
      body:
        "Discursive ≠ journalistic. Rhetorical questions you don't answer are flagged as a stylistic weakness. The examiner reports are explicit about this.",
      fix:
        "If you pose a question, answer it within the same paragraph. Better still: rephrase as a statement.",
    },
    {
      tag: "Paper 3 (CLA)",
      title: "Theory dump without textual evidence",
      body:
        "Naming Chomsky, Skinner, Vygotsky, Piaget in turn without anchoring each to a specific transcript moment scores in the lower bands.",
      fix:
        "Pattern: feature → theorist → effect. e.g. 'Joshua produces \"goed\" — a virtuous error (Chomsky) showing internalisation of the regular past-tense rule.'",
    },
    {
      tag: "Both papers",
      title: "Using AO5/data analysis frameworks on Paper 4",
      body:
        "Some students try to do graphological/lexical/grammatical/phonological analysis of the Paper 4 source. AO5 carries 0% on Paper 4 — there is no credit for this.",
      fix:
        "Save the linguistic frameworks for Papers 1, 2, 3. On Paper 4, embed brief quotes to support arguments — that's it.",
    },
  ],

  /* ====================================================
     TOPICS — the four A Level topics
     ==================================================== */
  topics: {
    /* ===========================================
       PAPER 3 — TOPIC 1: LANGUAGE CHANGE
       =========================================== */
    languageChange: {
      paper: 3,
      icon: "↻",
      name: "Language Change",
      tagline:
        "How English has evolved from Early Modern to Contemporary, and the theories that explain why.",
      theoryIntro:
        "Paper 3 Section A asks you to analyse a historical text (Text A) alongside related material (Text B and a corpus n-gram or word table, Text C). You'll need internal and external causes of change, theorists who explain mechanisms, and precise terminology for what's actually changed.",

      flashcards: [
        {
          id: "lc-1",
          category: "Theorist",
          front: "Hockett's Random Fluctuation Theory",
          back: "Charles Hockett (1958) argued that language change is essentially <strong>unpredictable</strong> — driven by random performance errors and contact with other languages that happen to spread. Useful when you can't identify a clear functional reason for a change.",
          example:
            "Spelling shift 'shew' → 'show' has no clear functional driver — random fluctuation.",
        },
        {
          id: "lc-2",
          category: "Theorist",
          front: "Halliday's Functional Theory",
          back: "M.A.K. Halliday: language changes to <strong>meet the needs of its users</strong>. New concepts demand new vocabulary; obsolete concepts shed it.",
          example:
            "'Selfie' (added OED 2013) — coined to fill a functional gap created by smartphone front-cameras.",
        },
        {
          id: "lc-3",
          category: "Theorist",
          front: "Theory of Lexical Gaps",
          back: "A subset of functional theory: where language has a 'gap' (no word for a concept), users will create or borrow one. Often produces compounding, blending or borrowing.",
          example:
            "'Brunch' (blend) filled a gap between breakfast and lunch.",
        },
        {
          id: "lc-4",
          category: "Theorist",
          front: "Aitchison's PIDC Model",
          back: "Jean Aitchison: change spreads in 4 stages — <strong>P</strong>otential, <strong>I</strong>mplementation, <strong>D</strong>iffusion, <strong>C</strong>odification. A useful frame for n-grams: where on the curve is this word?",
          example:
            "'Email' — codified by the 1990s; 'rizz' is currently in implementation/diffusion.",
        },
        {
          id: "lc-5",
          category: "Theorist",
          front: "Chen's S-Curve Model",
          back: "Matthew Chen: language change follows an S-shape — slow start, rapid uptake by middle adopters, then slow tail as final holdouts catch up. Maps neatly onto n-gram data.",
          example:
            "n-gram for 'website' shows classic S-curve shape rising 1995–2010.",
        },
        {
          id: "lc-6",
          category: "Theorist",
          front: "Aitchison's Damp Spoon, Crumbling Castle, Infectious Disease",
          back: "Three <strong>prescriptivist metaphors</strong> Aitchison rejects: language change isn't laziness (damp spoon), decline (crumbling castle), or contagion (infectious disease). She is descriptivist — change is natural, neither good nor bad.",
        },
        {
          id: "lc-7",
          category: "Theorist",
          front: "Crystal's Descriptivism",
          back: "David Crystal: language change should be described, not judged. Resistance to change (e.g. against split infinitives, singular 'they') is usually unfounded prescriptivism.",
        },
        {
          id: "lc-8",
          category: "Theorist",
          front: "Robert Lowth & Samuel Johnson — Prescriptivism",
          back: "Lowth's 'Short Introduction to English Grammar' (1762) imposed Latin-based rules (no split infinitives, no double negatives). Johnson's Dictionary (1755) attempted to <strong>fix</strong> spelling and meaning. Both are key 18th-century forces in standardisation.",
          example:
            "Johnson's spellings (e.g. 'colour' with -our) shaped British vs. American divergence.",
        },
        {
          id: "lc-9",
          category: "Concept",
          front: "Great Vowel Shift (GVS)",
          back: "Roughly 1400–1700: long vowels in English shifted upwards in articulation. Explains why English spelling and pronunciation diverge so much.",
          example:
            "ME 'biten' /biːtən/ → ModE 'bite' /baɪt/. Spellings often retain pre-shift vowels.",
        },
        {
          id: "lc-10",
          category: "Concept",
          front: "Standardisation",
          back: "The historical process by which one variety becomes the prestige form. Driven by: Caxton's printing press (1476), Chancery English, the King James Bible (1611), Johnson's dictionary (1755), grammars (Lowth 1762), mass schooling.",
        },
        {
          id: "lc-11",
          category: "Concept",
          front: "Caxton & the Printing Press",
          back: "William Caxton, 1476: the press required <strong>consistent</strong> spelling and grammar to be commercially viable. Hugely accelerated standardisation by fixing East Midlands dialect as the prestige form.",
        },
        {
          id: "lc-12",
          category: "Term",
          front: "Amelioration",
          back: "A word's meaning becomes <strong>more positive</strong> over time.",
          example: "'Nice' once meant 'foolish, ignorant' (from Latin 'nescius').",
        },
        {
          id: "lc-13",
          category: "Term",
          front: "Pejoration",
          back: "A word's meaning becomes <strong>more negative</strong> over time.",
          example: "'Silly' once meant 'happy, blessed' (OE 'sælig').",
        },
        {
          id: "lc-14",
          category: "Term",
          front: "Broadening (generalisation)",
          back: "A word's meaning expands.",
          example:
            "'Holiday' (← 'holy day') broadened from religious feast to any day off.",
        },
        {
          id: "lc-15",
          category: "Term",
          front: "Narrowing (specialisation)",
          back: "A word's meaning becomes more restricted.",
          example: "'Meat' once meant any food; now only animal flesh.",
        },
        {
          id: "lc-16",
          category: "Term",
          front: "Conversion",
          back: "Word changes class without affixation. Highly productive in contemporary English.",
          example: "'Google' (noun → verb): 'I'll Google it.'",
        },
        {
          id: "lc-17",
          category: "Term",
          front: "Compounding / blending / clipping / acronym / initialism",
          back: "<strong>Compound</strong>: 'laptop'. <strong>Blend</strong>: 'brunch', 'smog'. <strong>Clipping</strong>: 'app' (← application). <strong>Acronym</strong> (pronounced as word): 'NASA'. <strong>Initialism</strong> (letters): 'FBI'.",
        },
        {
          id: "lc-18",
          category: "Term",
          front: "Backformation",
          back: "Creating a new word by removing a perceived affix from an existing one.",
          example: "'Edit' (← 'editor'); 'burgle' (← 'burglar').",
        },
        {
          id: "lc-19",
          category: "Term",
          front: "Telescoping",
          back: "Two adjacent words fuse into one. Shows phonological economy.",
          example: "'Goodbye' ← 'God be with ye'.",
        },
        {
          id: "lc-20",
          category: "Term",
          front: "Coalescence",
          back: "Two distinct sounds merge into one.",
          example:
            "Yod-coalescence: 'tune' /tjuːn/ → /tʃuːn/ in many British accents.",
        },
        {
          id: "lc-21",
          category: "Concept",
          front: "Substratum Theory",
          back: "Change occurs when speakers of one language influence the dominant language they're acquiring. Explains many borrowings and accent features in post-colonial Englishes.",
        },
        {
          id: "lc-22",
          category: "Concept",
          front: "Wave Model",
          back: "Linguistic changes spread outward from a centre like ripples in water — geographically and socially. Central innovations reach peripheries last.",
        },
        {
          id: "lc-23",
          category: "Concept",
          front: "Tree Model",
          back: "Languages and varieties branch like a family tree from a common ancestor. Useful for showing relationships (e.g. PIE → Germanic → English) but doesn't capture mutual influence.",
        },
        {
          id: "lc-24",
          category: "Term",
          front: "Etymology vs. derivation",
          back: "<strong>Etymology</strong>: the historical origin of a word. <strong>Derivation</strong>: the formation of a new word from an existing one (usually via affixation).",
        },
        {
          id: "lc-25",
          category: "Term",
          front: "Inflection",
          back: "A grammatical ending added to indicate tense, number, case etc. English has lost most of its OE inflections — a major historical change.",
          example:
            "OE: cyning, cyninges, cyninge, cyninges → ModE: king, king's, kings.",
        },
        {
          id: "lc-26",
          category: "Concept",
          front: "Internal vs external causes of change",
          back: "<strong>Internal</strong>: phonological economy, analogy, ease of articulation, lexical gaps. <strong>External</strong>: contact, borrowing, technology, migration, prestige, sociopolitical events. Top-band answers identify which cause(s) explain a specific change.",
        },
        {
          id: "lc-27",
          category: "Concept",
          front: "Reading n-gram data",
          back: "Look at: shape of the curve (S? sudden spike? plateau?), peak/trough years, relative frequency, plausible external events. Map onto Aitchison's PIDC or Chen's S-curve. <strong>Predict</strong> future trajectory.",
        },
        {
          id: "lc-28",
          category: "Tip",
          front: "'Low frequency' vs 'archaic'",
          back: "Examiners specifically warn: don't label a word archaic just because you don't recognise it. Use 'low frequency' or 'specialised register' if uncertain. Only call something archaic if you can date it.",
        },
        {
          id: "lc-29",
          category: "Concept",
          front: "Reasons for graphological change",
          back: "Spelling change driven by: Norman scribal conventions, GVS lag, printers fixing spellings, Johnson's codification, US reforms (Webster), tech (autocorrect, abbreviations in CMC).",
        },
        {
          id: "lc-30",
          category: "Concept",
          front: "Cultural Transmission Theory",
          back: "Hockett: language is passed from generation to generation through teaching/learning, not biological inheritance. Explains how change accumulates and spreads through social groups.",
        },
      ],

      short: [
        {
          id: "lc-s1",
          category: "Definition",
          marks: 3,
          question:
            "Define amelioration and give one example with original and current meanings.",
          model:
            "<p>Amelioration is the semantic process by which a word acquires <strong>more positive connotations</strong> over time. For example, 'nice' originally meant 'foolish' or 'ignorant' (from Latin <em>nescius</em>) but ameliorated through Middle English to mean 'pleasant' or 'agreeable' in contemporary English.</p>",
          keyTerms: ["amelioration", "semantic change", "connotation"],
        },
        {
          id: "lc-s2",
          category: "Definition",
          marks: 3,
          question: "Distinguish between a blend, a compound and a clipping.",
          model:
            "<p>A <strong>compound</strong> joins two complete words ('laptop'). A <strong>blend</strong> fuses parts of two words ('brunch' ← breakfast + lunch). A <strong>clipping</strong> shortens an existing word ('app' ← application). All three are productive word-formation processes in contemporary English.</p>",
        },
        {
          id: "lc-s3",
          category: "Theory",
          marks: 4,
          question:
            "Explain how Aitchison's PIDC model could be applied to an n-gram showing rapid growth from 2005 to 2020.",
          model:
            "<p>Aitchison's PIDC model proposes four stages: Potential, Implementation, Diffusion, Codification. A 2005–2020 spike suggests the word entered the <strong>Implementation</strong> stage around 2005 (early adopters using it) and is currently in <strong>Diffusion</strong> (rapid spread through the speech community). It may be approaching <strong>Codification</strong> if it has been added to major dictionaries (e.g. OED) — at which point growth typically plateaus, fitting Chen's S-curve.</p>",
          keyTerms: ["Potential", "Implementation", "Diffusion", "Codification", "S-curve"],
        },
        {
          id: "lc-s4",
          category: "Theory",
          marks: 4,
          question:
            "What is the difference between Hockett's Random Fluctuation Theory and Halliday's Functional Theory? When would you cite each?",
          model:
            "<p><strong>Random Fluctuation</strong> (Hockett, 1958) explains change as essentially unpredictable — performance errors that happen to spread. Cite this when no clear functional driver exists (e.g. arbitrary spelling shifts like 'shew' → 'show').</p><p><strong>Functional Theory</strong> (Halliday) explains change as need-driven: language adapts to fit users' communicative needs. Cite this for new lexis filling lexical gaps ('selfie', 'podcast') or for technology-driven coinages.</p>",
          keyTerms: ["random fluctuation", "functional theory", "lexical gap"],
        },
        {
          id: "lc-s5",
          category: "History",
          marks: 4,
          question:
            "How did the printing press contribute to standardisation of English?",
          model:
            "<p>Caxton's introduction of the printing press in 1476 required <strong>consistent</strong> spelling and grammar for commercial viability — printers could not afford regional variation. Caxton chose East Midlands dialect (the variety of London, Oxford and Cambridge) as his base, fixing it as the prestige form. The press also dramatically increased text circulation, accelerating exposure to a shared written standard. Combined with later forces (Chancery English, Johnson's dictionary, Lowth's grammar), this anchored Standard English as we recognise it.</p>",
          keyTerms: [
            "Caxton",
            "standardisation",
            "East Midlands dialect",
            "prestige form",
          ],
        },
        {
          id: "lc-s6",
          category: "Concept",
          marks: 3,
          question:
            "Why should you avoid labelling an unfamiliar word as 'archaic'?",
          model:
            "<p>Examiner reports specifically caution against this. A word may be unfamiliar to you but still in current use in specialised registers (legal, medical, technical) — labelling it 'archaic' is then inaccurate. The safer alternatives are <strong>'low frequency'</strong> or <strong>'restricted to specialised registers'</strong>. Only use 'archaic' or 'obsolete' when you can confidently date the loss of currency.</p>",
          examinerNote:
            "This is a recurring point in examiner reports — students lose marks for confidently mislabelling vocabulary they don't recognise.",
        },
        {
          id: "lc-s7",
          category: "Theory",
          marks: 3,
          question:
            "Explain Hockett's Cultural Transmission Theory in two sentences.",
          model:
            "<p>Hockett's Cultural Transmission Theory states that language is passed from one generation to the next through <strong>teaching and learning</strong>, not biological inheritance. This is why language accumulates change socially and varies across communities, even though human linguistic capacity is universal.</p>",
          keyTerms: ["cultural transmission", "Hockett"],
        },
        {
          id: "lc-s8",
          category: "Concept",
          marks: 3,
          question:
            "What is the Great Vowel Shift and why does it matter for spelling?",
          model:
            "<p>The Great Vowel Shift (c. 1400–1700) was a systematic upward shift of long vowels in English. Because the printing press fixed spellings during the shift, modern spellings often reflect <strong>pre-shift</strong> pronunciations — explaining why English spelling and pronunciation diverge so heavily (e.g. 'bite', 'name', 'house').</p>",
          keyTerms: ["Great Vowel Shift", "GVS", "spelling–pronunciation gap"],
        },
        {
          id: "lc-s9",
          category: "Term",
          marks: 2,
          question:
            "Identify the word-formation process in each: 'edit' (from 'editor'), 'smog', 'NASA'.",
          model:
            "<p>'Edit' — <strong>backformation</strong> (a word created by removing a perceived affix). 'Smog' — <strong>blend</strong> (smoke + fog). 'NASA' — <strong>acronym</strong> (initial letters pronounced as a word).</p>",
        },
        {
          id: "lc-s10",
          category: "Concept",
          marks: 4,
          question:
            "Give two internal and two external causes of language change, with examples.",
          model:
            "<p><strong>Internal:</strong> (1) ease of articulation — yod-coalescence ('tune' /tjuːn/ → /tʃuːn/); (2) analogy — regularising irregular plurals (some speakers say 'octopuses' rather than 'octopi').</p><p><strong>External:</strong> (1) language contact — French loanwords post-1066 ('government', 'beef'); (2) technology — coinages like 'tweet', 'unfriend' driven by social media.</p>",
          keyTerms: [
            "internal change",
            "external change",
            "ease of articulation",
            "language contact",
          ],
        },
      ],

      long: [
        {
          id: "lc-l1",
          section: "Section A: Language Change",
          question:
            "Read Texts A, B and C. Analyse how Text A exemplifies the various ways in which the English language has changed over time. In your answer, you should refer to specific details from Texts A, B and C, as well as to ideas and examples from your wider study of language change.",
          stimulus:
            "<p><em>(In the actual exam you will receive: Text A — a historical extract, often Early Modern or 18th–19th century; Text B — a contemporary text on a related theme; Text C — an n-gram or word-frequency table covering items from Text A.)</em></p><p>For practice, imagine Text A is a 1755 extract from Johnson's Preface to the Dictionary, Text B is a contemporary linguistics blog post on dictionary-making, and Text C is an n-gram tracking 'orthography', 'spelling' and 'lexicon' from 1700–2020.</p>",
          plan: `
            <h5>Suggested structure (5 paragraphs)</h5>
            <ol>
              <li><strong>Intro</strong>: state your approach — analyse Text A as a product of the standardisation period, using B and C to show what has and hasn't changed. Name 2–3 frameworks you'll use (Aitchison's PIDC, Hockett, Halliday).</li>
              <li><strong>Lexis</strong>: identify low-frequency or semantically shifted items in Text A. Show pejoration/amelioration/narrowing/broadening with examples. Cross-reference Text C frequencies. Apply Halliday's functional theory if items have fallen out of use because the concept has.</li>
              <li><strong>Grammar &amp; syntax</strong>: comment on inflectional remnants, sentence length, subordination, archaic auxiliaries ('doth', 'hath'). Connect to standardisation (Lowth's prescriptivism) and the loss of OE inflections.</li>
              <li><strong>Orthography &amp; graphology</strong>: long-s 'ſ', capitalisation conventions, spelling pre-Johnson. Reference GVS as cause of spelling–pronunciation lag, Caxton/Johnson as standardisers.</li>
              <li><strong>Synthesis &amp; prediction</strong>: use Text C n-gram to map current trajectory of one item using Chen's S-curve. Predict future direction and link to one external cause (digital tech, globalisation) — but show the mechanism, don't just name-drop.</li>
            </ol>
          `,
          theorists: [
            "Hockett — Random Fluctuation, Cultural Transmission",
            "Halliday — Functional Theory, Lexical Gaps",
            "Aitchison — PIDC model, descriptivism (rejecting damp spoon/crumbling castle/infectious disease)",
            "Chen — S-curve",
            "Crystal — descriptivism",
            "Lowth (1762) and Johnson (1755) — prescriptivism and codification",
            "Caxton (1476) — printing press and standardisation",
          ],
          markScheme: `
            <p><strong>For Band 5 on this question you need:</strong></p>
            <ul>
              <li>Specific, accurately-named features from Text A (not just 'old-fashioned vocabulary').</li>
              <li>Cross-reference between A, B and C — synthesis is 40% of marks (AO5).</li>
              <li>Theorists used to <em>explain</em> features, not just listed.</li>
              <li>Some discussion of internal vs external causes — with the mechanism shown.</li>
              <li>Engagement with the n-gram data, including a tentative prediction.</li>
            </ul>
          `,
          examinerTips: `
            <ul>
              <li>Don't write a discursive essay about language change — analyse the data first, theory second.</li>
              <li>Avoid 'archaic' for any word you don't recognise — say 'low frequency' if uncertain.</li>
              <li>Consider unusual spacing and punctuation (Early Modern conventions).</li>
              <li>Comment on graphology (long-s, capitalisation) — this is often missed.</li>
              <li>Globalisation/industrialisation must be discussed analytically, with the mechanism shown.</li>
              <li>Try to draw findings together from at least two texts — don't analyse them in isolation.</li>
            </ul>
          `,
          checklist: [
            "I have analysed at least 6 specific features from Text A.",
            "I have referred to Text B at least twice for comparison.",
            "I have analysed the n-gram / word table (Text C) and made a prediction.",
            "I have named and applied at least 3 theorists or models accurately.",
            "I have discussed at least one internal AND one external cause of change.",
            "I have commented on graphology, lexis, semantics, and grammar (not just one level).",
            "I have not labelled unfamiliar words as 'archaic' without evidence.",
            "I have shown the mechanism behind any cause I cite (not just named it).",
            "My essay is around 600–900 words.",
          ],
        },
        {
          id: "lc-l2",
          section: "Section A: Language Change",
          question:
            "Analyse how Text A exemplifies the changing nature of English vocabulary and meaning. Refer to Texts B and C and to ideas from your wider study.",
          stimulus:
            "<p><em>Practice scenario: Text A is a 1611 King James Bible extract; Text B is a modern translation of the same passage; Text C is a collocation table for 'charity', 'love' and 'compassion' from 1600–2020.</em></p>",
          plan: `
            <h5>Suggested structure</h5>
            <ol>
              <li><strong>Intro</strong>: signal that this answer focuses on lexico-semantic change, framed by Halliday and Aitchison. Note that B/C let you trace specific trajectories.</li>
              <li><strong>Semantic shifts</strong>: pick 2–3 words showing pejoration, amelioration, narrowing or broadening. Compare A and B directly. (e.g. 'charity' has narrowed from 'love (agape)' to 'donation'.)</li>
              <li><strong>Obsolete vs low-frequency lexis</strong>: distinguish carefully. Reference Text C frequencies as evidence.</li>
              <li><strong>Collocational change</strong>: use Text C to show how a word's collocates have shifted (a powerful Band 5 move). Apply Hockett's cultural transmission to explain how collocation patterns spread socially.</li>
              <li><strong>Conclusion</strong>: synthesise — what does this tell us about how meaning changes? Where on Aitchison's PIDC are any current shifts visible in Text C?</li>
            </ol>
          `,
          theorists: [
            "Halliday — Functional Theory",
            "Aitchison — PIDC, descriptivism",
            "Hockett — Cultural Transmission, Random Fluctuation",
            "Chen — S-curve (for n-gram if used)",
          ],
          markScheme: `
            <p>This question rewards <strong>collocation analysis</strong> heavily. Top-band responses use Text C as a substantive piece of evidence, not a footnote.</p>
            <ul>
              <li>Specific named processes (pejoration etc.) with worked examples.</li>
              <li>Direct A vs B comparison.</li>
              <li>Use of frequency / collocation data to support claims about meaning shift.</li>
            </ul>
          `,
          examinerTips: `
            <ul>
              <li>Don't list semantic-change types — apply them to specific words and trace the shift.</li>
              <li>Collocation data is gold — use it to evidence meaning change rather than relying on intuition.</li>
              <li>Be careful with 'religious' lexis — it often persists in restricted registers, so 'low frequency' is safer than 'obsolete'.</li>
            </ul>
          `,
          checklist: [
            "I have traced at least 3 specific words across Text A and Text B.",
            "I have named the semantic process(es) involved (pejoration / amelioration / narrowing / broadening).",
            "I have used Text C as evidence, not decoration.",
            "I have applied Halliday or Hockett to explain at least one shift.",
            "I have distinguished low-frequency from genuinely obsolete vocabulary.",
            "My word count is 600–900.",
          ],
        },
      ],

      theory: [
        {
          name: "Hockett",
          label: "Random Fluctuation Theory & Cultural Transmission",
          body:
            "<p><strong>Random Fluctuation Theory (1958):</strong> language change is essentially unpredictable. Performance errors and contact accidents happen to spread. Useful when no functional driver is visible.</p><p><strong>Cultural Transmission:</strong> language is passed generation to generation through teaching and learning, not biology — which is why varieties accumulate change and diverge socially.</p>",
        },
        {
          name: "Halliday",
          label: "Functional Theory & Lexical Gaps",
          body:
            "<p>Language adapts to <strong>meet users' needs</strong>. Where a concept exists with no word, users coin/borrow one (lexical gap). Conversely, words for obsolete concepts shed from use. Strong for explaining tech-driven coinages.</p>",
        },
        {
          name: "Aitchison",
          label: "PIDC, S-curve and descriptivist metaphors",
          body:
            "<p><strong>PIDC stages</strong>: Potential → Implementation → Diffusion → Codification. Use to locate a word on its lifecycle, especially with n-gram data.</p><p>Aitchison rejects three prescriptivist metaphors of decline: <em>damp spoon</em> (laziness), <em>crumbling castle</em> (decay), <em>infectious disease</em> (contagion). She is a descriptivist — change is not decline.</p>",
        },
        {
          name: "Chen",
          label: "S-curve model",
          body:
            "<p>Linguistic change follows an S-shape over time: slow start, rapid uptake by middle adopters, slow tail of resistance. Maps directly onto n-gram curves.</p>",
        },
        {
          name: "Lowth & Johnson",
          label: "18th-century prescriptivism and codification",
          body:
            "<p>Lowth's <em>Short Introduction to English Grammar</em> (1762) imposed Latin-derived rules — many still taught today. Johnson's Dictionary (1755) attempted to fix spellings and meanings. Both are pivotal in standardisation but also in creating prescriptivist 'rules' Aitchison and Crystal critique.</p>",
        },
        {
          name: "Crystal",
          label: "Descriptivism",
          body:
            "<p>Crystal repeatedly argues that change is natural and that prescriptive resistance is usually misplaced. Useful counterweight when discussing items some readers might consider 'corruptions'.</p>",
        },
        {
          name: "Caxton",
          label: "Printing press and standardisation (1476)",
          body:
            "<p>The press required consistent spelling for commercial viability. Caxton chose East Midlands dialect, fixing it as the prestige form. Massively accelerated standardisation alongside the King James Bible (1611) and Chancery English.</p>",
        },
        {
          name: "Great Vowel Shift",
          label: "c. 1400–1700",
          body:
            "<p>Systematic upward shift of long vowels. Because spelling was being fixed by print during the shift, English orthography preserves pre-shift vowels — explaining the persistent gap between spelling and pronunciation.</p>",
        },
        {
          name: "Internal vs external causes",
          body:
            "<p><strong>Internal</strong>: ease of articulation, analogy, lexical gaps, phonological economy. <strong>External</strong>: contact, borrowing, technology, prestige, sociopolitical events. Top-band answers identify which type of cause explains a specific change AND show the mechanism.</p>",
        },
      ],
    },

    /* ===========================================
       PAPER 3 — TOPIC 2: CHILD LANGUAGE ACQUISITION
       =========================================== */
    childLanguage: {
      paper: 3,
      icon: "✦",
      name: "Child Language Acquisition",
      tagline:
        "How children acquire language from babbling to post-telegraphic — and the theorists who explain why.",
      theoryIntro:
        "Paper 3 Section B asks you to analyse a transcript of conversation involving a child aged 0–8. You'll need stages of acquisition (Brown, Piaget), competing theories (Skinner, Chomsky, Vygotsky, Bruner, Tomasello), Hallidayan functions, and CDS / scaffolding features.",

      flashcards: [
        {
          id: "cla-1",
          category: "Stages",
          front: "The 5 stages of early language development",
          back: "<strong>1. Pre-linguistic / cooing</strong> (0–4m). <strong>2. Babbling</strong> (4–9m, reduplicated then variegated). <strong>3. Holophrastic</strong> (12–18m, one-word). <strong>4. Two-word</strong> (18–24m). <strong>5. Telegraphic</strong> (24–36m, content words only). Then <strong>post-telegraphic</strong> (3y+) with grammatical morphemes.",
        },
        {
          id: "cla-2",
          category: "Theorist",
          front: "Skinner — Behaviourism / Imitation & Reinforcement",
          back: "B.F. Skinner (1957): children learn language through <strong>imitation</strong> of caregivers and <strong>operant conditioning</strong> (positive reinforcement for correct utterances, correction for incorrect). <em>Critique:</em> can't explain virtuous errors or novel utterances.",
          example:
            "Child says 'milk' → caregiver smiles and provides milk → behaviour reinforced.",
        },
        {
          id: "cla-3",
          category: "Theorist",
          front: "Chomsky — LAD, Universal Grammar, Innatism",
          back: "Noam Chomsky: children are born with a <strong>Language Acquisition Device</strong> (LAD), an innate grammatical scaffold (Universal Grammar). Explains the <strong>poverty of the stimulus</strong> (children produce sentences they've never heard) and <strong>virtuous errors</strong> ('goed', 'mouses') showing rule internalisation.",
        },
        {
          id: "cla-4",
          category: "Theorist",
          front: "Bruner — LASS",
          back: "Jerome Bruner: the <strong>Language Acquisition Support System</strong> — caregivers provide structured interaction (book-sharing, peekaboo, ritualised exchanges) that scaffolds language. A social complement to Chomsky's LAD.",
        },
        {
          id: "cla-5",
          category: "Theorist",
          front: "Vygotsky — ZPD and Scaffolding",
          back: "Lev Vygotsky: language develops through social interaction with more knowledgeable others within the <strong>Zone of Proximal Development</strong> (the gap between what the child can do alone and with help). Adults <strong>scaffold</strong> by adjusting support to the child's level.",
          example:
            "Mother asks 'what colour is it?' then provides the answer if the child hesitates.",
        },
        {
          id: "cla-6",
          category: "Theorist",
          front: "Piaget — Cognitive Development Theory",
          back: "Jean Piaget: language is dependent on cognitive development. Stages: <strong>Sensorimotor</strong> (0–2y), <strong>Pre-operational</strong> (2–7y, egocentric speech), <strong>Concrete operational</strong> (7–11y), <strong>Formal operational</strong> (11+). A 5-year-old should be in pre-operational — expect egocentrism, animism, and symbolic play in speech.",
        },
        {
          id: "cla-7",
          category: "Theorist",
          front: "Tomasello — Usage-Based / Social Pragmatic",
          back: "Michael Tomasello: children acquire language through <strong>joint attention</strong> and <strong>intention-reading</strong>, not innate grammar. Patterns emerge from usage. A modern challenge to Chomsky's nativism.",
        },
        {
          id: "cla-8",
          category: "Theorist",
          front: "Bellugi — Stages of pronoun and negation acquisition",
          back: "Ursula Bellugi mapped 3 stages of <strong>pronoun acquisition</strong>: (1) own name ('Joshua want'), (2) I/me confusion ('me do it'), (3) correct subject/object distinction. Also 3 stages of <strong>negation</strong>: (1) 'no' fronted ('no eat'), (2) 'no/not' inserted ('me no want'), (3) auxiliary + 'not' ('I don't want').",
        },
        {
          id: "cla-9",
          category: "Theorist",
          front: "Brown — Mean Length of Utterance (MLU)",
          back: "Roger Brown: MLU (in morphemes) tracks development. Roughly: Stage I MLU ~1.75 (telegraphic), Stage II ~2.25, Stage V ~4.0. Brown also identified the order of acquisition of 14 grammatical morphemes (-ing, plurals, possessives, etc.).",
        },
        {
          id: "cla-10",
          category: "Theorist",
          front: "Halliday — 7 Functions of Language",
          back: "<strong>Instrumental</strong> (I want), <strong>Regulatory</strong> (do as I say), <strong>Interactional</strong> (me and you), <strong>Personal</strong> (here I am), <strong>Heuristic</strong> (tell me why), <strong>Imaginative</strong> (let's pretend), <strong>Representational</strong> (I'll tell you something). Top-band answers identify multiple functions in a transcript.",
        },
        {
          id: "cla-11",
          category: "Concept",
          front: "Child-Directed Speech (CDS) / Caretaker Speech",
          back: "Modified speech adults use with children: <strong>higher pitch, exaggerated intonation, slower tempo, shorter utterances, simplified lexis, repetition, expansion, recasting, more questions, frequent imperatives, diminutives</strong>. Bruner sees CDS as essential scaffolding.",
        },
        {
          id: "cla-12",
          category: "Concept",
          front: "Recasting vs Explicit correction",
          back: "<strong>Recasting</strong>: caregiver repeats the child's utterance correctly without flagging the error. ('I goed' → 'Yes, you went there!') <strong>Explicit correction</strong>: caregiver names the error ('No, it's \"went\"'). Recasting is more common and considered more developmentally effective.",
        },
        {
          id: "cla-13",
          category: "Concept",
          front: "Virtuous errors",
          back: "Errors that show the child has <strong>internalised a rule</strong> and is overgeneralising it. ('Goed' for 'went' shows mastery of the regular -ed past tense). Critical evidence against Skinner (the child has produced something they've never heard) and for Chomsky.",
        },
        {
          id: "cla-14",
          category: "Phonology",
          front: "Consonant cluster reduction",
          back: "Children simplify clusters they can't yet produce. 'Spider' → 'pider'; 'street' → 'teet'. Disappears as articulators mature.",
        },
        {
          id: "cla-15",
          category: "Phonology",
          front: "Gliding",
          back: "Liquid consonants /r/ and /l/ replaced by glides /w/ and /j/. 'Rabbit' → 'wabbit'; 'lolly' → 'yoyy'. Common in early speech.",
        },
        {
          id: "cla-16",
          category: "Phonology",
          front: "Stopping & Fronting",
          back: "<strong>Stopping</strong>: replacing fricatives with stops ('sun' → 'tun'). <strong>Fronting</strong>: replacing back consonants with front ones ('car' → 'tar'). Both are normal phonological processes that resolve with age.",
        },
        {
          id: "cla-17",
          category: "Concept",
          front: "Holophrase",
          back: "A single word used to express a whole proposition. 'Milk' could mean 'I want milk', 'is that milk?', 'you spilled the milk'. Context and intonation carry meaning.",
        },
        {
          id: "cla-18",
          category: "Concept",
          front: "Telegraphic stage",
          back: "Around 24–36 months: utterances of content words only, with grammatical morphemes (articles, auxiliaries, inflections) omitted. 'Daddy gone work.' Resembles a telegram — hence the name.",
        },
        {
          id: "cla-19",
          category: "Conversation",
          front: "Adjacency pairs",
          back: "A two-part exchange where the first utterance projects a specific second (greeting–greeting, question–answer, request–acceptance/refusal). Children acquire adjacency pair conventions early through CDS.",
        },
        {
          id: "cla-20",
          category: "Conversation",
          front: "Turn-taking",
          back: "The conversational rule that one speaker speaks at a time. Children learn this through scaffolded interaction (peekaboo is a turn-taking ritual). Look for clean turn transitions or overlap in transcripts.",
        },
        {
          id: "cla-21",
          category: "Theorist",
          front: "The poverty of the stimulus",
          back: "Chomsky's argument: children produce grammatical sentences they've never heard, so they can't be learning purely by imitation. Used to support innate grammatical knowledge (LAD).",
        },
        {
          id: "cla-22",
          category: "Concept",
          front: "Critical period hypothesis",
          back: "Lenneberg: there is a window (roughly 0–puberty) during which language acquisition is biologically privileged. Cases like Genie support this — first-language acquisition outside the window is severely impaired.",
        },
        {
          id: "cla-23",
          category: "Transcript",
          front: "Transcription conventions to know",
          back: "<strong>(.)</strong> micropause; <strong>(2)</strong> 2-second pause; <strong>=</strong> latched/no gap; <strong>[ ]</strong> overlapping speech; <strong>UPPER</strong> increased volume; <strong>°word°</strong> quieter; <strong>::</strong> elongated sound; <strong>(h)</strong> in-breath laugh.",
        },
        {
          id: "cla-24",
          category: "Concept",
          front: "Overextension & Underextension",
          back: "<strong>Overextension</strong>: applying a word too broadly (calling all four-legged animals 'dog'). <strong>Underextension</strong>: applying it too narrowly (using 'dog' only for the family pet). Both reflect emerging semantic categorisation.",
        },
        {
          id: "cla-25",
          category: "Tip",
          front: "How to frame child 'errors'",
          back: "Don't call them mistakes. They're <strong>emerging competencies</strong>, <strong>virtuous errors</strong>, or <strong>overgeneralisations</strong>. Examiner reports specifically mark down 'mistake' framing.",
        },
      ],

      short: [
        {
          id: "cla-s1",
          category: "Stages",
          marks: 4,
          question:
            "Outline the five main stages of early language development with approximate ages.",
          model:
            "<p><strong>1. Pre-linguistic / cooing</strong> (0–4 months): vowel-like sounds. <strong>2. Babbling</strong> (4–9 months): reduplicated ('bababa') then variegated ('badaga') consonant-vowel sequences. <strong>3. Holophrastic</strong> (12–18 months): one-word utterances expressing whole propositions. <strong>4. Two-word</strong> (18–24 months): basic syntactic combinations ('Daddy go'). <strong>5. Telegraphic</strong> (24–36 months): content-word utterances with grammatical morphemes omitted ('Mummy give cup'). Beyond 3 years: <strong>post-telegraphic</strong>, with morphemes and complex syntax emerging.</p>",
          keyTerms: [
            "cooing",
            "babbling",
            "holophrastic",
            "telegraphic",
            "post-telegraphic",
          ],
        },
        {
          id: "cla-s2",
          category: "Theory",
          marks: 4,
          question:
            "Compare Skinner's behaviourist account of language acquisition with Chomsky's innatist account.",
          model:
            "<p><strong>Skinner (1957)</strong> argued language is learned through <strong>imitation and operant conditioning</strong> — caregivers reinforce correct utterances and correct incorrect ones. This explains vocabulary acquisition and conversational routines but cannot explain novel utterances or virtuous errors.</p><p><strong>Chomsky</strong> argued for an innate <strong>Language Acquisition Device</strong> (LAD) and Universal Grammar. Children produce sentences they've never heard (poverty of the stimulus) and make rule-based virtuous errors ('goed') — evidence of internalised grammatical principles, not imitation.</p><p>Most modern accounts integrate both, recognising biological predisposition <em>and</em> environmental input.</p>",
          keyTerms: [
            "behaviourism",
            "operant conditioning",
            "LAD",
            "Universal Grammar",
            "poverty of the stimulus",
            "virtuous error",
          ],
        },
        {
          id: "cla-s3",
          category: "Theory",
          marks: 4,
          question:
            "What is meant by 'scaffolding' (Vygotsky / Bruner) in CLA, and how would you identify it in a transcript?",
          model:
            "<p><strong>Scaffolding</strong> is the temporary structured support an adult provides within the child's <strong>Zone of Proximal Development</strong> (Vygotsky) so the child can perform something just beyond their current independent ability. Bruner formalised this as the <strong>Language Acquisition Support System</strong> (LASS).</p><p>In a transcript, look for: <strong>recasting</strong> (correcting without flagging), <strong>expansion</strong> (extending the child's utterance), <strong>open-ended questions</strong> ('what's that doing?'), <strong>modelling</strong> ('shall we say \"please\"?'), and <strong>fading</strong> (the adult withdrawing support as the child manages alone).</p>",
          keyTerms: ["scaffolding", "ZPD", "LASS", "recasting", "expansion"],
        },
        {
          id: "cla-s4",
          category: "Definition",
          marks: 3,
          question:
            "Define 'virtuous error' and explain why it is significant for CLA theory.",
          model:
            "<p>A <strong>virtuous error</strong> is a non-standard utterance that demonstrates the child has internalised a grammatical rule and is overgeneralising it (e.g. 'goed' applies the regular -ed past tense rule to an irregular verb). It is significant because the child has produced a form they have never heard — disproving pure imitation (Skinner) and supporting innate rule-learning (Chomsky).</p>",
          keyTerms: ["virtuous error", "overgeneralisation", "Chomsky"],
          examinerNote:
            "Always frame these as virtuous errors, not 'mistakes' — examiners reward this terminology.",
        },
        {
          id: "cla-s5",
          category: "Functions",
          marks: 4,
          question:
            "List Halliday's seven functions of language and give a likely child utterance for each.",
          model:
            "<p><strong>Instrumental</strong> ('want milk'); <strong>Regulatory</strong> ('no go!'); <strong>Interactional</strong> ('hi Mummy'); <strong>Personal</strong> ('me happy'); <strong>Heuristic</strong> ('what dat?'); <strong>Imaginative</strong> ('I'm a dragon'); <strong>Representational</strong> ('cat sleeping').</p>",
          keyTerms: [
            "instrumental",
            "regulatory",
            "interactional",
            "personal",
            "heuristic",
            "imaginative",
            "representational",
          ],
        },
        {
          id: "cla-s6",
          category: "CDS",
          marks: 4,
          question:
            "Identify five characteristic features of Child-Directed Speech (CDS) and explain why each helps acquisition.",
          model:
            "<p><strong>(1) Higher pitch &amp; exaggerated intonation</strong> — captures and holds attention. <strong>(2) Slower tempo &amp; clearer articulation</strong> — gives the child processing time. <strong>(3) Shorter, simpler utterances</strong> — easier to parse. <strong>(4) Repetition &amp; expansion</strong> — multiple exposures to a structure, with extensions modelling next-step grammar. <strong>(5) Frequent questions and imperatives</strong> — invite turn-taking and embed pragmatic rules.</p>",
          keyTerms: [
            "child-directed speech",
            "expansion",
            "turn-taking",
            "scaffolding",
          ],
        },
        {
          id: "cla-s7",
          category: "Phonology",
          marks: 3,
          question:
            "Identify the phonological process in each: 'spoon' → 'poon', 'rabbit' → 'wabbit', 'sun' → 'tun'.",
          model:
            "<p>'Spoon' → 'poon': <strong>consonant cluster reduction</strong>. 'Rabbit' → 'wabbit': <strong>gliding</strong> (liquid /r/ replaced by glide /w/). 'Sun' → 'tun': <strong>stopping</strong> (fricative /s/ replaced by stop /t/).</p>",
          keyTerms: [
            "consonant cluster reduction",
            "gliding",
            "stopping",
          ],
        },
        {
          id: "cla-s8",
          category: "Theory",
          marks: 3,
          question:
            "How would Piaget explain the speech of a 4-year-old using extensive imaginative play language?",
          model:
            "<p>Piaget would place a 4-year-old in the <strong>pre-operational stage</strong> (2–7 years), characterised by <strong>symbolic thought</strong> and <strong>egocentrism</strong>. Imaginative play language ('I'm the dragon, you're the king') reflects developing symbolic representation and the use of language to construct mental scenarios — but speech often remains egocentric (the child does not yet fully take the listener's perspective).</p>",
          keyTerms: ["pre-operational", "symbolic thought", "egocentrism"],
        },
        {
          id: "cla-s9",
          category: "Definition",
          marks: 3,
          question:
            "Explain the difference between recasting and explicit correction with a brief example.",
          model:
            "<p><strong>Recasting</strong>: the caregiver repeats the child's utterance in correct form without highlighting the error. <em>Child:</em> 'Doggy runned.' <em>Adult:</em> 'Yes, the doggy ran very fast!' <strong>Explicit correction</strong>: the adult names and corrects the error. 'No, we say \"ran\", not \"runned\".' Recasting is generally considered more developmentally effective because it preserves communication flow.</p>",
          keyTerms: ["recasting", "expansion", "explicit correction"],
        },
        {
          id: "cla-s10",
          category: "Concept",
          marks: 3,
          question: "Define 'overextension' and 'underextension' with examples.",
          model:
            "<p><strong>Overextension</strong>: a word is applied too broadly. e.g. calling all four-legged animals 'dog'. <strong>Underextension</strong>: a word is applied too narrowly. e.g. using 'dog' only for the family pet. Both reflect the child building semantic categories.</p>",
          keyTerms: ["overextension", "underextension", "semantic categories"],
        },
      ],

      long: [
        {
          id: "cla-l1",
          section: "Section B: Child Language Acquisition",
          question:
            "Read the following text, which is a transcription of a conversation between a child aged 4 years and their parent. Analyse ways in which the child and parent are using language in this conversation. Refer to specific details from the transcription as well as to ideas and examples from your wider study of child language acquisition.",
          stimulus:
            "<p><em>Practice transcript (excerpt):</em></p><p style='font-family:monospace;font-size:0.9em'>P: what did you do at nursery today (.) sweetheart<br/>C: I (.) I painted a (1) a big (.) doggie<br/>P: a doggie (.) wow how lovely (.) what colour was the doggie<br/>C: bwown (.) and I goed outside and I runned wif Sam<br/>P: oh you went outside and ran with Sam (.) that sounds fun<br/>C: yes (.) Sam he falled down and I helpded him up<br/>P: that was very kind of you wasn't it</p>",
          plan: `
            <h5>Suggested 5-paragraph structure</h5>
            <ol>
              <li><strong>Intro</strong>: situate the child developmentally — 4yo, expect post-telegraphic stage (Brown), pre-operational (Piaget). Frame the analysis around a few competing/complementary theories you'll deploy.</li>
              <li><strong>Phonology</strong>: 'bwown', 'wif' show <strong>gliding</strong>. Note this is normal for the age. Brief reference to motor maturation and Chomsky's stage-driven competence.</li>
              <li><strong>Morphology &amp; syntax</strong>: 'goed', 'runned', 'falled', 'helpded' are <strong>virtuous errors</strong> (Chomsky) showing the child has internalised the regular -ed past-tense rule. Note the doubled inflection on 'helpded' — even more striking. Reference Brown's stages (MLU around 4 here suggests Stage IV–V). 'Sam he falled' shows pronoun resumption.</li>
              <li><strong>Parental input — CDS &amp; scaffolding</strong>: the parent's <strong>recasting</strong> ('you went outside and ran') silently models correct forms — preserving conversational flow. Use of evaluative tags ('wow', 'how lovely', 'that sounds fun') functions as <strong>positive reinforcement</strong> (Skinner). Open questions ('what colour was the doggie') invite expansion (Bruner's LASS, Vygotsky's scaffolding within the ZPD).</li>
              <li><strong>Functions &amp; pragmatics</strong>: identify Hallidayan functions (representational — describing the painting; personal — 'I helpded him'). Comment on adjacency pairs (Q-A working cleanly), turn-taking. Conclude with synthesis: an integrated picture combining innatist (Chomsky) and social-interactionist (Vygotsky/Bruner) perspectives explains the data better than either alone.</li>
            </ol>
          `,
          theorists: [
            "Skinner — imitation, reinforcement",
            "Chomsky — LAD, virtuous errors, Universal Grammar",
            "Bruner — LASS, scaffolded interaction",
            "Vygotsky — ZPD, social interactionism",
            "Piaget — pre-operational, symbolic thought",
            "Brown — stages, MLU, grammatical morphemes",
            "Halliday — 7 functions",
            "Bellugi — pronoun acquisition stages (cite for 'Sam he')",
          ],
          markScheme: `
            <p><strong>For Band 5:</strong></p>
            <ul>
              <li>Multiple specific moments in the transcript anchored to theory.</li>
              <li>Stage placement justified by transcript evidence (not just age).</li>
              <li>Both child and parent analysed in depth.</li>
              <li>Use of conversational analysis terms (adjacency pair, turn-taking, recasting, expansion).</li>
              <li>Treatment of non-standard forms as emerging competencies, not mistakes.</li>
            </ul>
          `,
          examinerTips: `
            <ul>
              <li>Comment on micropauses — they often signal cognitive processing or scaffolded turn-taking.</li>
              <li>The parent's pronouns matter — plural 'we' suggests joint attention/closeness.</li>
              <li>Identify multiple Hallidayan functions, not just one.</li>
              <li>If you cite a theorist, anchor it to a specific line/utterance from the transcript.</li>
              <li>Be precise about the difference between recasting and explicit correction.</li>
              <li>Note virtuous errors as evidence FOR Chomsky and AGAINST pure Skinnerian imitation.</li>
            </ul>
          `,
          checklist: [
            "I have placed the child on Brown's stages with transcript evidence.",
            "I have referenced Piaget's stage with evidence (not just age).",
            "I have analysed at least 4 specific child utterances.",
            "I have analysed at least 3 specific parental utterances.",
            "I have identified at least one virtuous error and named it as such.",
            "I have identified recasting / expansion / scaffolding in the parent's speech.",
            "I have applied at least 4 different theorists.",
            "I have identified at least 2 Hallidayan functions.",
            "I have NOT used the word 'mistake' for child utterances.",
            "My response is 600–900 words.",
          ],
        },
        {
          id: "cla-l2",
          section: "Section B: Child Language Acquisition",
          question:
            "Analyse the ways in which the parent in the following transcript scaffolds and supports the child's developing language. Refer to specific details from the transcription and to ideas and examples from your wider study.",
          stimulus:
            "<p><em>Practice transcript (excerpt):</em></p><p style='font-family:monospace;font-size:0.9em'>P: shall we read this book together (.) what can you see on the cover<br/>C: a (.) a big bear<br/>P: yes a big brown bear (.) and what's the bear holding<br/>C: a (1) honey<br/>P: that's right (.) the bear's holding a pot of honey isn't he<br/>C: him eat it<br/>P: he's going to eat it (.) yes (.) do you think he likes honey</p>",
          plan: `
            <h5>Focus: parental scaffolding</h5>
            <ol>
              <li><strong>Intro</strong>: this question is parent-focused. Frame around Bruner's LASS, Vygotsky's ZPD, and CDS conventions.</li>
              <li><strong>Expansion</strong>: 'a big brown bear' expands child's 'a big bear' — modelling adjective stacking. 'a pot of honey' expands 'honey' — modelling determiner + noun phrase.</li>
              <li><strong>Recasting</strong>: 'he's going to eat it' silently corrects child's 'him eat it' — modelling subject pronoun and future aspect without flagging.</li>
              <li><strong>Open questions</strong>: 'what can you see' / 'what's the bear holding' / 'do you think he likes honey' — invite extended responses, building MLU and shifting the child up the ZPD.</li>
              <li><strong>Joint attention &amp; ritual</strong>: book-sharing is the canonical Brunerian LASS routine — predictable turn-taking, shared focus, scaffolded vocabulary. Conclude with brief evaluation: scaffolding here is consistent with Vygotsky's social interactionism, with room for Skinnerian reinforcement (positive 'yes', 'that's right') as a complementary mechanism.</li>
            </ol>
          `,
          theorists: [
            "Bruner — LASS, book-sharing",
            "Vygotsky — ZPD, social interactionism",
            "Skinner — positive reinforcement",
            "CDS — recasting, expansion, open questions",
          ],
          markScheme: `
            <p>This question explicitly foregrounds the parent. Mark scheme rewards:</p>
            <ul>
              <li>Identification of multiple distinct scaffolding strategies (not just 'the parent helps').</li>
              <li>Theory linked to specific exchanges.</li>
              <li>Comment on the developmental effect of each strategy.</li>
            </ul>
          `,
          examinerTips: `
            <ul>
              <li>Don't ignore the child entirely — but the bulk of analysis should be on parental input.</li>
              <li>Distinguish recasting from expansion — they are not the same.</li>
              <li>Reference the specific question type: <em>open</em> vs <em>closed</em> questions matter.</li>
            </ul>
          `,
          checklist: [
            "I identified at least 4 distinct scaffolding strategies.",
            "I anchored each strategy to a specific transcript line.",
            "I distinguished recasting from expansion.",
            "I used Bruner AND Vygotsky.",
            "I commented on the developmental effect of the parent's input.",
            "Word count 600–900.",
          ],
        },
      ],

      theory: [
        {
          name: "Skinner",
          label: "Behaviourism (1957)",
          body:
            "<p>Language learned by imitation + operant conditioning. Strong on routines and lexical learning, weak on virtuous errors and novel utterances.</p>",
        },
        {
          name: "Chomsky",
          label: "Innatism, LAD, Universal Grammar",
          body:
            "<p>Innate Language Acquisition Device. Children produce grammatical sentences they've never heard (poverty of the stimulus) and make rule-based virtuous errors. Most powerful for syntactic and morphological development.</p>",
        },
        {
          name: "Bruner",
          label: "LASS",
          body:
            "<p>Language Acquisition Support System: caregivers provide structured, ritualised interaction (book-sharing, peekaboo, mealtime routines) that scaffolds language. Social complement to Chomsky's biological LAD.</p>",
        },
        {
          name: "Vygotsky",
          label: "ZPD, scaffolding, social interactionism",
          body:
            "<p>Language develops within the Zone of Proximal Development through interaction with more knowledgeable others. Scaffolding fades as the child gains competence.</p>",
        },
        {
          name: "Piaget",
          label: "Cognitive development",
          body:
            "<p>Language depends on cognitive maturation. Sensorimotor (0–2), Pre-operational (2–7, egocentric), Concrete operational (7–11), Formal operational (11+). Match the child's age to a stage and look for evidence of overlap.</p>",
        },
        {
          name: "Tomasello",
          label: "Usage-based / social pragmatic",
          body:
            "<p>Children acquire language through joint attention and intention-reading rather than innate grammar. Patterns emerge from usage. A key modern alternative to Chomsky.</p>",
        },
        {
          name: "Brown",
          label: "Mean Length of Utterance",
          body:
            "<p>MLU in morphemes maps to developmental stages. Brown also identified the order in which 14 grammatical morphemes are acquired (-ing, plurals, possessives, etc.). Useful for stage placement.</p>",
        },
        {
          name: "Bellugi",
          label: "Pronouns and negation",
          body:
            "<p>3 stages of pronoun acquisition (own name → I/me confusion → correct subject/object). 3 stages of negation ('no' fronted → 'no/not' inserted → auxiliary + 'not'). Cite for transcript pronoun or negation features.</p>",
        },
        {
          name: "Halliday",
          label: "7 functions of language",
          body:
            "<p>Instrumental, Regulatory, Interactional, Personal, Heuristic, Imaginative, Representational. Identify multiple functions in any transcript for top-band marks.</p>",
        },
        {
          name: "CDS features",
          body:
            "<p>Higher pitch, exaggerated intonation, slower tempo, simpler lexis, repetition, expansion, recasting, frequent questions/imperatives, diminutives. Bruner sees these as essential scaffolding.</p>",
        },
      ],
    },

    /* ===========================================
       PAPER 4 — TOPIC 1: ENGLISH IN THE WORLD
       =========================================== */
    englishWorld: {
      paper: 4,
      icon: "◐",
      name: "English in the World",
      tagline:
        "Global English: history, varieties, ethics. Discursive essay using theorists to argue.",
      theoryIntro:
        "Paper 4 Section A is a 25-mark discursive essay. The text is a stimulus for an argument about global English — not data to analyse. You'll need Crystal, Kachru, Phillipson, Schneider, McCrum and a clear position on issues like linguistic imperialism, ELF, language death and the future of English.",

      flashcards: [
        {
          id: "ew-1",
          category: "Theorist",
          front: "Kachru — Three Circles model (1985)",
          back: "<strong>Inner Circle</strong>: ENL countries (UK, US, Australia, Canada, NZ, Ireland — c. 380m). <strong>Outer Circle</strong>: ESL countries with colonial history (India, Nigeria, Singapore, Pakistan — c. 300–500m). <strong>Expanding Circle</strong>: EFL countries where English is studied but has no official status (China, Russia, most of Europe — 1bn+).",
        },
        {
          id: "ew-2",
          category: "Theorist",
          front: "Critique of Kachru's circles",
          back: "Top-band move: note that the boundaries have <strong>shifted since 1985</strong>. Many Outer Circle countries (India, Singapore) now have huge native English-using populations. Crystal estimates 2bn+ English users globally. ELF and 'World Englishes' frameworks have largely superseded the rigid circle model.",
        },
        {
          id: "ew-3",
          category: "Theorist",
          front: "Crystal — English as a Global Language",
          back: "David Crystal (1997, updated 2003): English is global because of (1) historical-political reach (British Empire then American economic/cultural dominance) and (2) the right place at the right time, not inherent linguistic superiority. Estimates ~2bn users. Cautiously optimistic about global English — sees it as additive, not replacive.",
        },
        {
          id: "ew-4",
          category: "Theorist",
          front: "Phillipson — Linguistic Imperialism",
          back: "Robert Phillipson (1992): the global spread of English is a form of <strong>cultural and linguistic imperialism</strong>. English dominance creates inequality, marginalises local languages, and embeds Anglo-American cultural values. Counterpoint to Crystal's optimism.",
        },
        {
          id: "ew-5",
          category: "Theorist",
          front: "Widdowson — English as ELF",
          back: "Henry Widdowson: English no longer 'belongs' to its native speakers. As a global lingua franca it is owned by all who use it. Speakers should be free to use English in ways that work for them — challenges the notion that 'native' standards are correct.",
        },
        {
          id: "ew-6",
          category: "Theorist",
          front: "Schneider — Dynamic Model",
          back: "Edgar Schneider (2007): post-colonial Englishes evolve through 5 phases — (1) Foundation, (2) Exogenous norm orientation, (3) Nativisation, (4) Endonormative stabilisation, (5) Differentiation. Useful for arguing how varieties like Indian or Singaporean English have come of age.",
        },
        {
          id: "ew-7",
          category: "Theorist",
          front: "Diamond's 'steamroller' metaphor",
          back: "Jared Diamond described English's spread as a <strong>steamroller</strong> flattening linguistic diversity. Vivid metaphor for the linguistic imperialism position.",
        },
        {
          id: "ew-8",
          category: "Theorist",
          front: "McCrum — The Story of English / Globish",
          back: "Robert McCrum: English's historical success is rooted in mongrel adaptability — Anglo-Saxon, Norse, Norman French, Latin layers made it absorbent. Later proposed <strong>Globish</strong>: a stripped-down English of ~1500 words functioning as global lingua franca.",
        },
        {
          id: "ew-9",
          category: "Concept",
          front: "ELF — English as a Lingua Franca",
          back: "Use of English between non-native speakers as a contact language. Jenkins, Seidlhofer: ELF has its own emergent norms and shouldn't be judged against native standards. The vast majority of English interaction globally is now ELF.",
        },
        {
          id: "ew-10",
          category: "Concept",
          front: "Pidgin and Creole",
          back: "<strong>Pidgin</strong>: a simplified contact language between groups with no common tongue (no native speakers). <strong>Creole</strong>: a pidgin that has become a community's first language, expanding grammatically. e.g. Tok Pisin (PNG), Jamaican Patwa.",
        },
        {
          id: "ew-11",
          category: "Concept",
          front: "Creole continuum",
          back: "DeCamp: a spectrum from <strong>basilect</strong> (most distant from standard) through <strong>mesolect</strong> (mid-range) to <strong>acrolect</strong> (closest to standard). Speakers move along it depending on context. Useful for Jamaican, Singaporean Englishes.",
        },
        {
          id: "ew-12",
          category: "Concept",
          front: "Code-switching",
          back: "Switching between languages or varieties within a conversation, often within a sentence. Common in multilingual contexts (Singlish, Spanglish, Hinglish). Reflects identity, in-group signalling, lexical gaps, register shift.",
        },
        {
          id: "ew-13",
          category: "Concept",
          front: "Language shift and language death",
          back: "<strong>Language shift</strong>: a community gradually abandons its language for another. <strong>Language death</strong>: the last fluent speakers die. Crystal estimates one language dies every two weeks. Major ethical concern in the global English debate.",
        },
        {
          id: "ew-14",
          category: "Concept",
          front: "Standard vs nonstandard English",
          back: "<strong>Standard English</strong> is the codified prestige variety used in education, law, media. <strong>Nonstandard</strong> includes regional, social and ethnic varieties (e.g. AAVE, MLE, Scots English). All are linguistically valid; the standard's status is sociopolitical, not linguistic.",
        },
        {
          id: "ew-15",
          category: "Concept",
          front: "Zero translation theory",
          back: "Some words enter other languages untranslated because no equivalent exists or the borrowing carries prestige. e.g. 'WiFi', 'meeting', 'OK' adopted directly into French, Japanese, Mandarin etc. Reflects English's cultural reach.",
        },
        {
          id: "ew-16",
          category: "Concept",
          front: "Colonialism and English",
          back: "Two waves of English spread: (1) <strong>Settler colonialism</strong> (US, Canada, Australia, NZ) — replaced indigenous languages. (2) <strong>Exploitation colonialism</strong> (India, Africa, Caribbean) — English imposed for administration and trade, layered on top of local languages. The Outer Circle is the legacy of wave 2.",
        },
        {
          id: "ew-17",
          category: "Variety",
          front: "Indian English (IndE) — features",
          back: "Distinctive phonology (retroflex consonants, syllable-timed rhythm), syntactic features (continuous progressive: 'I am understanding'), lexis (loanwords, compounds: 'cousin-brother', 'prepone'). A mature endonormative variety per Schneider.",
        },
        {
          id: "ew-18",
          category: "Variety",
          front: "Singlish — features",
          back: "Singapore Colloquial English: code-mixed (Hokkien, Malay, Tamil), particles ('lah', 'leh', 'meh'), copula deletion ('she very smart'), reduplication ('walk walk'). Officially discouraged (Speak Good English Movement) but identity-marking and resilient.",
        },
        {
          id: "ew-19",
          category: "Variety",
          front: "AAVE / African American Vernacular English",
          back: "A rule-governed dialect with distinctive features: habitual 'be' ('she be working'), copula deletion ('she busy'), multiple negation, distinctive aspectual markers. Often stigmatised but linguistically as systematic as Standard English. Labov's research is foundational.",
        },
        {
          id: "ew-20",
          category: "Concept",
          front: "Future of English — three positions",
          back: "(1) <strong>Continued dominance</strong> — Crystal: status entrenched. (2) <strong>Fragmentation</strong> — varieties diverge to mutual unintelligibility (parallels to Latin → Romance). (3) <strong>Replacement / decline</strong> — economic shifts (China, India) could elevate other languages. Top-band essays consider all three.",
        },
        {
          id: "ew-21",
          category: "Tip",
          front: "Avoiding feature analysis on Paper 4",
          back: "<strong>Critical:</strong> Paper 4 does not assess AO5. Don't analyse the source text's graphology, lexis, syntax or phonology. Use brief embedded quotes to anchor your argument — that's all the textual engagement needed.",
        },
        {
          id: "ew-22",
          category: "Tip",
          front: "Discursive ≠ journalistic",
          back: "Examiner reports flag rhetorical questions as a stylistic weakness if you don't answer them. Discursive style: structured argument, low-frequency lexis, technical terminology, formal register. Avoid 'But what does this really mean?' style.",
        },
      ],

      short: [
        {
          id: "ew-s1",
          category: "Theory",
          marks: 5,
          question:
            "Outline Kachru's Three Circles model and offer one substantive critique.",
          model:
            "<p><strong>Kachru (1985)</strong> divides world English users into three concentric circles. The <strong>Inner Circle</strong> comprises traditional ENL nations (UK, US, Australia, Canada, NZ, Ireland — c. 380m users). The <strong>Outer Circle</strong> covers ESL nations where English has institutional status, usually post-colonial (India, Nigeria, Singapore — c. 300–500m). The <strong>Expanding Circle</strong> covers EFL contexts where English is studied widely without official status (China, Russia, much of Europe — 1bn+).</p><p><strong>Critique:</strong> the boundaries have shifted since 1985. Many Outer Circle countries now have substantial first-language English populations, and Expanding Circle users (e.g. in continental Europe) frequently have native-equivalent fluency. Crystal and Widdowson argue that an ELF framework — where English is owned by all its users, not just the Inner Circle — better reflects current realities.</p>",
          keyTerms: ["Inner Circle", "Outer Circle", "Expanding Circle", "ELF"],
        },
        {
          id: "ew-s2",
          category: "Theory",
          marks: 4,
          question:
            "How does Phillipson's concept of linguistic imperialism challenge Crystal's optimism about global English?",
          model:
            "<p><strong>Crystal</strong> sees global English as a largely neutral medium, additive to local languages and a vehicle for cross-cultural communication. <strong>Phillipson (1992)</strong> argues this view ignores power dynamics: English's spread is not neutral but tied to Anglo-American economic, political and cultural dominance. Promotion of English (through aid, ELT industries, media) actively marginalises local languages, embedding inequalities. He calls this <strong>linguistic imperialism</strong>. The two positions reflect a deeper disagreement about whether linguistic globalisation is enriching or homogenising.</p>",
          keyTerms: ["linguistic imperialism", "ELT", "additive bilingualism"],
        },
        {
          id: "ew-s3",
          category: "Concept",
          marks: 3,
          question: "Define ELF and explain why it matters.",
          model:
            "<p><strong>English as a Lingua Franca</strong> refers to English used between non-native speakers as a shared contact language. It matters because the majority of global English interaction is now ELF — meaning native-speaker norms are no longer the most relevant benchmark. Jenkins and Seidlhofer argue that ELF has its own emerging norms (e.g. simplified 3rd-person -s, 'which/who' interchange) that should not be treated as errors.</p>",
          keyTerms: ["ELF", "lingua franca", "Jenkins", "Seidlhofer"],
        },
        {
          id: "ew-s4",
          category: "Concept",
          marks: 3,
          question:
            "Distinguish between a pidgin and a creole. Give one example of each.",
          model:
            "<p>A <strong>pidgin</strong> is a simplified contact language that arises between groups without a shared tongue, typically for trade. It has no native speakers. Example: West African Pidgin English. A <strong>creole</strong> is a pidgin that has become the first language of a community, expanding in grammatical complexity and vocabulary. Example: Tok Pisin (Papua New Guinea) or Jamaican Patwa.</p>",
          keyTerms: ["pidgin", "creole", "contact language"],
        },
        {
          id: "ew-s5",
          category: "Concept",
          marks: 4,
          question:
            "Outline Schneider's Dynamic Model and explain why it is useful for analysing post-colonial Englishes.",
          model:
            "<p>Schneider (2007) proposes 5 phases through which post-colonial Englishes develop: (1) <strong>Foundation</strong> — English arrives with settlers/administrators. (2) <strong>Exogenous norm orientation</strong> — local elites adopt British/American norms. (3) <strong>Nativisation</strong> — local features begin appearing systematically. (4) <strong>Endonormative stabilisation</strong> — local norms gain prestige and codification. (5) <strong>Differentiation</strong> — internal varieties emerge. The model is useful because it captures how varieties like Indian or Singapore English have shifted from external models to mature, locally-recognised standards.</p>",
          keyTerms: ["Dynamic Model", "nativisation", "endonormative", "Schneider"],
        },
        {
          id: "ew-s6",
          category: "Variety",
          marks: 3,
          question:
            "Identify three distinctive features of Singlish with linguistic terminology.",
          model:
            "<p>(1) <strong>Discourse particles</strong>: 'lah', 'leh', 'meh' carrying pragmatic functions (emphasis, query, surprise). (2) <strong>Copula deletion</strong>: 'she very smart' (zero copula). (3) <strong>Code-mixing</strong> with Hokkien, Malay and Tamil lexis. (4) <strong>Reduplication</strong>: 'walk walk' for emphasis or duration. These features mark Singlish as an established variety and a marker of Singaporean identity, despite official discouragement via the Speak Good English Movement.</p>",
          keyTerms: [
            "discourse particles",
            "copula deletion",
            "code-mixing",
            "reduplication",
          ],
        },
        {
          id: "ew-s7",
          category: "Concept",
          marks: 4,
          question:
            "What is meant by language death, and why is it linked to the spread of English?",
          model:
            "<p><strong>Language death</strong> is the loss of all fluent speakers of a language, usually after a period of <strong>language shift</strong> in which a community gradually abandons its language for a more dominant one. Crystal estimates one language dies every two weeks. The spread of English contributes through (a) prestige attraction — speakers shift to English for educational and economic opportunity, (b) institutional dominance — English-medium schooling, media, government, and (c) intergenerational transmission failure. Phillipson would frame this as a consequence of linguistic imperialism; Crystal views it as a tragedy that English-language policy could help mitigate.</p>",
          keyTerms: [
            "language death",
            "language shift",
            "intergenerational transmission",
          ],
        },
        {
          id: "ew-s8",
          category: "Theory",
          marks: 3,
          question:
            "Why is Diamond's 'steamroller' metaphor a useful counterpoint to Crystal?",
          model:
            "<p>Diamond's metaphor frames English's global spread as a <strong>steamroller</strong> flattening linguistic diversity in its path. It is rhetorically powerful because it captures the asymmetry of the spread — English doesn't sit alongside local languages as Crystal often suggests, but actively displaces them through prestige and institutional dominance. The metaphor aligns with Phillipson's linguistic imperialism thesis and is useful for arguing the pessimistic case in a balanced essay.</p>",
          keyTerms: [
            "steamroller metaphor",
            "linguistic imperialism",
            "language displacement",
          ],
        },
        {
          id: "ew-s9",
          category: "Concept",
          marks: 3,
          question:
            "Briefly outline three possible futures for English as a global language.",
          model:
            "<p>(1) <strong>Continued dominance</strong> — Crystal's expectation: English's status is too entrenched institutionally and economically to be displaced. (2) <strong>Fragmentation</strong> — varieties drift apart until mutual unintelligibility, paralleling Latin's evolution into the Romance languages. (3) <strong>Decline / replacement</strong> — economic and demographic shifts (China, India) elevate Mandarin or other languages, reducing English's relative weight. Top-band essays acknowledge all three.</p>",
          keyTerms: ["fragmentation", "lingua franca", "language shift"],
        },
        {
          id: "ew-s10",
          category: "Tip",
          marks: 2,
          question:
            "Why is it a mistake to do graphological or syntactic analysis of the source text in Paper 4?",
          model:
            "<p>Paper 4 does not assess AO5 (data analysis), which carries 0% on this paper. Graphology, lexis, grammar and phonology frameworks are tools for Papers 1–3. Paper 4 rewards <strong>discursive argument</strong> using language theorists (AO4 = 40%) supported by brief textual reference. Doing feature analysis wastes words and misallocates effort.</p>",
          examinerNote:
            "This is the single most common Paper 4 mistake — recognise it and avoid it.",
        },
      ],

      long: [
        {
          id: "ew-l1",
          section: "Section A: English in the World",
          question:
            "Discuss what you feel are the most important issues raised in the texts relating to the spread of English around the world. You should refer to specific details from the texts as well as to ideas and examples from your wider study of English in the world.",
          stimulus:
            "<p><em>Practice scenario:</em> The exam will give you 1–2 short texts (extracts from articles, blog posts, or academic writing) on global English. For practice, imagine the source is an opinion piece arguing that English is becoming the world's default lingua franca and that this is broadly positive for cross-cultural understanding.</p>",
          plan: `
            <h5>Suggested 5-paragraph essay structure</h5>
            <ol>
              <li><strong>Intro</strong>: identify 2–3 key issues (e.g. linguistic imperialism, language death, ownership/ELF). Signal your position briefly. Name a couple of theorists you'll deploy.</li>
              <li><strong>Issue 1 — Imperialism vs neutrality</strong>: present Crystal's optimistic view. Counter with Phillipson's linguistic imperialism + Diamond's steamroller. Conclude with a measured position.</li>
              <li><strong>Issue 2 — Ownership and ELF</strong>: Kachru's circles as a starting point — but critique their datedness. Widdowson on ELF: English no longer belongs to native speakers. Schneider's Dynamic Model: post-colonial Englishes have come of age. Reference a specific variety (Indian English, Singlish) as evidence.</li>
              <li><strong>Issue 3 — Language death</strong>: Crystal's stat (one language every two weeks). Distinguish language shift from imposition. Brief acknowledgement that English is not the only driver but is a major one.</li>
              <li><strong>Conclusion</strong>: synthesise. Take a definite, nuanced position (e.g. 'English's global role is real and largely irreversible; the ethical question is how its institutions handle their disproportionate power'). Brief look forward — fragmentation? continued dominance? End strong.</li>
            </ol>
          `,
          theorists: [
            "Crystal — English as a Global Language",
            "Phillipson — Linguistic Imperialism",
            "Kachru — Three Circles (and its critique)",
            "Widdowson — English ownership / ELF",
            "Schneider — Dynamic Model",
            "Diamond — steamroller metaphor",
            "McCrum — Globish, mongrel English",
            "Jenkins / Seidlhofer — ELF norms",
          ],
          markScheme: `
            <p><strong>Band 5 indicators:</strong></p>
            <ul>
              <li>Sustained discursive register with low-frequency lexis.</li>
              <li>Multiple theorists used to argue, not summarised.</li>
              <li>Counterarguments engaged with, not just listed.</li>
              <li>Brief embedded quotes from the source — anchoring, not analysing.</li>
              <li>Confident, nuanced conclusion taking a clear position.</li>
            </ul>
          `,
          examinerTips: `
            <ul>
              <li>Do NOT do feature analysis of the source — AO5 carries 0% on Paper 4.</li>
              <li>Don't reproduce Kachru's circles in full — critique their movement since 1985.</li>
              <li>Avoid rhetorical questions you don't answer.</li>
              <li>Use technical terminology (ELF, endonormative, basilect, code-mixing) — reward for low-frequency lexis.</li>
              <li>Take a position. Examiners reward confident standpoints over fence-sitting.</li>
              <li>Reference at least one specific non-Inner-Circle variety with named features.</li>
            </ul>
          `,
          checklist: [
            "I have engaged with at least 3 substantive issues (not just listed).",
            "I have used at least 4 theorists to argue, not summarise.",
            "I have engaged with counterarguments.",
            "I have referenced at least one specific variety with named features.",
            "I have NOT done graphological / lexical / grammatical analysis of the source.",
            "Any quotes are short and embedded.",
            "I have used low-frequency lexis and technical terminology.",
            "My conclusion takes a clear position.",
            "I have not posed rhetorical questions without answering them.",
            "Word count 600–900.",
          ],
        },
        {
          id: "ew-l2",
          section: "Section A: English in the World",
          question:
            "'The dominance of English is a cultural and economic threat to other languages.' Discuss the issues raised by this statement, with reference to the source text and to your wider study of English in the world.",
          stimulus:
            "<p><em>Practice scenario:</em> Imagine a source text from a UNESCO report on language endangerment, alongside a counter-piece from a global business magazine arguing English's economic value.</p>",
          plan: `
            <ol>
              <li><strong>Intro</strong>: take the statement seriously but signal nuance. Name your theorists.</li>
              <li><strong>Case for the statement</strong>: Phillipson, Diamond, Crystal's own concern about language death. Mechanism: prestige attraction, English-medium schooling, intergenerational transmission failure. Specific examples (e.g. indigenous languages of Australia, North America).</li>
              <li><strong>Case against / nuance</strong>: Crystal's additive position; Widdowson on ELF; Schneider's Dynamic Model showing local agency. Distinguish language shift driven by economic opportunity from imposition.</li>
              <li><strong>Where the truth probably sits</strong>: synthesis. The threat is real but not symmetrical with English alone; institutional choices (education policy, media regulation) can mitigate.</li>
              <li><strong>Conclusion</strong>: confident, nuanced position. Brief forward-look.</li>
            </ol>
          `,
          theorists: [
            "Phillipson — linguistic imperialism",
            "Crystal — additive bilingualism, language death",
            "Diamond — steamroller",
            "Widdowson / Jenkins — ELF, ownership",
            "Schneider — Dynamic Model",
          ],
          markScheme: `
            <p>This question explicitly tests engagement with the imperialism debate. Top-band responses:</p>
            <ul>
              <li>Engage with the statement's premise critically rather than agreeing/disagreeing flatly.</li>
              <li>Distinguish economic opportunity from cultural imposition.</li>
              <li>Reference specific languages or communities as evidence.</li>
            </ul>
          `,
          examinerTips: `
            <ul>
              <li>Don't sit on the fence — take a definite position by the end.</li>
              <li>Specific examples (specific languages, specific countries) score above abstract claims.</li>
              <li>Use 'language shift' and 'language death' precisely — they are not synonyms.</li>
            </ul>
          `,
          checklist: [
            "I have engaged with both sides of the debate.",
            "I have used at least 3 theorists.",
            "I have given specific examples (named languages or countries).",
            "I have distinguished language shift from language death.",
            "My position is clear and nuanced.",
            "Word count 600–900.",
          ],
        },
      ],

      theory: [
        {
          name: "Kachru",
          label: "Three Circles model",
          body:
            "<p>Inner / Outer / Expanding circles. Critique: boundaries have shifted since 1985; ELF and World Englishes frameworks have largely superseded.</p>",
        },
        {
          name: "Crystal",
          label: "English as a Global Language",
          body:
            "<p>~2bn users globally. Status due to historical-political reach + right place at right time, not linguistic superiority. Cautiously optimistic; sees English as additive but flags language death concerns.</p>",
        },
        {
          name: "Phillipson",
          label: "Linguistic Imperialism (1992)",
          body:
            "<p>English's spread is a form of cultural and linguistic imperialism. Promotes Anglo-American interests, marginalises local languages, embedded in ELT industries.</p>",
        },
        {
          name: "Widdowson",
          label: "Ownership of English / ELF",
          body:
            "<p>English no longer belongs to native speakers. Speakers should be free to use it in ways that work for them. Challenges native-speaker norms as the benchmark.</p>",
        },
        {
          name: "Schneider",
          label: "Dynamic Model (2007)",
          body:
            "<p>5 phases of post-colonial English development: Foundation → Exogenous norm orientation → Nativisation → Endonormative stabilisation → Differentiation. Use to argue varieties have come of age.</p>",
        },
        {
          name: "Diamond",
          label: "Steamroller metaphor",
          body:
            "<p>English flattens linguistic diversity. Vivid rhetorical support for the imperialism position.</p>",
        },
        {
          name: "McCrum",
          label: "The Story of English / Globish",
          body:
            "<p>English's success rooted in mongrel adaptability. Globish: stripped-down ~1500-word English functioning as global lingua franca.</p>",
        },
        {
          name: "Jenkins / Seidlhofer",
          label: "ELF norms",
          body:
            "<p>ELF has emergent norms (simplified 3rd person -s, redundant article omission, 'which/who' interchange) that should not be treated as errors. The majority of English use is ELF.</p>",
        },
      ],
    },

    /* ===========================================
       PAPER 4 — TOPIC 2: LANGUAGE AND THE SELF
       =========================================== */
    languageSelf: {
      paper: 4,
      icon: "✺",
      name: "Language and the Self",
      tagline:
        "Language, identity and thought: Sapir-Whorf, accommodation, sociolect, idiolect.",
      theoryIntro:
        "Paper 4 Section B is a 25-mark discursive essay on how language shapes/reflects identity and how individuals think. Core debates: linguistic determinism vs relativism, accommodation, prestige, social variation. Same Paper 4 rules — discursive argument, theorists deployed to argue, no feature analysis.",

      flashcards: [
        {
          id: "ls-1",
          category: "Theorist",
          front: "Sapir-Whorf Hypothesis",
          back: "Edward Sapir &amp; Benjamin Lee Whorf: language shapes thought. <strong>Strong version (linguistic determinism)</strong>: language determines thought — speakers of different languages think differently. <strong>Weak version (linguistic relativity)</strong>: language influences but does not determine thought. Strong version largely rejected; weak version supported by experiments (Boroditsky on Russian blues, Kuuk Thaayorre on cardinal directions).",
        },
        {
          id: "ls-2",
          category: "Theorist",
          front: "Giles — Communication Accommodation Theory",
          back: "Howard Giles: speakers adjust their language towards (<strong>convergence</strong>) or away from (<strong>divergence</strong>) their interlocutor. Convergence signals solidarity, divergence asserts identity or distance. Both are identity work. <strong>Upward convergence</strong>: shifting to higher prestige. <strong>Downward convergence</strong>: shifting to lower prestige (often for solidarity).",
        },
        {
          id: "ls-3",
          category: "Theorist",
          front: "Labov — Department Store Study (1966)",
          back: "William Labov tested rhotic /r/ pronunciation in NYC department stores (Saks, Macy's, Klein's). Found higher-prestige stores had more /r/-pronunciation, and that staff converged upward when asked to repeat. Foundational evidence that pronunciation correlates with social class and prestige.",
        },
        {
          id: "ls-4",
          category: "Theorist",
          front: "Labov — Martha's Vineyard Study (1963)",
          back: "Labov found that island residents who identified strongly with traditional island life used a centralised diphthong /əɪ/, /əʊ/ more than mainlanders. Pronunciation was a marker of <strong>local identity</strong>, often unconsciously chosen.",
        },
        {
          id: "ls-5",
          category: "Theorist",
          front: "Trudgill — Norwich study (1974)",
          back: "Peter Trudgill in Norwich: working-class men <strong>covertly</strong> valued non-standard forms (e.g. dropping -ing → -in') as markers of masculinity and toughness — even while overtly claiming to use the standard. Introduced the distinction between <strong>overt prestige</strong> (standard, visible status) and <strong>covert prestige</strong> (non-standard, in-group solidarity).",
        },
        {
          id: "ls-6",
          category: "Theorist",
          front: "Vygotsky — Inner speech and thought",
          back: "Lev Vygotsky: language and thought develop together. <strong>Inner speech</strong> (internalised dialogue) is the mechanism of higher-order thinking. Language is not just a vehicle for thought but constitutes much of it.",
        },
        {
          id: "ls-7",
          category: "Theorist",
          front: "Pinker — The Language Instinct, anti-Whorf",
          back: "Steven Pinker: thought precedes language; people think in 'mentalese', not English or Mandarin. Sharply critical of strong Whorfian determinism. Useful counterweight in determinism essays.",
        },
        {
          id: "ls-8",
          category: "Theorist",
          front: "Cheshire — Reading study (1982)",
          back: "Jenny Cheshire studied teenagers in Reading, UK. Use of non-standard features (negative concord, 'ain't', 'never' as past negator) correlated with adherence to peer-group 'vernacular culture'. Identity, not class alone, drove variation.",
        },
        {
          id: "ls-9",
          category: "Theorist",
          front: "Eckert — Jocks and Burnouts (Belten High)",
          back: "Penelope Eckert: high school students self-organised into 'Jocks' (school-oriented) and 'Burnouts' (urban-oriented). Each group had distinct phonological patterns (vowel raising/backing) signalling identity. Pioneered the <strong>Communities of Practice</strong> framework.",
        },
        {
          id: "ls-10",
          category: "Concept",
          front: "Idiolect",
          back: "An individual's unique way of speaking — combination of accent, dialect, lexis, idiomatic preferences, stylistic habits. Every speaker has one; it shifts over a lifetime.",
        },
        {
          id: "ls-11",
          category: "Concept",
          front: "Sociolect",
          back: "A variety associated with a social group (class, age, profession, ethnicity). e.g. 'estuary English', 'legalese', the speech patterns of teen subcultures.",
        },
        {
          id: "ls-12",
          category: "Concept",
          front: "Genderlect",
          back: "Speech patterns associated with gender identity. Lakoff (1975) proposed features of 'women's language' (hedges, tag questions, intensifiers) — controversial; later researchers (Cameron, Tannen) emphasise context and power over inherent gender difference.",
        },
        {
          id: "ls-13",
          category: "Theorist",
          front: "Lakoff — Women's language",
          back: "Robin Lakoff (1975): proposed women's language uses hedges ('sort of'), tag questions ('isn't it?'), intensifiers ('so', 'such'), polite forms, empty adjectives ('lovely', 'divine'). Heavily critiqued for being intuition-based and overgeneralising — but historically important.",
        },
        {
          id: "ls-14",
          category: "Theorist",
          front: "Tannen — Difference theory",
          back: "Deborah Tannen: men and women use language for different purposes — men for status/independence ('report talk'), women for connection ('rapport talk'). Critiqued for essentialising gender; useful as a debate point.",
        },
        {
          id: "ls-15",
          category: "Theorist",
          front: "Cameron — Critique of gendered language myths",
          back: "Deborah Cameron: many supposed gender differences in language are myths or folk-linguistics. Differences within genders often exceed differences between them. A robust critical voice for top-band essays.",
        },
        {
          id: "ls-16",
          category: "Concept",
          front: "Received Pronunciation (RP)",
          back: "The traditionally prestige British accent — non-regional, associated with public schools, BBC English. Has historically conferred <strong>overt prestige</strong> but its dominance has weakened; many young middle-class speakers now adopt features of MLE or Estuary.",
        },
        {
          id: "ls-17",
          category: "Concept",
          front: "MLE — Multicultural London English",
          back: "An emerging dialect spoken by young people in multi-ethnic urban areas of London. Features: TH-stopping ('ting' for 'thing'), GOOSE-fronting, 'man' as pronoun, lexis from Caribbean Creole and South Asian languages. Marker of urban youth identity, often crossing ethnic boundaries.",
        },
        {
          id: "ls-18",
          category: "Concept",
          front: "Overt vs covert prestige",
          back: "<strong>Overt prestige</strong>: status of forms publicly recognised as 'correct' — e.g. RP, Standard English. <strong>Covert prestige</strong>: status of non-standard forms within in-groups — toughness, authenticity, solidarity. Both shape identity choices.",
        },
        {
          id: "ls-19",
          category: "Concept",
          front: "Speech community vs Community of Practice",
          back: "<strong>Speech community</strong>: group sharing linguistic norms (older, broader concept). <strong>Community of Practice</strong> (Eckert, Wenger): group defined by shared activity and engagement — language is one part of how membership is enacted. Better fits modern, fluid identity formation.",
        },
        {
          id: "ls-20",
          category: "Concept",
          front: "Linguistic determinism vs relativity",
          back: "<strong>Determinism (strong Whorf)</strong>: language determines what we can think. Largely rejected. <strong>Relativity (weak Whorf)</strong>: language influences cognition (colour perception, spatial reasoning, time conceptualisation). Supported by Boroditsky, Kuuk Thaayorre studies.",
        },
        {
          id: "ls-21",
          category: "Theorist",
          front: "Boroditsky — Russian blues experiment",
          back: "Lera Boroditsky: Russian distinguishes light blue (<em>goluboy</em>) from dark blue (<em>siniy</em>) lexically. Russian speakers discriminate the boundary faster than English speakers — supporting weak linguistic relativity.",
        },
        {
          id: "ls-22",
          category: "Concept",
          front: "Codeswitching and identity",
          back: "Switching between languages or varieties to enact different identities or signal in-group membership. e.g. a British-Bangladeshi switching between Sylheti, MLE and Standard English depending on interlocutor — each variety performs a different facet of identity.",
        },
        {
          id: "ls-23",
          category: "Concept",
          front: "Style-shifting (Coupland)",
          back: "Nikolas Coupland: speakers actively style themselves through language choice — not just passive accommodation but performative identity work. A speaker may 'do' working-class authenticity or middle-class polish strategically.",
        },
        {
          id: "ls-24",
          category: "Tip",
          front: "Avoiding gender essentialism",
          back: "Top-band Paper 4 essays don't claim 'women use more hedges'. Reference Lakoff but follow with Cameron's critique. Frame as 'historically claimed but contested' rather than fact.",
        },
      ],

      short: [
        {
          id: "ls-s1",
          category: "Theory",
          marks: 5,
          question:
            "Explain the difference between linguistic determinism and linguistic relativity. Which is more widely accepted, and why?",
          model:
            "<p><strong>Linguistic determinism</strong> (the strong Sapir-Whorf hypothesis) claims that language <em>determines</em> thought — speakers of different languages have fundamentally different cognitive capabilities. <strong>Linguistic relativity</strong> (the weak version) claims language <em>influences</em> but does not determine thought.</p><p>The strong version is largely rejected: speakers can clearly think about concepts their language doesn't lexicalise (a tonal-language speaker can perceive non-tonal contrasts). The weak version is supported by experimental work — Boroditsky's Russian blues study showed Russian speakers discriminate light/dark blue faster (their language obligates the distinction); Kuuk Thaayorre speakers (whose language uses cardinal directions instead of left/right) consistently outperform English speakers on spatial orientation tasks. The current consensus is that language shapes habits of attention without imprisoning thought.</p>",
          keyTerms: [
            "linguistic determinism",
            "linguistic relativity",
            "Sapir-Whorf",
            "Boroditsky",
          ],
        },
        {
          id: "ls-s2",
          category: "Theory",
          marks: 4,
          question:
            "Outline Giles's Communication Accommodation Theory and give examples of convergence and divergence.",
          model:
            "<p>Giles's CAT proposes that speakers adjust their language towards (<strong>convergence</strong>) or away from (<strong>divergence</strong>) their interlocutor's style.</p><p><strong>Convergence</strong> example: a teacher slowing speech rate, simplifying vocabulary and softening accent when speaking to a young child — signalling solidarity and aiding comprehension. <strong>Divergence</strong> example: a Scottish speaker exaggerating their accent when an English colleague mocks it — asserting in-group identity and resisting linguistic dominance. Both are identity-performative acts, not merely stylistic adjustments.</p>",
          keyTerms: [
            "Communication Accommodation Theory",
            "convergence",
            "divergence",
            "upward / downward convergence",
          ],
        },
        {
          id: "ls-s3",
          category: "Concept",
          marks: 3,
          question:
            "What is the difference between overt and covert prestige? Use Trudgill's Norwich study as an example.",
          model:
            "<p><strong>Overt prestige</strong> attaches to forms publicly recognised as 'correct' or socially valued — typically Standard English or RP. <strong>Covert prestige</strong> attaches to non-standard forms within in-groups — toughness, authenticity, solidarity.</p><p>Trudgill (1974) found Norwich working-class men used non-standard -in' for -ing more than they reported — and even claimed to use it more than they actually did. The form carried covert prestige as a marker of working-class masculinity, even though it lacked overt prestige. This shows that speakers actively use linguistic variation to construct identity.</p>",
          keyTerms: ["overt prestige", "covert prestige", "Trudgill", "Norwich"],
        },
        {
          id: "ls-s4",
          category: "Concept",
          marks: 3,
          question: "Distinguish between an idiolect and a sociolect.",
          model:
            "<p>An <strong>idiolect</strong> is an individual speaker's unique linguistic fingerprint — their personal combination of accent, dialect, lexical preferences, idioms and stylistic habits. A <strong>sociolect</strong> is a variety associated with a social group (class, profession, age, ethnicity). Every speaker has an idiolect that is shaped by, but not identical to, the sociolects they belong to.</p>",
          keyTerms: ["idiolect", "sociolect"],
        },
        {
          id: "ls-s5",
          category: "Theory",
          marks: 4,
          question:
            "Critically evaluate Lakoff's claims about 'women's language'.",
          model:
            "<p>Lakoff (1975) claimed women's language was characterised by hedges ('sort of'), tag questions ('isn't it?'), intensifiers, polite forms and empty adjectives — features she argued reflected and reinforced women's subordinate social position. Her work was historically important in placing gender on the sociolinguistic agenda.</p><p>However, it has been heavily criticised. Lakoff's claims rested on intuition rather than systematic data. Cameron and others have shown that supposed gender differences are often myths; differences within genders typically exceed differences between them. Tannen's later work emphasised gendered <em>functions</em> (rapport vs report talk) rather than features, but is itself critiqued for essentialising. Top-band engagement frames Lakoff as a historically pivotal but empirically weak position that opened a still-contested field.</p>",
          keyTerms: ["Lakoff", "Cameron", "Tannen", "genderlect"],
          examinerNote:
            "Always frame Lakoff with critique — uncritical acceptance scores lower than thoughtful evaluation.",
        },
        {
          id: "ls-s6",
          category: "Concept",
          marks: 3,
          question:
            "What is Multicultural London English (MLE) and why is it significant for identity studies?",
          model:
            "<p>MLE is a young multi-ethnic dialect emerging from London's diverse communities, drawing on Caribbean Creole, South Asian and traditional Cockney influences. Features include TH-stopping ('ting' for 'thing'), GOOSE-fronting, distinctive pronouns ('man' as 1st person), and lexis from multiple source languages. It is significant because (a) it crosses ethnic boundaries — adopted by white, Black and Asian young Londoners alike; (b) it functions as a marker of urban youth identity rather than a single ethnic identity; and (c) it challenges traditional sociolinguistic categories built around ethnicity or class.</p>",
          keyTerms: ["MLE", "TH-stopping", "youth dialect"],
        },
        {
          id: "ls-s7",
          category: "Theorist",
          marks: 4,
          question:
            "How does Eckert's 'Jocks and Burnouts' research illustrate the link between language and identity?",
          model:
            "<p>Eckert studied a Detroit-area high school where students self-organised into 'Jocks' (school-oriented, college-bound) and 'Burnouts' (urban-oriented, anti-school). Each group had distinctive phonological patterns — Burnouts led on a vowel-backing change associated with Detroit urban speech; Jocks held closer to suburban norms. Critically, the variation was not driven by class but by <strong>chosen identity affiliation</strong>. Eckert's <strong>Communities of Practice</strong> framework reframed sociolinguistics around what speakers <em>do together</em> rather than fixed demographic categories — a major contribution to language-and-identity theory.</p>",
          keyTerms: ["Eckert", "Communities of Practice", "Jocks", "Burnouts"],
        },
        {
          id: "ls-s8",
          category: "Theorist",
          marks: 3,
          question:
            "Briefly explain Vygotsky's view of the relationship between language and thought.",
          model:
            "<p>Vygotsky argued that language and thought develop together but are originally separate processes. Around age 2, they intersect: speech becomes intellectual and thought becomes verbal. <strong>Inner speech</strong> — silent internalised dialogue — becomes the mechanism for higher-order thinking. For Vygotsky, language is not merely a vehicle for pre-formed thoughts; it constitutes much of cognition. This contrasts with Pinker's view that thought is independent of language ('mentalese').</p>",
          keyTerms: ["inner speech", "Vygotsky", "thought and language"],
        },
        {
          id: "ls-s9",
          category: "Concept",
          marks: 3,
          question:
            "Explain how code-switching can perform identity work, with an example.",
          model:
            "<p>Code-switching — moving between languages or varieties within a conversation — actively performs identity rather than simply reflecting it. For example, a British-Pakistani speaker might use Standard English in a job interview (signalling professional competence), MLE with friends (signalling urban youth identity), and Urdu with grandparents (signalling family and heritage identity). Each switch enacts a different facet of self. The choice is rarely arbitrary; it is identity work in real time, often combining accommodation (Giles) with style-shifting (Coupland).</p>",
          keyTerms: ["code-switching", "identity performance"],
        },
        {
          id: "ls-s10",
          category: "Theorist",
          marks: 3,
          question:
            "What did Labov's department store study reveal about pronunciation and class?",
          model:
            "<p>Labov (1966) elicited pronunciations of post-vocalic /r/ from staff at three NYC department stores ranked by social status — Saks (high), Macy's (mid), Klein's (low). Higher-status stores yielded more /r/-pronunciation, and staff <strong>converged upward</strong> (used more /r/) when asked to repeat — indicating that pronunciation was tied to perceived class and that speakers actively style-shifted in response to context. The study established sociolinguistic variation as a systematic, measurable phenomenon and is a foundational reference for any language-and-identity essay.</p>",
          keyTerms: [
            "Labov",
            "department store study",
            "rhoticity",
            "style-shifting",
          ],
        },
      ],

      long: [
        {
          id: "ls-l1",
          section: "Section B: Language and the Self",
          question:
            "Discuss what you feel are the most important issues raised in the text relating to the ways in which language can shape and reflect personal and social identity. You should refer to specific details from the text as well as to ideas and examples from your wider study of Language and the Self.",
          stimulus:
            "<p><em>Practice scenario:</em> Imagine the source is a magazine feature on accent and class in modern Britain, including an interview with a speaker who modified their regional accent at university and then re-adopted it after graduating.</p>",
          plan: `
            <h5>Suggested 5-paragraph structure</h5>
            <ol>
              <li><strong>Intro</strong>: identify 2–3 issues you'll engage with — accent and identity, accommodation, prestige hierarchy, style-shifting as performance. Name your theorists. Take a position to develop.</li>
              <li><strong>Issue 1 — Accommodation and convergence</strong>: Giles's CAT to frame the speaker's university shift. Distinguish upward convergence (towards the perceived prestige variety) from downward convergence (towards solidarity). Reference Labov (department store / Martha's Vineyard) for evidence that convergence is widespread and often unconscious.</li>
              <li><strong>Issue 2 — Overt vs covert prestige</strong>: Trudgill on Norwich. The speaker's re-adoption of the regional accent post-university is a classic move from overt towards covert prestige — claiming solidarity and authenticity. Tie to Eckert's Communities of Practice — identity is enacted through the variety we use with whom.</li>
              <li><strong>Issue 3 — Language and thought / identity construction</strong>: Sapir-Whorf weak version — does our language shape our self-conception? Vygotsky on inner speech — the language we use shapes the way we think about ourselves. Brief mention of Pinker as counter-position.</li>
              <li><strong>Conclusion</strong>: synthesise. Identity is not <em>reflected</em> in language so much as <em>constructed through</em> it. The speaker's two phases are not authentic vs inauthentic — both are identity work. End with a clear position.</li>
            </ol>
          `,
          theorists: [
            "Giles — Communication Accommodation Theory",
            "Labov — Martha's Vineyard, NYC department stores",
            "Trudgill — Norwich, overt vs covert prestige",
            "Eckert — Communities of Practice, Jocks and Burnouts",
            "Sapir-Whorf — linguistic relativity (weak)",
            "Vygotsky — inner speech",
            "Cameron — critique of gender essentialism (if relevant)",
            "Coupland — style-shifting as performance",
          ],
          markScheme: `
            <p><strong>Band 5 indicators:</strong></p>
            <ul>
              <li>Sustained discursive register; sophisticated, low-frequency lexis.</li>
              <li>Quotes embedded skilfully — short, anchoring claims.</li>
              <li>Multiple theorists deployed to argue, not summarise.</li>
              <li>Engagement with linguistic determinism / relativity at appropriate depth.</li>
              <li>Counter-positions considered (e.g. Pinker against Whorf, Cameron on gender).</li>
              <li>Confident, nuanced conclusion.</li>
            </ul>
          `,
          examinerTips: `
            <ul>
              <li>Do NOT analyse the source text's lexis, syntax or graphology — Paper 4 has no AO5.</li>
              <li>Embed quotes; never block-quote.</li>
              <li>Prefer terminology like 'sociolect', 'covert prestige', 'community of practice' over informal phrasing.</li>
              <li>Reference at least one specific empirical study (Labov, Trudgill, Eckert) — not just frameworks.</li>
              <li>Avoid uncritical claims about gender — frame Lakoff with Cameron.</li>
              <li>Take a position. Sophisticated essays argue something, not just survey the field.</li>
            </ul>
          `,
          checklist: [
            "I have engaged with at least 3 substantive issues.",
            "I have used at least 4 theorists to argue, not summarise.",
            "I have referenced at least one specific empirical study.",
            "I have engaged with linguistic determinism/relativity.",
            "I have NOT done feature analysis of the source.",
            "Quotes are short and embedded.",
            "I have used technical terminology (sociolect, prestige, accommodation, etc.).",
            "I have avoided rhetorical questions without answers.",
            "My conclusion takes a definite position.",
            "Word count 600–900.",
          ],
        },
        {
          id: "ls-l2",
          section: "Section B: Language and the Self",
          question:
            "'The language we speak shapes how we think.' Discuss the issues raised by this claim, with reference to the text and your wider study of Language and the Self.",
          stimulus:
            "<p><em>Practice scenario:</em> Imagine a popular-science article describing the Pirahã (a language with no number words) and the Kuuk Thaayorre (who use cardinal directions instead of left/right), arguing that these communities think differently as a result.</p>",
          plan: `
            <ol>
              <li><strong>Intro</strong>: signal you'll distinguish strong from weak Whorfian positions. Take a position: weak relativity is defensible; strong determinism is not.</li>
              <li><strong>Strong determinism — and why it fails</strong>: Pinker's argument that thought precedes language; speakers think about concepts they lack words for; the deaf and pre-linguistic infants think.</li>
              <li><strong>Weak relativity — supporting evidence</strong>: Boroditsky's Russian blues; Kuuk Thaayorre spatial reasoning; grammatical gender effects on object-perception. Language shapes habits of attention.</li>
              <li><strong>Beyond Whorf — Vygotsky on inner speech</strong>: language constitutes much of higher thought through internalised dialogue. Identity-and-thought are linguistically mediated even within one language.</li>
              <li><strong>Conclusion</strong>: language doesn't determine thought, but consistently shapes the cognitive grooves we work in. Implication for identity: how we speak (sociolect, idiolect, accent) is not just a marker but a constituent of selfhood.</li>
            </ol>
          `,
          theorists: [
            "Sapir-Whorf — strong vs weak",
            "Pinker — anti-Whorf",
            "Boroditsky — empirical relativity",
            "Vygotsky — inner speech",
          ],
          markScheme: `
            <p>This question explicitly tests the determinism/relativity debate. Top-band responses:</p>
            <ul>
              <li>Distinguish strong and weak versions clearly.</li>
              <li>Cite empirical evidence rather than just naming theorists.</li>
              <li>Engage Pinker as a serious counter-position.</li>
              <li>Connect cognition to identity by the conclusion.</li>
            </ul>
          `,
          examinerTips: `
            <ul>
              <li>Resist sweeping claims like 'speakers of X think completely differently'.</li>
              <li>Use specific examples (blues, cardinal directions) rather than abstract claims.</li>
              <li>Don't conflate language influencing thought with language determining thought.</li>
            </ul>
          `,
          checklist: [
            "I have distinguished strong and weak Sapir-Whorf clearly.",
            "I have cited at least 2 empirical examples.",
            "I have engaged Pinker as a counter-position.",
            "I have connected the determinism debate to identity.",
            "My conclusion takes a clear, nuanced position.",
            "Word count 600–900.",
          ],
        },
      ],

      theory: [
        {
          name: "Sapir-Whorf",
          label: "Strong (determinism) vs weak (relativity)",
          body:
            "<p>Strong: language determines thought (largely rejected). Weak: language influences cognition (supported by Boroditsky, Kuuk Thaayorre studies). Always specify which version.</p>",
        },
        {
          name: "Giles",
          label: "Communication Accommodation Theory",
          body:
            "<p>Convergence (towards interlocutor — solidarity) vs divergence (away — identity assertion). Upward / downward convergence based on prestige direction. Both are identity work.</p>",
        },
        {
          name: "Labov",
          label: "Martha's Vineyard (1963), NYC department stores (1966)",
          body:
            "<p>Two foundational studies. Martha's Vineyard: pronunciation as marker of local identity. Department store: pronunciation correlates with class and shifts under stylistic pressure.</p>",
        },
        {
          name: "Trudgill",
          label: "Norwich (1974), overt vs covert prestige",
          body:
            "<p>Working-class men covertly valued non-standard forms as markers of masculinity. Introduced overt vs covert prestige distinction.</p>",
        },
        {
          name: "Eckert",
          label: "Jocks and Burnouts, Communities of Practice",
          body:
            "<p>Identity affiliation drives variation, not just demographic class. Communities of Practice framework reframes sociolinguistics around shared activity.</p>",
        },
        {
          name: "Vygotsky",
          label: "Inner speech",
          body:
            "<p>Language and thought develop together. Inner speech (internalised dialogue) is the mechanism of higher-order cognition. Language constitutes much of thought.</p>",
        },
        {
          name: "Pinker",
          label: "Mentalese, anti-Whorf",
          body:
            "<p>Thought precedes language; people think in 'mentalese'. Sharp critic of strong Whorfian determinism. Useful counterweight.</p>",
        },
        {
          name: "Lakoff / Tannen / Cameron",
          label: "Gender and language",
          body:
            "<p>Lakoff (1975): proposed features of women's language. Tannen: difference theory (rapport vs report talk). Cameron: critiques both as essentialising. Always frame Lakoff with Cameron's critique.</p>",
        },
        {
          name: "Boroditsky",
          label: "Empirical linguistic relativity",
          body:
            "<p>Russian blues (lexicalised distinction → faster discrimination); Kuuk Thaayorre cardinal directions (better spatial orientation). Strongest empirical support for weak Whorf.</p>",
        },
        {
          name: "Coupland",
          label: "Style-shifting as performance",
          body:
            "<p>Speakers actively style themselves — performative identity work, not just passive accommodation.</p>",
        },
      ],
    },
  },
};
