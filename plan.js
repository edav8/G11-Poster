/* Flamme — Three Key Recommendations & Business Case. INSEAD MIM28, Section E01, Group 11.
 *
 * The WEBSITE and the A1 POSTER both read this file, so the two cannot drift apart. Change it
 * here, then regenerate the poster with `node tools/make-poster.mjs`.
 *
 * Every figure is transcribed from the group's business case, including its caveats. The
 * caveats are not decoration: the receipts are illustrative, the conversion rates are pilot
 * targets, and the difference between receipts and cost is explicitly not profit.
 */

var CONCEPT = {
  name: 'Flamme',
  tagline: "Flamme's Royal Stamp Trail",
  plan: 'Marketing Activities Plan 2027',

  big: 'Make Fontainebleau accessible, immersive and engaging for children, schools and '
     + 'international families.',

  idea: 'One integrated growth idea, three recommendations: children discover the Château, '
      + 'schools book it every year, and families have a reason to return. Built on heritage '
      + 'assets the Château already owns, with limited new investment.',

  mechanic: 'The existing 24-page concept already holds thirteen numbered historical stops, one '
          + 'clue per stop, the word FONTAINEBLEAU, a bonus garden stamp and a completion '
          + 'certificate. Nothing new has to be invented to run the pilot.',

  segment: 'CM1 first. François I and the Renaissance connect to "Le temps des rois" in the '
         + 'French CM1 history curriculum; later adapt for 5e, or older Napoléon-focused visits.'
};

/* What each recommendation is for, in one line. The poster prints these as a strip. */
var BENEFITS = [
  { k:'Memorable', v:'A child leaves with something in their hands, and a reason to come back.' },
  { k:'Repeatable', v:'A school that books once has a reason to book the same grade next year.' },
  { k:'Understandable', v:'The same visit works in two languages and at two reading ages.' },
  { k:'Reversible', v:'Portable stations, printed alternatives, no permanent alteration.' }
];

/* ---------------------------------------------------------------------------
 * THE ONE BROAD TOPIC. The brief allows exactly one, and this is it; the three
 * recommendations are workstreams inside it, not three separate topics.
 * ------------------------------------------------------------------------- */
var TOPIC = {
  label: 'One broad topic',
  t: 'Making the Ch\u00e2teau work for children, schools and international families',
  sub: 'Three workstreams, one audience, one plan',
  p: 'Every activity below serves the same audience and the same journey. Nothing here is a '
   + 'second topic wearing a different hat.'
};

/* The investment constraint the brief points at, from the INSEAD case. */
var CONSTRAINT = {
  label: 'What it costs the Ch\u00e2teau',
  budget: '\u20AC700,000',
  budgetNote: 'the Ch\u00e2teau\u2019s annual marketing and communications budget',
  ask: '\u20AC12,306',
  share: '1.8%',
  line: 'The whole plan asks for 1.8% of the marketing budget the Ch\u00e2teau already spends '
      + 'each year. It needs no new platform, no mass advertising and no permanent staff.',
  src: 'Budget figure: Preserving the Past while Sustaining the Future (INSEAD, 2024).'
};

/* The benchmark the problem rests on. Four operators, read from their public pages. */
var BENCHMARK = {
  label: 'What a British child is handed at the gate',
  rows: [
    { k:'English Heritage',          v:'Free quest booklets and Explorer Backpacks, on request, every day' },
    { k:'The National Trust',        v:'An activity passport children stamp across visit after visit' },
    { k:'London Transport Museum',   v:'A free stamper trail, one of ten family activities, not a paid add-on' },
    { k:'Hampton Court Palace',      v:'Costumed interpreters daily, included in the standard ticket' }
  ],
  line: 'A British child receives something physical, immediately, without a reservation \u2014 and '
      + 'it gives them a reason to come back. At Fontainebleau almost everything for children is '
      + 'booked, timed and age-gated, so a family arriving unplanned receives nothing.'
};

/* ---------------------------------------------------------------------------
 * THE OBSERVED BASELINE. The only measured numbers in the plan.
 * ------------------------------------------------------------------------- */
var BASELINE = {
  t: 'What the Château’s own ticket data tells us',
  period: 'Observed baseline, January to September 2026',
  rows: [
    { k:'Full admission ticket price', v:'€17',
      i:'Used for every paying-adult return scenario below.' },
    { k:'Paid full-price tickets', v:'103,443',
      i:'The benchmark a small incremental international target is set against.' },
    { k:'Free admissions', v:'166,919',
      i:'Under-18 and school visitors: an engagement gateway, not assumed admission revenue.' },
    { k:'Free admission plus a paid activity', v:'4,308 sales at €7.53 average',
      i:'Free-admission visitors already buy optional experiences. That is the opening.' },
    { k:'Total paying receipts', v:'€2.67m',
      i:'Context only. The proposal assumes no general price increase.' }
  ],
  source: 'Fontainebleau_Tickets_Data xlsx, sheets Price_List and Ticket_Data. The data record '
        + 'PURCHASE dates, not the dates visitors attended.',
  caveat: 'Financial figures are deliberately illustrative, not forecasts. They exclude VAT on '
        + 'incremental receipts, per-visit operating costs, displacement of existing purchases, '
        + 'and internal management time beyond what is budgeted.'
};

/* ---------------------------------------------------------------------------
 * THE THREE RECOMMENDATIONS. `p` places each on the estate model: x east, z south, y up.
 * ------------------------------------------------------------------------- */
