/* APP.JS – DATEN UND FUNKTIONEN IN EINER DATEI
   Oben: Bilder, Texte, Crews und Links bearbeiten.
   Mitte: gemeinsame Navigation mit Quiz-Link und Fusszeile.
   Unten: Funktionen für Karten, Suche, Filter und Spoiler.
   Bildpfade sind relativ zum HTML: bilder/charaktere/ruffy.jpg
   Leeres bild-Feld = Platzhalter. Zwischen Objekten Kommas beibehalten.
*/

// 1. STARTBILD – bild: "bilder/startseite/crew.jpg"
const STARTBILD = {
  bild: "", // HIER z. B. "bilder/startseite/crew.jpg" eintragen.
  alt: "Die Strohhut-Crew auf einem gemeinsamen Abenteuer",
  position: "center" // Ausschnitt: "center", "top" oder z. B. "50% 30%".
};

// 2. ANIME & MANGA – Titel, Nummer, Datum, Bild und vollständigen Anbieter-Link hier ändern.
const RELEASES = [
  {
    typ: "ANIME", titel: "Neueste Episode", nummer: "", datum: "",
    beschreibung: "Folgentitel und Veröffentlichungsdatum hier ergänzen.",
    url: "", // HIER den vollständigen https://-Link zum legalen Anbieter eintragen.
    linktext: "Episode beim Anbieter öffnen ↗",
    bild: "", // z. B. "bilder/startseite/anime.jpg"
    alt: "Vorschaubild der Anime-Episode",
    spoiler: false // Bei spoilerhaltigem Titel ODER Vorschaubild auf true setzen.
  },
  {
    typ: "MANGA", titel: "Neuestes Kapitel", nummer: "", datum: "",
    beschreibung: "Kapitelnummer und Veröffentlichungsdatum hier ergänzen.",
    url: "", // HIER den vollständigen https://-Link zum offiziellen Manga-Anbieter eintragen.
    linktext: "Manga beim Anbieter lesen ↗",
    bild: "", // z. B. "bilder/startseite/manga.jpg"
    alt: "Vorschaubild des Manga-Kapitels",
    spoiler: false
  }
];

// 3. CREWS – id muss zum Feld crew bei den Charakteren passen.
const CREWS = [
  {
    "id": "strohhut",
    "name": "Strohhut-Piraten",
    "kapitaen": "Ruffy",
    "beschreibung": "Eine Crew mit ganz unterschiedlichen Träumen.",
    "bild": "",
    "alt": "Motiv der Strohhut-Piraten",
    "spoiler": false
  },
  {
    "id": "rothaar",
    "name": "Rothaar-Piraten",
    "kapitaen": "Shanks",
    "beschreibung": "Die Piratenbande rund um Shanks.",
    "bild": "",
    "alt": "Motiv der Rothaar-Piraten",
    "spoiler": false
  },
  {
    "id": "heart",
    "name": "Heart-Piraten",
    "kapitaen": "Trafalgar Law",
    "beschreibung": "Die Crew von Trafalgar Law.",
    "bild": "",
    "alt": "Motiv der Heart-Piraten",
    "spoiler": false
  },
  {
    "id": "kid",
    "name": "Kid-Piraten",
    "kapitaen": "Eustass Kid",
    "beschreibung": "Die Piratenbande rund um Kid.",
    "bild": "",
    "alt": "Motiv der Kid-Piraten",
    "spoiler": true
  },
  {
    "id": "whitebeard",
    "name": "Whitebeard-Piraten",
    "kapitaen": "Whitebeard",
    "beschreibung": "Eine grosse Piratenbande mit Whitebeard als Kapitän.",
    "bild": "",
    "alt": "Motiv der Whitebeard-Piraten",
    "spoiler": false
  },
  {
    "id": "blackbeard",
    "name": "Blackbeard-Piraten",
    "kapitaen": "Marshall D. Teach",
    "beschreibung": "Die Piratenbande rund um Blackbeard.",
    "bild": "",
    "alt": "Motiv der Blackbeard-Piraten",
    "spoiler": true
  }
];

