# Vereinheitlichte Version

## Öffnen
Den neuen Ordner separat entpacken und index.html im Browser öffnen. Dein alter Projektordner bleibt als Sicherung bestehen. Falls du schon eigene Bilder gespeichert hast, kopiere sie mit gleicher Ordnerstruktur in den neuen Ordner bilder/. Die hochgeladenen Dateien enthielten keine Bilddateien; ihre leeren Bildfelder wurden unverändert übernommen.

## Nur noch fünf Hauptdateien
- index.html: Inhalt der Startseite.
- charaktere.html: Inhalt der Charakter- und Crewseite.
- welt.html: Inhalt der Welt- und Früchteseite.
- style.css: gesamtes Aussehen und Smartphone-Regeln.
- app.js: Daten UND Funktionen, ausserdem gemeinsame Kopf- und Fusszeile.

Die HTML-Seiten bleiben getrennt und sind miteinander verlinkt. Drei komplette HTML-Dokumente hintereinander in einer Datei wären kein sauberes Dokument. daten.js und script.js wurden zu app.js zusammengeführt. Lade NICHT zusätzlich die alten Skripte, sonst würden Variablen doppelt angelegt.

## Was erhalten bleibt
Alle vorhandenen Datenfelder, Beschreibungen und Beispieldaten: 20 Charaktere, 6 Crews, 3 Früchte und 3 Orte. Startbild, Bildplatzhalter, Fehlbild-Ersatz, Quellenlinks, Release-Felder, Suche, Crewfilter, Crew-Schaltflächen, Detailfenster, Spoileranzeige, gespeicherter Schalter, aktive Navigation und mobile Gestaltung bleiben erhalten. Der Quiz-Link https://onepiecedle.net ist jetzt auf allen drei Seiten vorhanden.

Deine hochgeladenen CSS-Farbwerte bleiben erhalten. Die Quiz-Schriftregel lag zuvor innerhalb einer Handy-Regel und galt nur bei maximal 600 Pixeln. Sie steht jetzt ausserhalb und gilt überall.

## Schnell finden (Cmd+F in app.js)
STARTBILD: Bild auf der Startseite.
RELEASES: Manga-/Episodentitel, Nummer, Datum, Link und Bild.
CREWS: Crew-Namen, Kapitäne, Logos und Beschreibungen.
CHARAKTERE: Figuren, Zugehörigkeiten und Bilder.
FRUECHTE / ORTE: weitere Einträge.
GEMEINSAMER SEITENRAHMEN: Logo, Navigation, Quiz-Link und Fusszeile.

## Bild einsetzen
Bilddatei z. B. als bilder/charaktere/ruffy.jpg ablegen und bei Ruffy ändern:

```js
"bild": "bilder/charaktere/ruffy.jpg",
"alt": "Ruffy mit seinem Strohhut"
```

## Neuen Charakter einsetzen
Dieses Objekt in CHARAKTERE vor ]; ergänzen. Zwischen Einträgen ein Komma lassen:

```js
{
  id: "neue-figur", name: "Name", crew: "strohhut", rolle: "Aufgabe",
  beschreibung: "Dein Text.", bild: "", alt: "Bildbeschreibung",
  spoiler: false, quelle: ""
}
```

## Neue Crew einsetzen
Unter CREWS ein Objekt mit id, name, kapitaen, beschreibung, bild, alt und spoiler ergänzen. Den gleichen id-Wert bei den Mitgliedern als crew verwenden. Crewkarte und Filteroption entstehen automatisch.

## Manga-/Episoden-Link
In RELEASES das Feld url mit der vollständigen https://-Adresse des gewünschten offiziellen Anbieters füllen. Nummer, Titel und Datum selbst eintragen. Keine automatischen Live-Daten. Ein korrekt eingetragener Link wird zur Schaltfläche und öffnet in einem neuen Tab.

## Sicherung
Unter originale/ stehen die unveränderten hochgeladenen CSS- und Datendateien sowie der bisherige Funktionscode. Die HTML-Ausgangsstände sind aus der bisherigen Basis mit deinen eingefügten Änderungen rekonstruiert; sie sind keine zusätzliche Live-Seite. Bearbeite zum Weiterarbeiten die fünf Dateien oben.

Die Lernbasis ist KI-generiert. Beachte für die Schulabgabe die Vorgaben zur eigenständigen Arbeit.
