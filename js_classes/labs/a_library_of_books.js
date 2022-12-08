class Book {
  constructor (title, author, edition) {
    this.title = title;
    this.author = author;
    this.edition = edition;
    // constructor runs once for each new call(creation) of Book
  }
};

let myBook = new Book("Speaking JavaScript", ["Dr. Axel Rauschmayer"], 1);
let myBook2 = new Book ("Eloquent Javascript", ["Marijn Haverbeke"], 3);
let myBook4 = new Book('The Selfish Gene', ["Richard Dawkins"], 1); 
let myBook3 = new Book('Lord of the Rings', ["J.R.R.Tolken"], 2);


class Library {
  constructor(books) {
    this.books = []; // empty array to fill with book objects       
  }
  shelve(book) {
    this.books.push({ID: this.books.length+1, ...book});
    // takes object book and pushes it to end of books array.
    // also addes an id to book object.

    let sortedBooks = this.books.sort(function(a, b){
      // puts array of books in alphabetical order
      // -1, 0 and 1 work with the sort method to arrange the indexes each pass.  
      if(a.title < b.title) { return -1; }
      if(a.title > b.title) { return 1; }
      return 0;
    })

    this.books = [...sortedBooks];
    return this;    // in order to chain methodes together you have to return only 'this'
  }
  findByTitle(title) {
    let searchResults = [];

    for (let book of this.books) {
      if (book.title.toLowerCase().includes(title.toLowerCase())) {
        searchResults.push(book); // finds any instance of a string in title value
      }
    }
    if (searchResults.length === 0) {
      return `The library doesn't contain any books by the title: \"${title}\"`;
    }
    return searchResults;
  }
  list() {
    return this.books;
  }
}

const lib = new Library();
lib.shelve(myBook).shelve(myBook2)
console.log(lib.shelve(myBook3).shelve(myBook4))//.findByTitle('ent'))
console.log(lib.findByTitle('ent'));





// [Lab] A Library of books

// Using class syntax, model a library that holds books. Both the library and books
// should be constructed objects.
// Create a Library class and a Book class.

// Let's go over the Book.

// The book should keep track of the authors, title and edition of the book.

// // Here are a few examples of books being constructed
// const eloquentJS = new Book("Eloquent Javascript", ["Marijn Haverbeke"], 3);
// const speakingJS = new Book("Speaking JavaScript", ["Dr. Axel Rauschmayer"], 1);
// const theRustProgLang = new Book(
//   "The Rust Programming Language",
//   ["Steve Klabnik", "Carol Nichols"],
//   2
// );

// Let's go over the Library. Like the Book, it is constructed. Unlike the
// Book it has several prototype methods. It is constructed without arguments.

// Give it the prototype method shelve that takes a book object and stores it.
// When shelving books, store them in alphabetical by their title.

// const lib = new Library();
// lib.shelve(eloquentJS);

// // See if you can make it possible to chain shelve calls
// lib.shelve(speakingJS).shelve(theRustProgLang);

// Give it the prototype method findByTitle. It'll search for the first book
// whose title contains the passed in string argument.

// // The casing of the string should be ignored
// lib.findByTitle("eloquent"); // Book {title: "Eloquent Javascript", authors: Array(1), edition: 3}
// lib.findByTitle("Rust"); // Book {title: "The Rust Programming Language", authors: Array(2), edition: 2}

// Give it the prototype method list which returns all books in the library in an
// Array.

// lib.list();
// // [
// //   Book {title: "Eloquent Javascript", authors: Array(1), edition: 3},
// //   Book {title: "The Rust Programming Language", authors: Array(2), edition: 2},
// //   Book {title: "Speaking JavaScript", authors: Array(1), edition: 1},
// // ]

