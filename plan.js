/* The Flamme Royal Discovery Trail — the group's plan, from the concept document.
 *
 * The WEBSITE and the A1 POSTER both read this file, so the two cannot drift apart.
 * Change it here and regenerate the poster with `node tools/render-poster.mjs`.
 */

var CONCEPT = {
  name: 'Flamme',
  tagline: 'Bringing history to life',

  /* The one topic. Everything else is a way of delivering it. */
  big: 'Make the Château immersive and fun for children and families.',

  idea: 'The rooms are magnificent and almost silent. For a child they are a corridor of labels, '
      + 'and a family that arrives without a plan is handed nothing at the door. The plan turns '
      + 'the estate into something a child can play their way through — and uses schools as the '
      + 'way in, because a class visit seeds a family that comes back.',

  /* One of the ideas, not the whole plan. */
  mechanic: 'Thirteen stations spell FONTAINEBLEAU, with a bonus stamp in the free gardens and '
          + 'a Royal Explorer Certificate at the finish.',

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
    v:'More active learning and exploration without constructing a new attraction.',
    art:{ img:'stamps.jpg', t:'Fourteen stamps',
          s:'One per station plus the secret, self-inking so no staff member holds a pad' } },

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

/* ---------------------------------------------------------------------------
 * THE BUSINESS CASE  —  four exhibits and a recommendation.
 *
 * Every number is (a) the group's pilot scale, (b) a stated assumption, or
 * (c) arithmetic on the two. Nothing is a measured result: the pilot exists to
 * measure it. LTM figures are quoted from their public pages, read 19 Oct 2026.
 * ------------------------------------------------------------------------- */

var BIZ = {
  headline: 'Schools are an acquisition channel, not a revenue line',
  frame: 'The school visit can stay free. Its value is the paying family visit it produces, so '
       + 'the decision metric is not ticket income — it is what one returning household costs to '
       + 'acquire, against what it spends.',

  cohort: { classes:40, pupils:25, total:1000, note:'Phase 1–2 pilot scale' },
  basket: { adults:2, price:17, value:34,
            note:'Two accompanying adults at €17. Under-18s enter free, so children are '
               + 'deliberately excluded from revenue.' },

  scenarios: [
    { k:'Cautious', rate:15, hh:150, rev:5100,  net:1810, roi:55  },
    { k:'Base',     rate:20, hh:200, rev:6800,  net:3510, roi:107, lead:true },
    { k:'Strong',   rate:30, hh:300, rev:10200, net:6910, roi:210 }
  ],
  sens: 'Sensitivity — at €14 admission the base case is €5,600 and still clears cost; the '
      + 'conclusion holds across the plausible price range.',

  costs: {
    y1:3290, ongoing:2450,
    lines: [
      { t:'Fourteen self-inking stampers', v:'€490',   k:'one-off' },
      { t:'Station holders and signage',   v:'€350',   k:'one-off' },
      { t:'Passports, 1,000 × €0.80',      v:'€800',   k:'yearly'  },
      { t:'Teacher packs and invitations', v:'€150',   k:'yearly'  },
      { t:'Coordination and restocking',   v:'€1,500', k:'yearly'  }
    ],
    note:'Design and content absorbed: the trail reuses existing historical material and an '
       + 'emblem the Château already owns. Unit prices pending supplier quotes.'
  },

  breakeven: { hh:97, pct:9.7,
    headline:'Break-even is one pupil in ten',
    line:'97 of 1,000 pupils need to return with family for the programme to pay for itself. '
       + 'Everything above that is contribution.' },

  cac: { y1:16.45, on:12.25, ret:34,
    headline:'€16.45 to acquire a household that spends €34',
    line:'2.1× in year one; 2.8× from year two, once the stampers and signage are paid for.' },

  scale:'Linear in classes recruited — the kit is bought once, so each additional class carries '
      + 'print and coordination only.'
};

