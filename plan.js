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
     + 'tab on the main website, with curriculum-matched offers and one simple reservation path.',
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
        p:'Contact a pilot list of local schools with a three-email sequence: preview the pages, '
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
    be:'Gross-cost break-even needs at least 170 additional €17 tickets, before taxes.'
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
      b:'Above a public €0.27 ex-VAT reference for a 16-page A5 run of 1,000',
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
  internal:'Fontainebleau_Tickets_Data xlsx (Price_List, Ticket_Data, Jan–Sep 2026) · '
         + 'Flamme-Royal-Stamp-Trail pdf (route, booklet, certificate) · '
         + 'E01-G11-LDMS-01 Value Chain (observed visitor and language friction) · '
         + 'Flamme_Campaign_Fontainebleau pptx (school partnership concept).',
  external:'chateau-fontainebleau-education.fr (school admission, existing offers, teacher '
         + 'portal) · eduscol.education.fr (CM1 curriculum) · multi-pages.com (illustrative '
         + 'A5 print pricing, Sep 2026) · ltmuseum.co.uk (children’s activity-guide '
         + 'inspiration).',
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

var STATION_SHOT = {
  src: 'station-photo.jpg',
  alt: 'A stamp station in the Galerie François I: a numbered sign, the open passport and a stamp press on a wooden stand',
  cap: 'A station, as a visitor meets it',
  note: 'A removable stand, a numbered sign and a self-inking press. Nothing is fixed to a historic wall or object.'
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