var RECS = [
  {
    n:'01', pillar:'The experience',
    t:'An adventure a child can take home',
    sub:'Stamp trail, passport and certificate',
    goal:'Make the visit active and memorable.',
    where:'The route, from the entrance inward', p:[-250,96,10],
    v:'v/court.mp4',
    d:'Rather than invest in a new exhibition, test the existing Royal Stamp Trail through a '
     + 'short, conservation-safe route before installing the full version.',
    steps: [
      { t:'Welcome at entry',
        p:'Offer a compact illustrated booklet to children, with an accessible digital '
         + 'alternative. Make the route and its approximate duration clear.' },
      { t:'Discovery',
        p:'Five or six stations in the pilot, scaling to thirteen portable, approved stamp '
         + 'points, each tied to an existing object or room.' },
      { t:'Immersion',
        p:'Flamme, François I or Napoléon character guides on selected school and weekend '
         + 'sessions only. No permanent staffing.' },
      { t:'Reward and referral',
        p:'Complete the puzzle, collect a no-purchase-required certificate at an exit or shop '
         + 'desk, and take home a tracked family-return challenge.' },
      { t:'Measure',
        p:'Count passports, approximate distinct households, completion rate, paid guide uptake '
         + 'and attributable paying-adult returns.' }
    ],
    costs: [
      { t:'Adapt booklet, check historical content', a:'Reuses the current 24-page concept', v:'€900' },
      { t:'Print children’s passports',          a:'2,000 at €0.60',                 v:'€1,200' },
      { t:'Portable signage and reusable stamps',  a:'Thirteen stations combined',        v:'€1,300' },
      { t:'Certificate cards',                     a:'2,000 at €0.15',                 v:'€300' },
      { t:'Two basic character costumes',          a:'2 at €200',                      v:'€400' },
      { t:'Staff briefing and maintenance setup',  a:'Light internal support',            v:'€250' },
      { t:'Costumed guided pilot',                 a:'10 sessions x 2h x €25/h',       v:'€500' },
      { t:'Contingency',                           a:'15% of €4,850',                  v:'€728' }
    ],
    total:'€5,578', totalNote:'A planning allowance, not a quotation',
    base:'€6,193',
    baseCalc:'2,000 child passports, divided by 1.25 children per household, times a 10% extra '
           + 'family return rate, times 2 paying adults at €17 — €5,440 — plus 100 optional '
           + 'paid experiences at €7.53, €753.',
    sens:'A 5% family-return rate gives about €3,473; 15% gives about €8,913. The 10% rate is a '
       + 'test target, not measured demand.',
    be:'First-year break-even, before tax and variable visitor costs, needs roughly a 9% '
     + 'household-return rate alongside those 100 paid experiences.'
  },
  {
    n:'02', pillar:'The acquisition engine',
    t:'Make every school visit a repeatable partnership',
    sub:'School outreach and a teacher-facing website',
    goal:'Turn curriculum fit into recurring school relationships and paying family referrals.',
    where:'Off the estate: teachers, the website, the booking line', off:true, p:[-430,235,-70],
    v:'v/theatre.mp4',
    d:'The Château already maintains an educational site with visit-preparation resources and '
     + 'telephone booking. The low-investment improvement is a prominent "Schools & Teachers" '
     + 'tab on the main Château website, carrying curriculum-matched offers, a downloadable '
     + 'class pack, clear prices, visiting rules and a simple reservation-request path.',
    steps: [
      { t:'Prioritise CM1',
        p:'Connect François I and the Renaissance to "Le temps des rois" in the CM1 history '
         + 'curriculum; adapt later for 5e, or for older Napoléon-focused visits.' },
      { t:'Clarify the offer',
        p:'Present the self-led trail (eligible free admission), optional paid facilitated '
         + 'visits, durations, group sizes and learning objectives.' },
      { t:'Create one obvious webpage',
        p:'Teacher guide, pupil booklet, map, accessibility, transport, FAQs and a booking '
         + 'call-to-action, linked to the existing education portal.' },
      { t:'Sell directly to teachers',
        p:'Contact a pilot list of local private and public schools with a three-email sequence: '
         + 'preview the pages, '
         + 'show the curriculum fit, give the booking steps.' },
      { t:'Build loyalty',
        p:'Send each child home with a family challenge; ask schools to reserve the same '
         + 'grade-level trip next year. Measure renewals and tracked family visits.' }
    ],
    costs: [
      { t:'School landing page on the official site', a:'Adapts the existing CMS and portal', v:'€850' },
      { t:'Curriculum-linked teacher kit',            a:'Adapts the available booklet',       v:'€600' },
      { t:'Teacher outreach and coordination',        a:'60h x €25/h',                     v:'€1,500' },
      { t:'Reservations coordination',                a:'16 additional hours x €25/h',     v:'€400' },
      { t:'Contingency',                              a:'15% of €3,350',                   v:'€503' }
    ],
    total:'€3,853', totalNote:'No new school platform, no mass advertising',
    base:'€6,800',
    baseCalc:'40 pilot classes of 25 children, times 20% of households making a truly '
           + 'incremental family visit, times 2 paying adults at €17. Admission during eligible '
           + 'school visits is NOT counted as revenue.',
    sens:'10% family conversion gives €3,400; 30% gives €10,200. The 20% rate is an '
       + 'aspirational pilot assumption.',
    be:'An optional paid workshop is separate upside and is not in this model. An existing '
     + 'Archives–Château programme runs at €90 per class, but that is not an authorised price '
     + 'for Flamme, and guide delivery costs would need assessing.'
  },
  {
    n:'03', pillar:'The accessibility layer',
    t:'Make royal history understandable without borders',
    sub:'International children and accessible storytelling',
    goal:'Make the same experience understandable across languages and ages.',
    where:'The Grands Appartements, and the website', p:[-30,80,22],
    v:'v/galerie.mp4',
    d:'Our value-chain audit found lengthy specialist labels, inconsistent translations, an '
     + 'underdeveloped bee trail and French-oriented activity books. The goal is not to '
     + 'translate words: it is a clear, child-friendly narrative for families who do not arrive '
     + 'knowing French history.',
    steps: [
      { t:'Use recognisable narrators',
        p:'Flamme introduces each room; François I, Napoléon and a medieval king explain their '
         + 'eras in clear, verified language, with visual distinctions between periods.' },
      { t:'Write short stories',
        p:'Per station: who used the room, why it mattered, and one visible object to find. '
         + 'Fact-checked and historically nuanced.' },
      { t:'Start bilingual',
        p:'French and English passports, simple audio narration, captions and symbol-led '
         + 'instructions. Other languages only after demand is tested.' },
      { t:'Design accessibility in',
        p:'Short routes, offline printed alternatives, larger type, step-free substitute tasks, '
         + 'and plain-language teacher and family guidance.' },
      { t:'Drive conversion',
        p:'An English-language "Visiting with children" page and bilingual short-form content '
         + 'linked to tickets, hours, transport and the trail.' }
    ],
    costs: [
      { t:'Translation and simplified editing',   a:'English plus plain-language adaptation', v:'€850' },
      { t:'Subtitles and short video adaptations',a:'Repurposes existing footage',            v:'€400' },
      { t:'Short character audio recordings',     a:'A digital audio pilot',                  v:'€450' },
      { t:'Families and children web content',   a:'Uses the existing website and CMS',      v:'€500' },
      { t:'Usability and accessibility testing',  a:'Light multilingual testing',             v:'€300' },
      { t:'Contingency',                          a:'15% of €2,500',                       v:'€375' }
    ],
    total:'€2,875', totalNote:'Print copies are budgeted under recommendation 01',
    base:'€4,403',
    baseCalc:'259 truly additional full-price adult tickets at €17 — a hypothetical 0.25% '
           + 'uplift against the 103,443 full-price tickets purchased January to September 2026. '
           + 'NOT a measured international conversion rate.',
    sens:'An increment equal to 0.10% of that benchmark gives about €1,751; 0.50% gives about '
       + '€8,789.',
    be:'Gross-cost break-even needs at least 170 additional €17 tickets, before taxes and '
     + 'incremental visitor-service expenses.'
  }
];

