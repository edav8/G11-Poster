/* French layer for the website. The English in plan.js stays the single source of
   truth: this maps each rendered string onto its French, and the toggle swaps the
   DOM in place rather than re-rendering, so the 3D scene, the videos and the
   observers are never torn down.

   The hero is the exception. It is built as one span per word for the stagger,
   so it is rebuilt from `head` below instead of swapped word by word, which
   would scramble the order in French. */
var FR = {

  head: {
    pre: 'Rendre Fontainebleau plus',
    parts: [
      { t:'captivant pour les ',           k:'enfants',                c:'a' },
      { t:', plus régulier pour les ',     k:'écoles',                 c:'b' },
      { t:', et plus compréhensible pour les ', k:'familles internationales', c:'c' }
    ]
  },

  t: {
  /* masthead and navigation */
  'Château de Fontainebleau · Marketing Activities Plan 2027 · INSEAD Group 11':
    'Château de Fontainebleau · Plan d’activités marketing 2027 · INSEAD Groupe 11',
  'Project website': 'Site du projet',
  'Jump to': 'Aller à',
  'Barriers': 'Les freins',
  'The trail': 'Le parcours',
  'The three': 'Les trois',
  'Numbers': 'Les chiffres',
  'Close': 'Fermer',
  'Image, full size': 'Image en taille réelle',

  /* the three barriers */
  'Three audiences. Three barriers. Three responses.':
    'Trois publics. Trois freins. Trois réponses.',
  'The insight': 'Le constat',
  '“The rooms are magnificent. But to a nine-year-old, they can become a corridor of labels.”':
    '« Les salles sont magnifiques. Mais pour un enfant de neuf ans, elles peuvent devenir un couloir d’étiquettes. »',
  'Children': 'Les enfants',
  '“I can see it, but what do I do?”': '« Je vois tout ça, mais qu’est-ce que je fais ? »',
  'Make the visit active.': 'Rendre la visite active.',
  'Schools': 'Les écoles',
  '“We visited once.”': '« Nous y sommes allés une fois. »',
  'Make the relationship recurring.': 'Rendre la relation récurrente.',
  'International families': 'Les familles internationales',
  '“I can read it, but I don’t understand the context.”':
    '« Je peux le lire, mais je n’en comprends pas le contexte. »',
  'Make the history understandable.': 'Rendre l’histoire compréhensible.',

  /* the museum benchmark */
  'Inspiration from other museums': 'Inspirations d’autres musées',
  'What 4 UK museums give children at the door':
    'Ce que 4 musées britanniques donnent aux enfants dès l’entrée',
  'Free quest booklets and Explorer Backpacks, every day':
    'Livrets-jeux et sacs d’explorateur gratuits, tous les jours',
  'A children’s activity passport, stamped visit after visit':
    'Un passeport d’activités pour enfants, tamponné visite après visite',
  'A free stamper trail, not a paid add-on':
    'Un parcours de tampons gratuit, et non une option payante',
  'Costumed interpreters daily, in the standard ticket':
    'Des comédiens en costume chaque jour, inclus dans le billet',
  'They give children': 'Ils donnent aux enfants',
  'immediate agency': 'un rôle actif immédiat',
  ': a trail, pack, passport or challenge. Fontainebleau can borrow the idea, using its own heritage.':
    ' : un parcours, un sac, un passeport ou un défi. Fontainebleau peut reprendre l’idée, avec son propre patrimoine.',

  /* the gallery sequence */
  'The rooms are already the content.': 'Les salles sont déjà le contenu.',
  'The Galerie François I on an ordinary afternoon: long labels, uneven translations, and no reason to stop walking.':
    'La galerie François Ier un après-midi ordinaire : de longues étiquettes, des traductions inégales, et aucune raison de s’arrêter.',
  'Sixty metres of salamander, and nobody is ever told.':
    'Soixante mètres de salamandres, et personne ne le dit jamais.',
  'François I put his badge on every wall of this gallery in 1528 and gave it a motto. It is the mascot the Château already owns.':
    'François Ier a apposé son emblème sur chaque mur de cette galerie en 1528 et lui a donné une devise. C’est la mascotte que le Château possède déjà.',

  /* the trail and the model */
  'The Royal Stamp Trail': 'Le Parcours Royal des Tampons',
  'Thirteen rooms, thirteen stamps, one secret word':
    'Treize salles, treize tampons, un mot secret',
  'Walk the trail': 'Parcourir le trajet',
  'Reset view': 'Vue initiale',
  'Drag to turn it · tap a number': 'Faites glisser pour tourner · touchez un numéro',
  'The estate model needs WebGL, which this browser has turned off.\n      The thirteen stations are listed below.':
    'La maquette du domaine nécessite WebGL, désactivé dans ce navigateur.\n      Les treize stations sont listées ci-dessous.',
  'Previous station': 'Station précédente',
  'Next station': 'Station suivante',

  /* the courtyard sequence */
  'An empty courtyard is a marketing problem, not a historical one.':
    'Une cour vide est un problème de marketing, pas d’histoire.',
  '20 April 1814. Napoleon says goodbye to his army, on these steps.':
    '20 avril 1814. Napoléon fait ses adieux à son armée, sur ces marches.',
  'Thirteen stations put a child back in the room.':
    'Treize stations remettent l’enfant dans la salle.',

  /* the recommendations */
  'Three recommendations': 'Trois recommandations',
  'One plan, three audiences, nothing permanent':
    'Un plan, trois publics, rien de permanent',
  'Problem': 'Le problème',
  'Recommendation': 'La recommandation',
  'Pilot cost': 'Coût du pilote',
  'Illustrative base case': 'Scénario central indicatif',

  'Children · the experience': 'Les enfants · l’expérience',
  'Make the visit active and memorable': 'Rendre la visite active et mémorable',
  'Children can see the heritage, but the visit asks them to watch, not take part.':
    'Les enfants voient le patrimoine, mais la visite leur demande de regarder, pas de participer.',
  'A self-led Royal Stamp Trail: look, solve, stamp, and take the finished passport home.':
    'Un Parcours Royal des Tampons en autonomie : observer, résoudre, tamponner, et rapporter son passeport terminé.',
  'Portable stations: nothing fixed to historic walls.':
    'Des stations mobiles : rien de fixé aux murs historiques.',
  'Flamme’s Royal Stamp Trail': 'Le Parcours Royal des Tampons de Flamme',
  'The booklet · 24 pages · PDF, 8.6 MB': 'Le livret · 24 pages · PDF, 8,6 Mo',
  'Look': 'Observer',
  'Find the clue hidden in the real room.': 'Trouve l’indice caché dans la vraie salle.',
  'Solve': 'Résoudre',
  'Crack Flamme’s riddle about it.': 'Résous l’énigme de Flamme.',
  'Stamp': 'Tamponner',
  'Earn a royal stamp in your passport.': 'Gagne un tampon royal dans ton passeport.',
  'Spell': 'Épeler',
  'Collect all 13 letters of the secret word.': 'Rassemble les 13 lettres du mot secret.',
  'Win': 'Gagner',
  'Solve the final secret, win a certificate!':
    'Perce le secret final et gagne ton diplôme !',
  'A station, as a visitor meets it': 'Une station, telle que le visiteur la découvre',
  'A removable stand and a self-inking press. Nothing fixed to a historic surface.':
    'Un pupitre amovible et une presse auto-encreuse. Rien de fixé à une surface historique.',
  'Fourteen stamps': 'Quatorze tampons',
  'One per station, plus the bonus. Self-inking, so no staff member has to hold a pad.':
    'Un par station, plus le bonus. Auto-encreurs : aucun agent n’a à tenir un tampon encreur.',
  'The emblem, applied': 'L’emblème, décliné',
  'Retail and a photo spot. Not counted above — it needs its own case.':
    'Boutique et coin photo. Non comptés ci-dessus : cela demande son propre dossier.',

  'Schools · the acquisition engine': 'Les écoles · le moteur d’acquisition',
  'Turn one-off visits into recurring partnerships':
    'Transformer la visite unique en partenariat durable',
  'A visit creates value once. A relationship brings a new class every year.':
    'Une visite crée de la valeur une fois. Une relation amène une nouvelle classe chaque année.',
  'Make the curriculum-fit visit easy to book, with a reason to return next year.':
    'Rendre la visite alignée sur le programme facile à réserver, avec une raison de revenir l’an prochain.',
  'Success = rebookings + family referrals.':
    'La réussite = réservations renouvelées + familles recommandées.',
  'Target': 'Cibler',
  'CM1 first: François I is on the syllabus.':
    'Le CM1 d’abord : François Ier est au programme.',
  'Convert': 'Convertir',
  'Teacher materials and a clear offer.':
    'Des supports pour l’enseignant et une offre claire.',
  'Visit': 'Visiter',
  'Self-led or guided, clear objectives.':
    'En autonomie ou guidée, avec des objectifs clairs.',
  'Rebook': 'Renouveler',
  'Same grade-level visit, next year.': 'La même visite de niveau, l’année suivante.',
  'Refer': 'Recommander',
  'A family challenge brings parents back.':
    'Un défi en famille fait revenir les parents.',
  'Collections': 'Collections',
  'Schools & Teachers': 'Scolaires et enseignants',
  'Families': 'Familles',
  'Tickets': 'Billetterie',
  'CM1 · Le temps des rois': 'CM1 · Le temps des rois',
  'François I and the Renaissance, on site':
    'François Ier et la Renaissance, sur place',
  'Trail or guided visit · objectives': 'Parcours ou visite guidée · objectifs',
  'Request a booking': 'Demander une réservation',
  '↓ Teacher guide': '↓ Guide de l’enseignant',
  '↓ Pupil booklet + map': '↓ Livret élève + plan',
  'Prices · access · transport': 'Tarifs · accès · transport',
  'FAQ · contact': 'FAQ · contact',

  'International families · access': 'Les familles internationales · l’accès',
  'Make history understandable, not just translated':
    'Rendre l’histoire compréhensible, pas seulement traduite',
  'Translation is not understanding. A child can read “François I” and not know why he matters.':
    'Traduire n’est pas comprendre. Un enfant peut lire « François Ier » sans savoir pourquoi il compte.',
  'One child-friendly story of royal history, across languages and ages.':
    'Un récit de l’histoire royale accessible aux enfants, dans plusieurs langues et à tout âge.',
  'Don’t just translate the labels: give the context.':
    'Ne traduisez pas seulement les étiquettes : donnez le contexte.',
  'Context': 'Contexte',
  'Who each figure is, and why.': 'Qui est chaque personnage, et pourquoi.',
  'Story': 'Récit',
  'Short stories tied to something visible.':
    'De courtes histoires rattachées à un élément visible.',
  'Language': 'Langue',
  'French + English first.': 'Français et anglais d’abord.',
  'Access': 'Accessibilité',
  'Audio, captions, symbols, large type.':
    'Audio, sous-titres, pictogrammes, gros caractères.',
  'English family page linked to tickets.':
    'Une page familles en anglais reliée à la billetterie.',
  'Eight hundred years, in one corridor': 'Huit cents ans, dans un seul couloir',
  'A face, a date and one line per reign — the whole story before you walk into it.':
    'Un visage, une date et une ligne par règne — toute l’histoire avant même d’entrer.',

  /* the numbers */
  'Low risk by design': 'Un risque faible par construction',
  'Total Year-1 pilot budget: ≈ 1.8% of the Château’s €700k marketing budget':
    'Budget total du pilote en année 1 : ≈ 1,8 % du budget marketing de 700 k€ du Château',
  'Pilot, measure, then scale': 'Tester, mesurer, puis déployer',
  'Gross receipts': 'Recettes brutes',
  'Low': 'Bas',
  'Base case': 'Central',
  'High': 'Haut',
  '01  Children · stamp trail': '01  Enfants · parcours de tampons',
  '02  Schools · partnerships': '02  Écoles · partenariats',
  '03  International families': '03  Familles internationales',
  'Total': 'Total',
  'Base-case gross receipts': 'Recettes brutes, scénario central',
  'vs €12,306 total pilot spend': 'contre 12 306 € de dépenses totales du pilote',

  /* the pilot */
  'The 90-day pilot': 'Le pilote de 90 jours',
  'What we ask the Château to approve': 'Ce que nous demandons au Château d’approuver',
  'Days 1–30': 'Jours 1–30',
  'Build & validate': 'Construire et valider',
  'Days 31–60': 'Jours 31–60',
  'Test': 'Tester',
  'Days 61–90': 'Jours 61–90',
  'Measure': 'Mesurer',
  'Day 90 decision': 'Décision au 90e jour',
  'Stop, adapt or scale': 'Arrêter, adapter ou déployer',
  'Three guardrails · protect…': 'Trois garde-fous · protéger…',
  'Conservation': 'Conservation',
  'Nothing permanent on historic walls.': 'Rien de permanent sur les murs historiques.',
  'Yield': 'Recettes',
  'No discounts without proven value.': 'Pas de remise sans valeur démontrée.',
  'Measurement': 'Mesure',
  'Never count a ticket twice.': 'Ne jamais compter un billet deux fois.',

  /* the close */
  'Don’t change the Château. Change the way a child moves through it.':
    'Ne changez pas le Château. Changez la façon dont un enfant le traverse.',
  'Sources': 'Sources',
  'Ticket data: the Château’s own file, January to September 2026. Marketing budget: Preserving the Past while Sustaining the Future (INSEAD, 2024). UK comparisons read from each operator’s public pages, October 2026. Financial figures are illustrative scenarios, not forecasts.':
    'Données de billetterie : fichier du Château, janvier à septembre 2026. Budget marketing : Preserving the Past while Sustaining the Future (INSEAD, 2024). Comparaisons britanniques relevées sur les pages publiques de chaque opérateur, octobre 2026. Les chiffres financiers sont des scénarios indicatifs, et non des prévisions.',
  'The estate model is an original procedural reconstruction, schematic and not a survey.\n      Film sequences were generated by us for this project.':
    'La maquette du domaine est une reconstitution procédurale originale, schématique et non relevée.\n      Les séquences filmées ont été produites par nos soins pour ce projet.',
  'INSEAD Master in Management, class of 2028 · Section E01, Group 11.\n      A student marketing proposal prepared for a course. Not affiliated with, commissioned by\n      or endorsed by the Château de Fontainebleau.':
    'INSEAD Master in Management, promotion 2028 · Section E01, Groupe 11.\n      Proposition marketing étudiante réalisée dans le cadre d’un cours. Sans affiliation, commande\n      ni approbation du Château de Fontainebleau.',

  /* figures: French uses a space as the thousands separator, with the sign after */
  '€5,578': '5 578 €',  '€6,193': '6 193 €',
  '€3,853': '3 853 €',  '€6,800': '6 800 €',
  '€2,875': '2 875 €',  '€4,403': '4 403 €',
  '€3,473': '3 473 €',  '€8,913': '8 913 €',
  '€3,400': '3 400 €',  '€10,200': '10 200 €',
  '€1,751': '1 751 €',  '€8,789': '8 789 €',
  '€8,624': '8 624 €',  '€17,396': '17 396 €',
  '€27,902': '27 902 €','€12,306': '12 306 €',
  '€12.3K': '12,3 k€',

  /* alt text and labels */
  'A stamp station in the Galerie François I: a numbered sign, the open passport and a stamp press on a wooden stand':
    'Une station de tampons dans la galerie François Ier : un panneau numéroté, le passeport ouvert et une presse à tampon sur un pupitre en bois',
  'Fourteen stamp designs, one per station plus the secret stamp':
    'Quatorze visuels de tampons, un par station plus le tampon secret',
  'Flamme merchandise in the Château shop: plush, cap, tote, keyrings, snow globe, postcards, and a throne photo spot':
    'Produits Flamme dans la boutique du Château : peluche, casquette, tote bag, porte-clés, boule à neige, cartes postales et un coin photo avec trône',
  'A gallery corridor lined with panels: each French king with a portrait, dates and one line, Flamme pointing the way':
    'Un couloir de galerie bordé de panneaux : chaque roi de France avec un portrait, des dates et une ligne, Flamme montrant le chemin',
  'Louis IX in a fleur-de-lis robe and crown, holding a sceptre':
    'Louis IX en manteau fleurdelisé et couronne, tenant un sceptre',
  'François I in a plumed cap and ermine robe, gesturing in welcome':
    'François Ier en toque à plume et manteau d’hermine, faisant un geste d’accueil',
  'Napoléon I in a bicorne hat and uniform, pointing ahead':
    'Napoléon Ier en bicorne et uniforme, pointant du doigt devant lui'
  }
};

/* station labels and the "View X at full size" labels are built from strings that
   are already covered above, so they are generated rather than listed twice */
(function(){
  var S = (typeof STATIONS !== 'undefined') ? STATIONS : [];
  for (var i = 0; i < S.length; i++){
    var n = S[i].bonus ? '★' : String(S[i].n);
    FR.t['Station ' + n + ': ' + S[i].t] = 'Station ' + n + ' : ' + S[i].t;
  }
  ['A station, as a visitor meets it','Fourteen stamps','The emblem, applied',
   'Eight hundred years, in one corridor'].forEach(function(cap){
    FR.t['View ' + cap + ' at full size'] = 'Voir « ' + (FR.t[cap] || cap) + ' » en grand';
  });
})();
