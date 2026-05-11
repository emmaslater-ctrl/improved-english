/* =========================================================
   9093 A Level English Language — Content
   Cambridge International A Level (Papers 3 & 4 only)
   ========================================================= */

import { GLOSSARY } from "./glossary-data";
import { PRACTICE } from "./practice-data";

export const CONTENT = {

  /* =========================================================
     SKILLS — How to write for each AO, what examiners reward
     ========================================================= */
  skills: [
    {
      tag: "AO5",
      title: "Selecting & Analysing Language Data (Paper 3)",
      intro: "AO5 is worth half the marks on Paper 3 Section A. The examiner wants to see you handle the source texts as data, not as decoration. Every claim should be tied to a specific feature in Text A, B or C — and you must integrate all three.",
      points: [
        "<strong>Start with Text A</strong> — identify the most distinctive features (graphology, lexis, grammar, orthography). These are your data points.",
        "<strong>Bring in Text B</strong> when discussing lexical/semantic shift — the corpus tables show which collocates have changed over time.",
        "<strong>Use Text C</strong> (n-gram graph) to track frequency change of specific words. Always describe the trend before interpreting it.",
        "<strong>Cross-reference</strong> rather than treating each text in isolation — top-band candidates weave evidence from all three texts into a single argument."
      ],
      example: "<em>The decline of 'unbecoming' shown in Text C aligns with the lexical replacement seen in Text B, where 'humour' has shed its medical and moral connotations in favour of comedic ones — a pattern of <em>narrowing</em> consistent with Aitchison's model of semantic change.</em>",
      warning: "Listing features without analysis. \"Text A uses the long-s\" is description, not analysis. You must explain <em>why</em> the feature matters and what it tells us about language change."
    },

    {
      tag: "AO4",
      title: "Conceptualisation — Using Theory Effectively",
      intro: "AO4 rewards you for showing you know <em>why</em> language behaves the way it does. This means deploying named theorists, models and frameworks — but only where they illuminate your evidence. Theory dumping (listing everything you know about Aitchison without applying it) scores in the lower bands.",
      points: [
        "<strong>Name the theorist precisely</strong> — \"Aitchison's PIDC model\" not \"a theory\".",
        "<strong>Apply the theory</strong> to a specific feature in the data — show <em>how</em> it explains the change.",
        "<strong>Synthesise rival accounts</strong> at top-band level — e.g., balancing Chomsky's nativist view with Bruner's interactionist account in CLA.",
        "<strong>Be selective</strong> — three deeply applied theories beat eight name-drops."
      ],
      example: "<em>Bailey's repeated use of 'comed' demonstrates a virtuous error: she has internalised the regular past-tense rule and is over-extending it to an irregular verb. This supports Chomsky's LAD hypothesis — Bailey is not imitating, she is constructing.</em>",
      warning: "Citing a theorist without applying them. \"Halliday wrote about functions of language\" is not analysis — show which function and where it appears."
    },

    {
      tag: "AO2",
      title: "Writing Effectively for Paper 3",
      intro: "AO2 rewards clarity, precision and academic register. The examiner is looking for sustained, accurate prose with specific terminology. Vague phrases (\"old-style\", \"sounds funny\") cost marks.",
      points: [
        "<strong>Use precise terminology</strong> — \"graphological\", \"orthographic\", \"morphological\", not \"the way it looks\".",
        "<strong>Embed quotations smoothly</strong> — \"the use of <em>'publick'</em> reflects pre-Johnson orthographic conventions\".",
        "<strong>Vary sentence structure</strong> — short sentences for emphasis, longer ones for nuance.",
        "<strong>Avoid colloquial fillers</strong> — no \"basically\", \"a lot\", \"things like that\"."
      ],
      example: "<em>The phonological spelling 'shew' for 'show' reflects a transitional moment between the Great Vowel Shift's reshaping of long vowels and the orthographic standardisation that would follow Johnson's dictionary.</em>",
      warning: "Imprecise language: \"This shows the language has changed.\" — too vague. Name the level of language and the specific change."
    },

    {
      tag: "AO1",
      title: "Understanding the Stimulus (Paper 4)",
      intro: "AO1 is the largest AO on Paper 4. The examiner wants to see that you have grasped the specific issues raised in the stimulus text — and engaged with them critically. Generic essays that ignore the prompt score badly.",
      points: [
        "<strong>Identify the stimulus's central claim</strong> in your introduction — what is the writer arguing?",
        "<strong>Quote selectively</strong> from the stimulus to anchor your discussion (1–3 short references).",
        "<strong>Engage critically</strong> — agree, qualify, or challenge with reasons.",
        "<strong>Don't summarise the stimulus</strong> at length — your essay should respond to it, not paraphrase it."
      ],
      example: "<em>Mohan's claim that Indian English has become \"powerful and temperamental\" raises the question of ownership: if the variety has its own conventions, must we still measure it against \"normal English\"? Widdowson would argue no — once English moves beyond the Inner Circle, ownership passes to the new speakers.</em>",
      warning: "Writing a generic essay on \"English in the world\" without engaging with the stimulus. The examiner needs to see you have <em>read</em> the source."
    },

    {
      tag: "P4",
      title: "The Discursive Essay (Paper 4)",
      intro: "Paper 4 essays are <strong>discursive</strong>, not analytical. You are debating ideas using language theory — you are <strong>not</strong> performing feature analysis on the stimulus text. This is the single most common error on Paper 4.",
      points: [
        "<strong>Build an argument</strong>, not a feature list — your essay should have a clear thesis.",
        "<strong>Bring in named theorists</strong> as authorities to support or complicate your position.",
        "<strong>Use your own examples</strong> — varieties of English you have studied, instances of language and identity.",
        "<strong>Acknowledge counter-arguments</strong> — top-band essays show critical balance.",
        "<strong>Avoid analysing the stimulus's lexis, grammar or graphology</strong> — that is Paper 3 territory and earns no AO5 credit on Paper 4."
      ],
      example: "<em>While Phillipson's framework of linguistic imperialism captures the historical dynamics of English's global spread, it risks denying agency to non-native users. Widdowson's notion of ownership offers a more productive framing: English has been adopted, adapted and made local. Mohan's account of Indian English supports this — \"do the needful\" is not flawed English but appropriated English.</em>",
      warning: "Writing a Paper 3 essay on a Paper 4 question. If you find yourself talking about the stimulus's vocabulary or sentence structure, stop — that is the wrong paper."
    }
  ],

  /* =========================================================
     PITFALLS — examiner-derived warnings
     ========================================================= */
  pitfalls: [
    {
      title: "Paper 4 ≠ feature analysis",
      body: "The single biggest error on Paper 4. Candidates apply Paper 3 frameworks (graphology, lexis, syntax) to the stimulus text and produce a linguistic analysis. AO5 is worth 0 marks on Paper 4 — feature analysis literally cannot score.",
      fix: "Treat the Paper 4 stimulus as a starting point for discussion, not a text to dissect. Engage with the ideas, deploy theorists, build an argument."
    },
    {
      title: "Calling words 'archaic' without evidence",
      body: "Examiner reports flag this repeatedly. Calling 'shew' or 'unbecoming' \"archaic\" is a value judgement — and unprovable without data.",
      fix: "Use \"low frequency\" instead, and back it up with the n-gram graph or corpus table provided."
    },
    {
      title: "Calling child utterances 'mistakes'",
      body: "Bailey saying \"comed\" is not a mistake. It is evidence of grammatical competence — she has internalised a rule and is applying it.",
      fix: "Use \"emerging competencies\", \"virtuous errors\" or \"developmental features\". Frame the child as actively constructing language."
    },
    {
      title: "Reproducing Kachru's Circles",
      body: "Examiners note that essays which simply describe Kachru's three concentric circles waste marks. Higher-band candidates critique the model.",
      fix: "Acknowledge Kachru briefly, then problematise — boundaries shift (Singapore moved from Outer to Inner-leaning), some users straddle circles, and the model centres native-speaker norms in a way Widdowson rejects."
    },
    {
      title: "The 'industrialisation/globalisation' throwaway",
      body: "Paper 3 essays often gesture vaguely at \"industrialisation\" or \"globalisation\" as causes of change without specifying mechanisms. This earns no AO4 credit.",
      fix: "Be specific: which technology, which migration, which institution. \"Caxton's printing press in 1476 began the gradual standardisation of orthography\" beats \"things changed because of progress\"."
    },
    {
      title: "Journalistic register on Paper 4",
      body: "Rhetorical questions, dramatic openings, emotive language — these are speech and persuasive-writing techniques, and they undercut your AO2 mark on Paper 4.",
      fix: "Adopt an academic discursive register: hedge claims (\"This suggests…\"), signpost (\"However, it must be acknowledged…\"), and build cumulative argument."
    },
    {
      title: "Theory dumping",
      body: "Listing every theorist you know without application: \"Crystal, Phillipson, Widdowson, Schneider, Jenkins, Seidlhofer all discussed English.\" This earns no AO4 credit.",
      fix: "Three theorists deeply applied beats eight name-drops. Each theorist needs a job — supporting your argument, complicating it, or being challenged."
    },
    {
      title: "Misreading transcript conventions",
      body: "On Paper 3 Section B, conventions like (1), (.), //, ↗, ↘ and ° ° all carry meaning. Ignoring them costs AO5 marks.",
      fix: "Reference paralinguistic and prosodic features in your analysis — \"the rising intonation on 'rory scratched you↗' marks this as a checking question, characteristic of CDS\"."
    },
    {
      title: "Forgetting Text C exists",
      body: "Many candidates discuss Texts A and B in detail but barely mention the n-gram graph in Text C. Cambridge marks AO5 across all three texts.",
      fix: "Always integrate Text C — describe the frequency trend, then interpret it. Place this in your Lexis or Orthography paragraph depending on what the n-gram is tracking."
    }
  ],

  /* =========================================================
     BANDS — Cambridge mark scheme descriptors
     ========================================================= */
  bands: {
    p3a: [
      { num: 5, marks: "21–25", desc: "Sophisticated expression with sustained accuracy. Sophisticated understanding of linguistic concepts and insightful reference to wider study. Insightful analysis and synthesis of language data from all three sources." },
      { num: 4, marks: "16–20", desc: "Effective expression with minor errors. Detailed understanding of linguistic concepts and effective reference to wider study. Effective analysis and synthesis of language data from all three sources." },
      { num: 3, marks: "11–15", desc: "Clear expression with occasional errors. Clear understanding and appropriate reference to linguistic concepts. Clear analysis and synthesis of data from sources." },
      { num: 2, marks: "6–10",  desc: "Expression is clear but may not flow easily. Limited understanding of concepts. Limited analysis with some attempt to synthesise sources." },
      { num: 1, marks: "1–5",   desc: "Basic expression with frequent errors. Basic understanding and minimal reference to concepts. Basic analysis with minimal attempt to synthesise sources." }
    ],
    p3b: [
      { num: 5, marks: "21–25", desc: "Sophisticated understanding of the transcript. Insightful reference to characteristic features. Sophisticated reference to linguistic theories with insightful application of fully appropriate theorists." },
      { num: 4, marks: "16–20", desc: "Detailed understanding of the transcript. Effective reference to characteristic features. Effective reference to linguistic theories with detailed application of appropriate theorists." },
      { num: 3, marks: "11–15", desc: "Clear understanding of the transcript. Clear reference to characteristic features. Clear reference to theory with appropriate theorists." },
      { num: 2, marks: "6–10",  desc: "Limited understanding of the transcript. Limited reference to features. Some limited reference to theory." },
      { num: 1, marks: "1–5",   desc: "Basic understanding. Minimal reference to features. Minimal reference to theory." }
    ],
    p4: [
      { num: 5, marks: "21–25", desc: "Sophisticated understanding of issues raised in the text. Sophisticated, controlled written expression. Sophisticated reference to linguistic concepts and wider study, with insightful, fully appropriate theorist deployment." },
      { num: 4, marks: "16–20", desc: "Detailed understanding of issues. Effective written expression with minor errors. Effective reference to linguistic concepts with detailed application of appropriate theorists." },
      { num: 3, marks: "11–15", desc: "Clear understanding of the central issues. Clear written expression. Clear reference to linguistic concepts and appropriate theorists." },
      { num: 2, marks: "6–10",  desc: "Limited understanding of issues. Expression clear but with frequent errors. Limited reference to linguistic concepts." },
      { num: 1, marks: "1–5",   desc: "Basic understanding. Frequent errors that impede communication. Minimal reference to concepts." }
    ]
  },

  /* =========================================================
     TOPICS — flashcards organised by topic
     ========================================================= */
  topics: {

    languageChange: {
      title: "Language Change (Paper 3, Section A)",
      flashcards: [
        { id: "lc1",  tag: "Theorist · Aitchison", front: "What is Aitchison's PIDC model?", back: "Potential, Implementation, Diffusion, Codification — a four-stage model of how language change spreads.", example: "Potential: speakers vary 'unbecoming/inappropriate'. Implementation: some adopt the new form. Diffusion: it spreads. Codification: dictionaries record it." },
        { id: "lc2",  tag: "Theorist · Aitchison", front: "What are Aitchison's three prescriptivist metaphors?", back: "Damp Spoon (laziness), Crumbling Castle (decay) and Infectious Disease (contagion). Aitchison rejects all three — change is natural, not corruption." },
        { id: "lc3",  tag: "Theorist · Crystal", front: "What is David Crystal's tide metaphor?", back: "Crystal compares language change to the tide — words wash in, others recede. Change is constant and natural; no word is permanent." },
        { id: "lc4",  tag: "Theorist · Halliday", front: "What is Halliday's functional theory of change?", back: "Language changes to meet the changing functional needs of its users. When a concept disappears, the words for it fade. When new concepts arise, new words are coined.", example: "The decline of 'humour' meaning bodily fluid as the four-humours medical theory became obsolete." },
        { id: "lc5",  tag: "Theorist · Hockett", front: "What is Hockett's random fluctuation theory?", back: "Hockett argued language change happens through random copying errors and inconsistencies that gradually accumulate, much like genetic drift." },
        { id: "lc6",  tag: "Theorist · Chen", front: "What is Chen's S-curve model?", back: "Change spreads slowly at first, then rapidly through the middle adopters, then slowly again as it reaches the last holdouts — producing an S-shaped curve when graphed." },
        { id: "lc7",  tag: "Theorist · Lowth", front: "Who was Robert Lowth?", back: "Robert Lowth (1762) wrote 'A Short Introduction to English Grammar' — a key prescriptivist text. He invented many rules (no split infinitives, no preposition stranding) based on Latin." },
        { id: "lc8",  tag: "Theorist · Johnson", front: "What did Samuel Johnson do for English?", back: "Johnson published his Dictionary of the English Language in 1755, a major step in standardising spelling. He retained many older spellings (e.g., 'publick') which gradually fell away." },
        { id: "lc9",  tag: "Theorist · Caxton", front: "What did William Caxton do?", back: "Caxton introduced the printing press to England in 1476. This began the gradual standardisation of English spelling and graphology, as printers needed consistent forms." },
        { id: "lc10", tag: "Theorist · Fairclough", front: "What is informalisation?", back: "Fairclough's term for the gradual shift of public/written English towards more conversational, intimate registers — driven by media and digital communication." },
        { id: "lc11", tag: "Theorist · Mair", front: "What is colloquialisation?", back: "Mair's related concept: written English has progressively adopted features of speech (contractions, shorter sentences, informal lexis), accelerated by digital media." },
        { id: "lc12", tag: "Theorist · Goodman", front: "What did Goodman argue about formality?", back: "Goodman observed declining formality in written English over recent decades, with previously formal contexts (work emails, journalism) adopting conversational features." },
        { id: "lc13", tag: "Concept · GVS", front: "What was the Great Vowel Shift?", back: "A major phonological change between roughly 1400 and 1700 in which all the long vowels of English shifted upwards or diphthongised. It explains why English spelling and pronunciation often don't match.", example: "Why 'shew' (rhyming with 'few') became 'show' — the spelling lagged behind the shift." },
        { id: "lc14", tag: "Concept · Standardisation", front: "What is standardisation?", back: "The gradual emergence of a single accepted form of a language, usually based on the prestige variety. Driven by printing, dictionaries, education and government.", example: "Caxton, Johnson and the rise of Standard British English." },
        { id: "lc15", tag: "Concept · Substratum", front: "What is substratum theory?", back: "When two languages come into contact (often through invasion, colonisation or migration), the less powerful language often leaves traces — substratum influence — in the dominant one. Vocabulary, sounds or grammatical structures pass from the subordinate language into the new variety.", example: "Norman French left thousands of substratum words in English after 1066 (court, justice, beef). Welsh has left substratum traces in English in Wales." },
        { id: "lc16", tag: "Semantic Change", front: "What is amelioration?", back: "A word's meaning becomes more positive over time.", example: "'Nice' once meant 'foolish' in Middle English; it now means 'pleasant'." },
        { id: "lc17", tag: "Semantic Change", front: "What is pejoration?", back: "A word's meaning becomes more negative over time.", example: "'Silly' once meant 'blessed' or 'innocent'; it now means 'foolish'." },
        { id: "lc18", tag: "Semantic Change", front: "What is broadening (generalisation)?", back: "A word's meaning expands to cover more things.", example: "'Dog' originally referred to one specific breed; now it covers all members of the species." },
        { id: "lc19", tag: "Semantic Change", front: "What is narrowing (specialisation)?", back: "A word's meaning contracts to cover fewer things.", example: "'Meat' originally meant 'food in general'; now it means animal flesh." },
        { id: "lc20", tag: "Word Formation", front: "What is conversion?", back: "A word changes word class without changing form.", example: "'Google' (noun) → 'to google' (verb). 'Friend' (noun) → 'to friend' on social media." },
        { id: "lc21", tag: "Word Formation", front: "What is compounding?", back: "Two existing words combine to form a new word.", example: "'Laptop', 'smartphone', 'paywall'." },
        { id: "lc22", tag: "Word Formation", front: "What is blending?", back: "Parts of two words fuse into a new one.", example: "'Smog' (smoke + fog), 'brunch' (breakfast + lunch), 'podcast' (iPod + broadcast)." },
        { id: "lc23", tag: "Word Formation", front: "What is clipping?", back: "Shortening a longer word.", example: "'Phone' from 'telephone'; 'app' from 'application'." },
        { id: "lc24", tag: "Word Formation", front: "Acronym vs. initialism?", back: "Both abbreviate phrases, but acronyms are pronounced as words (NASA, NATO), while initialisms are spelled out (FBI, BBC)." },
        { id: "lc25", tag: "Word Formation", front: "What is back-formation?", back: "A new word is formed by removing what looks like a suffix.", example: "'Edit' was back-formed from 'editor'; 'burgle' from 'burglar'." },
        { id: "lc26", tag: "Concept · n-gram", front: "What is an n-gram graph?", back: "A graph showing how often a word or phrase has appeared in printed sources over time, generated from large digitised corpora (Google Books, etc.). Used to track lexical change.", example: "The n-gram for 'gaol' shows steady decline against 'jail' from 1900 onwards." },
        { id: "lc27", tag: "Tip", front: "Why avoid the word 'archaic'?", back: "Calling a word 'archaic' is a value judgement and unprovable without data. Use 'low frequency' instead, and back it up with the n-gram graph from Text C." },
        { id: "lc28", tag: "Concept · Wave Model", front: "What is the Wave Model of language change?", back: "Schmidt's model: changes spread outwards from a centre like ripples on water. Useful for explaining how innovations diffuse geographically and socially." },
        { id: "lc29", tag: "Graphology", front: "What is the long-s (ſ)?", back: "An older typographical form of the letter 's' used in the middle and beginning of words but not at the end. Common in pre-1800 printing; obsolete by the 1820s.", example: "'adviſe' for 'advise'; 'ariſe' for 'arise' in 18th-century texts." },
        { id: "lc30", tag: "Internal vs External", front: "Internal vs external causes?", back: "<strong>Internal:</strong> changes from within the language system (analogy, ease of articulation, simplification). <strong>External:</strong> changes from contact, technology, social shifts (Norman conquest, printing, digital media)." }
      ]
    },

    childLanguage: {
      title: "Child Language Acquisition (Paper 3, Section B)",
      flashcards: [
        { id: "cla1", tag: "Stages · Brown", front: "What are the five stages of language development?", back: "1. Pre-linguistic (0–12m, cooing, babbling). 2. Holophrastic (12–18m, one-word utterances). 3. Two-word (18–24m). 4. Telegraphic (24–36m). 5. Post-telegraphic (36m+, more complex syntax)." },
        { id: "cla2", tag: "Theorist · Skinner", front: "What is Skinner's behaviourist account?", back: "Skinner argued children learn language through operant conditioning: imitation, reinforcement and correction. Adult praise rewards correct utterances; children gradually shape their language to match." },
        { id: "cla3", tag: "Theorist · Chomsky", front: "What is Chomsky's Language Acquisition Device (LAD)?", back: "Chomsky proposed an innate, biologically endowed mental module that contains the universal principles of grammar. Children don't learn grammar — they activate it through exposure." },
        { id: "cla4", tag: "Theorist · Chomsky", front: "What is the 'poverty of stimulus' argument?", back: "Chomsky's claim that the language children hear is too fragmentary and inconsistent to teach them grammar through imitation alone — therefore some grammatical knowledge must be innate." },
        { id: "cla5", tag: "Theorist · Bruner", front: "What is Bruner's LASS?", back: "Language Acquisition Support System — Bruner's interactionist response to Chomsky. Children acquire language through scaffolded social interaction with caregivers, especially through routines like book-sharing." },
        { id: "cla6", tag: "Theorist · Vygotsky", front: "What is the Zone of Proximal Development (ZPD)?", back: "The gap between what a child can do alone and what they can do with help from a More Knowledgeable Other (MKO). Effective scaffolding operates just above the child's current ability.", example: "A mother recasting 'comed' to 'came' is operating in Bailey's ZPD." },
        { id: "cla7", tag: "Theorist · Piaget", front: "What is Piaget's preoperational stage?", back: "Ages 2–7. Children develop symbolic thought — they can represent objects with words and images. Imaginative play (Bailey's 'bunnyhorse') reflects this cognitive development." },
        { id: "cla8", tag: "Theorist · Halliday", front: "What are Halliday's seven functions of language?", back: "Instrumental, Regulatory, Interactional, Personal, Heuristic, Imaginative, Representational. Children acquire these progressively to meet expanding social needs." },
        { id: "cla9", tag: "Theorist · Bellugi", front: "What did Bellugi observe about pronouns?", back: "Bellugi tracked children's acquisition of pronouns through three stages: (1) child's name, (2) self-as-subject pronouns, (3) full pronoun system with case distinctions ('I/me')." },
        { id: "cla10", tag: "Theorist · Tomasello", front: "What is Tomasello's usage-based account?", back: "Children learn language through pattern-finding and analogy from concrete instances heard in real interactions. No innate grammar needed — just powerful general cognitive abilities applied to social input." },
        { id: "cla11", tag: "CDS", front: "What is child-directed speech (CDS)?", back: "The simplified, exaggerated register adults use with infants and young children. Features include: higher pitch, slower tempo, repetition, simplified vocabulary, exaggerated intonation, expanded vowels." },
        { id: "cla12", tag: "CDS · Recasting", front: "What is recasting?", back: "When an adult repeats a child's utterance with a correction added — providing the correct model without explicit criticism.", example: "Child: 'mine are little.' Adult: 'yes yours is little.'" },
        { id: "cla13", tag: "CDS · Expansion", front: "What is expansion?", back: "When an adult takes a child's utterance and adds grammatical or lexical detail.", example: "Child: 'rorys paws.' Adult: 'her claws.'" },
        { id: "cla14", tag: "Errors", front: "What is a virtuous error?", back: "An 'error' that actually shows the child has correctly learned a rule and is applying it logically — even when the result is non-standard.", example: "'Comed' for 'came' shows mastery of the regular past-tense rule." },
        { id: "cla15", tag: "Errors", front: "Overextension vs underextension?", back: "<strong>Overextension:</strong> applying a word too widely (calling all four-legged animals 'doggie'). <strong>Underextension:</strong> applying it too narrowly (only the family pet is 'doggie')." },
        { id: "cla16", tag: "Phonology", front: "What is consonant cluster reduction?", back: "Young children simplify difficult consonant clusters.", example: "'Spoon' becomes 'poon'; 'tree' becomes 'tee'." },
        { id: "cla17", tag: "Phonology", front: "What is gliding?", back: "Substitution of liquids /l/ /r/ with glides /j/ /w/.", example: "'Rabbit' becomes 'wabbit'; 'lamp' becomes 'yamp'." },
        { id: "cla18", tag: "Phonology", front: "What is stopping?", back: "Substitution of fricatives with stops/plosives — common with the difficult /θ/ and /ð/ sounds.", example: "'They' becomes /deɪ/; 'three' becomes 'tree'." },
        { id: "cla19", tag: "Phonology", front: "What is fronting?", back: "Substituting a sound made at the back of the mouth with one made at the front.", example: "'Cup' becomes 'tup'; 'go' becomes 'do'." },
        { id: "cla20", tag: "Pragmatics", front: "What is turn-taking?", back: "The pragmatic skill of co-ordinating who speaks when in conversation. Even very young children begin to develop this through CDS routines." },
        { id: "cla21", tag: "Pragmatics", front: "What is an adjacency pair?", back: "A two-part exchange where the first utterance prompts a specific second (question→answer, greeting→greeting). Children develop competence with these in CDS interactions." },
        { id: "cla22", tag: "Concept · Critical Period", front: "What is the Critical Period Hypothesis?", back: "Lenneberg's claim that there is a window (roughly birth to puberty) during which language acquisition is biologically optimal. Children who miss this window (Genie) struggle to fully acquire language." },
        { id: "cla23", tag: "Transcript", front: "What does (.) mean in a transcript?", back: "A micropause — under one second. (1) means a one-second pause. // means speech overlap." },
        { id: "cla24", tag: "Transcript", front: "What does ↗ mean?", back: "Rising intonation — often marks a question or invitation to respond. ↘ marks falling intonation. Adults frequently use ↗ on declaratives in CDS to invite participation." },
        { id: "cla25", tag: "Tip", front: "How should you frame child errors?", back: "Never call them 'mistakes'. Use 'virtuous errors', 'emerging competencies' or 'developmental features'. The child is actively constructing language, not failing at it." }
      ]
    },

    englishWorld: {
      title: "English in the World (Paper 4, Section A)",
      flashcards: [
        { id: "ew1", tag: "Theorist · Kachru", front: "What are Kachru's Three Circles?", back: "<strong>Inner Circle:</strong> native-speaker countries (UK, US, Australia). <strong>Outer Circle:</strong> ESL countries (India, Singapore, Nigeria). <strong>Expanding Circle:</strong> EFL countries (China, Brazil, Russia)." },
        { id: "ew2", tag: "Critique · Kachru", front: "What's the main critique of Kachru's circles?", back: "The model centres native-speaker norms; boundaries are blurring (Singapore is moving towards Inner-leaning); many users straddle circles. Widdowson rejects the Inner-Circle ownership claim entirely." },
        { id: "ew3", tag: "Theorist · Crystal", front: "What is Crystal's view of global English?", back: "Crystal argues English has become a genuinely global lingua franca by historical accident (British colonialism + American economic dominance), and is now naturally pluralising into many world Englishes." },
        { id: "ew4", tag: "Theorist · Phillipson", front: "What is linguistic imperialism?", back: "Phillipson's argument that the global spread of English is not natural but actively imposed by powerful institutions (British Council, World Bank), suppressing local languages and serving Anglophone interests." },
        { id: "ew5", tag: "Theorist · Widdowson", front: "What is Widdowson's argument about ownership?", back: "Widdowson argues English no longer belongs to its native speakers. Once a community adopts English, they own it and may legitimately innovate. There is no 'real' English to defend." },
        { id: "ew6", tag: "Theorist · Schneider", front: "What are Schneider's Five Phases?", back: "Schneider's Dynamic Model traces how postcolonial Englishes develop: 1. Foundation, 2. Exonormative stabilisation, 3. Nativisation, 4. Endonormative stabilisation, 5. Differentiation." },
        { id: "ew7", tag: "Theorist · Diamond", front: "What is Diamond's 'steamroller' argument?", back: "Jared Diamond argued dominant languages (like English) act like steamrollers, flattening smaller languages in their path. Linked to language death." },
        { id: "ew8", tag: "Theorist · McCrum", front: "What is Globish?", back: "McCrum's term for the simplified, functional English used by non-native speakers worldwide — a stripped-down lingua franca with reduced vocabulary and idiom." },
        { id: "ew9", tag: "Theorist · Jenkins", front: "What is ELF (English as a Lingua Franca)?", back: "Jenkins (and Seidlhofer) argue that English used between non-native speakers should be analysed as a legitimate variety in its own right, with its own emerging norms — not measured against native-speaker standards." },
        { id: "ew10", tag: "Concept · Pidgin", front: "What is a pidgin?", back: "A simplified contact language that emerges when speakers of different languages need to communicate (often for trade or labour). No native speakers; reduced grammar and vocabulary." },
        { id: "ew11", tag: "Concept · Creole", front: "What is a creole?", back: "A pidgin that has been acquired as a first language by a community and has expanded grammatically into a full language.", example: "Jamaican Creole, Tok Pisin, Singlish." },
        { id: "ew12", tag: "Concept · Continuum", front: "What is the creole continuum?", back: "The range from <em>basilect</em> (most distant from standard, e.g. deep Singlish) to <em>mesolect</em> (intermediate) to <em>acrolect</em> (closest to standard English). Speakers shift along this continuum depending on context." },
        { id: "ew13", tag: "Concept · Code-switching", front: "What is code-switching?", back: "Alternating between two or more languages or varieties within a single conversation or even sentence. Often signals identity, intimacy, or topic shift.", example: "Indian English speakers may switch between Hindi and English mid-sentence." },
        { id: "ew14", tag: "Concept · Language Death", front: "What is language death?", back: "When the last speaker of a language dies, or speakers shift entirely to another language. UNESCO estimates a language dies roughly every two weeks." },
        { id: "ew15", tag: "Variety · Indian English", front: "Three features of Indian English?", back: "(1) Use of <em>only</em> for emphasis ('he's like that only'). (2) Verbs like <em>do the needful</em>. (3) <em>Pre-pone</em> (the opposite of postpone). All Indian innovations now widely accepted." },
        { id: "ew16", tag: "Variety · Singlish", front: "Three features of Singlish?", back: "(1) Final particles: <em>lah</em>, <em>leh</em>, <em>lor</em>. (2) Topic-prominent grammar ('this book I already read'). (3) Tense reduction (often inferred from context rather than morphology)." },
        { id: "ew17", tag: "Variety · AAVE", front: "Three features of AAVE?", back: "(1) Habitual <em>be</em> ('he be working' = he habitually works). (2) Multiple negation ('I ain't got no money'). (3) Copula deletion ('she happy'). All systematic and rule-governed." },
        { id: "ew18", tag: "Concept · Zero translation", front: "What is zero translation?", back: "Loanwords adopted into a language without any translation or modification.", example: "<em>Yaar</em>, <em>bhelpuri</em>, <em>guru</em> entering English from Indian languages." },
        { id: "ew19", tag: "Concept · Three Futures", front: "What are the three futures of English?", back: "(1) <strong>Fragmentation:</strong> English splits into mutually unintelligible varieties. (2) <strong>Maintenance:</strong> a global standard endures. (3) <strong>Replacement:</strong> Mandarin or Spanish overtakes it." },
        { id: "ew20", tag: "Tip", front: "Should you reproduce Kachru's circles diagram?", back: "No — examiners reward critique, not reproduction. Acknowledge Kachru briefly, then problematise the model with reference to Widdowson, Jenkins or shifting boundaries." },
        { id: "ew21", tag: "Tip", front: "What's the worst error on Paper 4 Section A?", back: "Performing linguistic feature analysis on the stimulus text — discussing its lexis, syntax, graphology. Paper 4 is discursive: engage with the <em>ideas</em>, deploy theorists." }
      ]
    },

    languageSelf: {
      title: "Language and the Self (Paper 4, Section B)",
      flashcards: [
        { id: "ls1", tag: "Theorist · Sapir-Whorf", front: "What is the Sapir-Whorf hypothesis?", back: "The claim that the language we speak shapes how we think. <strong>Strong version (linguistic determinism):</strong> language constrains thought. <strong>Weak version (linguistic relativity):</strong> language influences but does not determine thought." },
        { id: "ls2", tag: "Theorist · Pinker", front: "What is Pinker's response to Sapir-Whorf?", back: "Pinker argues for 'mentalese' — a universal language of thought independent of any spoken language. He rejects the strong Whorfian claim, though concedes mild relativity." },
        { id: "ls3", tag: "Theorist · Boroditsky", front: "What did Boroditsky's Russian blues study show?", back: "Russian distinguishes light blue (<em>goluboy</em>) from dark blue (<em>siniy</em>) at the lexical level. Russian speakers were faster at distinguishing the two shades — suggesting weak Whorfian effects." },
        { id: "ls4", tag: "Theorist · Giles", front: "What is Communication Accommodation Theory?", back: "Giles' theory that speakers adjust their speech to converge with (or diverge from) their interlocutors. Convergence signals solidarity; divergence signals distance or identity assertion." },
        { id: "ls5", tag: "Theorist · Giles", front: "Upward vs downward convergence?", back: "<strong>Upward:</strong> shifting towards a higher-prestige variety to gain approval (e.g., dropping regional accent in job interview). <strong>Downward:</strong> shifting towards a lower-prestige variety to fit in or build solidarity." },
        { id: "ls6", tag: "Theorist · Labov", front: "What was Labov's Department Store study?", back: "Labov (1966) studied post-vocalic /r/ in three NYC department stores at different prestige levels. Higher-prestige stores produced more /r/ — showing accent correlates with class and self-monitoring." },
        { id: "ls7", tag: "Theorist · Labov", front: "What did Labov find on Martha's Vineyard?", back: "Local fishermen used a centralised pronunciation of /aɪ/ and /aʊ/ to mark in-group identity against summer tourists. Phonological choice as identity assertion." },
        { id: "ls8", tag: "Theorist · Trudgill", front: "What did Trudgill find in Norwich?", back: "Trudgill (1974) showed that women used standard forms more than men, while men over-reported non-standard usage — introducing the concepts of overt and covert prestige." },
        { id: "ls9", tag: "Theorist · Trudgill", front: "Overt vs covert prestige?", back: "<strong>Overt prestige:</strong> the value attached to standard, mainstream forms (RP, written standard). <strong>Covert prestige:</strong> the value attached to non-standard forms within a community — masculinity, toughness, in-group loyalty." },
        { id: "ls10", tag: "Theorist · Cheshire", front: "What did Cheshire find in Reading?", back: "Cheshire studied adolescents in Reading and found non-standard grammatical variants (multiple negation, <em>ain't</em>) correlated with peer-group identity and 'vernacular culture' values." },
        { id: "ls11", tag: "Theorist · Eckert", front: "What are Eckert's Jocks and Burnouts?", back: "Eckert's Detroit study identified two opposed adolescent communities of practice — the school-aligned 'Jocks' and the urban-leaning 'Burnouts' — each with distinct phonological choices marking identity." },
        { id: "ls12", tag: "Concept · CoP", front: "What is a Community of Practice?", back: "A group united by shared activity and mutual engagement (Eckert; Wenger). Linguistic features emerge as markers of belonging — more dynamic and identity-driven than the older 'speech community'." },
        { id: "ls13", tag: "Theorist · Lakoff", front: "What is Lakoff's 'women's language'?", back: "Lakoff (1975) argued women's speech features hedges ('sort of'), tag questions ('isn't it?'), empty adjectives ('lovely'), and rising intonation — reflecting and reinforcing female subordination." },
        { id: "ls14", tag: "Theorist · Tannen", front: "What is Tannen's difference theory?", back: "Tannen argued men and women have different conversational styles ('report' vs 'rapport') from being raised in different sub-cultures. Often misread as essentialist — reception is more nuanced." },
        { id: "ls15", tag: "Theorist · Cameron", front: "What is Deborah Cameron's critique?", back: "Cameron (2007, <em>The Myth of Mars and Venus</em>) argues most claims about gendered language are myth — stylistic differences are small, contextual, and outweighed by within-gender variation." },
        { id: "ls16", tag: "Theorist · Vygotsky", front: "What is Vygotsky's inner speech?", back: "Vygotsky argued thought develops by internalising social language. Outer speech with caregivers becomes private speech, then silent inner speech — language becomes the medium of thought." },
        { id: "ls17", tag: "Concept · RP", front: "What is Received Pronunciation?", back: "The high-prestige accent historically associated with the British educated upper class, BBC newsreaders, and elite schooling. Spoken by ~3% of UK population. Often called 'BBC English' or 'Queen's English'." },
        { id: "ls18", tag: "Variety · MLE", front: "What is Multicultural London English?", back: "An emerging variety of English in inner London, drawing on Caribbean, South Asian and African Englishes. Features include: <em>th</em>-fronting, monophthongal vowels, the discourse marker <em>innit</em>." },
        { id: "ls19", tag: "Concept · Idiolect / Sociolect", front: "Idiolect, sociolect, dialect?", back: "<strong>Idiolect:</strong> an individual's unique speech patterns. <strong>Sociolect:</strong> language patterns shared by a social group (class, ethnicity, profession). <strong>Dialect:</strong> regional variation." },
        { id: "ls20", tag: "Theorist · Coupland", front: "What is style-shifting (Coupland)?", back: "Coupland's argument that speakers actively style-shift to project different identities in different contexts. Identity is performed through linguistic choices, not fixed." },
        { id: "ls21", tag: "Concept · Code-switching", front: "How is code-switching tied to identity?", back: "Bilinguals don't switch randomly — they switch to signal in-group membership, mark intimacy, exclude outsiders, or invoke a particular identity. Each language carries social meaning." },
        { id: "ls22", tag: "Tip · Gender", front: "How to discuss gender and language?", back: "Avoid essentialism. Frame Lakoff and Tannen as historically influential but heavily critiqued (Cameron). Modern accounts emphasise context, performance and the diversity within genders." },
        { id: "ls23", tag: "Concept · Identity Performance", front: "What does it mean to 'perform' identity?", back: "Drawn from Butler (gender) and applied linguistically — the idea that identity is not a fixed essence we express, but an ongoing performance constituted partly by linguistic choices. We <em>do</em> identity through language." },
        { id: "ls24", tag: "Concept · Innatism vs Empiricism", front: "Innatism vs Empiricism?", back: "<strong>Innatism / Nativism:</strong> some linguistic capacity is biologically pre-wired (Chomsky). <strong>Empiricism:</strong> language is learned entirely from environmental input (Skinner, Tomasello)." }
      ]
    }
  },

  /* glossary and practice imported from separate files for maintainability */
  glossary: GLOSSARY,
  practice: PRACTICE
};

