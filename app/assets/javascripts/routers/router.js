Cookbook.Routers.Router = Backbone.Router.extend({
  initialize: function($rootEl) {
    this.$rootEl = $rootEl;
  },

  routes: {
    '': 'index'
  },

  index: function () {
    var all_recipes = new Cookbook.Collections.Recipes();
    all_recipes.fetch();

    var index = new Cookbook.Views.RecipeAll({
       collection: all_recipes
    });

    this._swapView(index);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