/* ---------------------------------------------------------------------------
 * THE INTEGRATED CASE. Three mechanisms, kept distinct when reporting.
 * ------------------------------------------------------------------------- */
var PORTFOLIO = {
  t: 'Pilot, measure, then scale',
  lede:'The programme relies on three mechanisms: attributable family revisits after a self-led '
     + 'trail, referrals from free school visits to paying adult family visits, and incremental '
     + 'adult admissions driven by clearer international family information. These populations '
     + 'stay separate when results are reported.',
  rows: [
    { k:'01  Stamp trail and optional paid tours', low:'€3,473', base:'€6,193',  high:'€8,913',  cost:'€5,578' },
    { k:'02  School partnerships and website',     low:'€3,400', base:'€6,800',  high:'€10,200', cost:'€3,853' },
    { k:'03  International family storytelling',   low:'€1,751', base:'€4,403',  high:'€8,789',  cost:'€2,875' }
  ],
  totals: { low:'€8,624', base:'€17,396', high:'€27,902', cost:'€12,306' },
  headline:'€17,396 of additional gross receipts against €12,306 of budgeted spend, in the '
         + 'base scenario.',
  warn:'The €5,090 difference is NOT profit and NOT a reliable ROI. VAT, operating costs, '
     + 'attribution and displacement all remain unmeasured.'
};

/* What is evidence and what is a guess. Printed in full on both artefacts. */
var ASSUMPTIONS = {
  t:'What is evidence, and what is an estimate',
  rows: [
    { i:'€17 admission, 103,443 full-price tickets, €7.53 activity average',
      b:'The uploaded 2026 Ticket_Data and Price_List, January to September 2026',
      s:'Observed', k:'ok' },
    { i:'Existing school resources, eligible free school visits, group booking system',
      b:'Château educational website and booking guidance',
      s:'Verified public information', k:'ok' },
    { i:'CM1 François I and Renaissance linkage',
      b:'Eduscol official curriculum',
      s:'Verified curriculum', k:'ok' },
    { i:'Booklet printing allowance of €0.60',
      b:'Above a public €0.27 ex-VAT reference for a 16-page A5 run of 1,000, allowing '
       + 'extra for a longer booklet',
      s:'Illustrative allowance', k:'mid' },
    { i:'Staff time at €25/h; station, costume, digital editing and contingency costs',
      b:'Planning assumptions — require supplier quotes and internal staffing checks',
      s:'Unverified estimate', k:'low' },
    { i:'10% and 20% return conversion; 0.25% incremental ticket benchmark; 100 paid guides',
      b:'Pilot performance targets, not measured Château outcomes',
      s:'Hypothesis', k:'low' }
  ]
};

