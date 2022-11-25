export default function getRefs() {
  return {
    formSearch: document.querySelector('.form-search'),
    imgGallery: document.querySelector('.gallery'),
    button: document.querySelector('[data-action="load-more"]'),
    label: document.querySelector('.label'),
    spinner: document.querySelector('.spinner'),
  };
}
