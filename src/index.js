// eslint-disable-next-line import/extensions
import * as domElements from './modules/dom-elements.js';
// eslint-disable-next-line import/extensions
import UserInterface, * as ui from './modules/book-collection.js';

ui.initializeLocalStorage();
UserInterface.books.forEach((book, index) => {
  UserInterface.displayBook(book, index);
});
domElements.addButton.addEventListener(
  'click',
  UserInterface.addBook,
);