/* Three control rules. These are what make the pilot safe to authorise. */
var GUARDRAILS = {
  t:'Keep it light, test the economics',
  rows: [
    { t:'Protect conservation', short:'No permanent alteration to historic walls. Portable points need approval, and rooms with access limits get an alternative challenge.',
      p:'No permanent alterations to historic walls; portable points require approval. The '
       + 'existing trail includes indoor rooms with access constraints, so offer alternative '
       + 'accessible challenges.' },
    { t:'Protect yield', short:'Never charge for admission that is already free, and never discount, without evidence of incremental demand.',
      p:'Do not charge for ordinarily free school admission, or issue discounts, without '
       + 'evaluating incremental demand. Optional paid experiences must be genuinely additional, '
       + 'and priced subject to approval.' },
    { t:'Protect measurement', short:'Separate source codes for school referrals, family rebookings and international landing-page sales. No ticket counted twice.',
      p:'Separate source codes for school referrals, general family trail rebookings and '
       + 'international landing-page sales. Do not count the same ticket twice.' }
  ]
};

var ROADMAP = {
  t:'A ninety-day pilot',
  rows: [
    { s:'Days 1–30',
      p:'Conservation approval, English and French copy, page prototypes; validate supplier quotes.',
      e:'A cost baseline, station feasibility, internal labour needs.' },
    { s:'Days 31–60',
      p:'Run the short route, engage five to ten CM1 classes, distribute and track trail materials.',
      e:'Participation, teacher interest, completion, website booking intent.' },
    { s:'Days 61–90',
      p:'Test the family challenge and one optional guided session; adjust materials before scaling.',
      e:'Verified incremental bookings, net receipt per source, feedback.' }
  ]
};

var SOURCES = {
  internal:'Fontainebleau_Tickets_Data-2-2(3).xlsx (Price_List, Ticket_Data, Jan–Sep 2026) · '
         + 'Flamme-Royal-Stamp-Trail.pdf (route, booklet, certificate) · '
         + 'E01-G11-LDMS-01-Value-Chain(2).pdf (observed visitor and language friction) · '
         + 'Flamme_Campaign_Fontainebleau.pptx (school partnership concept).',
  external:'chateau-fontainebleau-education.fr/reserver-sa-venue/ (school admission and existing '
         + 'offers) · chateau-fontainebleau-education.fr/preparer-sa-visite/ (the existing '
         + 'teacher portal) · eduscol.education.fr/document/50990/download (the CM1 '
         + 'curriculum) · multi-pages.com/fr/livret-a5 (illustrative A5 print pricing, '
         + 'Sep 2026) · ltmuseum.co.uk (children’s activity-guide inspiration).',
  note:'Budget values are rounded and line-item allowances are not price quotations. Actual '
     + 'revenue uplift and campaign ROI require a controlled pilot, measured visit dates and '
     + 'project-level contribution accounting.'
};

/* ---------------------------------------------------------------------------
 * THE PROBLEM. Why the plan exists, from our own benchmark work.
 * ------------------------------------------------------------------------- */
var PROBLEM = {
  headline: 'The rooms are magnificent. To a nine-year-old they are a corridor of labels.',
  lede: 'The Château does programme for children. The problem is not quantity, it is '
      + 'availability — and what a child is handed at the door, compared with what a British '
      + 'museum hands them.',
  here: {
    t:'What a child gets here',
    points: [
      'An "Enquête au château" investigation tour for ages 7 to 12, and printable livrets-jeux.',
      'Almost all of it is booked, timed, age-gated and clustered on school holidays.',
      'A family arriving unplanned — the typical garden visitor — receives nothing at the gate.',
      'Lengthy specialist labels, inconsistent translations and an underdeveloped bee trail.'
    ]
  },
  there: {
    t:'What a child gets in the UK',
    points: [
      'English Heritage hands out free quest booklets and Explorer Backpacks on request, at the gate, every day.',
      'The National Trust issues an activity passport that children stamp across visit after visit.',
      'The London Transport Museum runs a free stamper trail as one of ten family activities, not a paid add-on.',
      'Hampton Court Palace employs costumed interpreters daily, included in the standard ticket.'
    ]
  },
  difference: 'The difference is not how much children’s content exists. It is that a British '
            + 'child receives something physical, immediately, without a reservation — and that '
            + 'the thing they receive gives them a reason to come back.',
  cost: {
    t:'What the gap costs',
    stats: [
      { v:'103,443', l:'full-price tickets purchased, Jan to Sep 2026' },
      { v:'166,919', l:'free admissions over the same period' },
      { v:'€7.53',   l:'average spend of the 4,308 free-admission visitors who bought an activity' }
    ],
    line:'Free-admission visitors already buy optional experiences. The open question is whether '
       + 'a child leaves with a reason to bring their family back.'
  },
  caveat:'Fontainebleau’s children’s offer was read from its own website and FAQ; the UK '
       + 'operators from their public pages. The school workbook and the family livret-jeu are '
       + 'distinct products and are not merged here.'
};

/* ---------------------------------------------------------------------------
 * THE MASCOT. An owned asset that underpins all three recommendations.
 * ------------------------------------------------------------------------- */
var MASCOT = {
  headline:'Flamme is an owned asset, not a licensing cost',
  owned:'Flamme is François I’s salamander, on these walls since 1528. The Château owns the '
      + 'emblem outright: no licence to buy, no invented character to defend, and a mascot that '
      + 'is historically true — which a heritage site cannot compromise on.',
  horizon: [
    { s:'Now',   t:'Identity and wayfinding',
      p:'Passport, trail signage, teacher packs. A cost line that buys recognition.',
      v:'Budgeted inside recommendation 01' },
    { s:'Next',  t:'Retail',
      p:'Stamp set, souvenir passport, stationery — applied to an emblem the Château owns.',
      v:'Not counted' },
    { s:'Later', t:'Extension',
      p:'Family annual pass, digital trail, an older-pupil Napoléon route, co-branding with the Forêt.',
      v:'Not counted' }
  ],
  caveat:'Each later line needs its own business case. Neither is included in the figures above: '
       + 'the case stands on the three recommendations alone.'
};

