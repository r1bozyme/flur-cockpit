/**
 * Flur-Cockpit – Termine aus dem gemeinsamen Google-Kalender.
 * Bereitstellen als Web-App: Ausführen als "Ich", Zugriff "Jeder".
 * SECRET hier eintragen (nicht ins öffentliche Repo committen) und als ?k=… an die Web-App-URL hängen.
 */
const CAL_ID = 'c52db711d1a9d0761aecd3392b1ad9951d78f4f9156258deb11802d429f37cbb@group.calendar.google.com';
const SECRET = 'HIER-EINTRAGEN';
const DAYS = 7;

function doGet(e) {
  if (!e || !e.parameter || e.parameter.k !== SECRET) return out({ error: 'forbidden' });
  const now = new Date(), end = new Date(now.getTime() + DAYS * 864e5);
  const ev = CalendarApp.getCalendarById(CAL_ID).getEvents(now, end).slice(0, 12).map(function (x) {
    return { t: x.getTitle(), s: x.getStartTime().getTime(), e: x.getEndTime().getTime(), a: x.isAllDayEvent() };
  });
  return out({ ev: ev, ts: Date.now() });
}

function out(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
