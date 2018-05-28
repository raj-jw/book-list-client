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
   this.imageUrl = bookObject.image_url;
   this.description = bookObject.description;
    this.book_id =bookObject.book_id;
  }

  Book.prototype.toHtml = function() {
    return app.render('book-list-template', this);
     }

  Book.all = [];
    
  Book.loadAll = rows => 
    Book.all = rows.sort((a, b) => b.title - a.title).map(book => new Book(book));
  

    Book.fetchAll = callback =>
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);
      // .then(results => {
      //   console.log( `this is result from server`, results);
      //   Book.loadAll(results);
      //   //console.log(`this is ${app.ENVIRONMENT.apiUrl}`)
      //   callback();
        
      // })
  //     .catch(errorCallback);

  // };

  Book.fetchOne = (ctx,callback) => 
    console.log('hiiiiiiii',ctx);
   // console.log( `this is${ctx}`);
  //  $('.book-detail').hide();
  //  $(`.book-detail[data-detail-id="${ctx.params.book_id}"]`).show();
   $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/books/${ctx.params.book_id}`)
   .then((result) => ctx.book = results[0])
   .then(callback)
   .catch(errorCallback);

   Book.create = book =>
   $.post(`${app.ENVIRONMENT.apiUrl}/api/v1/books`, book)
     .then(() => page('/'))
     .catch(errorCallback);

  //  {
  //    console.log('result', result);
  //    if(callback) console.log('booooo')

  //  })
   
    // $('#books-detail').append(app.render('detail-view-template',ctx));
    //callback();
 // };

  // Book.fetchAll = callback => {
  //   debugger
  //   $.get(`${app.ENVIRONMENT.apiUrl}/books`)
  //   .then((data => Book.loadAll(data)))
  //   // .then(Book.loadAll)
  //   .then(callback())
  //   .catch(errorCallback)};

  module.Book = Book;
  })(app)