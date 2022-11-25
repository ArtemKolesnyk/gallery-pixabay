import ImgApiService from './apiService';
import getRefs from './refs';
import LoadMoreBtn from './loadMoreBtn';
import cardImgTpl from '../tamplatas/cardImg.hbs';

const refs = getRefs();
const imgApiService = new ImgApiService();
const loadMoreBtn = new LoadMoreBtn({
  hidden: true,
});
refs.button.addEventListener('click', fetchPictures);
refs.formSearch.addEventListener('submit', onSerch);

function onSerch(e) {
  e.preventDefault();

  imgApiService.query = e.currentTarget.elements.query.value;

  if (imgApiService.query === '') {
    return;
  }
  loadMoreBtn.show();
  imgApiService.resetPage();
  clearGalleryContainer();
  fetchPictures();
}

function fetchPictures() {
  loadMoreBtn.disabled();
  imgApiService.fetchPictures().then(hits => {
    appendHitsMarkup(hits);
    loadMoreBtn.enable();
  });
}

function appendHitsMarkup(hits) {
  refs.imgGallery.insertAdjacentHTML('beforeend', cardImgTpl(hits));
}

function clearGalleryContainer() {
  refs.imgGallery.innerHTML = '';
}
