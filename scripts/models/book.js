'use strict';

var app = app || {};

(function(module) {
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  function Book(bookObject) {
    Object.keys(bookObject).forEach(key => this[key] = taskObject[key]);
  }

  Task.prototype.toHtml = function() {
    return app.render('task-template', this);
  }

  Task.all = [];

  Task.loadAll = rows => {
    Task.all = rows.sort((a, b) => b.title - a.title).map(task => new Task(task));
  }

  Task.fetchAll = callback =>
    $.get(`${app.ENVIRONMENT.apiUrl}/tasks`)
      .then((data => Task.loadAll(data))
      .then(Task.loadAll)
      .then(callback)
      .catch(errorCallback);

  module.Task = Task;
})(app)