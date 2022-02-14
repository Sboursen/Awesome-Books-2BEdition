/* eslint-disable max-classes-per-file */
// navbar

// function addDate() {
//   const navbarContainer = document.getElementById(
//     'date-container',
//   );
//   navbarContainer.innerHTML = '';
//   const date = new Date();
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];

//   const dateExtension = (date) => {
//     let extension = '';
//     switch (date.getDate()) {
//       case 3:
//         extension = 'rd';
//         break;
//       case 2:
//         extension = 'nd';
//         break;
//       case 1:
//         extension = 'st';
//         break;
//       default:
//         extension = 'th';
//     }
//     return extension;
//   };

//   const dateString = `${
//     months[date.getMonth()]
//   } ${date.getDate()}${dateExtension(date)}
//     ${date.getFullYear()}, ${
//     date.toUTCString().split(' ')[4]
//   } `;
//   navbarContainer.append(dateString);
// }
// window.setInterval(addDate, 1000);
let books;

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class UserInterface {
  static container = document.getElementById('container');

  static titleInput = document.querySelector('#title');

  static authorInput = document.querySelector('#author');

  static addButton = document.querySelector('.add-book');

  static addBook() {
    const book = new Book(
      UserInterface.titleInput.value,
      UserInterface.authorInput.value,
    );
    if (
      UserInterface.IsValid(book) &&
      !UserInterface.IsDuplicate(book)
    ) {
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
      const addedAlert = document.getElementById(
        'form-validation',
      );
      addedAlert.innerHTML = 'Book added successfully!';
      addedAlert.style.color = 'green';
      setTimeout(() => {
        UserInterface.titleInput.value = '';
        UserInterface.authorInput.value = '';

        addedAlert.innerHTML = '';
      }, 1000);

      UserInterface.displayBook(book, books.length - 1);
    } else {
      const addedAlert = document.getElementById(
        'form-validation',
      );
      addedAlert.innerHTML =
        'Please enter a new valid book';
      addedAlert.style.color = 'red';
      setTimeout(() => {
        UserInterface.titleInput.value = '';
        UserInterface.authorInput.value = '';

        addedAlert.innerHTML = '';
      }, 1000);
    }
  }

  static removeBook(book, index) {
    const bookContainer = document.getElementById(index);
    books = books.filter((el) => el !== book);
    localStorage.setItem('books', JSON.stringify(books));
    UserInterface.container.removeChild(bookContainer);
  }

  static displayBook(book, index) {
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
    return books.includes(book);
  }
}

function populateContainer() {
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
    books.forEach((book, index) => {
      UserInterface.displayBook(book, index);
    });
  } else {
    localStorage.setItem('books', '');
    books = [];
  }
}

populateContainer();

UserInterface.addButton.addEventListener(
  'click',
  UserInterface.addBook,
);


