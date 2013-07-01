/*global Ember */

(function (window) {
  var App = window.App = Ember.Application.create();

  App.Router.map(function () {
    // put your routes here
  });

  App.IndexRoute = Ember.Route.extend({
    model: function () {
        return [{ text: 'green', children: [{ text: "sd", children: [] }] },
          { text: 'yellow', children: [] }, { text: 'blue', children: [] }];
    }
  });
})(this);