/* Verified against ltmuseum.co.uk, 19 Oct 2026. */
var EVIDENCE = {
  headline:'The mechanic is proven; the conversion rate is not',
  source:'London Transport Museum, Covent Garden',
  quote:'Our free stamper trail will help your little ones follow the story told in the Museum displays.',
  qsrc:'LTM, “Top 10 things to see and do”',

  facts: [
    { t:'The trail is free', p:'It is not a paid add-on. It earns by making the existing displays '
       + 'legible to children — the same claim the Château makes for its own rooms.' },
    { t:'Children go free', p:'Child and Under-18 entry is £0 on every pass tier, removing family '
       + 'size as a barrier to the return visit.' },
    { t:'There is no single-visit ticket', p:'The entry product is an Annual Pass — Adult £27, '
       + 'unlimited visits for twelve months. LTM sells a year, not a visit.' },
    { t:'It sits inside a system', p:'The trail is one of ten family activities, alongside a 0–7 '
       + 'play zone and hands-on galleries. It is infrastructure, not a gimmick.' }
  ],

  read:'The strategic read: LTM monetises the relationship, then uses free trails to drive the '
     + 'repeat visits that relationship already paid for. The stamper trail is retention '
     + 'infrastructure. Our school-to-family engine is the same logic, run in the other '
     + 'direction — acquire through the school, convert to the family.',

  limit:'What it does not give us is a conversion rate. A transport museum in central London has '
      + 'a different catchment and a different visit motive from a château 60 km from Paris. '
      + 'The mechanic transfers; the numbers must be measured here. That is the pilot’s job.',

  upside:'Highest-upside option, flagged not counted: a family annual pass on LTM’s logic. '
       + 'It converts one school-driven visit into a year of return visits at near-zero marginal '
       + 'cost. Priced separately — see the pricing workstream.'
};

var MASCOT = {
  headline:'Flamme is an owned asset, not a licensing cost',
  owned:'Flamme is François I’s salamander, on these walls since 1528. The Château owns the '
      + 'emblem outright: no licence to buy, no invented character to defend, and a mascot that is '
      + 'historically true — which a heritage site cannot compromise on.',
  horizon: [
    { s:'Now',   t:'Identity and wayfinding',
      p:'Free passport, trail signage, teacher packs. A cost line that buys recognition.',
      v:'Counted in the case above' },
    { s:'Next',  t:'Retail',
      p:'Stamp set, souvenir passport, stationery — the LTM shop line, applied to an emblem we own.',
      v:'Not counted' },
    { s:'Later', t:'Extension',
      p:'Family annual pass, digital trail, an older-pupil Napoleon route, co-branding with the Forêt.',
      v:'Not counted' }
  ],
  caveat:'Each later line needs its own business case. None is included in the figures above — '
       + 'the case stands on the family return visit alone.'
};

var ASK = {
  headline:'Fund the pilot, decide on evidence',
  body:'Approve €3,290 for a one-year pilot across forty classes. Track schools recruited, '
     + 'passport completion, attributable return visits and net contribution. Scale to thirteen '
     + 'stations only if conversion clears 10%.',
  risk:'Downside is bounded at the kit cost — €840 of it is reusable hardware.'
};

/* ---------------------------------------------------------------------------
 * THE PROBLEM  —  why the trail exists at all.
 * From our own competitor and benchmark work. Fontainebleau's children's offer was
 * read from its own website and FAQ; the UK operators from their public pages.
 * ------------------------------------------------------------------------- */
