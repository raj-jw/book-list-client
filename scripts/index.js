'use strict';

var app = app || {};

(function(module){

  let productionApiUrl = 'https://git.heroku.com/jw-raj-booklist.git';
  let developmentApiUrl = 'http://localhost:3000';

  module.isProduction = /^(?!localhost|127)/.test(window.location.hostname);

  module.ENVIRONMENT = {
    apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
  };

  module.showOnly = (selector) => {
    $('.container').hide();
    $(selector).show();
  };

  module.render = (templateId, data) => {
    // console.log('templateID', templateId);
    // console.log('datadata', data);
    let template = Handlebars.compile($(`#${templateId}`).text());
    // console.log('template filled',template(data))
    return template(data);
  };
})(app);