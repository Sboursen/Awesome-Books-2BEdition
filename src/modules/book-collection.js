import * as domElements from './dom-elements.js';
import Book from './book.js';
import * as localStorageOp from './local-storage.js';

export default class UserInterface {
  static container = domElements.container;

  static titleInput = domElements.titleInput;

  static authorInput = domElements.authorInput;

  static addButton = domElements.addButton;

  static addBook() {
    const book = new Book(
      UserInterface.titleInput.value,
      UserInterface.authorInput.value,
    );

    localStorageOp.books.push(book);
    localStorage.setItem(
      'books',
      JSON.stringify(localStorageOp.books),
    );

    UserInterface.displayBook(
      book,
      localStorageOp.books.length - 1,
    );
  }

  static removeBook(book, index) {
    const bookContainer = document.getElementById(index);
    localStorageOp.books = localStorageOp.books.filter(
      (el) => el !== book,
    );
    localStorage.setItem(
      'books',
      JSON.stringify(localStorageOp.books),
    );
    UserInterface.container.removeChild(bookContainer);
  }

  static displayBook(book, index) {
    console.log('inside display books');
    const bookContainer = document.createElement('tr');
    bookContainer.id = index;
    const text = document.createElement('td');
    text.innerHTML = `"${book.title}" by ${book.author}`;

    bookContainer.append(text);
    const removeButtonContainer =
      document.createElement('td');

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.innerHTML =
      "<i class='fas fa-trash-alt'></i> Remove";

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
    return localStorageOp.books.includes(book);
  }
}
