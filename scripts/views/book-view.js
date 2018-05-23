'use strict';
var app = app || {};

(function(module){
  const bookView = {};
  
  bookView.initIndexPage = () => {
    app.showOnly('.book-view');
    app.Book.all.forEach(a => $('#book-list').append(a.toHtml()))};
 

  module.bookView=bookView;

})(app);
