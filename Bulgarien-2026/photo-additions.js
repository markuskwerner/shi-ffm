const afterImg8882 = window.PHOTOS.findIndex(photo => photo.id === 71);

window.PHOTOS.splice(afterImg8882 + 1, 0, {
  id: 199,
  src: 'images/photo-199.jpg',
  stage: 2,
  date: '9. September 2026',
  caption: 'Pirin-Gebirge · Route B',
  portrait: true
});

window.PHOTOS.push(
  {
    id: 200,
    src: 'images/photo-200.jpg',
    stage: 5,
    date: '18. September 2026',
    caption: 'Letzter Kick',
    portrait: false
  },
  {
    id: 201,
    src: 'images/photo-201.jpg',
    stage: 5,
    date: '18. September 2026',
    caption: 'Letzter Kick',
    portrait: false
  },
  {
    id: 202,
    src: 'images/photo-202.jpg',
    stage: 5,
    date: '18. September 2026',
    caption: 'Letzter Kick',
    portrait: false
  },
  {
    id: 203,
    src: 'images/photo-203.png',
    stage: 5,
    date: '18. September 2026',
    caption: 'Abschied von unserer Gastfamilie',
    portrait: true
  },
  {
    id: 204,
    src: 'images/photo-204.jpg',
    stage: 5,
    date: '18. September 2026',
    caption: 'Abschied von unserer Gastfamilie',
    portrait: true
  },
  {
    id: 205,
    src: 'images/photo-205.jpg',
    stage: 5,
    date: '18. September 2026',
    caption: 'Abschied von unserer Gastfamilie',
    portrait: false
  }
);