// 4. CHARAKTERE – Neues Objekt kopieren, eigene id vergeben, Crew-ID und Bildpfad anpassen.
const CHARAKTERE = [
  {
    "id": "ruffy",
    "name": "Monkey D. Ruffy",
    "crew": "strohhut",
    "rolle": "Kapitän",
    "beschreibung": "Ruffy träumt davon, König der Piraten zu werden.",
    "bild": "",
    "alt": "Porträt von Monkey D. Ruffy",
    "spoiler": false,
    "quelle": ""
  },
  {
    "id": "zorro",
    "name": "Lorenor Zorro",
    "crew": "strohhut",
    "rolle": "Schwertkämpfer",
    "beschreibung": "Zorro möchte der beste Schwertkämpfer der Welt werden.",
    "bild": "",
    "alt": "Porträt von Lorenor Zorro",
    "spoiler": false,
    "quelle": ""
  },
  {
    "id": "nami",
    "name": "Nami",
    "crew": "strohhut",
    "rolle": "Navigatorin",
    "beschreibung": "Nami träumt von einer Karte der ganzen Welt.",
    "bild": "",
    "alt": "Porträt von Nami",
    "spoiler": false,
    "quelle": ""
  },
  {
    "id": "lysop",
    "name": "Lysop",
    "crew": "strohhut",
    "rolle": "Schütze",
    "beschreibung": "Lysop möchte ein mutiger Krieger der Meere werden.",
    "bild": "",
    "alt": "Porträt von Lysop",
    "spoiler": false,
    "quelle": ""
  },
  {
    "id": "sanji",
    "name": "Sanji",
    "crew": "strohhut",
    "rolle": "Koch",
    "beschreibung": "Sanji sucht den legendären All Blue.",
    "bild": "",
    "alt": "Porträt von Sanji",
    "spoiler": false,
    "quelle": ""
  },
  {
    "id": "chopper",
    "name": "Tony Tony Chopper",
    "crew": "strohhut",
    "rolle": "Arzt",
    "beschreibung": "Chopper kümmert sich um die Gesundheit seiner Freunde.",
    "bild": "",
    "alt": "Porträt von Tony Tony Chopper",
    "spoiler": false,
    "quelle": ""
  },
  {
    "id": "robin",
    "name": "Nico Robin",
    "crew": "strohhut",
    "rolle": "Archäologin",
    "beschreibung": "Robin interessiert sich für die verborgene Geschichte der Welt.",
    "bild": "",
    "alt": "Porträt von Nico Robin",
    "spoiler": false,
    "quelle": ""
  },
  {
    "id": "franky",
    "name": "Franky",
    "crew": "strohhut",
    "rolle": "Schiffszimmermann",
    "beschreibung": "Franky ist ein Schiffsbauer und Cyborg.",
    "bild": "",
    "alt": "Porträt von Franky",
    "spoiler": true,
    "quelle": ""
  },
  {
    "id": "brook",
    "name": "Brook",
    "crew": "strohhut",
    "rolle": "Musiker",
    "beschreibung": "Brook ist Musiker und Schwertkämpfer.",
    "bild": "",
    "alt": "Porträt von Brook",
    "spoiler": true,
    "quelle": ""
  },
  {
    "id": "jinbei",
    "name": "Jinbei",
    "crew": "strohhut",
    "rolle": "Steuermann",
    "beschreibung": "Jinbei ist ein Fischmensch und erfahrener Kämpfer.",
    "bild": "",
    "alt": "Porträt von Jinbei",
    "spoiler": true,
    "quelle": ""
  },
  {
    "id": "shanks",
    "name": "Shanks",
    "crew": "rothaar",
    "rolle": "Kapitän",
    "beschreibung": "Shanks ist ein wichtiges Vorbild für Ruffy.",
    "bild": "",
    "alt": "Porträt von Shanks",
    "spoiler": false,
    "quelle": ""
  },
  {
    "id": "benn-beckman",
    "name": "Benn Beckman",
    "crew": "rothaar",
    "rolle": "Crewmitglied",
    "beschreibung": "Benn Beckman gehört zu Shanks’ engsten Vertrauten.",
    "bild": "",
    "alt": "Porträt von Benn Beckman",
    "spoiler": false,
    "quelle": ""
  },
  {
    "id": "law",
    "name": "Trafalgar Law",
    "crew": "heart",
    "rolle": "Kapitän",
    "beschreibung": "Law ist ein Arzt und Kapitän der Heart-Piraten.",
    "bild": "",
    "alt": "Porträt von Trafalgar Law",
    "spoiler": true,
    "quelle": ""
  },
  {
    "id": "bepo",
    "name": "Bepo",
    "crew": "heart",
    "rolle": "Navigator",
    "beschreibung": "Bepo ist ein Mink und Teil der Heart-Piraten.",
    "bild": "",
    "alt": "Porträt von Bepo",
    "spoiler": true,
    "quelle": ""
  },
  {
    "id": "kid",
    "name": "Eustass Kid",
    "crew": "kid",
    "rolle": "Kapitän",
    "beschreibung": "Kid ist Kapitän der Kid-Piraten.",
    "bild": "",
    "alt": "Porträt von Eustass Kid",
    "spoiler": true,
    "quelle": ""
  },
  {
    "id": "killer",
    "name": "Killer",
    "crew": "kid",
    "rolle": "Kämpfer",
    "beschreibung": "Killer kämpft an der Seite von Eustass Kid.",
    "bild": "",
    "alt": "Porträt von Killer",
    "spoiler": true,
    "quelle": ""
  },
  {
    "id": "whitebeard",
    "name": "Whitebeard",
    "crew": "whitebeard",
    "rolle": "Kapitän",
    "beschreibung": "Edward Newgate ist unter dem Namen Whitebeard bekannt.",
    "bild": "",
    "alt": "Porträt von Whitebeard",
    "spoiler": true,
    "quelle": ""
  },
  {
    "id": "marco",
    "name": "Marco",
    "crew": "whitebeard",
    "rolle": "Kommandant",
    "beschreibung": "Marco gehört zu den bekanntesten Mitgliedern der Whitebeard-Piraten.",
    "bild": "",
    "alt": "Porträt von Marco",
    "spoiler": true,
    "quelle": ""
  },
  {
    "id": "ace",
    "name": "Portgas D. Ace",
    "crew": "whitebeard",
    "rolle": "Kommandant",
    "beschreibung": "Ace ist als Feuerfaust bekannt.",
    "bild": "",
    "alt": "Porträt von Portgas D. Ace",
    "spoiler": true,
    "quelle": ""
  },
  {
    "id": "blackbeard",
    "name": "Marshall D. Teach",
    "crew": "blackbeard",
    "rolle": "Kapitän",
    "beschreibung": "Teach ist unter dem Namen Blackbeard bekannt.",
    "bild": "",
    "alt": "Porträt von Marshall D. Teach",
    "spoiler": true,
    "quelle": ""
  }
];

