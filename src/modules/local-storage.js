export let books;

export const initializeLocalStorage = () => {
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
  } else {
    localStorage.setItem('books', '');
    books = [];
  }
};

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
