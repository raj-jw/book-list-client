'use strict';
var app = app || {};

(function(module){
  const bookView = {};
  
  bookView.initIndexPage = () => {
    // $('#book-items').empty(); - maybe necessary? something about ctx...??
    app.showOnly('.book-view');
    app.Book.all.forEach(a => $('#book-list').append(a.toHtml()))};
 
  // bookView.initDetailPage = () => {
  //   $('#book-items').empty();
  //   app.showOnly('')
  // }

  module.bookView=bookView;

})(app);
