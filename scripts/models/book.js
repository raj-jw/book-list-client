'use strict';

var app = app || {};

(function(module) {
  function errorCallback(err) {
    console.error('this is the error we care about',err);
    module.errorView.initErrorPage(err);
  }

  function Book(bookObject) {
    this.author = bookObject.author;
    this.title = bookObject.title;
    this.isbn10 = bookObject.isbn_10;
    this.isbn13 = bookObject.isbn_13;
   this.imageUrl = bookObject.img_url;
   this.description = bookObject.description;
    // Book.keys(bookObject).forEach(key => this[key]= bookObject[key]);
  }

  Book.prototype.toHtml = function() {
    let template = Handlebars.compile($('#book-list-template').text());
    return app.render('book-list-template', this);
    
  }

  Book.all = [];

  Book.loadAll = rows => {
    Book.all = rows.sort((a, b) => b.title - a.title).map(books => new Book(books));
  }

  Book.fetchAll = callback => {
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/books`)
      .then(results => {
        console.log(results);
        Book.loadAll(results);
        callback();
        
      })
      .catch(errorCallback);

  };

  // Book.fetchAll = callback => {
  //   debugger
  //   $.get(`${app.ENVIRONMENT.apiUrl}/books`)
  //   .then((data => Book.loadAll(data)))
  //   // .then(Book.loadAll)
  //   .then(callback())
  //   .catch(errorCallback)};

  module.Book = Book;
})(app)