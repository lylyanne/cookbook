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

    var all_food_preferences = new Cookbook.Collections.FoodPreferences();
    all_food_preferences.fetch();

    var index = new Cookbook.Views.RecipeAll({
       collection: all_recipes,
       food_preferences: all_food_preferences
    });

    this._swapView(index);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
