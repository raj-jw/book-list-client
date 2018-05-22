'use strict';
var app = app || {};

(function(module){
  const bookView = {};
  
  bookView.initIndexPage = () => {
    app.Book.all.forEach(a => $('#container').append(a.toHtml()))};
  $(document).ready(app.Book.fetchAll(bookView.initIndexPage));

  module.bookView=bookView;

})(app)