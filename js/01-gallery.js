import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(item => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
      </a>
    </li>
  `)
  .join('');

galleryContainer.innerHTML = galleryMarkup;

galleryContainer.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.tagName === 'IMG') {
    const imageSource = event.target.dataset.source;

    const modal = basicLightbox.create(`
      <img src="${imageSource}" width="800" height="600">
    `);

    modal.show();


    document.addEventListener('keydown', closeModalOnEscape);

    function closeModalOnEscape(event) {
      if (event.key === 'Escape') {
        modal.close();
        document.removeEventListener('keydown', closeModalOnEscape);
      }
    }
  }
});

