'use strict';
var app = app || {};

(function(module){
  const bookView = {};

  bookView.initIndexPage = function(ctx, next) {
    $('#book-list').empty();
    app.showOnly('.book-view');
    module.Book.all.forEach(book => $('#book-list').append(book.toHtml()));
    next();
  }

  bookView.initCreateFormPage = function() {
    app.showOnly('.create-view');
    $('#add-form').on('submit', function(event) {
      event.preventDefault();
      let book = {
        author: event.target.author.value,
        title: event.target.title.value,
        description: event.target.description.value,
        isbn_10: event.target.isbn_10.value,
        image_url: event.target.image_url.value,
        isbn_13: event.target.isbn_13.value

        };
      module.Book.create(book);
    })
  }

  bookView.initDetailPage = function(ctx, next) {
    $('.book-detail').empty();
    app.showOnly('.detail-view');
    
    $('.single-book-view').append(app.render('book-detail-template', ctx.book));

    $('#one-book').on('click', function() {
      page(`/books/${$(this).data('id')}/update`);
    });

    next();
  }

  // bookView.initDetailPage = function() {


  // }
 

  module.bookView = bookView;

})(app);