// 5. TEUFELSFRÜCHTE – zusätzliche Objekte vor ]; einsetzen.
const FRUECHTE = [
  {
    "id": "gumgum",
    "name": "Gum-Gum-Frucht",
    "rolle": "Gummiartige Kräfte",
    "beschreibung": "Ruffys Körper erhält gummiartige Eigenschaften. Der Eintrag beschränkt sich auf die frühe Darstellung.",
    "bild": "",
    "alt": "Gum-Gum-Frucht",
    "spoiler": false,
    "quelle": ""
  },
  {
    "id": "feuer",
    "name": "Feuer-Frucht",
    "rolle": "Feuerkräfte",
    "beschreibung": "Ermöglicht es, Feuer zu erzeugen und zu kontrollieren.",
    "bild": "",
    "alt": "Feuer-Frucht",
    "spoiler": false,
    "quelle": ""
  },
  {
    "id": "trenn",
    "name": "Trenn-Trenn-Frucht",
    "rolle": "Geteilter Körper",
    "beschreibung": "Ermöglicht es, den Körper in getrennte Teile aufzuspalten.",
    "bild": "",
    "alt": "Trenn-Trenn-Frucht",
    "spoiler": false,
    "quelle": ""
  }
];

// 6. ORTE – spoiler: true blendet den ganzen Eintrag standardmässig aus.
const ORTE = [
  {
    "id": "eastblue",
    "name": "East Blue",
    "rolle": "Meer",
    "beschreibung": "Hier beginnt Ruffys Reise.",
    "bild": "",
    "alt": "Motiv aus dem East Blue",
    "spoiler": false,
    "quelle": ""
  },
  {
    "id": "waterseven",
    "name": "Water Seven",
    "rolle": "Stadt",
    "beschreibung": "Eine von Wasserwegen geprägte Stadt, die für ihren Schiffbau bekannt ist.",
    "bild": "",
    "alt": "Stadtansicht von Water Seven",
    "spoiler": true,
    "quelle": ""
  },
  {
    "id": "alabasta",
    "name": "Alabasta",
    "rolle": "Königreich",
    "beschreibung": "Ein Königreich mit weiten Wüstenlandschaften.",
    "bild": "",
    "alt": "Landschaft von Alabasta",
    "spoiler": true,
    "quelle": ""
  }
];