/* the group's own renders of the three projects */
var TIMELINE_SHOT = {
  src: 'timeline-shot.jpg',
  alt: 'A gallery corridor lined with panels: each French king with a portrait, dates and one line, Flamme pointing the way',
  cap: 'Eight hundred years, in one corridor',
  note: 'A face, a date and one line per reign \u2014 the whole story before you walk into it.'
};

var MERCH_SHOT = {
  src: 'mascot-retail.jpg',
  alt: 'Flamme merchandise in the Ch\u00e2teau shop: plush, cap, tote, keyrings, snow globe, postcards, and a throne photo spot',
  cap: 'The emblem, applied',
  note: 'Retail and a photo spot. Not counted above \u2014 it needs its own case.'
};

var STATION_SHOT = {
  src: 'station-photo-hi.jpg',
  alt: 'A stamp station in the Galerie François I: a numbered sign, the open passport and a stamp press on a wooden stand',
  cap: 'A station, as a visitor meets it',
  note: 'A removable stand and a self-inking press. Nothing fixed to a historic surface.'
};

var STAMP_SHEET = {
  src: 'stamps.jpg',
  alt: 'Fourteen stamp designs, one per station plus the secret stamp',
  cap: 'Fourteen stamps',
  note: 'One per station, plus the bonus. Self-inking, so no staff member has to hold a pad.'
};

var MASCOT_SHOT = {
  src: 'mascot-retail.jpg',
  alt: 'Flamme merchandise in the Château shop, with a photo board and a throne photo spot',
  cap: 'The emblem, applied',
  note: 'Retail, a photo board and a throne photo spot — the "Next" horizon, and not counted in the case.'
};

/* The thirteen stations plus the bonus, positioned on the estate model. Schematic, not a survey. */
var STATIONS = [
  { n:1,  L:'F', t:'Cour du Cheval Blanc',         p:[-250,52,0] },
  { n:2,  L:'O', t:'Chapelle de la Trinité',       p:[-150,72,-38] },
  { n:3,  L:'N', t:'Escalier du Roi',              p:[-140,74,12] },
  { n:4,  L:'T', t:'Galerie François I',           p:[-110,76,8] },
  { n:5,  L:'A', t:'Salle de Bal',                 p:[2,70,42] },
  { n:6,  L:'I', t:'Salle du Trône',               p:[-62,74,-12] },
  { n:7,  L:'N', t:'Chambre de l’Impératrice',    p:[-36,74,-6] },
  { n:8,  L:'E', t:'Boudoir Turc',                 p:[-14,74,2] },
  { n:9,  L:'B', t:'Musée Napoléon Ier',           p:[-250,56,62] },
  { n:10, L:'L', t:'Musée Chinois',                p:[-160,80,102] },
  { n:11, L:'E', t:'Cour Ovale et Porte Dorée',    p:[-42,60,32] },
  { n:12, L:'A', t:'Jardin de Diane',              p:[-94,26,-97] },
  { n:13, L:'U', t:'Étang aux Carpes',             p:[-160,22,235] },
  { n:'★', L:'', t:'La Fontaine Belle Eau, Jardin Anglais', bonus:true, p:[-420,26,250] }
];

/* ===========================================================================
 * THE CAMPAIGN. From Flamme_Campaign_Fontainebleau — the group's own deck, which
 * is narrower and more complete than the three-recommendation business case: one
 * audience, one funnel, one budget, one set of metrics. The poster is built on this.
 * ========================================================================= */

var CAMPAIGN = {
  kicker: 'Institutional marketing campaign',
  t: 'Flamme invites your class to the palace',
  sub: 'A campaign to bring Île de France private schools to the Château through Flamme’s '
     + 'Royal Stamp Trail: a programme-based visit pupils want to repeat with their families.',
  by: 'Group 11 · Section E01 · Leveraging Data for Marketing Science',
  badge: '13 stamps · 1 secret'
};

var AUDIENCE = {
  n: '01', label: 'Target audience',
  t: 'Private schools in and around Paris',
  segLabel: 'Institutional segment',
  seg: 'Around 300 private schools, 236 under contract in Île de France',
  points: [
    { k:'A small, defined target.', v:'Around 300 schools we can contact one by one, so we need '
      + 'direct contact with teachers rather than mass advertising.' },
    { k:'The programme is the brief.', v:'Schools under contract follow the national programme, '
      + 'so a visit mapped onto it is easy for a head to approve.' },
    { k:'Today’s visit misses them.', v:'The tour is built for adult tourists, so teachers must '
      + 'create the lesson themselves and often choose another outing.' },
    { k:'Families follow.', v:'A pupil who loves the trail brings parents and siblings back, so '
      + 'every school also opens the door to families.' }
  ],
  dmLabel: 'Key decision-makers and influencers',
  dm: [
    { n:'1', who:'Head of school',       role:'Decision-maker',
      p:'Approves the trip, the date and the budget. Wants educational value, safety, simple logistics and a cost that fits.' },
    { n:'2', who:'Class teachers',       role:'Initiators',
      p:'Plan trips in spring and book in autumn. Want a visit linked to their programme, with nothing to prepare.' },
    { n:'3', who:'Parents (APEL)',       role:'Influencers and co-funders',
      p:'Often help fund trips. Respond to wonder, heritage and a story their child brings home, then visit as a family.' },
    { n:'4', who:'Pedagogical networks', role:'Gatekeepers',
      p:'The Catholic school magazine and the Rendez-vous de l’histoire de Blois, trusted sources for outings.' }
  ]
};

