const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '24263315-36ea98cb6d0ce52f0b1c6e073';
export default function fetchImg() {
  return fetch(
    `${BASE_URL}/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=${API_KEY}`
  )
    .then(response => response.json())
    .catch(error => error);
}
