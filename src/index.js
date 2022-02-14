import * as domElements from './modules/dom-elements.js';
import UserInterface, * as ui from './modules/book-collection.js';

ui.initializeLocalStorage();
ui.books.forEach((book, index) => {
  UserInterface.displayBook(book, index);
});
domElements.addButton.addEventListener(
  'click',
  UserInterface.addBook,
);
