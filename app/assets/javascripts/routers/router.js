Cookbook.Routers.Router = Backbone.Router.extend({
  initialize: function($rootEl) {
    this.$rootEl = $rootEl;
    this.all_recipes = new Cookbook.Collections.Recipes();
    this.all_food_preferences = new Cookbook.Collections.FoodPreferences();
    this.all_food_types = new Cookbook.Collections.FoodTypes();

    this.all_food_preferences.fetch();
    this.all_food_types.fetch();
  },

  routes: {
    '': 'index',
    //'recipes/new': 'recipeNew',
    //'recipes/:id/edit': 'recipeEdit',
  },

  index: function () {
    this.all_recipes.fetch();

    var index = new Cookbook.Views.RecipeAll({
       collection: this.all_recipes,
       food_preferences: this.all_food_preferences,
       food_types: this.all_food_types
    });

    this._swapView(index);
  },

  recipeNew: function () {
    var recipe = new Cookbook.Models.Recipe();

    var newView = new Cookbook.Views.RecipeForm({
      model: recipe,
      collection: this.all_recipes,
      food_preferences: this.all_food_preferences,
      food_types: this.all_food_types
    });

    this._swapView(newView);
  },

  recipeEdit: function (id) {
    var recipe = this.all_recipes.getOrFetch(id);
    var editView = new Cookbook.Views.RecipeForm({
      model: recipe,
      collection: this.all_recipes,
      food_preferences: this.all_food_preferences,
      food_types: this.all_food_types
    });

    this._swapView(editView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
