/* The Flamme Royal Discovery Trail — the group's plan, from the concept document.
 *
 * The WEBSITE and the A1 POSTER both read this file, so the two cannot drift apart.
 * Change it here and regenerate the poster with `node tools/render-poster.mjs`.
 */

var CONCEPT = {
  name: 'Flamme',
  tagline: 'Bringing history to life',
  idea: 'Make children and schools the gateway to a broader visitor experience. Instead of '
      + 'only observing rooms and reading lengthy labels, visitors solve clues, collect stamps '
      + 'and uncover stories from the Château’s history — a low-cost learning experience that '
      + 'makes the estate more accessible, engaging, immersive and understandable.',
  mechanic: 'Thirteen stations spell FONTAINEBLEAU, with a bonus stamp in the free gardens '
          + 'and a Royal Explorer Certificate at the finish.',
  segment: 'CM1, roughly ages 9–10. François I and the Renaissance create a natural curriculum '
         + 'link. CM2 and 5e can use adapted challenges; an older-pupil Napoleon route could follow.'
};

var BENEFITS = [
  { t:'Accessible',     p:'Clear, flexible routes and inclusive formats.' },
  { t:'Engaging',       p:'Questions, stamps and challenges in each room.' },
  { t:'Immersive',      p:'Meet royal history through stories and details.' },
  { t:'Understandable', p:'Short, bilingual, age-adapted explanations.' }
];

/* The six recommendations. `where` and `p` place each one on the estate model:
   p is x east, z south, y up, in metres. */
var RECS = [
  { n:'01', t:'School partnerships', where:'Off the estate · teachers and booking', off:true,
    p:[-430,230,-70],
    d:'Build recurring annual school relationships: curriculum-linked invitations, ready-to-use '
     + 'teacher materials, clear booking instructions and optional facilitated learning activities.',
    v:'Annual cohorts, stronger school relationships and potential subsequent family visits.' },

  { n:'02', t:'Discovery passport', where:'The entrance', p:[-250,96,10],
    d:'An illustrated passport at entry, with a route map, stamps, short historical stories and '
     + 'simple puzzles. Both print-on-request and accessible digital formats.',
    v:'Better orientation, engagement and visibility of experiences that already exist.',
    art:{ href:'booklet.pdf', t:'The passport', s:'24 pages, A5, print-ready — thirteen stations, the bonus stamp and the certificate' } },

  { n:'03', t:'Thirteen stations', where:'Selected rooms, and one free garden', p:[-110,88,8],
    d:'Conservation-approved, low-maintenance clue points across selected rooms. Each reveals one '
     + 'letter of FONTAINEBLEAU; a free-garden bonus extends the adventure.',
    v:'More active learning and exploration without constructing a new attraction.' },

  { n:'04', t:'Accessible storytelling', where:'The Grands Appartements', p:[-30,80,22],
    d:'Replace selected text-heavy explanations with short stories: who used the room, why it '
     + 'matters and what to spot. French and English, age-adapted or audio.',
    v:'Relevant for international visitors, first-timers and different learning needs.' },

  { n:'05', t:'Certificate and return', where:'The finish, and the journey home', p:[-245,64,72],
    d:'Finish with a no-purchase-required explorer certificate. School visitors take home a family '
     + 'invitation carrying a separate challenge and a clearly trackable ticket link.',
    v:'A natural bridge from free school experiences to incremental paying family visits.',
    art:{ img:'flamme.png', t:'Flamme', s:'The salamander François I put on these walls in 1528, drawn as the mascot the Château already owns' } },

  { n:'06', t:'Measurement and learning', where:'Behind all of it', p:[-310,72,36],
    d:'Track schools recruited and renewed, booklet usage, completion, visitor satisfaction, '
     + 'attributable return visits and net programme contribution.',
    v:'Scale only activities that demonstrate visitor or financial impact.' }
];

/* The end-to-end marketing activities plan */
var ENGINE = [
  { s:'01', t:'Recruit', p:'Contact a pilot group of schools and teachers; offer a clear curriculum link and ready-made information.' },
  { s:'02', t:'Deliver', p:'Students complete the discovery trail on their school trip and take home their passports.' },
  { s:'03', t:'Refer',   p:'A take-home invitation prompts a return visit with family members, and a new challenge.' },
  { s:'04', t:'Renew',   p:'Schools repeat the experience with next year’s cohort; track referrals and rebookings.' }
];

var SCENARIO = {
  value: '€6,800',
  detail: 'in potential additional gross adult ticket receipts. 40 classes × 25 pupils × 20% '
        + 'family return × 2 paying adults × €17 admission = 400 additional adult tickets.',
  warn: 'Scenario only — not a forecast',
  note: 'School trips may qualify for free admission. Actual incremental receipts depend on '
      + 'family conversion, ticket eligibility and non-cannibalised demand.'
};

var LIGHT = [
  { t:'Reuse',             p:'Adapt existing historical content, downloadable activities and the Flamme identity.' },
  { t:'Print smart',       p:'Short print runs and a digital alternative, rather than printing for every visitor.' },
  { t:'Protect heritage',  p:'Removable, approved materials; no fixtures on historic walls or objects.' },
  { t:'Reduce staff load', p:'Self-service stamps, simple route signage and teacher-led group visits.' }
];

var PHASES = [
  { s:'Phase 1', t:'Design and pilot',    p:'Five or six stations, one short passport, five to ten school groups. Check accessibility, preservation, visitor flow and enjoyment.' },
  { s:'Phase 2', t:'Improve and package', p:'Refine the content; add teacher resources, a bilingual family invitation and simple referral tracking.' },
  { s:'Phase 3', t:'Expand selectively',  p:'Scale to thirteen stations, the bonus garden stamp and more partner schools — only if pilot outcomes justify it.' }
];

/* The thirteen stations, positioned on the estate model: x east, z south, y up, in metres.
   Schematic, not a survey. */
var STATIONS = [
  { n:1,  L:'F', t:'Cour du Cheval Blanc',       p:[-250,52,0] },
  { n:2,  L:'O', t:'Chapelle de la Trinité',     p:[-150,72,-38] },
  { n:3,  L:'N', t:'Escalier du Roi',            p:[-140,74,12] },
  { n:4,  L:'T', t:'Galerie François I',         p:[-110,76,8] },
  { n:5,  L:'A', t:'Salle de Bal',               p:[2,70,42] },
  { n:6,  L:'I', t:'Salle du Trône',             p:[-62,74,-12] },
  { n:7,  L:'N', t:'Chambre de l’Impératrice',   p:[-36,74,-6] },
  { n:8,  L:'E', t:'Boudoir Turc',               p:[-14,74,2] },
  { n:9,  L:'B', t:'Musée Napoléon Ier',         p:[-250,56,62] },
  { n:10, L:'L', t:'Musée Chinois',              p:[-160,80,102] },
  { n:11, L:'E', t:'Cour Ovale & Porte Dorée',   p:[-42,60,32] },
  { n:12, L:'A', t:'Jardin de Diane',            p:[-94,26,-97] },
  { n:13, L:'U', t:'Étang aux Carpes',           p:[-160,22,235] },
  { n:'★', L:'', t:'La Fontaine Belle Eau — Jardin Anglais', bonus:true, p:[-420,26,250] }
];

if (typeof module !== 'undefined') module.exports = { CONCEPT, BENEFITS, RECS, ENGINE, SCENARIO, LIGHT, PHASES, STATIONS };
