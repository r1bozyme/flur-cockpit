# Flur-Cockpit

Wand-Display für den Flur (iPad Air 3, Hochformat): Uhr, Wetter, Abfahrten, Musik-Platzhalter.

- Wetter: Open-Meteo (ohne Schlüssel)
- Abfahrten: MVG-Schnittstelle (Echtzeit, inkl. Ersatzverkehr)
- Kurse S&P 500 und NIO: Financial Modeling Prep (Gratis-Key, nur im localStorage), S&P-Fallback SPY-ETF
- Einkauf: Vorrats-Rechenkern aus training-log (vorrat-core.js via jsDelivr), Daten aus training-log-data/backup.json
- Einrichten des Tokens: unten rechts 3× auf „Flur-Cockpit“ tippen
- Einstellungen: Block `CONFIG` oben im Script von `index.html` (Haltestellen, Gehminuten, Nachtmodus)

Der Code enthält keine persönlichen Daten. Spätere private Daten (z. B. Einkaufsliste) werden zur Laufzeit über einen
nur-lesenden Fine-grained Token aus einem privaten Repo geholt; der Token liegt ausschließlich im `localStorage` des iPads.
