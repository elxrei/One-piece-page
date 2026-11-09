/* =====================================================================
   DATEN.JS – DEIN HAUPTBEREICH ZUM BEARBEITEN
   =====================================================================
   HTML = Aufbau, CSS = Aussehen, JavaScript = Daten und Verhalten.
   Suche mit Cmd+F nach: STARTBILD, RELEASES, CREWS, CHARAKTERE, FRUECHTE, ORTE.

   WICHTIGE REGELN:
   - Texte in Anführungszeichen lassen.
   - Zwischen Objekten steht ein Komma: },
   - IDs kurz, eindeutig und ohne Leerzeichen halten.
   - Leeres bild: "" bedeutet: einen schönen Platzhalter anzeigen.
   - Vorhandene Bilddatei verwenden: bild: "bilder/charaktere/ruffy.jpg"
   - spoiler: true blendet den GESAMTEN Eintrag standardmässig aus.
   - Die Beispieldaten sind eine bearbeitbare Auswahl, kein vollständiges
     oder laufend aktualisiertes Wiki. Crewzugehörigkeiten sind nicht datiert.
   ===================================================================== */

// 1. STARTBILD: Erst Datei ablegen, dann Pfad eintragen.
const STARTBILD = {
  bild: "", // HIER z. B. "bilder/startseite/crew.jpg" eintragen.
  alt: "Die Strohhut-Crew auf einem gemeinsamen Abenteuer",
  position: "center" // Ausschnitt: "center", "top" oder z. B. "50% 30%".
};

// 2. LINKS ZU MANGA UND ANIME
// Trage die gewünschte offizielle Anbieter- oder Veröffentlichungsseite ein.
// Beispiel für einen LINK: url: "https://DEINE-OFFIZIELLE-SEITE/kapitel"
// Kein eingebetteter Player, keine Anmeldung auf deiner Website nötig.
// Die Zahlen hier sind absichtlich leer: Trage den aktuellen Stand selbst ein.
// Die angegebene Folge/das Kapitel muss zum Ziel des Links passen.
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

// 3. CREWS
// id ist die VERBINDUNG zu charakter.crew. Bei Namenänderungen die id behalten.
// Ein Crewbild kann z. B. ein zulässiges Logo oder Gruppenmotiv sein.
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

// 4. CHARAKTERE
// name = sichtbarer Name | crew = exakte Crew-ID von oben | rolle = Aufgabe.
// beschreibung = Text im Detailfenster | quelle = optionaler Quellenlink.
// Du kannst jedes leere bild-Feld durch deinen lokalen Dateipfad ersetzen.
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

/* NEUEN CHARAKTER EINFÜGEN:
   Kopiere dieses Objekt OHNE die Kommentarzeichen in CHARAKTERE oben,
   vor die schliessende Zeile ];. Trenne die Objekte mit Kommas.
   {
     id: "eigener-charakter", name: "Name", crew: "strohhut",
     rolle: "Aufgabe", beschreibung: "Dein Text.",
     bild: "bilder/charaktere/dateiname.jpg", alt: "Beschreibung des Bildes",
     spoiler: false, quelle: ""
   },

   NEUE CREW EINFÜGEN: In CREWS oben ein Objekt nach diesem Muster ergänzen.
   {
     id: "neue-crew", name: "Name der Crew", kapitaen: "Name",
     beschreibung: "Dein Text.", bild: "", alt: "Crewmotiv", spoiler: false
   },
   Dann bei ihren Charakteren crew: "neue-crew" setzen.
   Filter und Crew-Karten werden automatisch ergänzt.
*/

// 5. TEUFELSFRÜCHTE: Weitere Objekte nach dem vorhandenen Muster ergänzen.
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

// 6. ORTE: Weitere Inseln oder Orte hier hinzufügen.
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

// PLATZ FÜR SPÄTER: z. B. eine eigene Liste für Schiffe oder Arcs.
// const SCHIFFE = [ ... ];
// Nur eine Liste hinzuzufügen zeigt sie noch nicht an: Dafür wären auch
// ein HTML-Zielcontainer und eine Renderfunktion in script.js nötig.
