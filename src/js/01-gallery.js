import SimpleLightbox from "simplelightbox";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"> <a class="gallery__link" href="${original}"> <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"> </a> </li>`
  )
  .join("");

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);
console.log(galleryItems);

console.log(galleryItems);
