/* PRACTICE — past papers + invented questions with full source texts and model essays */

export const PRACTICE = [

  /* ============================================================
     SECTION 1: PAPER 3 — PAST PAPERS
     ============================================================ */
  {
    id: "p3-past",
    paper: "Paper 3",
    title: "Past Papers · Paper 3",
    desc: "Authentic Cambridge 9093 Paper 3 questions with full source texts and model essays. Each question follows the seven-paragraph Section A structure or the equivalent CLA structure for Section B.",
    questions: [

      /* === 2022 Nov 31 — Letter from a Father === */
      {
        title: "Section A — A Letter from a Father (1774)",
        session: "9093/31 · October/November 2022",
        marks: 25,
        prompt: "<strong>Read Texts A, B and C.</strong> Analyse how Text A exemplifies the various ways in which the English language has changed over time. In your answer, you should refer to specific details from Texts A, B and C, as well as to ideas and examples from your wider study of language change.",
        sources: [
          {
            label: "Text A — A Letter from a Father (1774)",
            text: `<p><em>An extract from a letter written in 1774 by a father to his daughter at boarding school.</em></p>
<p style="font-style:italic; text-align:center; margin-top:10px;">A Letter from a Father</p>
<p>Believe me, they are the beſt friends who take the trouble to ſhew you what you ought to do, and what you ought not to do; who plainly tell you your faults, that you may amend them.</p>
<p>I would farther adviſe you not to enter into party quarrels. Where there is a number of young people together, little jealouſies and diſputes will ariſe, and offences will be given. Every body is, ſome how or other, drawn in to take a ſide; each ſide grows keen, and the parties, by degrees, contract particular likings and averſions to one another. This humour is carried from the boarding-ſchool, and increaſed by their intercourſe with the world; where it daily diſcovers itſelf by a diſpoſition to argue, and a readineſs to take part in every affair that comes to be a matter of publick diſcuſſion, and in which every one, however unfit ſhe may be, aſſumes a right to judge. How often have we ſeen towns, cities, a great part of a country, nay the whole nation, divided about matters in which not one in ten thouſand had any concern; yet all ſeemed to be as deeply engaged, as if their own ſafety or intereſt had been at ſtake! I have often wondered to ſee the women the keeneſt in ſuch diſputes; which, to me, appeared very unbecoming¹. Let a woman, when ſhe is called to it, maintain her opinion, or diſſent from others, in decent terms, and without entering into an argument ſo far as to alter her temper, or diſcompoſe her features. She ſhould avoid all converſation that may deprive her of that ſoftneſs and compoſure which are ſo agreeable in the fair ſex, and ought to accompany all their ſpeeches and behaviour. A woman ruffled with paſſion makes a diſagreeable appearance; indeed, ſhe is not herſelf.</p>
<p>That you may be reſtrained from engaging in theſe ſilly conteſts, always aſk yourſelf — what concern have I in this affair? If you have none, be ſilent; if you have any, tell your mind calmly; and, as far as they will bear it, put a favourable conſtruction upon the actions and opinions of others.</p>
<p style="font-size:13px; color:#5a6c87; margin-top:14px;">¹ <em>unbecoming</em>: inappropriate, not flattering</p>`
          },
          {
            label: "Text B — Top modifiers of 'humour'",
            text: `<p><em>Five of the top modifiers of 'humour' from the Early English Books Corpus (1470s–1690s) and from the English Web 2015 corpus (texts collected from the internet in 2015).</em></p>
<table style="width:100%; max-width:480px; margin:14px auto; border-collapse:collapse; font-family:'Cormorant Garamond',serif;">
<thead><tr style="background:#e0d5b8;"><th style="padding:8px 14px; border:1px solid #c9bda1;">'humour' (1470s–1690s)</th><th style="padding:8px 14px; border:1px solid #c9bda1;">'humour' (2015)</th></tr></thead>
<tbody>
<tr><td style="padding:6px 14px; border:1px solid #c9bda1; text-align:center;">ill</td><td style="padding:6px 14px; border:1px solid #c9bda1; text-align:center;">wry</td></tr>
<tr><td style="padding:6px 14px; border:1px solid #c9bda1; text-align:center;">peccant¹</td><td style="padding:6px 14px; border:1px solid #c9bda1; text-align:center;">gallows</td></tr>
<tr><td style="padding:6px 14px; border:1px solid #c9bda1; text-align:center;">corrupt</td><td style="padding:6px 14px; border:1px solid #c9bda1; text-align:center;">fast-paced</td></tr>
<tr><td style="padding:6px 14px; border:1px solid #c9bda1; text-align:center;">sharp</td><td style="padding:6px 14px; border:1px solid #c9bda1; text-align:center;">slapstick</td></tr>
<tr><td style="padding:6px 14px; border:1px solid #c9bda1; text-align:center;">melancholy</td><td style="padding:6px 14px; border:1px solid #c9bda1; text-align:center;">tongue-in-cheek</td></tr>
</tbody></table>
<p style="font-size:13px; color:#5a6c87;">¹ <em>peccant</em>: sinful</p>`
          },
          {
            label: "Text C — n-gram graph: unbecoming vs inappropriate (1750–2000)",
            text: `<p><em>n-gram graph for the words</em> unbecoming <em>and</em> inappropriate <em>(1750–2000).</em></p>
<p>The graph shows that <strong>unbecoming</strong> rose steadily from 1750, peaked around the mid-19th century at roughly 0.0006%, and declined gradually thereafter. <strong>Inappropriate</strong> remained near zero until around 1940, after which it rose sharply, overtaking <em>unbecoming</em> by the 1960s and continuing to climb to roughly 0.0013% by 2000.</p>
<p style="font-size:13px; color:#5a6c87; margin-top:10px; font-style:italic;">[The original graph appeared in the 9093/31 Oct/Nov 2022 question paper.]</p>`
          }
        ],
        plan: {
          intro: "This is a Section A Language Change essay. The text is 1774 — Early Modern English transitioning into Modern English, just before Johnson's dictionary fully took hold. You need to weave Texts A, B and C into a single argument, applying theorists like Aitchison, Halliday, Crystal, Caxton, Johnson and Fairclough.",
          structure: [
            "<strong>Intro:</strong> 'Text A is a letter written in 1774 by a father to his daughter at boarding school. It provides a valuable insight into Early Modern English (EME) and, when read alongside Texts B and C, illustrates how the English language has changed significantly in terms of graphology, orthography, morphology, phonology, lexis and grammar over the past two and a half centuries.'",
            "<strong>Lexis & semantics:</strong> 'humour' (Text B narrowing — Aitchison/Halliday); 'nay', 'farther', 'unbecoming'; cross-reference Text C for the unbecoming/inappropriate replacement (Crystal's tide).",
            "<strong>Orthography & graphology:</strong> long-s ﬃ; 'publick' for 'public' (Johnson 1755 still settling); 'every body' as separate words; reference Caxton (1476) for the start of standardisation; GVS as cause of spelling–pronunciation lag if relevant.",
            "<strong>Morphology:</strong> compound words still spaced ('every body', 'ſome how') — show how compounding progresses from spaced → hyphenated → closed; final silent 'e' patterns; double-consonant in 'publick'.",
            "<strong>Grammar & syntax:</strong> long, semicolon-joined sentences; imperative mood ('Believe me', 'Let a woman'); reference Fairclough's informalisation and Mair's colloquialisation as the contrasting modern trend.",
            "<strong>(Optional) Phonology / Pragmatics:</strong> 'ſhew' for 'show' as evidence of GVS-driven phonological change; pragmatic note on the gendered prescriptive register.",
            "<strong>Conclusion (2 sentences):</strong> Texts A, B, C together show change across multiple linguistic levels driven by both internal pressures and external social shifts."
          ],
          theorists: [
            "<strong>Aitchison</strong> — narrowing/PIDC for 'humour'",
            "<strong>Halliday</strong> — functional theory: words fade as concepts (the four humours) fade",
            "<strong>Crystal</strong> — tide metaphor for the unbecoming → inappropriate replacement",
            "<strong>Caxton</strong> — printing press 1476 began graphological standardisation",
            "<strong>Johnson</strong> — 1755 dictionary; 19 years before this letter, so still settling",
            "<strong>GVS</strong> — Great Vowel Shift causes 'shew/show' spelling lag",
            "<strong>Fairclough</strong> — informalisation contrast; <strong>Mair</strong> — colloquialisation"
          ],
          tips: "This text contains long-s, gendered prescriptivism, semantic narrowing of 'humour' (Text B), and lexical replacement (Text C). Top-band candidates integrate all three texts — many candidates skim Text C. The model below scored 23/25 in actual marking."
        },
        model: `<p>Text A is a letter written in 1774 by a father to his daughter at boarding school. It provides a valuable insight into Early Modern English (EME) and, when read alongside Texts B and C, illustrates how the English language has changed significantly in terms of graphology, orthography, morphology, phonology, lexis and grammar over the past two and a half centuries.</p>

<p>One of the most striking features of Text A is its <strong>graphology</strong>. The text makes consistent use of the long-s (ſ), appearing in the middle of words such as "adviſe" and "ariſe." The long-s grapheme does not appear at the start or end of words, a rule that reflects the conventions of 18th-century printing. The text also contains a <em>ct</em> ligature, visible in words such as "contract" and "action," where the letters are joined. Both features became obsolete as printing houses moved towards more standardised, modern typefaces. William Caxton's introduction of the printing press in the 1470s began this process of graphological standardisation, gradually removing such features in favour of consistency. For a modern reader, these graphological differences immediately signal the historical distance of the text.</p>

<p><strong>Orthographic</strong> change is also clearly evident. The spelling "publick" rather than the modern "public" is worth examining both orthographically and morphologically. The retention of the final "k" reflects an older convention of marking the hard /k/ sound after certain letter combinations, a feature that Johnson's dictionary itself retained and which was gradually dropped as morphological conventions simplified. Samuel Johnson's dictionary, published in 1755 (just nineteen years before this letter was written), had only recently begun to exert its prescriptive influence on English spelling, suggesting that standardisation was still in progress at the time of writing. Another notable orthographic feature is the spacing of compound words: "every body" and "ſome how" are written as two separate words, whereas today they would be written as single units. This reflects the tendency for compound words to begin as two separate forms before gradually being hyphenated and eventually merged, a pattern well documented in the history of English.</p>

<p><strong>Phonologically</strong>, the spelling "ſhew" for modern "show" is also significant. This reflects the influence of the Great Vowel Shift (GVS), the raising and shifting of long vowel sounds that took place broadly between 1400 and 1700. The vowel in "shew", pronounced closer to /ʃjuː/, underwent a gradual shift towards the modern /ʃəʊ/, with the spelling eventually being updated to reflect the changed pronunciation. This text, written in 1774, sits at a transitional moment when pronunciation had shifted but spelling had not yet fully caught up.</p>

<p>In terms of <strong>lexis and semantics</strong>, Text A contains several examples of language change. The word "nay" is used to mean "or even" or "indeed," a usage that is now entirely low-frequency. Modern English would simply use "indeed" or drop the word altogether. Similarly, "farther" is used where modern English would prefer "further," reflecting a shift in the semantic distinction between these two forms. The lexical item "humour," used in the phrase "This humour is carried from the boarding-school," is noteworthy. In the context of the letter, this word carries connotations of temper rather than comedy. Text B supports this reading as the top modifiers of "humour" in the Early English Books Corpus (1470s–1690s) include "ill," "peccant," and "corrupt," reflecting the word's original medical meaning rooted in the theory of the four bodily humours — the ancient medical framework that attributed health and temperament to the balance of four bodily fluids. As medical understanding advanced and the humours framework became obsolete, the concept itself disappeared, and the word "humour" gradually narrowed to its modern comedic sense. By 2015, the top modifiers include "slapstick," "wry," and "tongue-in-cheek," showing that the word has undergone semantic narrowing — moving from a broad meaning including temper, mood and bodily health to the specific modern sense of comedy. This aligns with Jean Aitchison's model of semantic change, which identifies narrowing as one of the key processes through which word meanings shift over time. It also exemplifies Halliday's functional principle: when a concept disappears from a culture, the words tied to it adapt or fade.</p>

<p>Text C provides further evidence of lexical change through an n-gram graph tracking the frequency of "unbecoming" and "inappropriate" between 1750 and 2000. The word "unbecoming," used in Text A with "inappropriate, not flattering", was at its most frequent around the mid-19th century before declining steadily. "Inappropriate" began to rise in frequency around 1940 and overtook "unbecoming" as the preferred term. This is a clear example of lexical replacement, where one word gradually falls out of use as a synonymous alternative gains dominance. David Crystal's tide metaphor is useful here; he suggests that language change is natural and inevitable, with new words washing in as older ones recede. The decline of "unbecoming" and the rise of "inappropriate" illustrates this process neatly.</p>

<p><strong>Grammatically</strong>, Text A reflects the conventions of 18th-century written English. Sentences are long and complex, frequently joined by semicolons in a way that would feel dense and formal to a modern reader. Today, written communication, particularly in digital contexts, tends towards shorter, more direct sentences. This shift reflects Fairclough's concept of informalisation: the gradual movement of public language towards conversational registers. This process has been named <em>colloquialisation</em> by Mair, capturing how written English has progressively adopted spoken-like features over time, a trend accelerated in the modern era by digital communication. The text also makes notable use of imperative mood: "Believe me," "Let a woman," and "always ask yourself" all reflect the father's position of authority and the prescriptive, didactic tone of the letter. This use of imperatives reflects social and cultural attitudes of the period regarding gender and parental authority that would be considered unusual in modern written communication.</p>

<p>Overall, Texts A, B and C together illustrate how English has evolved significantly over the past 250 years across multiple linguistic levels. These changes reflect not only internal linguistic pressures, such as the drive towards standardisation and efficiency, but also broader social and cultural shifts in how language is used and valued.</p>`,
        markBreakdown: "23/25 — AO2 Writing 5/5 · AO4 Conceptualisation 5/5 · AO5 Data Handling 13/15",
        markScheme: `<p>Cambridge expects responses to integrate evidence from <strong>all three texts</strong> with named theorists. The mark scheme highlights the following expected content:</p>
<h4>Lexis and semantics</h4>
<ul>
<li><em>humour</em> — semantic narrowing supported by Text B's modifier shift; link to obsolete medical concept</li>
<li><em>nay</em>, <em>farther</em>, <em>thither</em> — low-frequency lexical items</li>
<li><em>unbecoming</em> vs <em>inappropriate</em> — lexical replacement evidenced by Text C n-gram</li>
</ul>
<h4>Grammar and syntax</h4>
<ul>
<li>Long, complex semicolon-joined sentences characteristic of 18th-century prose</li>
<li>Imperative mood reflecting prescriptive paternal register</li>
<li>Use of subject pronoun <em>we</em> in formal address</li>
</ul>
<h4>Orthography and graphology</h4>
<ul>
<li>Long-s (ſ) — abandoned in early 19th century printing</li>
<li><em>publick</em> for <em>public</em> — pre-Johnson orthographic conventions</li>
<li>Compound words written as separate elements</li>
</ul>
<h4>Theorists rewarded</h4>
<p>Aitchison (PIDC; semantic change), Crystal (tide metaphor), Halliday (functional change), Caxton, Johnson, Fairclough/Mair (informalisation/colloquialisation), GVS for phonology.</p>`
      },

      /* === 2022 Nov 31 — Bailey CLA === */
      {
        title: "Section B — Bailey, age 3, with Mother",
        session: "9093/31 · October/November 2022",
        marks: 25,
        prompt: "Read the following text, which is a transcription of a conversation between Bailey (age 3 years) and her mother. They are at home and Bailey is playing with a toy telephone. Analyse ways in which Bailey and her mother are using language in this conversation. In your answer, you should refer to specific details from the transcription, as well as to ideas and examples from your wider study of child language acquisition.",
        sources: [
          {
            label: "Transcript — Bailey (3 years) and Mother",
            text: `<div style="font-family:'JetBrains Mono',monospace; font-size:14px; line-height:1.7;">
<p><strong>Mother:</strong> who are you calling↗</p>
<p><strong>Bailey:</strong> ˚somebody˚ um (2) oh did you see that on my /sʌm/ <em>[holds up her thumb]</em></p>
<p><strong>Mother:</strong> what happened↗</p>
<p><strong>Bailey:</strong> um (.) i dont know</p>
<p><strong>Mother:</strong> did lola scratch you↗</p>
<p><strong>Bailey:</strong> no rory↘</p>
<p><strong>Mother:</strong> rory scratched you↗ //</p>
<p><strong>Bailey:</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; yeah</p>
<p><strong>Mother:</strong> im sorry↘ //</p>
<p><strong>Bailey:</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i didnt know how it did it (.) i didnt know how it comed out (.) um (.) rorys paws (.) i didnt know how it comed out</p>
<p><strong>Mother:</strong> her claws</p>
<p><strong>Bailey:</strong> yeah</p>
<p><strong>Mother:</strong> theyre sharp arent they</p>
<p><strong>Bailey:</strong> yeah (1) i didnt know that it comed out (.) i didnt know that it comed out of her paws</p>
<p><strong>Mother:</strong> you didnt↗ (1) oh my goodness (2) who are you talking to</p>
<p><strong>Bailey:</strong> can you talk to somebody (2) im doing it on my ear</p>
<p><strong>Mother:</strong> but <u>who</u> is it↘</p>
<p><strong>Bailey:</strong> its bunnyhorse</p>
<p><strong>Mother:</strong> bunnyhorse↗ (.) whats bunnyhorse doing↘</p>
<p><strong>Bailey:</strong> he just /peɪɪŋ/ at home and waiting for his mama to come and he daddy (.) his aunt is watching him right now</p>
<p><strong>Mother:</strong> who is↗</p>
<p><strong>Bailey:</strong> his aunt</p>
<p><strong>Mother:</strong> his aunt is watching him↗ //</p>
<p><strong>Bailey:</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; yeah</p>
<p><strong>Mother:</strong> oh my goodness (.) is he having fun with her↗</p>
<p><strong>Bailey:</strong> yeah and /deɪ/ making eggs right now</p>
<p><strong>Mother:</strong> eggs↗</p>
<p><strong>Bailey:</strong> and potato too</p>
<p><strong>Mother:</strong> oh my (.) that sounds good</p>
<p><strong>Bailey:</strong> oh bunny says er (.) bunnyhorse says hes got go to eat dinner</p>
<p><strong>Mother:</strong> hes got to go to eat dinner↗</p>
<p><strong>Bailey:</strong> yeah (1) my phone is called (2) is yours big↗</p>
<p><strong>Mother:</strong> yeah mine is a little bit bigger</p>
<p><strong>Bailey:</strong> it big↗</p>
<p><strong>Mother:</strong> just a little bigger (.) how about (.) let me see yours (.) hold yours up</p>
<p><strong>Bailey:</strong> mine are little</p>
<p><strong>Mother:</strong> yes yours is little</p>
</div>
<p style="font-size:13px; color:#5a6c87; margin-top:14px;">¹ <em>lola</em> and <em>rory</em>: the names of Bailey and Mother's pet cats.</p>
<p style="font-size:13px; color:#5a6c87;"><strong>Transcript key:</strong> (1) = pause in seconds; (.) = micropause; <u>underlined</u> = stressed; // = overlap; <em>[italics]</em> = paralinguistic; ˚word˚ = quiet; ↗ = rising intonation; ↘ = falling.</p>`
          }
        ],
        plan: {
          intro: "Bailey is in late telegraphic / early post-telegraphic stage (Brown). Look for: virtuous errors ('comed'), phonological substitution (/peɪɪŋ/, /deɪ/), Halliday's functions across her utterances, and the mother's CDS strategies. Top-band requires synthesis of nativist (Chomsky) with interactionist (Bruner/Vygotsky) accounts.",
          structure: [
            "<strong>Intro:</strong> Identify the developmental stage (late telegraphic/early post-telegraphic, Brown) and outline the analytical framework — Bailey's emerging competence, the mother's CDS scaffolding.",
            "<strong>Pragmatics & Halliday's functions:</strong> Turn-taking, adjacency pairs, interactional ('can you talk to somebody'), representational ('his aunt is watching him'), imaginative ('bunny says').",
            "<strong>Grammar:</strong> Auxiliaries ('is watching'), pronouns ('his', 'my', 'mine'), prepositions ('on my ear'). Then the virtuous error 'comed out' — Chomsky's LAD.",
            "<strong>Phonology:</strong> Consonant omission in /peɪɪŋ/ for 'playing'; substitution of /θ/ → /d/ in /deɪ/ for 'they'. Link Piaget's preoperational stage for symbolic play.",
            "<strong>CDS — mother's strategies:</strong> Rising intonation on declaratives, recasting ('mine are little' → 'yes yours is little'), expansion ('rorys paws' → 'her claws'), positive reinforcement ('oh my, that sounds good') — Skinner, Bruner LASS, Vygotsky ZPD.",
            "<strong>Theoretical synthesis (top-band):</strong> Bailey's competence reflects both innate capacity (Chomsky) and supportive interaction (Bruner, Vygotsky) — the rival accounts together explain what neither alone can.",
            "<strong>Conclusion (2 sentences):</strong> Language acquisition is dynamic and interactive; Bailey's development is broadly consistent with — and slightly ahead of — what is expected at age 3."
          ],
          theorists: [
            "<strong>Brown</strong> — five stages (Bailey is late telegraphic / early post-telegraphic)",
            "<strong>Halliday</strong> — interactional, representational, imaginative functions",
            "<strong>Chomsky</strong> — virtuous error 'comed' as LAD evidence",
            "<strong>Skinner</strong> — positive reinforcement 'oh my, that sounds good'",
            "<strong>Bruner</strong> — LASS scaffolding through CDS",
            "<strong>Vygotsky</strong> — ZPD; recasting as MKO operating just above Bailey's level",
            "<strong>Piaget</strong> — preoperational stage; symbolic play with 'bunnyhorse'"
          ],
          tips: "AO4 is worth 15 marks here — theorists must be applied, not just named. The model below earned 23/25 with examiner note that a brief acknowledgement of the tension between nativist and interactionist accounts would have pushed it to 25."
        },
        model: `<p>The transcript presents a conversation between Bailey, aged 3, and her mother as Bailey plays with a toy telephone. Bailey's language demonstrates features consistent with the late telegraphic and early post-telegraphic stages of development, as identified by Roger Brown. Her mother meanwhile employs a range of child-directed speech (CDS) strategies that scaffold Bailey's linguistic development in ways that reflect several key theoretical frameworks.</p>

<p><strong>Pragmatically</strong>, Bailey demonstrates competent turn-taking throughout the conversation, consistently responding to her mother's questions and maintaining the conversational thread across multiple exchanges. This is a significant pragmatic achievement for a child of her age, suggesting that her interactional competence is developing well. She is able to form questions independently ("can you talk to somebody") which reflects growing syntactic sophistication beyond simple declarative utterances. Using Halliday's functions of language, this utterance exemplifies the <em>interactional</em> function, where language is used to maintain social relationships. Elsewhere, Bailey uses the <em>representational</em> function when describing "bunnyhorse's" situation ("he just /peɪɪŋ/ at home and waiting for his mama to come") and the <em>imaginative</em> function in her creative play narrative involving "bunny says". The range of functions Bailey employs suggests a growing pragmatic awareness of how language can serve different communicative purposes, reflecting her transition into the post-telegraphic stage.</p>

<p><strong>Grammatically</strong>, Bailey shows both emerging competence and expected developmental errors. She uses auxiliary verbs correctly in "his aunt is watching him right now," demonstrating a grasp of the present continuous tense. She also uses a range of pronouns ("his mama," "my phone," "his aunt") and prepositional phrases ("on my ear," "at home") accurately. However, her most linguistically significant error is her repeated use of "comed out". She applies a regular past tense morpheme "-ed" to the irregular verb "come." This is a classic <em>virtuous error</em>, and it supports Chomsky's theory of the Language Acquisition Device (LAD), which proposes that children are born with an innate capacity for language and actively construct grammatical rules rather than simply imitating adult speech. The fact that Bailey applies the rule systematically and repeatedly, rather than randomly, suggests she has internalised the regular past tense rule and is extending it logically to an irregular form. This demonstrates an underlying grammatical competence — she is not failing to imitate but succeeding in constructing.</p>

<p><strong>Phonologically</strong>, Bailey is largely intelligible but shows some age-appropriate difficulties. She omits consonants in "/peɪɪŋ/" as she attempts "playing," and substitutes the fricative "th" with the plosive "d" in "/deɪ/" for "they." These are consistent with typical phonological development at age 3, where motor control and articulatory precision are still maturing. The substitution of "th" — one of the most difficult phonemes in English — with a plosive is a well-documented process in child phonological development. Piaget's theory of preoperational thinking is also relevant here: children at this stage are developing their symbolic thinking, and Bailey's engagement in imaginative play with "bunnyhorse" reflects this cognitive stage. Piaget argued that cognitive development supports language development, and Bailey's ability to construct a detailed imaginative narrative suggests her symbolic thinking is maturing well, even where her phonological production is still catching up.</p>

<p>The mother's language throughout is a clear example of <strong>child-directed speech (CDS)</strong>. She frequently uses rising intonation on declaratives to form questions ("rory scratched you↗") which both checks her understanding and invites Bailey to confirm or correct. She asks a wide range of questions ("who are you calling↗," "what happened↗," "but who is it↘"), which serve to prompt Bailey's participation and develop her ability to fulfil adjacency pairs. Crucially, she provides positive reinforcement ("oh my, that sounds good") which aligns with Skinner's behaviourist framework, suggesting that rewarding correct communicative utterances encourages further engagement. This also reflects Bruner's Language Acquisition Support System (LASS), which emphasises the role of a supportive interactional framework in scaffolding language development. The mother provides this framework consistently by reformulating Bailey's utterances, introducing new vocabulary ("her claws"), and maintaining a warm, encouraging tone throughout.</p>

<p>A particularly effective CDS strategy the mother employs is <strong>recasting</strong>. When Bailey says "mine are little," the mother responds "yes yours is little", correcting Bailey's pronoun-number agreement without explicitly drawing attention to the error. This allows Bailey to hear the correct form in context without being made to feel she has made a mistake, thereby maintaining her confidence and willingness to participate. This technique reflects Vygotsky's concept of the Zone of Proximal Development (ZPD) and the role of the More Knowledgeable Other (MKO): the mother consistently operates just beyond Bailey's current level of competence, gently stretching her linguistic ability through interaction rather than direct instruction. Similarly, when the mother supplies "her claws" in response to Bailey's "rorys paws," she is expanding Bailey's vocabulary in a natural, contextualised way, consistent with Bruner's LASS framework.</p>

<p>It is worth acknowledging the productive tension between these accounts. Chomsky's nativism explains what interactionist theories struggle to — Bailey's <em>comed</em> error is something her mother has never modelled. Yet Bruner and Vygotsky explain what Chomsky underplays — the rich pragmatic and lexical scaffolding visible throughout this transcript. The two frameworks are best read as complementary: innate capacity is activated through social interaction.</p>

<p>Overall, this transcript illustrates how language acquisition is a dynamic, interactive process. Bailey's development reflects both innate grammatical capacity, as Chomsky would argue, and the crucial role of social interaction and caregiver support emphasised by Bruner and Vygotsky. Her language is broadly consistent with, and in some respects slightly ahead of, what would be expected for a child of three years.</p>`,
        markBreakdown: "Adapted from a 23/25 model — AO1 Understanding 5/5 · AO4 Conceptualisation 13/15 · AO5 Data Handling 5/5. The original received an examiner note recommending acknowledgement of the nativist/interactionist tension; this version incorporates that.",
        markScheme: `<p>Cambridge expects analysis of <strong>both</strong> Bailey's emerging features and the mother's CDS, integrated with named theorists. AO4 (15 marks) carries the most weight.</p>
<h4>Bailey's features rewarded</h4>
<ul>
<li>Turn-taking and adjacency pairs (pragmatic competence)</li>
<li>Auxiliary verb use ('is watching')</li>
<li>Virtuous error 'comed' — link to Chomsky's LAD</li>
<li>Phonological substitutions /deɪ/, /peɪɪŋ/ — typical age-3 development</li>
<li>Halliday's functions: interactional, representational, imaginative</li>
</ul>
<h4>Mother's CDS rewarded</h4>
<ul>
<li>Rising intonation on declaratives</li>
<li>Recasting ('mine are little' → 'yes yours is little')</li>
<li>Expansion ('rorys paws' → 'her claws')</li>
<li>Positive reinforcement (Skinner)</li>
<li>Scaffolding within ZPD (Vygotsky)</li>
<li>LASS framework (Bruner)</li>
</ul>
<h4>Top-band requirement</h4>
<p>Synthesise rival theoretical accounts — nativist (Chomsky) with interactionist (Bruner/Vygotsky). Single-framework essays cap at Band 4.</p>`
      }
    ]
  }

  ,

  /* ============================================================
     SECTION 2: PAPER 3 — 2021 PAPER + INVENTED
     ============================================================ */
  {
    id: "p3-practice",
    paper: "Paper 3",
    title: "More Paper 3 Practice (2021 + Invented)",
    desc: "The 2021 past paper plus an invented practice question, both with full source texts and complete model essays following the same seven-paragraph structure.",
    questions: [

      /* === 2021 Nov 32 — Pauper Children === */
      {
        title: "Section A — Education of Outdoor Paupers (1861)",
        session: "9093/32 · October/November 2021",
        marks: 25,
        prompt: "<strong>Read Texts A, B and C.</strong> Analyse how Text A exemplifies the various ways in which the English language has changed over time. In your answer, you should refer to specific details from Texts A, B and C, as well as to ideas and examples from your wider study of language change.",
        sources: [
          {
            label: "Text A — Official report on education in England (1861)",
            text: `<p style="text-align:center; font-style:italic;">III<br>EDUCATION OF CHILDREN OF OUTDOOR PAUPERS</p>
<p>We addressed, through the Poor Law Board and the Committee of Council, to their respective inspectors, the following questions:</p>
<ol style="font-style:italic;"><li>What do you believe to be the moral, intellectual, physical, and industrial state of the outdoor pauper children?</li><li>To what causes do you attribute that state?</li><li>What remedies can you suggest?</li></ol>
<p>Their answers are all to the same effect. They describe their condition, — moral, intellectual, and physical, — as being as low as possible. The following extract from Fr. Farnall's report as to London is a fair specimen of the evidence.</p>
<blockquote style="margin:8px 24px;">It is also well known that corruption of an obstinate and firm growth has its fixed abode amongst them, and is the inevitable consequence of their miseries, their helplessness, and their vice.</blockquote>
<p>In 1841, Dr. Kay and Mr. Tufnell wrote as follows: 'The pauper children assembled at Norwood from the garrets, cellars, and wretched rooms of alleys and courts in the dense parts of London are often sent thither in a low state of destitution, covered only with rags and vermin, often the victims of chronic disease, almost universally stunted in their growth, and sometimes emaciated with want. The low-browed and inexpressive physiognomy or malign aspect of the boys is a true index to the mental darkness, the stubborn tempers, the hopeless spirits, and the vicious habits on which the master has to work.'</p>
<p>To them the State is <em>loco parentis</em>. One-sixteenth of them, or about 8,000, are every year added to the adult population. In many they are added to the pauper or criminal portion of it. 'It is from this neglected class of children,' says Major-General Sir J. Jebb, 'that juvenile criminals spring; and that the gaols are eventually filled with adult criminals.'</p>
<p>As a general rule it may be said that these children, as they grow up, are divided between the gaol and the workhouse; they form the hereditary pauper and criminal class. If we could withdraw them from the influences which now corrupt them, we should cut off the principal roots of pauperism and crime.</p>
<p>We have already shown that all who have considered the subject believe that the creation of district and separate schools is the only remedy for the evils of the workhouse schools.</p>`
          },
          {
            label: "Text B — Top nouns used with 'class and/or…'",
            text: `<p><em>The top six nouns used alongside 'class' with 'and'/'or', from the English Historical Book Collection corpus (1473–1800) and the English Web 2015 corpus.</em></p>
<table style="width:100%; max-width:480px; margin:14px auto; border-collapse:collapse; font-family:'Cormorant Garamond',serif;">
<thead><tr style="background:#e0d5b8;"><th style="padding:8px 14px; border:1px solid #c9bda1;">'class and/or…' 1473–1800</th><th style="padding:8px 14px; border:1px solid #c9bda1;">'class and/or…' 2015</th></tr></thead>
<tbody>
<tr><td style="padding:6px 14px; border:1px solid #c9bda1; text-align:center;">rankes</td><td style="padding:6px 14px; border:1px solid #c9bda1; text-align:center;">race</td></tr>
<tr><td style="padding:6px 14px; border:1px solid #c9bda1; text-align:center;">century</td><td style="padding:6px 14px; border:1px solid #c9bda1; text-align:center;">workshop</td></tr>
<tr><td style="padding:6px 14px; border:1px solid #c9bda1; text-align:center;">rank</td><td style="padding:6px 14px; border:1px solid #c9bda1; text-align:center;">gender</td></tr>
<tr><td style="padding:6px 14px; border:1px solid #c9bda1; text-align:center;">division</td><td style="padding:6px 14px; border:1px solid #c9bda1; text-align:center;">seminar</td></tr>
<tr><td style="padding:6px 14px; border:1px solid #c9bda1; text-align:center;">nobility</td><td style="padding:6px 14px; border:1px solid #c9bda1; text-align:center;">group</td></tr>
<tr><td style="padding:6px 14px; border:1px solid #c9bda1; text-align:center;">sort</td><td style="padding:6px 14px; border:1px solid #c9bda1; text-align:center;">ethnicity</td></tr>
</tbody></table>`
          },
          {
            label: "Text C — n-gram for 'jail' and 'gaol' (1800–2000)",
            text: `<p><em>n-gram graph for the words</em> jail <em>and</em> gaol <em>(1800–2000).</em></p>
<p>The graph shows that <strong>jail</strong> rose unevenly through the 19th century, peaked in the 1960s–70s, and remained dominant into the 2000s. <strong>Gaol</strong> remained at low frequency throughout, declining to near zero by 2000.</p>`
          }
        ],
        plan: {
          intro: "Text A is mid-19th century. Lexis around poverty and the orthographic doublet 'gaol/jail' are the key data points. Substratum theory is highly relevant for the French-derived doublet.",
          structure: [
            "<strong>Intro:</strong> 'Text A is an extract from an official report about education in England, published in 1861. It provides a valuable insight into Late Modern English (LME) and, when read alongside Texts B and C, illustrates how the English language has changed significantly in terms of graphology, orthography, morphology, phonology, lexis and grammar over the past century and a half.'",
            "<strong>Lexis & semantics:</strong> 'pauper', 'pauperism', 'workhouse' — words tied to a vanished social system (Halliday's functional theory). 'Class' shifted in collocation (Text B): from rankes/nobility to race/gender/ethnicity.",
            "<strong>Orthography & graphology:</strong> 'gaol' for 'jail' (Text C) — orthographic doublet from variant French regional spellings (substratum from Norman vs Central French). Caxton (1476) and Johnson (1755) standardisation by 1861 is largely complete.",
            "<strong>Morphology:</strong> 'pauperism' — productive -ism suffix on Latinate root; 'physiognomy' Greek root + -y; 'workhouse' transparent Anglo-Saxon compound. Substratum theory in action.",
            "<strong>Grammar & syntax:</strong> Long, semicolon-joined sentences; cleft structures ('It is from this neglected class…'); institutional <em>we</em>. Connect to Fairclough's informalisation and Mair's colloquialisation.",
            "<strong>(Optional) Pragmatics:</strong> Emotive/rhetorical language — Victorian didactic register inappropriate today.",
            "<strong>Conclusion (2 sentences):</strong> Texts A, B, C show change driven by industrial-era social structures giving way to modern conceptions."
          ],
          theorists: [
            "<strong>Halliday</strong> — pauper/workhouse fade as institutions disappear",
            "<strong>Aitchison</strong> — narrowing of <em>class</em>; PIDC for jail/gaol",
            "<strong>Crystal</strong> — tide metaphor for <em>gaol</em>",
            "<strong>Substratum theory</strong> — gaol/jail doublet from competing French regional pronunciations after 1066",
            "<strong>Fairclough/Mair</strong> — informalisation/colloquialisation",
            "<strong>Caxton/Johnson</strong> — earlier standardisation"
          ],
          tips: "The substratum origin of <em>gaol/jail</em> from Norman vs Central French is a strong AO4 marker. Don't ignore Text C."
        },
        model: `<p>Text A is an extract from an official report about education in England, published in 1861 to assess the conditions of pauper children. It provides a valuable insight into Late Modern English (LME) and, when read alongside Texts B and C, illustrates how the English language has changed significantly in terms of graphology, orthography, morphology, phonology, lexis and grammar over the past century and a half.</p>

<p>The most distinctive feature of Text A is its <strong>lexis and semantics</strong>. The repeated nouns <em>pauper</em>, <em>pauperism</em> and <em>workhouse</em> belong to a Victorian social vocabulary tied to institutions that have effectively disappeared in modern Britain. The Poor Laws were repealed in 1948 and the workhouse system dismantled, with the consequence that the words attached to that system have followed it into low-frequency usage. Halliday's functional theory of language change explains this elegantly: words exist to serve the communicative needs of their users, and when the underlying concept disappears, the lexical item adapts or fades. <em>Pauper</em> survives only in historical contexts; a modern report on child poverty would prefer terms like <em>vulnerable children</em> or <em>those in need</em>, reflecting an entirely different conception of poverty that frames it as a structural problem to be remedied rather than, as in Text A, a moral category to be reformed.</p>

<p>The shift in the lexical field around <em>class</em> is corroborated by Text B. The 1473–1800 collocates — <em>rankes</em>, <em>century</em>, <em>rank</em>, <em>division</em>, <em>nobility</em>, <em>sort</em> — place <em>class</em> firmly in a hierarchical conceptual field denoting a fixed social tier. The 2015 collocates — <em>race</em>, <em>workshop</em>, <em>gender</em>, <em>seminar</em>, <em>group</em>, <em>ethnicity</em> — show <em>class</em> reframed as one identity dimension among several. This is a clear example of Aitchison's principle of semantic shift: <em>class</em> has narrowed from a general taxonomic noun to a specifically socio-economic one, while simultaneously broadening in social application.</p>

<p>Text C provides further lexical evidence through an n-gram graph tracking <em>jail</em> and <em>gaol</em>. Both spellings derive from regional variants of Old French — <em>gaol</em> from Norman French and <em>jail</em> from Central French — both of which entered English following the Norman Conquest of 1066 as part of the substratum influence of French on Middle English. For centuries the two forms competed, with <em>gaol</em> retaining institutional and legal currency while <em>jail</em> became the everyday form. Text C shows this competition resolving in favour of <em>jail</em>, consistent with David Crystal's tide metaphor: change is gradual but inexorable, and there is no permanent vocabulary.</p>

<p><strong>Orthographically and graphologically</strong>, Text A is largely modern. The long-s (ſ) had been abandoned in printed texts by the early 19th century, and Text A — published in 1861 — uses only the round-s. Spelling is broadly aligned with modern British conventions, reflecting the consolidation that followed Samuel Johnson's dictionary (1755) and the spread of compulsory education through the 19th century. The continued use of <em>gaol</em> is the principal orthographic feature reflecting historical change. The standardisation that Caxton's printing press began in 1476, and that Johnson formalised, was effectively complete by the time Text A was written.</p>

<p><strong>Morphologically</strong>, Text A displays the layered character of English vocabulary. <em>Pauperism</em> attaches the productive -<em>ism</em> suffix to a Latinate root. <em>Physiognomy</em> derives entirely from Greek and arrives through scholarly Latinate channels. <em>Workhouse</em>, by contrast, is a transparent Anglo-Saxon compound, reflecting the older Germanic stratum of English vocabulary. This stratification — Anglo-Saxon for everyday and concrete, French and Latin for legal and abstract, Greek for technical — is the long-term consequence of substratum influence, particularly the Norman French superstratum after 1066, which left thousands of words layered on top of the existing Old English base.</p>

<p>The <strong>grammar and syntax</strong> of Text A reflect the conventions of formal Victorian institutional prose. Sentences are characteristically long and complex, joined by semicolons and embedded clauses. A modern government report would almost certainly fragment these into shorter sentences. The cleft sentence "It is from this neglected class of children… that juvenile criminals spring" places thematic emphasis through inversion, a rhetorical structure now associated with persuasive writing rather than factual reporting. The use of the institutional <em>we</em> ("We addressed", "If we could withdraw them") confers collective authority. Together these features illustrate Fairclough's concept of <strong>informalisation</strong>: modern public language has shifted decisively towards the conversational, a trend Mair has named <em>colloquialisation</em>, accelerated in the digital era.</p>

<p>Overall, Texts A, B and C together illustrate how English has evolved across multiple linguistic levels in the past 160 years. The most significant changes are lexical and pragmatic: words rooted in Victorian institutions have receded as those institutions disappeared, while the conceptual field around <em>class</em> has been substantially restructured.</p>`,
        markBreakdown: "Target: 24/25 — sustained AO5 across all three texts, deep AO4 with named theorists applied.",
        markScheme: `<p>Cambridge expects responses to integrate evidence from all three texts.</p>
<h4>Theorists rewarded</h4>
<p>Halliday (functional change), Aitchison (narrowing), Crystal (tide), Caxton/Johnson (standardisation), Fairclough/Mair (informalisation/colloquialisation), substratum theory.</p>`
      }
    ]
  },

  /* ============================================================
     SECTION 3: PAPER 4 — PAST PAPERS
     ============================================================ */
  {
    id: "p4-past",
    paper: "Paper 4",
    title: "Past Papers · Paper 4",
    desc: "Authentic Cambridge 9093 Paper 4 questions. Paper 4 essays are discursive — they engage with the IDEAS in the stimulus, not its linguistic features.",
    questions: [

      /* === 2022 J41 — Indian English === */
      {
        title: "Section A — Indian English (Mohan interview)",
        session: "9093/41 · May/June 2022",
        marks: 25,
        prompt: "Discuss what you feel are the most important issues raised in the text relating to <strong>the changing use of English in the world</strong>. You should refer to specific details from the text as well as to ideas and examples from your wider study of English in the world.",
        sources: [
          {
            label: "Stimulus — Kalpana Mohan, An English Made in India (2019)",
            text: `<p><strong>What inspired you to write on the topic of Indian English?</strong></p>
<p>Indianisms in English and the humour of Indian English were just two of the things I wished to talk about in a book on the subject of India's English. I wanted to tell the much larger story of an alien language taking root in an ancient country with its many literary traditions.</p>
<p><strong>Your book begins with the lines from Derek Walcott's 'Tropic Zone' — 'This is my ocean, but it is speaking / Another language.' Why?</strong></p>
<p>It seemed so appropriate. Here we were, speaking a language that was spoken by many countries that were part of the British Commonwealth, yet each of us in the colonies spoke it with a different tang, and even those of us in one homogenous entity imbued the language with a distinct stamp.</p>
<p><strong>You write — 'There is little doubt that Indian English is powerful — and temperamental. One might even say that it resembles the car steered by James Bond.' Can you elaborate?</strong></p>
<p>Like Bond's car, there are little widgets and handles in Indian English that don't exist in normal English. The use of the word 'only' with a particular manner of saying it is a classic instance of how Indian English works. The use of 'only' is accompanied by a certain tone of voice which is probably not heard anywhere else in the world (as in 'He's like that only').</p>
<p>Then there are euphemistic injunctions on the road in some towns such as 'Commit no nuisance'. We know the power of these orders, especially when they're accompanied by pictures of a deity.</p>
<p>Expressions such as 'do the needful' and 'kindly' are so enmeshed into Indian life that they hold special meaning and power to locals.</p>
<p>India's English takes on the colour of India, its kindness and compassion both, as well as its chaos.</p>
<p><strong>Where do you think Indian English is headed?</strong></p>
<p>We've already begun seeing India-centric words entering the Oxford dictionary (<em>yaar</em>, <em>churidar</em> and <em>bhelpuri</em> are examples). We will see many more, I'm sure. I think Indian English will be shaped even more by American and other Englishes; just as Indian English of the late 20th century took on aspects of the language of the Raj and Britain.</p>`
          }
        ],
        plan: {
          intro: "Paper 4 Section A discursive question. Engage with ownership (Widdowson), Kachru's circles and their limits, Schneider's Dynamic Model, Phillipson's counter-argument, and bidirectional lexical flow. <strong>Do not perform feature analysis on the stimulus.</strong>",
          structure: [
            "<strong>Introduction:</strong> Pose thesis: Mohan's account vindicates Widdowson on ownership while complicating Kachru's static circles.",
            "<strong>Ownership:</strong> Widdowson — once a community adopts English, they own it. Mohan's 'normal English' phrasing reveals the Inner-Circle norm she is implicitly resisting.",
            "<strong>Kachru and its limits:</strong> Outer-Circle classification understates Indian English's status.",
            "<strong>Schneider:</strong> Indian English fits Phase 4 — internal norms, dictionaries, literary tradition.",
            "<strong>Counter — Phillipson:</strong> Linguistic imperialism explains the colonial origin. But Widdowson's response: agency in adoption.",
            "<strong>Bidirectionality:</strong> Oxford adopting yaar, churidar, bhelpuri. Crystal's pluralisation; Jenkins/Seidlhofer's ELF.",
            "<strong>Conclusion:</strong> Ownership has moved out of the Inner Circle."
          ],
          theorists: [
            "<strong>Widdowson</strong> — ownership",
            "<strong>Kachru</strong> — Three Circles, with critique",
            "<strong>Schneider</strong> — Dynamic Model: Phase 4",
            "<strong>Phillipson</strong> — linguistic imperialism (counter)",
            "<strong>Crystal</strong> — pluralisation",
            "<strong>McCrum (Globish), Jenkins/Seidlhofer (ELF)</strong>"
          ],
          tips: "Avoid analysing Mohan's prose — that's Paper 3 thinking. Engage with her ideas. Top-band essays include a counter-argument (Phillipson)."
        },
        model: `<p>Kalpana Mohan's interview makes a celebratory case for Indian English as a distinctive, legitimate and now globally influential variety of the language. Her observations — that Indian English has its own "widgets and handles", that it carries the "colour of India", and that it is now contributing words back to the Oxford dictionary — invite a reassessment of the relationship between native-speaker English and the world Englishes that have evolved out of contact, colonialism and adoption. The most important issues raised concern the question of <strong>ownership</strong>: who has the right to determine what counts as legitimate English.</p>

<p>Mohan's central implicit claim — that Indian English is fully owned by its Indian users — is supported powerfully by <strong>Henry Widdowson</strong>'s argument that English has long since stopped belonging to its native speakers. Widdowson contends that once a community adopts a language, they own it and may legitimately innovate. There is no "real" English to defend against deviation. Read against this position, Mohan's slightly defensive phrasing — that Indianisms "don't exist in normal English" — is itself revealing. Why is American or British English the implicit default against which Indian English is measured? Widdowson's argument is precisely that this Inner-Circle norm is illegitimate.</p>

<p><strong>Braj Kachru</strong>'s Three Circles model has long structured discussion of world Englishes. But the static character of Kachru's model is one of its main weaknesses. The Indian English Mohan describes is not an Outer-Circle variety in the sense of borrowing from an external prestige norm; it is a variety with its own conventions ("do the needful", "kindly", emphatic <em>only</em>), its own creative resources ("commit no nuisance"), and its own outflow into the wider global lexicon.</p>

<p><strong>Edgar Schneider</strong>'s Dynamic Model offers a more accurate framework. Indian English is plausibly in Phase 4 (endonormative stabilisation): internal norms have emerged, Indian dictionaries of English are being compiled, Indian publishing operates substantially in Indian English, and Bollywood and Indian writing have built considerable cultural prestige. Mohan's whole project — a book celebrating Indian English as Indian — is itself a marker of endonormative stabilisation.</p>

<p>It would be intellectually dishonest, however, to celebrate Indian English without acknowledging <strong>Robert Phillipson</strong>'s framework of linguistic imperialism. The fact that approximately 125 million Indians use English at all is the direct legacy of British colonial rule. Mohan's celebratory account does not, and probably cannot, escape this history. Yet Widdowson's response to Phillipson is also worth weighing: agency in adoption matters. The imperial origin does not foreclose contemporary ownership.</p>

<p>The most striking detail in Mohan's interview is the bidirectional flow she describes. <em>Yaar</em>, <em>churidar</em> and <em>bhelpuri</em> have entered the Oxford English Dictionary — the institutional centre of Inner-Circle norm-setting now codifying Outer-Circle innovations. This reverses the historical direction of influence and supports <strong>David Crystal</strong>'s optimistic prediction that English is pluralising into many co-existing world Englishes. Robert McCrum's notion of <em>Globish</em>, and Jennifer Jenkins's research on English as a Lingua Franca, similarly suggest that the most important version of English in the 21st century is the lingua franca used between non-native speakers.</p>

<p>What Mohan's interview does not adequately address is the consequence of pluralisation for mutual intelligibility. Jenkins's Lingua Franca Core attempts to identify the phonological and grammatical features essential for international intelligibility, accepting that other features may legitimately vary by variety.</p>

<p>Mohan's interview, while warm and celebratory rather than analytical, raises questions that occupy the central ground of contemporary world-Englishes research. The most useful theoretical response is to follow Widdowson, Schneider and Crystal in treating ownership as decentred and pluralisation as productive — while acknowledging, with Phillipson, the historical conditions that made this transformation possible.</p>`,
        markBreakdown: "Target: 23–25/25 — multiple theorists deeply applied, counter-argument resolved.",
        markScheme: `<p>Cambridge expects discursive engagement with the issues raised — not feature analysis.</p>
<h4>Theorists rewarded</h4>
<p>Kachru (with critique), Widdowson, Schneider, Phillipson, Crystal, McCrum, Jenkins/Seidlhofer.</p>
<h4>Common errors</h4>
<ul><li>Feature analysis on Mohan's prose (AO5 = 0 on Paper 4)</li>
<li>Reproducing Kachru's diagram without critique</li></ul>`
      },

      /* === 2023 J41 — Ableist Language === */
      {
        title: "Section B — Ableist language (BBC, 2021)",
        session: "9093/41 · May/June 2023",
        marks: 25,
        prompt: "Discuss what you feel are the most important issues raised in the text relating to <strong>the ways in which language can shape and reflect how individuals think</strong>. You should refer to specific details from the text as well as to ideas and examples from your wider study of Language and the self.",
        sources: [
          {
            label: "Stimulus — BBC, 'The harmful ableist language you unknowingly use' (2021)",
            text: `<p style="text-align:center;"><strong>The harmful ableist language you unknowingly use</strong></p>
<p>I like being deaf. When I see the word 'deaf' on the page, it evokes a feeling of pride for my community.</p>
<p>So, it always stings when I'm reminded that for many, the word 'deaf' has little to do with what I love most — in fact, its connotations are almost exclusively negative. For example, headlines have all 'fallen on deaf ears'.</p>
<p>This kind of 'ableist' language is omnipresent in conversation: making a 'dumb' choice, turning a 'blind eye' to a problem, acting 'crazy', calling a boss 'psychopathic', having a 'bipolar' day. And, for the most part, people who utter these phrases aren't intending to hurt anyone.</p>
<p>However, for disabled people like me, these common words can be micro-assaults. 'Falling on deaf ears' provides evidence that most people associate deafness with wilful ignorance.</p>
<p>Jamie Hale, the London-based CEO of Pathfinders Neuromuscular Alliance, notes: 'There's a sense when people use disableist language, that they are seeing ways of being as lesser. It is often not a conscious attempt to harm disabled people, but it acts to construct a world-view in which existing as a disabled person is negative'.</p>
<p>Hale adds: 'We build a world with the language we use, and for as long as we're comfortable using this language, we continue to build and reinforce disableist structures.'</p>`
          }
        ],
        plan: {
          intro: "Engage with Sapir-Whorf and its limits, conceptual metaphor (Lakoff & Johnson), counter-arguments from Pinker, and contemporary work on identity. Distinguish strong and weak versions of the article's claim.",
          structure: [
            "<strong>Introduction:</strong> Strong Whorfian claim. Thesis: strong claim overstates; weak claim well supported.",
            "<strong>Sapir-Whorf:</strong> Strong vs weak versions. Boroditsky's Russian-blues study supports weak relativity.",
            "<strong>Pinker's counter:</strong> Mentalese. The deaf author's own counter-example.",
            "<strong>Whorf-lite stands up:</strong> Lakoff & Johnson on conceptual metaphor.",
            "<strong>Identity and reclaiming:</strong> The author reclaims 'deaf' positively (Coupland; Eckert).",
            "<strong>Social construction:</strong> Hale's 'we build a world' echoes Foucauldian discourse theory.",
            "<strong>Conclusion:</strong> Strong claim unsustainable; weak claim well supported."
          ],
          theorists: [
            "<strong>Sapir-Whorf</strong> — strong vs weak",
            "<strong>Pinker</strong> — mentalese",
            "<strong>Boroditsky</strong> — empirical support for weak relativity",
            "<strong>Lakoff & Johnson</strong> — conceptual metaphor",
            "<strong>Coupland</strong> — style-shifting",
            "<strong>Eckert</strong> — community of practice; identity"
          ],
          tips: "Distinguish strong from weak claim. Top-band essays grant the weak while problematising the strong."
        },
        model: `<p>The BBC article makes a striking claim about the power of everyday language: that idioms most of us deploy without thought — 'falling on deaf ears', 'turning a blind eye', 'acting crazy' — quietly construct a world in which disability is encoded as deficit. The piece's most forceful expression of this view comes from Jamie Hale: "We build a world with the language we use." The most important issues raised concern the relationship between language, thought, and social reality.</p>

<p>The most direct theoretical framework for the article's claim is the <strong>Sapir-Whorf hypothesis</strong>. In its strong form (linguistic determinism), the hypothesis holds that language constrains thought. Applied to ableist idioms, the strong Whorfian reading would say that English speakers <em>cannot easily conceive</em> of deafness positively because the available idioms systematically encode deafness as wilful ignorance. Yet the strong determinist claim is widely regarded as untenable. The very existence of the article's author — a deaf person who explicitly reframes deafness as something positive — demonstrates that English speakers are perfectly capable of conceiving of deafness in ways that contradict the encoded idioms.</p>

<p><strong>Steven Pinker</strong>'s response to Whorf is decisive on this point. Pinker argues for <strong>mentalese</strong> — a universal language of thought independent of any particular spoken language. From Pinker's perspective, ableist idioms are at most a distortion in expressive resources, not a constraint on thought itself.</p>

<p>However, it would be too quick to dismiss the article's claim entirely. The <strong>weak relativity</strong> version of the hypothesis — that language influences but does not determine thought — has substantial empirical support. Lera Boroditsky's research has shown measurable cognitive effects of linguistic categories, including her well-known study of Russian speakers' faster discrimination of light blue (<em>goluboy</em>) and dark blue (<em>siniy</em>). The effects are real but modest. Translated to the article's argument, weak relativity would predict that English speakers' default associations with deafness are subtly shaped by repeated exposure to ableist idioms, even if they remain capable of overriding those associations.</p>

<p>George Lakoff and Mark Johnson's work on <strong>conceptual metaphor</strong> sharpens this argument. Lakoff and Johnson argue that idioms are not random but reflect deep conceptual mappings: <em>argument is war</em>, <em>time is money</em>, and <em>understanding is sight</em>. The ableist idioms the article identifies are not isolated phrases but instances of a systematic conceptual mapping in which sensory or cognitive disability stands in for moral or intellectual failing.</p>

<p>The article also touches on <strong>identity construction through language</strong>. The author opens by reclaiming 'deaf' as a positive identity marker. This is a clear instance of what <strong>Penelope Eckert</strong> has theorised as identity formation in <strong>communities of practice</strong>. Within the deaf community, 'deaf' is not the negative idiomatic term it appears to be in mainstream English; it is a name. <strong>Nikolas Coupland</strong>'s work on style-shifting similarly emphasises that speakers actively construct identity through linguistic choice.</p>

<p>The article's final claim — that "we build a world with the language we use" — echoes a Foucauldian view of discourse as constitutive of social reality. There is empirical evidence to support a moderate version of this claim. Institutional shifts in disability terminology — from 'mentally retarded' to 'intellectual disability', from 'wheelchair-bound' to 'wheelchair user' — have correlated with broader shifts in policy and public attitudes.</p>

<p>The article makes both a strong claim and a weak claim. The strong claim is unsustainable in light of Pinker's argument and the article author's own counter-example. But the weak claim — that everyday language encodes default associations and contributes to identity formation — is well supported. The article's practical recommendation, that we examine our linguistic habits, follows naturally from the weak claim alone. Language is not the cause of ableism; it is one of the many ways that ableism is reproduced and, as the article movingly demonstrates, also one of the ways it can be resisted.</p>`,
        markBreakdown: "Target: 24/25 — Sapir-Whorf, Pinker, Lakoff, Eckert, Coupland applied.",
        markScheme: `<p>AO5 = 0 on Paper 4. Do not perform feature analysis.</p>
<h4>Theorists rewarded</h4>
<p>Sapir-Whorf, Pinker, Boroditsky, Lakoff (conceptual metaphor), Coupland, Eckert.</p>`
      },

      /* === 2025 N41 — Female Email === */
      {
        title: "Section B — Forget the 'female email' rules (2022)",
        session: "9093/41 · October/November 2025",
        marks: 25,
        prompt: "Discuss what you feel are the most important issues raised in the text relating to <strong>the ways in which language can shape and reflect personal and social identity</strong>. You should refer to specific details from the text as well as to ideas and examples from your wider study of Language and the self.",
        sources: [
          {
            label: "Stimulus — Forget the 'female email' rules (Schwa, 2022)",
            text: `<p style="text-align:center;"><strong>Forget the 'female email' rules</strong></p>
<p>As women, we're told to swerve certain 'female' writing habits in emails. If we want to be taken seriously at work, we need to: cut out any self-deprecation (<em>sorry, I'm no expert, does that make sense?</em>); stop softening our tone with exclamation marks and emojis; take out phrases that 'dilute' your message, like <em>just</em> and <em>I think</em>.</p>
<p>Here's why it's all nonsense.</p>
<p>Asking women to change their writing style — putting the onus on them — isn't just a cop-out; it's a bizarre oversimplification. If you want to get ahead at work, make sure your emails are assertive: never mind the 25% pay gap in your office, or the 90% male board of directors. The issue is you and your emails.</p>
<p>I've had a <em>can I ask a stupid question?</em> habit for years. But I've come to see that question as a handy tool: it opens up the conversation and puts the other person at ease. Same with <em>sorry</em>, same with <em>just</em>. And why is it so terrible to say <em>I think</em>?</p>
<p>Okay, it's good to be assertive at work from time to time: but isn't it more regularly important to build relationships and create emotional connections? In other words, where are the apps helping men soften their tone?</p>
<p>Just take the difference between 'I need this today' and 'would you be able to finish this today?' — I know which I'd respond more positively to.</p>
<p>We're damned if we do and damned if we don't. Too fluffy, and we're told we're not assertive enough. Not fluffy enough, and we're told we're being harsh.</p>`
          }
        ],
        plan: {
          intro: "Engage with Lakoff (the implicit foil), Tannen (rapport vs report), Cameron's critique of difference theory, Giles' accommodation, Eckert's communities of practice.",
          structure: [
            "<strong>Introduction:</strong> Thesis: the article's central insight — that style advice marketed at women is structural displacement — is well supported by Cameron and Giles.",
            "<strong>Lakoff:</strong> The article's targets are Lakoff's exact 1975 list. Advice industry is essentially Lakoffian — reversed to push women to drop the features.",
            "<strong>Cameron's critique:</strong> Features are not female; they are markers of relational style. Cameron directly underwrites the article.",
            "<strong>Tannen with caveats:</strong> Rapport vs report captures the intuition but Tannen heavily critiqued for essentialism.",
            "<strong>Giles' Accommodation:</strong> Who accommodates to whom? Lower-status speakers converge upwards. The advice is one-way upward convergence.",
            "<strong>Eckert's CoP:</strong> Style is identity performance, not personal failing.",
            "<strong>Conclusion:</strong> Who has the power to set communicative norms, and to whose advantage?"
          ],
          theorists: [
            "<strong>Lakoff</strong> — 'women's language' (with critique)",
            "<strong>Cameron</strong> — Myth of Mars and Venus",
            "<strong>Tannen</strong> — rapport vs report (with reservations)",
            "<strong>Giles</strong> — accommodation",
            "<strong>Eckert</strong> — community of practice",
            "<strong>Coupland</strong> — style-shifting"
          ],
          tips: "Lakoff/Cameron axis is the strongest framework. Don't deploy Tannen without the Cameron caveat. Giles on who-accommodates is genuinely original."
        },
        model: `<p>The Schwa article challenges a familiar genre of professional advice — the lists of 'female' email habits women are told to eliminate to be taken seriously at work. The author's central argument is that this advice is misdirected: it asks women to alter their language to fit a male-coded standard rather than asking why that standard counts as standard in the first place. The most important issues raised concern the relationship between language and gendered identity, the politics of stylistic norms, and the question of who has the power to set the conventions of professional communication.</p>

<p>The features the article defends — <em>sorry</em>, <em>just</em>, <em>I think</em>, exclamation marks, the question 'can I ask a stupid question?' — are precisely those that <strong>Robin Lakoff</strong> identified in her 1975 monograph <em>Language and Woman's Place</em> as characteristic of 'women's language'. Lakoff argued that hedges, tag questions, intensifiers and apologies reflected and reinforced female subordination. The advice industry the article critiques has internalised Lakoff's analysis and inverted its prescription. Where Lakoff diagnosed these features as symptoms of subordination, the advice tells women to eliminate the symptoms. The article's wry observation — "where are the apps helping men soften their tone?" — exposes the asymmetry of this prescription.</p>

<p><strong>Deborah Cameron</strong>'s <em>The Myth of Mars and Venus</em> (2007) provides the strongest contemporary critique of the assumption behind both Lakoff's diagnosis and the advice the article mocks. Cameron argues that claimed gender differences in language use are largely myth: differences are small, heavily contextual, and outweighed by variation within each gender. The article's case is essentially Cameronian: the features popularly labelled 'female' are not in fact female but markers of relational style, used by speakers of any gender when they want to build rapport rather than assert authority.</p>

<p><strong>Deborah Tannen</strong>'s influential difference theory ('rapport' vs 'report' talk) captures part of the article's intuition. But Tannen's framework has been heavily critiqued, principally by Cameron, for sliding into essentialism. The most defensible reading of Tannen now treats her categories as available styles rather than gendered essences.</p>

<p>The article's most original theoretical move is to ask <em>who accommodates to whom</em>. <strong>Howard Giles</strong>' Communication Accommodation Theory predicts that speakers converge their style towards their interlocutors. Crucially, Giles' framework recognises that accommodation is patterned by power: lower-status speakers tend to converge upwards. The 'female email' advice industry asks women to converge upwards on what is implicitly coded as male professional style. This is upward convergence, one-way. The article's pointed question about why men are not asked to soften their tone is exactly the Gilesian intervention: who is being asked to do the accommodating?</p>

<p>The wider framework of <strong>Penelope Eckert</strong>'s communities of practice helps situate the article's resistance. Style is identity performance. The article's defence of <em>can I ask a stupid question?</em> is, in Eckert's terms, a defence of one identity-mode against the imposition of another. To strip the question from one's repertoire is to alter the kind of professional self one performs.</p>

<p>It is worth acknowledging the limits of the article's position. The features it defends do, statistically, sometimes carry a status cost: research has shown that hedged contributions are sometimes interpreted as less authoritative. The article does not deny this; it argues that the cost is unevenly distributed and structurally produced. <strong>Nikolas Coupland</strong>'s work on style-shifting offers a way to hold both points together: the most strategically competent speakers possess a range.</p>

<p>The article's central insight — that language advice marketed at women is a form of structural displacement, asking them to fix what is not theirs to fix — is well supported by Cameron's critique of difference theory, Giles' analysis of accommodation patterns, and Eckert's account of style as identity. Behind the immediate question of email habits sits the larger question of who sets the norms of professional discourse and to whose advantage.</p>`,
        markBreakdown: "Target: 24/25 — Lakoff/Cameron/Tannen/Giles/Eckert applied.",
        markScheme: `<p>AO5 = 0. Discursive engagement only.</p>
<h4>Theorists rewarded</h4>
<p>Lakoff (with critique), Tannen (with reservations), Cameron, Giles, Eckert, Coupland.</p>`
      }
    ]
  },

  /* ============================================================
     SECTION 4: PAPER 4 — INVENTED
     ============================================================ */
  {
    id: "p4-practice",
    paper: "Paper 4",
    title: "Invented Paper 4 Practice",
    desc: "Two original practice questions with stimulus texts written for revision purposes and complete model essays.",
    questions: [

      /* === Invented Paper 4 Section A: Singlish === */
      {
        title: "Section A — Singlish: a national language? (Invented)",
        session: "Invented practice · Section A",
        marks: 25,
        prompt: "Discuss what you feel are the most important issues raised in the text relating to <strong>the changing use of English in the world</strong>. You should refer to specific details from the text as well as to ideas and examples from your wider study of English in the world.",
        sources: [
          {
            label: "Stimulus — 'Singlish is here to stay' (invented op-ed)",
            text: `<p style="text-align:center;"><strong>Singlish is here to stay — and the government should accept it</strong></p>
<p>I went home for Chinese New Year last week and my mother greeted me at the door with the words: "Eh, you so long never come back, your face also different already lah." I had not heard Singlish in three months. Sitting in my London office, I had spent every working day in carefully calibrated 'Singapore Standard English' — the kind of English that the 'Speak Good English Movement' has been pushing on us since the year 2000.</p>
<p>The campaign's premise has always been the same: Singlish is broken English, a national embarrassment, an obstacle to global competitiveness. Behind the campaign is the belief that there is a single legitimate English — the English of London and Boston — and Singapore must measure itself against that standard.</p>
<p>This view is wrong. Linguistically, Singlish is not broken English; it is a creole that has emerged from contact between English, Malay, Hokkien, Cantonese and Tamil over four generations of Singaporean speakers. It has its own grammar (the famous final particles <em>lah</em>, <em>leh</em>, <em>lor</em>; topic-prominent sentences such as 'this book I already read'), its own lexicon ('shiok', 'chope', 'kiasu'), and native speakers — Singaporean children for whom Singlish is the first language of the playground.</p>
<p>Politically, the campaign asks Singaporeans to be ashamed of one of the most distinctive markers of who we are. Singlish is the language of the hawker centre, the void deck, the army camp, the family reunion.</p>
<p>Other postcolonial Englishes have made the journey from disreputable creole to acknowledged national language. Indian English is now the dominant variety of English in print. Caribbean English has produced Nobel laureates. Why should Singapore continue to apologise?</p>`
          }
        ],
        plan: {
          intro: "The stimulus argues for legitimacy of a creole variety against an institutional standardising campaign. Engage with Kachru, Schneider, Phillipson, Widdowson, pidgin/creole distinction, and bidialectal coexistence.",
          structure: [
            "<strong>Introduction:</strong> Linguistic case overwhelming; political case must engage with intelligibility concerns. Schneider helps resolve the tension.",
            "<strong>Singlish as creole:</strong> Native speakers, full grammatical system, productive lexicon — fits every linguistic definition.",
            "<strong>Kachru and its limits:</strong> Boundaries are fluid.",
            "<strong>Schneider:</strong> Singapore at Phase 4 (endonormative stabilisation). Speak Good English Movement is reactionary attempt to push back to Phase 2.",
            "<strong>Phillipson and the state:</strong> But the government's position isn't pure linguistic imperialism — Jenkins' LFC mediates.",
            "<strong>Bidialectalism:</strong> Most Singaporeans operate diglossically. McCrum's Globish supports coexistence.",
            "<strong>Conclusion:</strong> Bidialectal coexistence, not zero-sum competition."
          ],
          theorists: [
            "<strong>Pidgin/Creole distinction</strong>",
            "<strong>Kachru</strong> — Three Circles, with critique",
            "<strong>Schneider</strong> — Phase 4",
            "<strong>Widdowson</strong> — ownership",
            "<strong>Phillipson</strong> — linguistic imperialism",
            "<strong>Jenkins/Seidlhofer</strong> — LFC",
            "<strong>McCrum</strong> — Globish",
            "<strong>Diglossia/bidialectalism</strong>"
          ],
          tips: "Strong essays handle both sides. Resolution: bidialectal coexistence. Don't reproduce Kachru's circles diagram."
        },
        model: `<p>The article makes a confident case for the legitimacy of Singlish as a Singaporean variety of English. The most important issues raised concern the relationship between contact varieties and standard varieties, the legitimacy of state intervention in language policy, and the broader question of who has the right to determine what counts as legitimate English.</p>

<p>The author's strongest point is the linguistic one. <strong>Singlish is not broken English; it is a creole.</strong> A creole is a stable contact variety that has acquired native speakers and a full grammatical system. Singlish meets every part of that definition: it has emerged over four generations through contact between English, Malay, Hokkien, Cantonese and Tamil; it has its own grammatical system, including topic-prominent syntax and the rich set of final particles (<em>lah</em>, <em>leh</em>, <em>lor</em>) that mark stance, mood and affect; it has a productive lexicon; and it has native speakers. This is the same status held by other major creole Englishes — Jamaican Patois, Tok Pisin, Caribbean Creole — all of which linguists treat as fully-fledged languages.</p>

<p>The wider theoretical context is set by <strong>Braj Kachru</strong>'s Three Circles model. But the static character of Kachru's model is one of its main weaknesses. The article's evidence — Singlish's native speakers, its productive grammar, its national-cultural role — suggests that Singapore's relationship with English is no longer adequately described by the Outer-Circle label.</p>

<p><strong>Edgar Schneider</strong>'s Dynamic Model gives a more accurate picture. Singapore is plausibly in Phase 4 (endonormative stabilisation): there is a substantial Singaporean literary tradition in Singlish, Singlish is used in domestic film and advertising, and there is conscious pride in the variety. The Speak Good English Movement is a reactionary state attempt to roll the country back to Phase 2 — exonormative stabilisation. The campaign's persistence and its evident failure both illustrate Schneider's claim that the dynamic moves only one way.</p>

<p>The article's political argument runs in parallel to <strong>Henry Widdowson</strong>'s claim about ownership. The Speak Good English Movement is an institutionalised denial of Widdowson's claim — an insistence that the legitimate version of English remains the version spoken in London and Boston.</p>

<p>It would, however, be too quick to dismiss the Singaporean government's position as pure linguistic imperialism (<strong>Robert Phillipson</strong>'s framework). The campaign was designed to ensure Singaporean professionals could communicate with international business partners. There is a real tension between Widdowson's principled defence of ownership and the practical question of intelligibility. <strong>Jennifer Jenkins</strong> and Barbara Seidlhofer's work on ELF offers a useful intermediate position: there is a Lingua Franca Core of features essential for international intelligibility, but many other features can vary by variety.</p>

<p>This points to the most defensible position: <strong>bidialectalism</strong>. Most Singaporeans already operate diglossically — Singlish in informal domains, Standard English in formal ones. Robert McCrum's notion of Globish is useful here: international English coexists with local varieties; it does not replace them. The Speak Good English Movement's foundational error is to frame the relationship as zero-sum.</p>

<p>The article's broader celebration of postcolonial Englishes supports <strong>David Crystal</strong>'s argument that the future of English lies in its pluralisation. English is becoming the property of all its users rather than any one nation.</p>

<p>The article's defence of Singlish is well grounded in contemporary linguistic theory. The harder question — how to maintain pride in a creole variety while preserving access to international Standard English — is best answered by bidialectal coexistence rather than the zero-sum competition the Speak Good English Movement has framed.</p>`,
        markBreakdown: "Target: 23–25/25.",
        markScheme: `<p>Section A — English in the World. AO5 = 0.</p>
<h4>Theorists rewarded</h4>
<p>Kachru (with critique), Schneider, Widdowson, Phillipson, Jenkins/Seidlhofer, McCrum, Crystal.</p>`
      },

      /* === Invented Paper 4 Section B: Code-Switching === */
      {
        title: "Section B — Code-switching and identity (Invented)",
        session: "Invented practice · Section B",
        marks: 25,
        prompt: "Discuss what you feel are the most important issues raised in the text relating to <strong>the ways in which language can shape and reflect personal and social identity</strong>. You should refer to specific details from the text as well as to ideas and examples from your wider study of Language and the self.",
        sources: [
          {
            label: "Stimulus — 'Which me are you talking to?' (invented essay)",
            text: `<p style="text-align:center;"><strong>Which me are you talking to?</strong></p>
<p>I have spent the last twenty minutes deciding whether to take the phone call. My mother is calling from Lagos. I am at my desk in a London law firm, and if I answer in Yoruba — as she will certainly expect me to — I will become, instantly, a different person from the one my colleagues have been working with for the past three years.</p>
<p>I take the call in the corridor.</p>
<p>This is what code-switching looks like for me: a constant calculation about which version of myself is acceptable in which room. With my mother I am one self — quick to laugh, generous with terms of endearment, free with the cadences of Nigerian English. In the meeting room, I am another self — controlled, precise, deliberately neutral, accent flattened. With my Nigerian friends I am a third self again, moving easily between languages within a single sentence: 'Babe, you know I can't come tonight, my boss is being so wahala about the deadline.'</p>
<p>For years I thought of this as a failure of integrity. I felt fraudulent — as if there must be a true self beneath the performances.</p>
<p>I no longer believe in that true self. The longer I've thought about it, the more I have come to suspect that there is no real me beneath the code-switching, only the code-switching itself. The mother-self, the law-firm-self, the friend-self — these are not masks over a hidden face. They are the face.</p>
<p>What was painful about code-switching was the asymmetry. My white colleagues did not, as far as I could see, have to suppress an alternative version of themselves to come to work. Their voices at the office were continuous with their voices at home. Mine were not. That asymmetry is not an accident of personality. It is the consequence of who set the norms of professional speech.</p>`
          }
        ],
        plan: {
          intro: "Highly relevant to Language and Self Section B. Engage with code-switching as identity construction, Giles' accommodation, Coupland's style-shifting, Eckert's CoP, Butler's performativity, and the politics of which speakers do the switching.",
          structure: [
            "<strong>Introduction:</strong> Two questions: whether there is a 'real self' beneath linguistic adjustment, and why some speakers carry more switching labour than others.",
            "<strong>Giles' Accommodation:</strong> Office voice is upward convergence; mother voice is downward (in-group) convergence.",
            "<strong>Coupland on style-shifting:</strong> Identity is performed, not pre-existing.",
            "<strong>Eckert's CoP:</strong> Each community has its own repertoire. Writer is competent across multiple CoPs.",
            "<strong>The 'no true self' move:</strong> Butlerian performativity applied linguistically — identity constituted in performance.",
            "<strong>Asymmetry argument:</strong> The strongest part — white colleagues don't switch because the norm was set by their home voice. Politics of accommodation.",
            "<strong>Conclusion:</strong> Code-switching is competent; the problem is structural unequal labour."
          ],
          theorists: [
            "<strong>Giles</strong> — Communication Accommodation Theory",
            "<strong>Coupland</strong> — style-shifting; identity performance",
            "<strong>Eckert</strong> — community of practice",
            "<strong>Butler (linguistically applied)</strong> — performativity",
            "<strong>Labov</strong> — Martha's Vineyard; identity through phonology",
            "<strong>Code-switching theory</strong> — Myers-Scotton"
          ],
          tips: "The strongest argument is the asymmetry of accommodation labour. Don't psychologise the writer's experience — keep it sociolinguistic."
        },
        model: `<p>The stimulus uses one writer's experience of code-switching between Nigerian English, Standard British English with an approximation of RP, and a hybrid friends'-circle variety to raise two important questions about language and identity. The first is whether the linguistic self is unified or plural — whether, beneath the code-switching, there is a 'true self' that the writer is variously presenting or concealing. The second is structural: why is it that some speakers carry the labour of code-switching while others do not?</p>

<p>The writer's account is a textbook illustration of <strong>Howard Giles</strong>' Communication Accommodation Theory. Giles argues that speakers adjust their linguistic style to converge with their interlocutors. The writer's flattened, neutralised office voice is a clear case of upward convergence: she is shifting towards the prestige variety of her professional environment. With her mother, she converges in the opposite direction, towards Nigerian English — downward, in-group convergence that signals belonging. With her Nigerian friends in London she occupies a third position: bilingual code-mixing of the kind well documented in sociolinguistic research on diaspora communities. Code-switching is not a failure of identity; it is a strategic resource.</p>

<p><strong>Nikolas Coupland</strong>'s work on style-shifting extends Giles' framework. Coupland argues that speakers actively project different identities through their linguistic choices, and that identity is therefore not a fixed essence we express but an ongoing performance constituted in our linguistic behaviour. The writer of the stimulus arrives at exactly this conclusion: "there is no real me beneath the code-switching, only the code-switching itself." This is essentially Judith Butler's notion of performativity applied to linguistic identity — identity is constituted in its performance, not prior to it.</p>

<p><strong>Penelope Eckert</strong>'s framework of communities of practice helps locate this in social terms. Eckert's Detroit study showed that linguistic features function as markers of belonging within particular communities. The writer moves between several communities of practice: her Lagos family, her London law firm, her diaspora friends. Each CoP has its own linguistic repertoire, and competence within each requires command of that repertoire. Far from suggesting fraudulence, the writer's code-switching demonstrates a kind of metalinguistic competence that monolingual speakers do not possess.</p>

<p>The strongest part of the stimulus, however, is its structural argument. The writer observes that her white colleagues do not appear to suppress an alternative version of themselves to come to work. The labour of code-switching is real labour, and it falls unevenly. This is the dimension that Giles' framework, in its more politically attentive readings, helps to illuminate. Accommodation is patterned by power: it is the speaker whose home voice does not already fit the prestige norm who carries the burden of adjustment. The writer's white colleagues do not have to switch because the workplace norm was set, historically and institutionally, by speakers like them.</p>

<p><strong>William Labov</strong>'s early sociolinguistic work supports this analysis. His Department Store study showed that the production of post-vocalic /r/ correlated with social prestige. The Martha's Vineyard study showed the opposite phenomenon — local fishermen using a centralised pronunciation to mark in-group identity. Linguistic features carry social meaning, and speakers are agents in deploying them.</p>

<p>The writer's resolution — that she "still take[s] the call in the corridor" but now understands the corridor as a problem — is sociolinguistically apt. The act of switching is not the problem; the problem is that institutional space is constructed in a way that requires it.</p>

<p>It is worth, in closing, acknowledging the more positive readings of code-switching. Sociolinguists studying bilingual communities have shown that switches between languages often serve expressive functions that monolingual speech cannot. The writer's own example — "my boss is being so wahala about the deadline" — illustrates this: <em>wahala</em>, a Yoruba and Nigerian Pidgin term, captures a specific affective tone that no single English word reproduces.</p>

<p>The stimulus raises two questions and offers reasonable answers to both. There is no true self beneath the code-switching, because identity is constituted in performance rather than prior to it — Coupland and a tradition running through Butler converge on this point. And the labour of switching falls unevenly because linguistic prestige norms were set by speakers whose home voices already fit them. The writer's experience is a familiar pattern in sociolinguistics, and one whose remedy lies in institutional change rather than in a search for the linguistic real self that does not exist.</p>`,
        markBreakdown: "Target: 23–25/25.",
        markScheme: `<p>Section B — Language and the Self. AO5 = 0.</p>
<h4>Theorists rewarded</h4>
<p>Giles (CAT), Coupland (style-shifting), Eckert (CoP), Labov, Butler (performativity).</p>`
      }
    ]
  }


];
