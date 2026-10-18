/* The ten actions. The site and the A1 poster both read this file, so they cannot drift.
   Overwrite the array and both follow.
   Positions are world metres in the estate model: x east, z south, y up. */
/* Drafts, from the group's Module 1 value-chain analysis. Positions are world metres in the
   estate model: x east, z south, y up. Overwrite this array and the page follows. */
var ACTIONS = [
  { n:1, p:[-110,88,8], short:'A mascot', stage:'inside',
    cost:'free', costL:'No cost — it is already on the walls',
    t:'Give the Château the mascot it already has',
    where:'Galerie François I', area:'Storytelling and interpretation',
    saw:'The salamander of François I is carved and painted through the whole gallery, on the woodwork, the ceiling and the panelling, with a Latin motto attached to it. It is never named, never explained and never used.',
    gap:'Every heritage site that reaches families has a face. This one has had one since 1528 and does not use it, which means it costs nothing to adopt and cannot be accused of being invented.',
    change:'Adopt the salamander as the Château’s family-facing mascot. Give it a name, a voice and a drawn form, and put it on the things children already touch: the map, the signage, the shop shelf, the website’s family page.',
    measure:'Recognition at the exit; use of the family page; sales of anything carrying it.',
    art:{ img:'flamme.png', t:'Flamme',
          s:'The salamander of Fran\u00e7ois I, drawn as a mascot the Ch\u00e2teau can put on a map, '
             + 'a sign, a booklet and a shop shelf' } },

  { n:2, p:[-250,96,10], short:'A booklet at the gate', stage:'gate',
    cost:'one', costL:'One print run and 14 self-inking stampers',
    t:'Hand every child something to do, at the gate',
    where:'Cour du Cheval Blanc · the whole route', area:'Storytelling and interpretation',
    saw:'The children’s bee trail is hard to follow, and spotting bees hidden in display cases offers little excitement or reward. The printable activity books on the website are French-curriculum only, print-at-home and poor quality.',
    gap:'The Château does programme for children, but almost all of it is booked, timed and clustered on school holidays. A family arriving unplanned gets nothing at all.',
    change:'A printed booklet handed over with the ticket, every day, to anyone. Thirteen stations with a question each, a stamp at every one, a letter per station spelling the name of the place, a secret fourteenth stamp in a free garden, and a certificate stamped at the shop.',
    measure:'Booklets handed out against child admissions; certificates presented at the shop; second visits inside twelve months.',
    art:{ href:'booklet.pdf', t:'Flamme’s Royal Stamp Trail', s:'24-page booklet, A5, print-ready — built, not a mock-up' } },

  { n:3, p:[-332,56,-30], short:'Tell the queue', stage:'gate',
    cost:'low', costL:'A board, a sign and a clipboard',
    t:'Tell the queue what it is waiting for',
    where:'Grille d’Honneur · the queue', area:'Ticketing and the visit room',
    saw:'Entry took about 30 minutes. The queue began outside and continued through a long corridor. Neither the expected waiting time nor any information about the Château was displayed along it, and security screening was not applied consistently while we watched.',
    gap:'A wait with nothing in it feels longer than it is, and it is the first thing a family experiences. Nobody can say whether the delay is security or ticket validation, so nobody can fix it.',
    change:'A regularly updated waiting-time estimate at the queue entrance, a short introduction to the Château alongside it, and a downloadable map. On a few peak days, time security and validation separately, then move existing staff to whichever step is slow.',
    measure:'Median waiting time, time per visitor at each step, and how often people ask staff for directions.' },

  { n:4, p:[-262,74,-72], short:'Three routes', stage:'gate',
    cost:'low', costL:'Reprint the map, re-cut the screen loop',
    t:'Three numbered routes, one built for families',
    where:'The orientation room', area:'Ticketing and the visit room',
    saw:'The orientation room has a site map, a screen of daily activities, a scale model, lockers and a QR code for the audio guide. There was no recommended route, no indication of how long anything takes, and the Wi-Fi was not working.',
    gap:'Visitors are told what exists but not how to spend their afternoon. Anything depending on mobile data fails for exactly the international visitor it was built for.',
    change:'Two or three numbered visit options on the screen and the printed map, with durations and a clear split between the rooms and the gardens. One of them built for visitors with children.',
    measure:'Requests for directions at the desk, and whether families finish the trail.' },

  { n:5, p:[-30,80,22], short:'Three points a room', stage:'inside',
    cost:'low', costL:'Three panels, written in-house',
    t:'Three points and one anecdote per room',
    where:'Grands Appartements', area:'Storytelling and interpretation',
    saw:'Some explanatory texts are lengthy, use specialist language or are hard to read, and translations vary room to room. Rooms named after one figure hold furnishings from another period with no explanation.',
    gap:'The limitation is the presentation, not the collection. The mixed periods read as a mistake rather than as eight centuries of rebuilding, which is the best story in the building.',
    change:'Pilot a short format in three prominent rooms: who used this space, what changed, one detail to notice, one verified anecdote. Where furnishings are later, one line says so. Detail stays on the website.',
    measure:'A few exit questions on whether visitors can say what the room was for.' },

  { n:6, p:[-60,82,-70], short:'One timetable', stage:'inside',
    cost:'low', costL:'Coordination, plus a trial rota',
    t:'One timetable for everything that closes',
    where:'Cour des Offices · restaurant, boating, the train', area:'Third parties',
    saw:'The main food outlet had closed by about 16:00 and boating was unavailable later in the afternoon, while visitors were still on the estate.',
    gap:'A visitor who expected a service and does not find it has a worse visit and spends less. The sale is lost twice.',
    change:'A single published schedule of concession opening and last-service times, on the website and the orientation screen. Food operators test later closing on a small number of busy days.',
    measure:'Sales per hour in the extended window against the cost of staying open.' },

  { n:7, p:[-245,64,72], short:'Cheap souvenirs up front', stage:'inside',
    cost:'free', costL:'A merchandising change',
    t:'Front the cheap souvenirs you already stock',
    where:'The gift shop', area:'Third parties',
    saw:'The shop combines distinctive jewellery and personalised souvenirs with some relatively high-priced products. The period photo booth is a genuinely good keepsake.',
    gap:'A family finishing a visit wants to buy something for a child. The premium range does not serve them and the cheaper stock is already in the building.',
    change:'Give the lower-priced items already in stock real visibility rather than introducing a new range, and put anything carrying the mascot on that shelf. The certificate is stamped here, which puts every finishing family in front of the till.',
    measure:'Units and basket size at the low price points.' },

  { n:8, p:[-112,52,62], short:'Step-free on the map', stage:'inside',
    cost:'low', costL:'One map revision',
    t:'A map that says where the step-free route is',
    where:'Cour de la Fontaine · circulation', area:'Facilities management',
    saw:'Step-free access was not clearly signposted, some exhibition texts were hard to read in low light, directions to toilets and resting areas were limited, and historic seating was not always distinguishable from benches meant for visitors.',
    gap:'This is a protected historic site, so lighting and circulation cannot simply be rebuilt. Information can.',
    change:'A visitor map marking confirmed step-free options and their limits, toilets, resting areas and assistance points. The same map carries the three numbered routes.',
    measure:'Accessibility questions at the desk, and direct feedback.' },

  { n:9, p:[-310,72,36], short:'A multilingual card', stage:'gate',
    cost:'free', costL:'One printed card',
    t:'A multilingual card for the front line',
    where:'Front of house', area:'Facilities management',
    saw:'Some interactions with frontline staff were difficult for non-French-speaking visitors. Donation information was available only in French, and placed late in the route.',
    gap:'The ask arrives after the visitor has stopped paying attention, in a language a large share of them do not read.',
    change:'A short bilingual FAQ so frontline staff answer common questions consistently, and clearer bilingual donation messaging at an approved point. No change to the physical layout.',
    measure:'Donation activity at the new point against the old one.' },

  { n:10, p:[-430,235,-70], off:true, short:'One answer, two languages', stage:'before',
    cost:'low', costL:'One page, plus a quarterly hour',
    t:'One answer, in two languages, wherever people look',
    where:'Off the estate · website, search and the train', area:'Online ticketing, social and trip planning',
    saw:'Booking redirects to a separate platform in seven stages, there is an error in the transport section, captions are predominantly French even on videos narrated in English, and departure boards at Gare de Lyon show Montargis or Montereau, not Fontainebleau-Avon.',
    gap:'Four surfaces, one problem: the planning facts are not written down anywhere canonical, in both languages, where people and machines can both find them.',
    change:'One structured page covering transport from Paris, prices, hours, duration and activities, including which train to board and what the board actually says. Two ready-made day plans with booking links. French-first, English-second captions on selected posts.',
    measure:'Checkout completion where analytics exist, click-through from the planning page, and a quarterly audit repeating the same French and English questions across the main AI assistants.' }
];

if (typeof module !== 'undefined') module.exports = ACTIONS;
