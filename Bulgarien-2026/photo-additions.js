const afterImg8882 = window.PHOTOS.findIndex(photo => photo.id === 71);

window.PHOTOS.splice(afterImg8882 + 1, 0, {
  id: 199,
  src: 'images/photo-199.jpg',
  stage: 2,
  date: '9. September 2026',
  caption: 'Pirin-Gebirge · Route B',
  portrait: true
});
