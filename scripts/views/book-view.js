'use strict';
var app = app || {};

(function(module){
  const bookView = {};
  
  bookView.initIndexPage = function(ctx) {
    $('#book-list').empty();
    app.showOnly('.book-view');
    module.Book.all.forEach(book => $('#book-list').append(book.toHtml()));
    
  }
 
  bookView.initDetailPage = function(ctx) {
    $('.book-detail').empty();
    app.showOnly('.detail-view');
    
    $('.book-detail').append(app.render('book-detail-template', ctx.book));

  }

  bookView.initCreateFormPage = function() {
    app.showOnly('.create-view');
    
    $('#create-form').on('submit', function(event) {
      event.preventDefault();

      let book = {
        title: event.target.title.value,
        author: event.target.author.value,
        isbn: event.target.isbn.value,
        image_url: event.target.image_url.value,
        description: event.target.description.value,
      };

      module.Book.create(book);
    })
  }

  module.bookView=bookView;

})(app);
