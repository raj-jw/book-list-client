'use strict';
var app = app || {};

(function(module){

  const errorView ={};
  errorView.initErrorPage = function(err){
    $('.container').hide();
    $('.error-view').show();
    $('#error-message').empty();
    $('#error-message').append(app.render('error-template',err));
  };
  let template = Handlebars.compile($('#error-template').text());
    return app.render('#error-message', this);
  module.errorView = errorView;
})(app)