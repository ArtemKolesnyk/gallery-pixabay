import getRefs from './refs';
const refs = getRefs();

export default class LoadMoreBtn {
  constructor({ hidden = false }) {
    hidden && this.hide();
  }

  enable() {
    refs.button.disabled = false;
    refs.label.textContent = 'Load more';
    refs.spinner.classList.add('is-hidden');
  }

  disabled() {
    refs.button.disabled = true;
    refs.label.textContent = 'Loading...';
    refs.spinner.classList.remove('is-hidden');
  }

  show() {
    refs.button.classList.remove('is-hidden');
  }

  hide() {
    refs.button.classList.add('is-hidden');
  }
}
