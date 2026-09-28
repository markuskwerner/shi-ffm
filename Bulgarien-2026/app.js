const stages = [
  { id: 1, title: 'Ankunft & Sofia', dates: '6.–7. September', copy: 'Von Frankfurt nach Sofia: Anflug, Ankommen bei Freunden und ein erster Streifzug durch die bulgarische Hauptstadt.' },
  { id: 2, title: 'Pirin-Gebirge', dates: '8.–11. September', copy: 'Mehrere Tage zwischen Berghütten, Seen und Gipfeln. Lange Wege, klare Luft und Abende in großer Runde.' },
  { id: 3, title: 'Plovdiv & weiter ostwärts', dates: '12.–13. September', copy: 'Historische Orte, Zwischenstopps und der Übergang vom Gebirge in Richtung Schwarzes Meer.' },
  { id: 4, title: 'Am Schwarzen Meer', dates: '14.–17. September', copy: 'Strände, Felsen und Fahrradtouren an der Küste – mit Sprüngen ins Wasser und bulgarischem Schlammprogramm.' },
  { id: 5, title: 'Abschied am Meer', dates: '18.–19. September', copy: 'Ein letzter Sonnenaufgang, Frühstück am Wasser und die ruhigen Stunden vor der Heimreise.' }
];

const root = document.querySelector('#gallery-root');
const stageLinks = document.querySelector('.stage-links');

for (const stage of stages) {
  const count = window.PHOTOS.filter(photo => photo.stage === stage.id).length;
  const link = document.createElement('a');
  link.href = `#etappe-${stage.id}`;
  link.innerHTML = `<b>0${stage.id} · ${count} Bilder</b><span>${stage.title}</span>`;
  stageLinks.append(link);

  const section = document.createElement('section');
  section.className = 'stage';
  section.id = `etappe-${stage.id}`;
  section.innerHTML = `
    <a class="back-to-top" href="#reise"><span aria-hidden="true">↑</span> Zurück zum Seitenanfang</a>
    <header class="stage-heading">
      <div><span class="stage-number">ETAPPE 0${stage.id} · ${stage.dates}</span><h2>${stage.title}</h2></div>
      <p class="stage-copy">${stage.copy}</p>
    </header>
    ${stage.id === 2 ? `
    <aside class="route-story" aria-labelledby="route-heading">
      <header class="route-heading">
        <span class="stage-number">VIER WANDERROUTEN</span>
        <h3 id="route-heading">Unsere Routen im Pirin</h3>
        <p>Die aufgezeichneten Strecken in zeitlicher Reihenfolge vom 8. bis 11. September.</p>
      </header>
      <div class="route-grid">
        <article>
          <div class="route-meta"><b>01</b><time datetime="2026-09-08">8. September</time></div>
          <button type="button" data-map-src="routes/route-02.png" data-map-title="Route 1 · Bezbog-See, Popovo-See und Tevno-See" data-map-note="8. September · Bezbog-See → Popovo-See → Tevno-See">
            <img src="routes/route-02.png" alt="Wanderroute vom Bezbog-See über den Popovo-See zum Tevno-See" loading="lazy">
          </button>
          <h4>Bezbog-See → Popovo-See → Tevno-See</h4>
          <p>Die erste Seenroute verbindet drei markante Punkte im Pirin.</p>
        </article>
        <article>
          <div class="route-meta"><b>02</b><time datetime="2026-09-09">9. September</time></div>
          <button type="button" data-map-src="routes/route-03.png" data-map-title="Route 2 · Hochroute südlich des Tevno-Sees" data-map-note="9. September · Rund um den südlichen Pirin-Kamm">
            <img src="routes/route-03.png" alt="Wanderroute über den Hochkamm südlich des Tevno-Sees" loading="lazy">
          </button>
          <h4>Hochroute südlich des Tevno-Sees</h4>
          <p>Eine kompakte Querung durch das felsige Hochgebirge.</p>
        </article>
        <article>
          <div class="route-meta"><b>03</b><time datetime="2026-09-09">9. September</time></div>
          <button type="button" data-map-src="routes/route-01.png" data-map-title="Route 3 · Zum Tevno-See" data-map-note="9. September · Ziel Tevno-See">
            <img src="routes/route-01.png" alt="Wanderroute mit Ziel am Tevno-See" loading="lazy">
          </button>
          <h4>Zum Tevno-See</h4>
          <p>Die zweite Route des Tages endet am Tevno-See.</p>
        </article>
        <article>
          <div class="route-meta"><b>04</b><time datetime="2026-09-11">11. September</time></div>
          <button type="button" data-map-src="routes/route-04.png" data-map-title="Route 4 · Dzhano Peak, Popovo-See und Bezbog-See" data-map-note="11. September · Über Dzhano Peak und Popovo-See zum Bezbog-See">
            <img src="routes/route-04.png" alt="Wanderroute über Dzhano Peak und Popovo-See zum Bezbog-See" loading="lazy">
          </button>
          <h4>Dzhano Peak → Popovo-See → Bezbog-See</h4>
          <p>Der Abschluss führt über die Seenlandschaft zurück zum Bezbog-See.</p>
        </article>
      </div>
    </aside>` : ''}
    ${stage.id === 4 ? `
    <aside class="map-story" aria-labelledby="map-heading">
      <header class="map-heading">
        <span class="stage-number">ORIENTIERUNG</span>
        <h3 id="map-heading">Die Küste der Süddobrudscha</h3>
        <p>Zwischen Schabla und Kap Kaliakra liegen die Küstenorte und Buchten dieser Etappe.</p>
      </header>
      <div class="map-overview">
        <button type="button" data-map-src="maps/kamen-bryag.png" data-map-title="Kamen Bryag an der westlichen Schwarzmeerküste" data-map-note="Übersicht zwischen Varna und Constanța">
          <img src="maps/kamen-bryag.png" alt="Landkarte mit der Lage von Kamen Bryag zwischen Varna und Constanța" loading="lazy">
          <span><strong>Kamen Bryag</strong><small>Zwischen Varna und Constanța</small></span>
        </button>
      </div>
      <div class="map-details">
        <button type="button" data-map-src="maps/sued-dobrudscha-kueste.png" data-map-title="Küste der Süddobrudscha" data-map-note="Von Kap Schabla bis Kap Kaliakra">
          <img src="maps/sued-dobrudscha-kueste.png" alt="Satellitenkarte der Süddobrudscha zwischen Kap Schabla und Kap Kaliakra" loading="lazy">
          <span><strong>Die Süddobrudscha</strong><small>Kap Schabla · Tyulenovo · Kamen Bryag · Russalka</small></span>
        </button>
        <button type="button" data-map-src="maps/shablenska-tuzla-beach.png" data-map-title="Shablenska Tuzla Beach" data-map-note="Lagune und Strand bei Schabla">
          <img src="maps/shablenska-tuzla-beach.png" alt="Satellitenkarte der Lagunen und des Shablenska Tuzla Beach" loading="lazy">
          <span><strong>Shablenska Tuzla</strong><small>Lagune und Strand bei Schabla</small></span>
        </button>
        <button type="button" data-map-src="maps/russalka-beach.png" data-map-title="Russalka Beach" data-map-note="Buchten südlich von Kamen Bryag">
          <img src="maps/russalka-beach.png" alt="Satellitenkarte von Russalka Beach und den benachbarten Buchten" loading="lazy">
          <span><strong>Russalka Beach</strong><small>Buchten südlich von Kamen Bryag</small></span>
        </button>
      </div>
    </aside>` : ''}
    <div class="gallery"></div>`;

  const gallery = section.querySelector('.gallery');
  for (const photo of window.PHOTOS.filter(item => item.stage === stage.id)) {
    const card = document.createElement('figure');
    card.className = 'photo-card';
    card.innerHTML = `
      <button type="button" data-photo="${photo.id}" aria-label="${photo.caption} öffnen">
        <img src="${photo.src}" alt="${photo.caption}" loading="lazy" decoding="async">
        <figcaption><strong>${photo.caption}</strong><span>${photo.date}</span></figcaption>
      </button>`;
    gallery.append(card);
  }
  root.append(section);
}

