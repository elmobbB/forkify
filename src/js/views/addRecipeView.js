import View from './View.js';
import icons from 'url:../../img/icons.svg'; //for parcel 2

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'recipe was sucessfully uploaded:)';

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnopen = document.querySelector('.nav__btn--add-recipe');
  _btnclose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addhandlerHideWindow();
    this.addHandlerUpload();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._btnopen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addhandlerHideWindow() {
    this._btnclose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }
  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();

      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);

      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
