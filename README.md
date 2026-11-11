# Flur-Cockpit

Wand-Display für den Flur (iPad Air 3, Hochformat): Uhr, Wetter, Abfahrten, Musik-Platzhalter.

- Wetter: Open-Meteo (ohne Schlüssel)
- Abfahrten: MVG-Schnittstelle (Echtzeit, inkl. Ersatzverkehr)
- Einstellungen: Block `CONFIG` oben im Script von `index.html` (Haltestellen, Gehminuten, Nachtmodus)

Der Code enthält keine persönlichen Daten. Spätere private Daten (z. B. Einkaufsliste) werden zur Laufzeit über einen
nur-lesenden Fine-grained Token aus einem privaten Repo geholt; der Token liegt ausschließlich im `localStorage` des iPads.
