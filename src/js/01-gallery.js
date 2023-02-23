// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
// import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";


console.log(galleryItems);
console.log("Hello!!!");
console.log("Hello world!!!");
console.log("Hello world!!!!!!!");

const galleryBox = document.querySelector(".gallery");

// Обробка галереї в html
const showGalleryItems = galleryItems
.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
    <a class="gallery__link" 
    href="${original}">
    <img class="gallery__image" 
    src="${preview}" 
    data-source="${original}"
    alt="${description}">
    </img>
    </a>
    </div>`
})
.join("");

galleryBox.insertAdjacentHTML("afterbegin", showGalleryItems);


var lightbox = new SimpleLightbox('.gallery a', { /* options */ });