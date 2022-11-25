const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '24263315-36ea98cb6d0ce52f0b1c6e073';

export default class ImgApiService {
  constructor() {
    this.serachQuery = '';
    this.page = 1;
  }

  fetchPictures() {
    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.serachQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;
    return fetch(url)
      .then(response => response.json())
      .then(({ hits }) => {
        this.page += 1;
        return hits;
      });
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.serachQuery;
  }
  set query(newQuery) {
    this.serachQuery = newQuery;
  }
}
