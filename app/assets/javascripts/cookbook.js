window.Cookbook = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},

  initialize: function() {
    var $rootEl =  $('#main');

    new Cookbook.Routers.Router($rootEl);
    Backbone.history.start();
  }
};