var FUNNEL = {
  n: '02', label: 'Budget allocation',
  t: '€95,000 across the funnel, plus a €5,000 reserve',
  stages: [
    { k:'Awareness', v:'€39,000', pct:'39%', when:'April to October',
      goal:'Build trust where teachers already look',
      rows:[
        { t:'Catholic school magazine: 3 full-page ads', v:'€12,000' },
        { t:'Rendez-vous de l’histoire stand, Blois (October)', v:'€10,000' },
        { t:'Premium brochure: design and 5,000 copies', v:'€10,000' },
        { t:'Facebook ads to teachers and parents (≈730K impressions)', v:'€7,000' }
      ] },
    { k:'Engagement', v:'€28,000', pct:'28%', when:'September to November',
      goal:'Give teachers a reason to act',
      rows:[
        { t:'Magazine feature: a class day at the Château', v:'€5,000' },
        { t:'Blois talk: teaching the Renaissance and Napoleon', v:'€8,000' },
        { t:'3 kit booklets (primary, collège, lycée), 1,500 copies', v:'€8,000' },
        { t:'300-school contact list and 4-email sequence', v:'€7,000' }
      ] },
    { k:'Conversion', v:'€28,000', pct:'28%', when:'October to January',
      goal:'Turn interest into signed partnerships',
      rows:[
        { t:'Partnerships coordinator (freelance, 6 months)', v:'€16,000' },
        { t:'Partnership packs by post to head, teacher and APEL', v:'€9,000' },
        { t:'Facebook retargeting: “Book your class visit”', v:'€3,000' },
        { t:'ADAGE listing so schools can pay via Pass Culture', v:'Free' }
      ] }
  ],
  reserve: '€5,000 reserve',
  total: '€100,000'
};

var CREATIVE = {
  n: '03', label: 'Creative strategy',
  t: 'No boring visits: pupils lead the enquiry',
  p: 'Museum visits often bore pupils, so Flamme’s booklet makes the Château interactive: a puzzle '
   + 'in every room, 13 stamps and a secret word. Because school programmes are public, each booklet '
   + 'matches every theme of its level, from CP to lycée, so the visit extends the lesson.',
  benefit: 'Pupils stand where history happened, from François I’s gallery to Napoleon’s farewell, '
         + 'and play instead of listening, in a UNESCO site where the Renaissance entered France.',
  stages: [
    { k:'Awareness', who:'Heads and teachers, April–October',
      line:'« Une sortie où les élèves mènent l’enquête »',
      need:'A trip fee-paying families will value.',
      proof:'UNESCO site, other heads’ testimonials.',
      assets:'Magazine ads, Blois stand, brochure, Facebook.',
      cta:'« Découvrir le livret »' },
    { k:'Engagement', who:'Teachers, September–November',
      line:'« Votre programme, page par page »',
      need:'Content that fits their lessons, no extra preparation.',
      proof:'A booklet per level, with answers and a teacher sheet.',
      assets:'Booklet per level, Blois talk, 4-email series.',
      cta:'« Recevoir le livret de mon niveau »' },
    { k:'Conversion', who:'Heads and parents, October–January',
      line:'« Une journée royale, tout est prêt »',
      need:'Confidence the day is worth it and children enjoy it.',
      proof:'One price per class, a ready-to-send parent letter.',
      assets:'Partnership pack by post, parent letter, retargeting.',
      cta:'« Réserver la visite de ma classe »' }
  ]
};

var METRICS = {
  n: '04', label: 'Performance metrics',
  t: 'How we will know it worked',
  chain: [
    { k:'Awareness',  v:'300', u:'schools, qualified reach',
      p:'Teacher and head each reached twice, via two channels, by end of January' },
    { k:'Engagement', v:'600', u:'kit requests',
      p:'Split by level (primary, collège, lycée); replies and clicks, not opens' },
    { k:'Leads',      v:'250', u:'qualified leads',
      p:'Counted per school and per person, source-tagged from first touch' },
    { k:'Bookings',   v:'120', u:'class bookings',
      p:'From 40 partner schools; signed, booked and attended tracked to June' }
  ],
  roiLabel: 'Return on investment',
  roi: 'ROI = (revenue generated − campaign cost) ÷ campaign cost',
  roiRows: [
    { k:'Year 1 cost',    v:'≈€33', u:'per pupil' },
    { k:'Cost per class', v:'€830',      u:'lower in Year 2; higher once the baseline is netted out' },
    { k:'Reusable assets',v:'≈€15,000', u:'brochure, contact list, emails, kits and visuals reused' },
    { k:'Renewal target', v:'50%',        u:'partner schools rebooking without a second pack' }
  ],
  renewal: 'Renewal decides: if half the schools rebook, Year 2 pays off.',
  also: 'Incremental bookings vs last year, Pass Culture share on ADAGE, and teacher '
      + 'satisfaction after the visit.'
};

/* ===========================================================================
 * THE BOARD. A1 is read standing up in about thirty seconds, so this is the
 * poster's own, much shorter script: one idea, one journey, three initiatives,
 * the feasibility story, ninety days. Everything else lives behind the QR.
 * ========================================================================= */

