// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");

// Обробка галереї в html
const showGalleryItems = galleryItems
.map(({ preview, original, description }) => {
    return `
   <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
})
.join("");

galleryBox.insertAdjacentHTML("afterbegin", showGalleryItems);

// Посилання на бібліотеку SimpleLightbox - JavaScript Options
var lightbox = new SimpleLightbox('.gallery a', {    
    captionsData: 'alt',
    captionDelay: 250,
});
