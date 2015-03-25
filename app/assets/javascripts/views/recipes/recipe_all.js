Cookbook.Views.RecipeAll = Backbone.CompositeView.extend({
  template: JST["recipes/all"],

  initialize: function (options) {
    this.food_preferences = options.food_preferences;
    this.listenTo(this.food_preferences, 'sync', this.render);
    this.listenTo(this.collection, 'sync', this.render);
  },

  addRecipe: function(recipe) {
    var recipeView = new Cookbook.Views.RecipeShow({
      model: recipe
    });

    this.addSubview(".recipe", recipeView);
  },

  renderRecipes: function () {
    this.collection.each(this.addRecipe.bind(this));
  },

  render: function () {
    var renderedContent = this.template({
      recipes: this.collection,
      food_preferences: this.food_preferences
      });
    this.$el.html(renderedContent);
    this.renderRecipes();
    return this;
  }
});