// 7. GEMEINSAMER SEITENRAHMEN – Änderungen gelten auf allen drei Seiten.
// Dein Quiz-Link steht nur noch hier.
document.querySelector('#site-header').innerHTML = `
  <a class="brand" href="index.html"><span class="brand-icon">✦</span> GRAND LINE
    <small>THE FAN ARCHIVE</small>
  </a>
  <nav aria-label="Hauptnavigation">
    <a href="index.html">Start</a>
    <a href="charaktere.html">Charaktere & Crews</a>
    <a href="welt.html">Welt & Früchte</a>
  </nav>
  <label class="spoiler"><input id="spoilers" type="checkbox"> Spoiler erlauben</label>
  <a href="https://onepiecedle.net" class="quiz-link">One Piece Quiz</a>
`;
document.querySelector('#site-footer').innerHTML = `
  <a class="brand" href="index.html">✦ GRAND LINE ARCHIVE</a>
  <p>Inoffizielles One-Piece-Fanprojekt · Lernprototyp</p>
  <p>One Piece: Eiichirō Oda / Shueisha. Keine offizielle Verbindung.</p>
`;

// 8. HILFSFUNKTION: Ein HTML-Element erzeugen und Text sicher einsetzen.
// textContent verhindert, dass eingefügter Text als HTML ausgeführt wird.
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

// Nur vollständige http(s)-Links zulassen; leere/ungültige Links bleiben inaktiv.
function externalLink(url, text, className = 'source-link') {
  if (typeof url !== 'string' || !url.trim()) return null;
  try {
    const parsed = new URL(url);
    if (!['https:', 'http:'].includes(parsed.protocol)) return null;
    const link = element('a', className, text);
    link.href = parsed.href;
    link.target = '_blank'; // Öffnet den Anbieter in einem neuen Tab.
    link.rel = 'noopener noreferrer';
    return link;
  } catch { return null; }
}

// 9. BILDER: Fehlende oder falsche Pfade zeigen einen Platzhalter statt kaputtem Bild.
function media(item, folder, fallbackName) {
  const wrap = element('div', 'media');
  function placeholder() {
    wrap.replaceChildren();
    const box = element('div', 'image-fallback');
    box.append(element('strong', '', item.name || fallbackName || 'Dein Bild'));
    box.append(element('small', '', 'HIER DEIN BILD EINFÜGEN'));
    box.append(element('code', '', item.bild || `bilder/${folder}/dateiname.jpg`));
    wrap.append(box);
  }
  if (!item.bild) { placeholder(); return wrap; }
  const image = element('img', 'media-image');
  image.alt = item.alt || item.name || fallbackName || '';
  image.loading = 'lazy';
  image.addEventListener('error', placeholder, {once: true});
  image.src = item.bild;
  wrap.append(image);
  return wrap;
}