const dialog = document.querySelector('.lightbox');
const dialogImage = dialog.querySelector('img');
const dialogCaption = dialog.querySelector('strong');
const dialogDate = dialog.querySelector('figcaption span');
let currentIndex = 0;

function showPhoto(index) {
  currentIndex = (index + window.PHOTOS.length) % window.PHOTOS.length;
  const photo = window.PHOTOS[currentIndex];
  dialogImage.src = photo.src;
  dialogImage.alt = photo.caption;
  dialogCaption.textContent = photo.caption;
  dialogDate.textContent = photo.date;
}

document.addEventListener('click', event => {
  const map = event.target.closest('[data-map-src]');
  if (map) {
    dialog.classList.add('map-open');
    dialogImage.src = map.dataset.mapSrc;
    dialogImage.alt = map.dataset.mapTitle;
    dialogCaption.textContent = map.dataset.mapTitle;
    dialogDate.textContent = map.dataset.mapNote;
    dialog.showModal();
    return;
  }
  const trigger = event.target.closest('[data-photo]');
  if (trigger) {
    dialog.classList.remove('map-open');
    currentIndex = window.PHOTOS.findIndex(photo => photo.id === Number(trigger.dataset.photo));
    showPhoto(currentIndex);
    dialog.showModal();
  }
});

dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.querySelector('.previous').addEventListener('click', () => showPhoto(currentIndex - 1));
dialog.querySelector('.next').addEventListener('click', () => showPhoto(currentIndex + 1));
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
document.addEventListener('keydown', event => {
  if (!dialog.open) return;
  if (event.key === 'ArrowLeft') showPhoto(currentIndex - 1);
  if (event.key === 'ArrowRight') showPhoto(currentIndex + 1);
});