var PROBLEM = {
  headline: 'The rooms are magnificent. To a nine-year-old they are a corridor of labels.',
  lede: 'The Château does programme for children. The problem is not quantity, it is '
      + 'availability — and what a child is handed at the door compared with what a British '
      + 'museum hands them.',

  here: {
    t:'What a child gets here',
    points: [
      'An “Enquête au château” investigation tour for ages 7–12, and printable livrets-jeux.',
      'Almost all of it is booked, timed, age-gated and clustered on school holidays.',
      'A family arriving unplanned — the typical garden visitor — receives nothing at the gate.',
      'The Grands Appartements are text-heavy and chronologically dense. A child learns very little unaided.'
    ]
  },

  there: {
    t:'What a child gets in the UK',
    points: [
      'English Heritage hands out free quest booklets and Explorer Backpacks on request, at the gate, every day.',
      'The National Trust issues an activity passport that children stamp across visit after visit.',
      'The London Transport Museum runs a free stamper trail as one of ten family activities, not as a paid add-on.',
      'Hampton Court Palace employs costumed interpreters daily, included in the standard ticket.'
    ]
  },

  difference: 'The difference is not how much children’s content exists. It is that a British '
            + 'child receives something physical, immediately, without a reservation — and that '
            + 'the thing they receive gives them a reason to come back.',

  cost: {
    t:'What it costs the Château',
    stats: [
      { v:'2.06m', l:'visits to the estate in 2025' },
      { v:'~29%',  l:'of them went inside the château — roughly 595,000 paid visits' },
      { v:'+15% / +2%', l:'growth last year: the free gardens against the paid château' }
    ],
    line:'The largest audience the Château has is standing on its grass, and the visit it could '
       + 'convert them to is the one a child finds boring.'
  },

  caveat:'Read as roughly a third: the conversion share divides visits by visits, not unique '
       + 'visitors, so garden regulars inflate the denominator. The school workbook and the '
       + 'family livret-jeu are distinct products and are not merged here.'
};

/* A photograph of station 4 in the Galerie François I: the sign, the open passport and
   the press, as the visitor meets them. */
var STATION_SHOT = {
  src: 'station-photo.jpg',
  alt: 'A stamp station in the Galerie François I: a numbered sign, the open passport and a stamp press on a wooden stand',
  cap: 'Station 4 · Galerie François I',
  note: 'A removable stand, a numbered sign and a self-inking press. Nothing is fixed to a historic wall or object.'
};

/* The fourteen stamp designs, one per station plus the secret. Ink colour matches each
   station's page; the artwork is monoline throughout so coverage stays even. */
var STAMP_SHEET = {
  src: 'stamps.jpg',
  alt: 'Fourteen stamp designs, one per station: a horseshoe staircase, a chapel window, '
     + 'the king\u2019s staircase, a salamander, a crescent moon, a throne, an empress\u2019s bed, '
     + 'the Turkish boudoir, a bicorne hat, the Chinese museum, the keep, a stag, a carp and '
     + 'the secret flame rosette',
  cap: 'Fourteen stamps',
  note: 'One per station, plus the secret. Self-inking, so no staff member has to hold a pad.'
};

/* Implementation, step by step. Every figure is from the business case above:
   the kit, the print run, the cohort and the break-even are BIZ, not new numbers. */
var IMPLEMENTATION = [
  { s:'01', t:'Choose the rooms, agree the fixings',
    d:'Pick five or six rooms with conservation, using removable holders and free-standing signs.',
    i:'Heritage risk is settled before any money is committed.' },
  { s:'02', t:'Buy the kit once',
    d:'Fourteen self-inking stampers and the station holders and signage.',
    i:'€840 of reusable hardware — the bounded downside of the whole pilot.' },
  { s:'03', t:'Print short, reuse everything else',
    d:'1,000 passports at €0.80, plus teacher packs and family invitations.',
    i:'€950. Design and content are absorbed: the emblem is already the Château’s.' },
  { s:'04', t:'Recruit forty classes',
    d:'A curriculum-linked invitation to CM1 teachers, with booking made simple.',
    i:'1,000 pupils in the pilot cohort, at Phase 1–2 scale.' },
  { s:'05', t:'Run it, and send the passport home',
    d:'Pupils complete the stations on the school trip and take the passport away with them.',
    i:'The referral leaves in a child’s hands. Each returning household is 2 adults × €17.' },
  { s:'06', t:'Measure, then decide',
    d:'Track schools recruited, completion, attributable return visits and net contribution.',
    i:'Break-even is 97 households — one pupil in ten. Scale only above that.' }
];

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

if (typeof module !== 'undefined') module.exports = { CONCEPT, BENEFITS, RECS, ENGINE, SCENARIO, BIZ, EVIDENCE, MASCOT, ASK, LIGHT, PHASES, STATIONS };