// 10. SPOILER-SCHALTER: beeinflusst Karten, Crews und Veröffentlichungen.
// Daten sind trotzdem in daten.js lesbar. Dies ist eine Anzeigehilfe, kein Zugriffsschutz.
const spoilerInput = document.querySelector('#spoilers');
try { spoilerInput.checked = localStorage.getItem('op-spoilers') === 'true'; } catch {}
function visible(item) { return !item.spoiler || spoilerInput.checked; }
function crewFor(id) { return CREWS.find(crew => crew.id === id); }
function characterVisible(item) {
  const crew = crewFor(item.crew);
  return visible(item) && (!crew || visible(crew));
}

// 11. NAVIGATION: den Link der aktuellen Seite unterstreichen.
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(link => {
  if (link.getAttribute('href') === currentPage) link.setAttribute('aria-current', 'page');
});

// 12. DETAILFENSTER: Inhalt beim Klicken auf eine Karte einsetzen.
const dialog = document.querySelector('#details');
function showDetails(item, folder) {
  const target = document.querySelector('#detail-content');
  target.replaceChildren();
  const crew = crewFor(item.crew);
  target.append(element('p', 'eyebrow', crew ? crew.name : item.rolle));
  const title = element('h2', '', item.name);
  title.id = 'detail-title';
  target.append(title);
  const image = media(item, folder); image.classList.add('detail-media'); target.append(image);
  target.append(element('p', 'detail-copy', item.beschreibung));
  // OPTIONALER QUELLENLINK: in daten.js bei quelle eintragen.
  const source = externalLink(item.quelle, 'Zur Quelle ↗');
  if (source) target.append(source);
  dialog.showModal(); // Escape schliesst den nativen Dialog automatisch.
}
document.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});

// 13. GEMEINSAME KARTEN: für Charaktere, Teufelsfrüchte und Orte.
function renderCards(target, items, folder) {
  target.replaceChildren();
  items.forEach(item => {
    const card = element('article', 'card');
    const crew = crewFor(item.crew);
    card.append(media(item, folder));
    card.append(element('p', 'meta', crew ? crew.name : item.rolle));
    card.append(element('h3', '', item.name));
    card.append(element('p', '', item.crew ? item.rolle : item.beschreibung));
    const button = element('button', 'text-button', 'Details entdecken ↗');
    button.type = 'button';
    button.setAttribute('aria-label', `Details zu ${item.name}`);
    button.addEventListener('click', () => showDetails(item, folder));
    card.append(button); target.append(card);
  });
}

