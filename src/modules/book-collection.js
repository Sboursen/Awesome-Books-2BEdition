// eslint-disable-next-line import/extensions
import * as domElements from './dom-elements.js';
// eslint-disable-next-line import/extensions
import Book from './book.js';
// eslint-disable-next-line import/extensions
import { DateTime } from '../../dist/modules/luxon/src/luxon.js';

export default class UserInterface {
  static books = [];

  static container = domElements.container;

  static titleInput = domElements.titleInput;

  static authorInput = domElements.authorInput;

  static addButton = domElements.addButton;

  static addBook() {
    const book = new Book(
      UserInterface.titleInput.value,
      UserInterface.authorInput.value,
    );

    UserInterface.books.push(book);
    localStorage.setItem(
      'UserInterface.books',
      JSON.stringify(UserInterface.books),
    );

    UserInterface.displayBook(
      book,
      UserInterface.books.length - 1,
    );
    UserInterface.titleInput.value = '';
    UserInterface.authorInput.value = '';
  }

  static removeBook(book, index) {
    const bookContainer = document.getElementById(index);
    UserInterface.books = UserInterface.books.filter(
      (el) => el !== book,
    );
    localStorage.setItem(
      'UserInterface.books',
      JSON.stringify(UserInterface.books),
    );
    UserInterface.container.removeChild(bookContainer);
  }

  static displayBook(book, index) {
    const bookContainer = document.createElement('tr');
    bookContainer.classList.add('block');
    bookContainer.classList.add('px-2');
    bookContainer.classList.add('py-1');
    bookContainer.classList.add('odd:bg-bodyLight');
    bookContainer.classList.add('even:bg-bodyDark');
    bookContainer.id = index;
    const text = document.createElement('td');
    text.innerHTML = `"${book.title}" by ${book.author}`;

    bookContainer.append(text);
    const removeButtonContainer = document.createElement('td');

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.innerHTML = "<i class='fas fa-trash-alt'></i> Remove";

    removeButton.classList.add('removeButton');
    removeButton.onclick = () => {
      UserInterface.removeBook(book, index);
    };
    removeButtonContainer.append(removeButton);
    bookContainer.append(removeButtonContainer);
    UserInterface.container.appendChild(bookContainer);
  }

  static IsValid(book) {
    return !!(book.title && book.value);
  }

  static IsDuplicate(book) {
    return UserInterface.books.includes(book);
  }
}

export const initializeLocalStorage = () => {
  if (localStorage.getItem('UserInterface.books')) {
    UserInterface.books = JSON.parse(
      localStorage.getItem('UserInterface.books'),
    );
  } else {
    localStorage.setItem('UserInterface.books', '');
    UserInterface.books = [];
  }
};