var BOARD = {
  eyebrow: 'Ch\u00e2teau de Fontainebleau \u00b7 Marketing Activities Plan 2027 \u00b7 INSEAD Group 11',
  line: 'Fontainebleau already has the content.\nWe change how three audiences reach it.',
  sub: 'Three recommendations built on existing heritage assets and limited new investment: '
     + 'children interact with it, schools build recurring relationships around it, and '
     + 'international families understand it.',

  /* the argument, before any solution: one barrier per audience */
  barriers: {
    t: 'Three audiences, three different barriers',
    rows: [
      { c:'a', who:'Children',
        say:'\u201cI can see it, but there is nothing to do.\u201d',
        fix:'Make it interactive' },
      { c:'b', who:'Schools',
        say:'\u201cWe visited once.\u201d',
        fix:'Make it recurring' },
      { c:'c', who:'International families',
        say:'\u201cI can read the translation, but I don\u2019t understand the context.\u201d',
        fix:'Make it understandable' }
    ],
    note: 'Translation is not understanding, and a visit is not a relationship. Each barrier '
        + 'needs a different answer \u2014 none of them needs a new building.'
  },

  inits: {
    t: 'Three recommendations',
    costLabel: 'Pilot cost',
    revLabel: 'Expected incremental receipts',
    kpiLabel: 'What we measure',
    rows: [
      { n:'01', c:'a', seg:'Children \u00b7 experience',
        k:'Give children something to do, and words they can follow',
        p:'Two problems, one answer. Nothing to do: thirteen stops, a stamp at each, a '
         + 'certificate to take home. Nothing they can follow: labels written for a nine-year-old, '
         + 'one object to find per room, and Flamme pointing the way along the wall.',
        chain:['Do','Find','Follow','Stamp','Complete','Take home'],
        cost:'\u20AC5,578', rev:'\u20AC6,193', kpi:'Passports completed, and families who come back' },
      { n:'02', c:'b', seg:'Schools \u00b7 acquisition',
        k:'Turn one-off visits into recurring partnerships',
        p:'Fran\u00e7ois I and the Renaissance already sit in the CM1 programme, so the visit '
         + 'needs no new content \u2014 only a page a teacher can act on, one price, and one '
         + 'booking path. Sell it to teachers directly, send each child home with a family '
         + 'challenge, then ask the school for the same trip again next year.',
        chain:['Target','Convert','Deliver','Rebook','Refer'],
        cost:'\u20AC3,853', rev:'\u20AC6,800', kpi:'Classes booked, and schools that rebook' },
      { n:'03', c:'c', seg:'International families \u00b7 accessibility',
        k:'Make royal history understandable without prior context',
        p:'A child can read \u201cFran\u00e7ois Ier\u201d in English and still have no idea who he was. '
         + 'Not translation \u2014 interpretation: a kings\u2019 timeline down the gallery wall, each '
         + 'reign with a face, a date and one line on what they built, so eight hundred years '
         + 'becomes something you can see in a corridor.',
        chain:['Context','Story','Two languages','Every age','Booked'],
        cost:'\u20AC2,875', rev:'\u20AC4,403', kpi:'International family bookings' }
    ]
  },

  feas: {
    t: 'Why it is safe to try',
    cost: '\u20AC12,306', share: '1.8%', days: '90 days',
    shareOf: 'of the Ch\u00e2teau\u2019s existing annual marketing and communications budget',
    costOf: 'total pilot investment across all three recommendations',
    daysOf: 'to a go, adapt or stop decision',
    objective: 'Primary objective: prove demand, engagement and repeatability \u2014 not maximise '
             + 'year-one profit.'
  },

  phases: [
    { s:'Days 1\u201330',  k:'Build',   p:'Conservation approval, prototype trail, supplier quotes' },
    { s:'Days 31\u201360', k:'Recruit', p:'Five to ten CM1 classes, bilingual materials live' },
    { s:'Days 61\u201390', k:'Test',    p:'Run it; measure completion, conversion and receipts' }
  ],
  decision: 'Decision at day 90: stop, adapt or scale.',

  estate: {
    t: 'Where each one happens',
    note: '01 runs through the rooms and the court. 03 sits in the Grands Appartements and on '
        + 'the website. 02 happens off the estate entirely \u2014 in schools, before anyone arrives. '
        + 'All three reuse walls, rooms and objects the Ch\u00e2teau already owns: a timeline panel, '
        + 'a portable stamp stand, a printed passport. Nothing is built, and nothing is fixed to '
        + 'a historic surface.'
  },

  rules: ['No permanent alteration', 'No discounting', 'Fully measurable'],
  cta: 'Scan to walk the trail and turn the estate in 3D',
  sources: 'Full costings, scenarios and the evidence grade behind every figure are on the site. '
         + 'Ticket data: the Ch\u00e2teau\u2019s own file, Jan\u2013Sep 2026. Budget: INSEAD case, 2024.'
};

/* ===========================================================================
 * THE FINAL BOARD, as submitted. The website is built from this, word for word,
 * so the QR code and the sheet cannot say different things.
 * Audience colours sampled from the poster: children #FF995A, schools #9BB0FE,
 * international #5DD3BE on navy; darker siblings for cream.
 * ========================================================================= */

