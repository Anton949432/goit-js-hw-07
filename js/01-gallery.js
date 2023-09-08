import { galleryItems } from './gallery-items.js';

function createGalleryItem(item) {
    const markup = `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>
  `;

    return markup;
}

function renderGallery() {
    const galleryList = document.querySelector('.gallery');

    const galleryMarkup = galleryItems.map(createGalleryItem).join('');
    galleryList.innerHTML = galleryMarkup;
}

document.addEventListener('DOMContentLoaded', renderGallery);

document.querySelector('.gallery').addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.classList.contains('gallery__image')) {
        const imageUrl = event.target.dataset.source;

        const instance = basicLightbox.create(`
      <img src="${imageUrl}" width="800" height="600">
    `);

        instance.show();
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                instance.close();
            }
        });
    }
});


