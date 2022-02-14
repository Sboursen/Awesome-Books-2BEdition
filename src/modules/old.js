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

// ||| Hide and show mobile menu and sections

const MEDIA_BREAKPOINT = 768;
const mobileMenuButton = document.querySelector(
  'button.mobile-menu-button',
);
const desktopMenuList = document.querySelectorAll(
  '.desktop-nav .page-navigation button',
);
const mobileMenuList = document.querySelectorAll(
  '.mobile-menu .page-navigation button',
);
const mobileMenu = document.querySelector(
  'div.mobile-menu',
);

const cancelMobileMenu = document.querySelector(
  '.mobile-menu .cancel',
);
const contactSection = document.getElementById('contact');
const addNewSection = document.getElementById('add-new');
const homeSection = document.getElementById('home');

function showMobileMenu(e) {
  if (
    e.currentTarget.classList.contains('mobile-menu-button')
  ) {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('block');
    document.body.style.overflowY = 'hidden';
  }
}

function hideMobileMenu(e) {
  if (e.currentTarget.classList.contains('cancel')) {
    mobileMenu.classList.remove('block');
    mobileMenu.classList.add('hidden');
    document.body.style.overflowY = 'scroll';
  } else if (
    e.currentTarget.parentNode.parentNode.classList.contains(
      'page-navigation',
    )
  ) {
    mobileMenu.classList.remove('block');
    mobileMenu.classList.add('hidden');
    document.body.style.overflowY = 'scroll';

    // hide and show sections
    switch (e.currentTarget.className) {
      case 'mobile-list-link':
        contactSection.style.display = 'none';
        addNewSection.style.display = 'none';
        homeSection.style.display = 'flex';
        break;
      case 'mobile-add-new-link':
        contactSection.style.display = 'none';
        addNewSection.style.display = 'flex';
        homeSection.style.display = 'none';
        break;
      case 'mobile-contact-link':
        contactSection.style.display = 'flex';
        addNewSection.style.display = 'none';
        homeSection.style.display = 'none';
        break;
      default:
        contactSection.style.display = 'none';
        addNewSection.style.display = 'none';
        homeSection.style.display = 'flex';
    }
  }
}

function hideMobileMenuOnEvent(e) {
  if (mobileMenu.style.display !== 'none') {
    if (e.type === 'resize') {
      if (window.innerWidth > MEDIA_BREAKPOINT) {
        mobileMenu.classList.remove('block');
        mobileMenu.classList.add('hidden');
        document.body.style.overflowY = 'scroll';
      }
    } else {
      mobileMenu.classList.remove('block');
      mobileMenu.classList.add('hidden');
      document.body.style.overflowY = 'scroll';
    }
  }
}

function toggleSection(e) {
  if (
    e.currentTarget.parentNode.parentNode.classList.contains(
      'page-navigation',
    )
  ) {
    switch (e.currentTarget.className) {
      case 'mobile-list-link':
        contactSection.style.display = 'none';
        addNewSection.style.display = 'none';
        homeSection.style.display = 'flex';
        break;
      case 'mobile-add-new-link':
        contactSection.style.display = 'none';
        addNewSection.style.display = 'flex';
        homeSection.style.display = 'none';
        break;
      case 'mobile-contact-link':
        contactSection.style.display = 'flex';
        addNewSection.style.display = 'none';
        homeSection.style.display = 'none';
        break;
      default:
        contactSection.style.display = 'none';
        addNewSection.style.display = 'none';
        homeSection.style.display = 'none';
    }
  }
}

mobileMenuButton.addEventListener('click', showMobileMenu);
cancelMobileMenu.addEventListener('click', hideMobileMenu);
mobileMenuList.forEach((node) =>
  node.addEventListener('click', hideMobileMenu),
);
window.addEventListener('resize', hideMobileMenuOnEvent);
desktopMenuList.forEach((node) =>
  node.addEventListener('click', toggleSection),
);