var FINAL = {
  head: {
    pre: 'Make Fontainebleau more',
    parts: [
      { t:'engaging for ',        k:'children',             c:'a' },
      { t:', more repeatable for ', k:'schools',            c:'b' },
      { t:', and more understandable for ', k:'international families', c:'c' }
    ],
    cta: 'Project website',
    by: 'Château de Fontainebleau · Marketing Activities Plan 2027 · INSEAD Group 11'
  },

  barriers: {
    t: 'Three audiences. Three barriers. Three responses.',
    insight: {
      k: 'The insight',
      q: '“The rooms are magnificent. But to a nine-year-old, they can become a corridor of labels.”'
    },
    rows: [
      { n:'01', c:'a', who:'Children',
        q:'“I can see it, but what do I do?”', r:'Make the visit active.' },
      { n:'02', c:'b', who:'Schools',
        q:'“We visited once.”', r:'Make the relationship recurring.' },
      { n:'03', c:'c', who:'International families',
        q:'“I can read it, but I don’t understand the context.”',
        r:'Make the history understandable.' }
    ]
  },

  museums: {
    k: 'Inspiration from other museums',
    t: 'What 4 UK museums give children at the door',
    rows: [
      { k:'English Heritage',          v:'Free quest booklets and Explorer Backpacks, every day' },
      { k:'National Trust',            v:'A children’s activity passport, stamped visit after visit' },
      { k:'London Transport Museum',   v:'A free stamper trail, not a paid add-on' },
      { k:'Hampton Court Palace',      v:'Costumed interpreters daily, in the standard ticket' }
    ],
    take: 'They give children <b>immediate agency</b>: a trail, pack, passport or challenge. '
        + 'Fontainebleau can borrow the idea, using its own heritage.'
  },

  recs: [
    { n:'01', c:'a', seg:'Children · the experience',
      t:'Make the visit active and memorable',
      problem:'Children can see the heritage, but the visit asks them to watch, not take part.',
      rec:'A self-led Royal Stamp Trail: look, solve, stamp, and take the finished passport home.',
      steps:[
        { k:'Look',  v:'Find the clue hidden in the real room.' },
        { k:'Solve', v:'Crack Flamme’s riddle about it.' },
        { k:'Stamp', v:'Earn a royal stamp in your passport.' },
        { k:'Spell', v:'Collect all 13 letters of the secret word.' },
        { k:'Win',   v:'Solve the final secret, win a certificate!' }
      ],
      strap:'Portable stations: nothing fixed to historic walls.',
      dl:{ file:'Flamme-Royal-Stamp-Trail.pdf', t:'Flamme’s Royal Stamp Trail',
           meta:'The booklet · 24 pages · PDF, 8.6 MB' },
      cost:'€5,578', base:'€6,193',
      shots:['station-photo-hi.jpg','stamps.jpg','mascot-retail.jpg'] },

    { n:'02', c:'b', seg:'Schools · the acquisition engine',
      t:'Turn one-off visits into recurring partnerships',
      problem:'A visit creates value once. A relationship brings a new class every year.',
      rec:'Make the curriculum-fit visit easy to book, with a reason to return next year.',
      steps:[
        { k:'Target',  v:'CM1 first: François I is on the syllabus.' },
        { k:'Convert', v:'Teacher materials and a clear offer.' },
        { k:'Visit',   v:'Self-led or guided, clear objectives.' },
        { k:'Rebook',  v:'Same grade-level visit, next year.' },
        { k:'Refer',   v:'A family challenge brings parents back.' }
      ],
      strap:'Success = rebookings + family referrals.',
      cost:'€3,853', base:'€6,800',
      browser:{
        url:'chateaudefontainebleau.fr/schools-teachers',
        tabs:['Visit','Collections','Schools & Teachers','Families','Tickets'],
        kicker:'CM1 · Le temps des rois',
        title:'François I and the Renaissance, on site',
        sub:'Trail or guided visit · objectives',
        cta:'Request a booking',
        links:['↓ Teacher guide','↓ Pupil booklet + map','Prices · access · transport','FAQ · contact']
      } },

    { n:'03', c:'c', seg:'International families · access',
      t:'Make history understandable, not just translated',
      problem:'Translation is not understanding. A child can read “François I” and not know why he matters.',
      rec:'One child-friendly story of royal history, across languages and ages.',
      steps:[
        { k:'Context',  v:'Who each figure is, and why.' },
        { k:'Story',    v:'Short stories tied to something visible.' },
        { k:'Language', v:'French + English first.' },
        { k:'Access',   v:'Audio, captions, symbols, large type.' },
        { k:'Convert',  v:'English family page linked to tickets.' }
      ],
      strap:'Don’t just translate the labels: give the context.',
      cost:'€2,875', base:'€4,403',
      shots:['timeline-shot.jpg'],
      figures:['Louis IX','François I','Napoléon I'] }
  ],

  money: {
    riskK: 'Low risk by design', risk: '€12.3K',
    riskNote: 'Total Year-1 pilot budget: ≈ 1.8% of the Château’s €700k marketing budget',
    t: 'Pilot, measure, then scale',
    cols: ['Gross receipts','Low','Base case','High','Pilot cost'],
    rows: [
      { k:'01  Children · stamp trail',   v:['€3,473','€6,193','€8,913','€5,578'] },
      { k:'02  Schools · partnerships',   v:['€3,400','€6,800','€10,200','€3,853'] },
      { k:'03  International families',        v:['€1,751','€4,403','€8,789','€2,875'] }
    ],
    total: { k:'Total', v:['€8,624','€17,396','€27,902','€12,306'] },
    bigK: 'Base-case gross receipts', big: '€17,396', bigNote: 'vs €12,306 total pilot spend'
  },

  pilot: {
    t: 'The 90-day pilot',
    k: 'What we ask the Château to approve',
    phases: [
      { n:'1', s:'Days 1–30',  t:'Build & validate' },
      { n:'2', s:'Days 31–60', t:'Test' },
      { n:'3', s:'Days 61–90', t:'Measure' }
    ],
    decision: { k:'Day 90 decision', t:'Stop, adapt or scale' },
    guardK: 'Three guardrails · protect…',
    guards: [
      { k:'Conservation', v:'Nothing permanent on historic walls.' },
      { k:'Yield',        v:'No discounts without proven value.' },
      { k:'Measurement',  v:'Never count a ticket twice.' }
    ]
  }
};