// 14. CHARAKTER-SUCHE UND CREWFILTER
const characterGrid = document.querySelector('#characters');
function filterCharacters() {
  if (!characterGrid) return;
  const query = document.querySelector('#search').value.trim().toLocaleLowerCase('de');
  const chosenCrew = document.querySelector('#crew').value;
  const results = CHARAKTERE.filter(item => characterVisible(item)
    && (chosenCrew === 'all' || item.crew === chosenCrew)
    && item.name.toLocaleLowerCase('de').includes(query));
  renderCards(characterGrid, results, 'charaktere');
  document.querySelector('#empty').hidden = results.length > 0;
  document.querySelector('#result-count').textContent = `${results.length} Charaktere gefunden`;
}
function renderCrews() {
  if (!characterGrid) return;
  const select = document.querySelector('#crew');
  const previous = select.value;
  select.replaceChildren();
  const all = element('option', '', 'Alle Crews'); all.value = 'all'; select.append(all);
  const grid = document.querySelector('#crews'); grid.replaceChildren();
  CREWS.filter(visible).forEach(crew => {
    const option = element('option', '', crew.name); option.value = crew.id; select.append(option);
    const card = element('article', 'crew-card');
    card.append(media(crew, 'crews'));
    card.append(element('h3', '', crew.name));
    card.append(element('p', '', `Kapitän: ${crew.kapitaen}`));
    card.append(element('p', '', crew.beschreibung));
    const button = element('button', 'text-button', 'Crewmitglieder anzeigen ↓');
    button.type = 'button';
    button.setAttribute('aria-label', `Mitglieder der ${crew.name} anzeigen`);
    button.addEventListener('click', () => {
      select.value = crew.id; document.querySelector('#search').value = '';
      filterCharacters();
      document.querySelector('#search').focus();
      characterGrid.scrollIntoView({block:'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
    });
    card.append(button); grid.append(card);
  });
  select.value = CREWS.some(c => c.id === previous && visible(c)) ? previous : 'all';
}
if (characterGrid) {
  document.querySelector('#search').addEventListener('input', filterCharacters);
  document.querySelector('#crew').addEventListener('change', filterCharacters);
  const hint = element('p', 'spoiler-hint', 'Einige spätere Figuren und Crews sind als Spoiler markiert. Aktiviere oben „Spoiler erlauben“, um alle Beispiele zu sehen. Der Filter deckt nur die von dir entsprechend markierten Daten ab.');
  document.querySelector('#result-count').before(hint);
}

// 15. STARTSEITENBILD: nur ersetzen, wenn ein eigener Pfad eingetragen ist.
const hero = document.querySelector('#hero-visual');
if (hero && STARTBILD.bild) {
  hero.replaceChildren();
  const imageBox = media(STARTBILD, 'startseite', 'Dein Startbild');
  const image = imageBox.querySelector('img');
  if (image) { image.style.objectPosition = STARTBILD.position; image.loading = 'eager'; }
  hero.append(imageBox);
}

// 16. MANGA UND EPISODEN: konfigurierte Links rendern, keine Aktualisierung per API.
function renderReleases() {
  const target = document.querySelector('#release-cards'); if (!target) return;
  target.replaceChildren();
  RELEASES.forEach(release => {
    const card = element('article');
    card.append(element('span', 'tag', release.typ));
    if (!visible(release)) {
      card.append(element('h3', '', 'Spoiler-Inhalt ausgeblendet'));
      card.append(element('p', '', 'Aktiviere „Spoiler erlauben“, um diesen Eintrag zu sehen.'));
      target.append(card); return;
    }
    card.append(element('h3', '', release.titel + (release.nummer ? ` ${release.nummer}` : '')));
    if (release.bild) card.append(media(release, 'startseite', release.typ));
    card.append(element('p', '', release.beschreibung));
    if (release.datum) card.append(element('small', '', `Veröffentlicht: ${release.datum}`));
    const link = externalLink(release.url, release.linktext, 'release-link');
    card.append(link || element('span', 'unconfigured', 'Link noch nicht eingetragen – in daten.js ergänzen.'));
    target.append(card);
  });
}

// 17. ALLES ANZEIGEN UND NACH SPOILER-ÄNDERUNGEN NEU FILTERN.
function refresh() {
  renderCrews(); filterCharacters(); renderReleases();
  const fruits = document.querySelector('#fruits');
  if (fruits) renderCards(fruits, FRUECHTE.filter(visible), 'fruechte');
  const places = document.querySelector('#places');
  if (places) {
    renderCards(places, ORTE.filter(visible), 'orte');
    if (!places.children.length) places.append(element('p', '', 'Aktiviere den Spoiler-Schalter für weitere Orte.'));
  }
}
spoilerInput.addEventListener('change', () => {
  try { localStorage.setItem('op-spoilers', String(spoilerInput.checked)); } catch {}
  if (dialog.open) dialog.close();
  refresh();
});
refresh();
