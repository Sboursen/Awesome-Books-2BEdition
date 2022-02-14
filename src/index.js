// eslint-disable-next-line import/extensions
import * as domElements from './modules/dom-elements.js';
// eslint-disable-next-line import/extensions
import UserInterface, * as ui from './modules/book-collection.js';
// eslint-disable-next-line import/extensions
import addDate from './modules/date-time.js';

ui.initializeLocalStorage();
UserInterface.books.forEach((book, index) => {
  UserInterface.displayBook(book, index);
});
domElements.addButton.addEventListener(
  'click',
  UserInterface.addBook,
);

window.setInterval(addDate, 1000);
