import * as domElements from './modules/dom-elements.js';
import UserInterface from './modules/book-collection.js';
import * as localStorageOp from './modules/local-storage.js';

localStorageOp.initializeLocalStorage();
localStorageOp.books.forEach((book, index) => {
  UserInterface.displayBook(book, index);
});
domElements.addButton.addEventListener(
  'click',
  UserInterface.addBook,
);
