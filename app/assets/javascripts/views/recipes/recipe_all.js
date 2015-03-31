Cookbook.Views.RecipeAll = Backbone.CompositeView.extend({
  template: JST["recipes/all"],

  initialize: function (options) {
    this.food_preferences = options.food_preferences;
    this.food_types = options.food_types;

    this.listenTo(this.food_preferences, 'sync', this.render);
    this.listenTo(this.food_types, 'sync', this.render);
    this.listenTo(this.collection, 'sync', this.render);
  },

  events: {
    "click .new-recipe" : "newRecipeForm"
  },

  newRecipeForm: function () {
    var recipe = new Cookbook.Models.Recipe();

    var newView = new Cookbook.Views.RecipeForm({
      model: recipe,
      collection: this.collection,
      food_preferences: this.food_preferences,
      food_types: this.food_types
    });
    this.$("#recipe-modal").html(newView.render().$el);

    this.$("#recipe-modal").modal();
  },

  addRecipe: function(recipe) {
    var recipeView = new Cookbook.Views.RecipeShow({
      model: recipe,
      collection: this.collection,
      food_preferences: this.food_preferences,
      food_types: this.food_types
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
