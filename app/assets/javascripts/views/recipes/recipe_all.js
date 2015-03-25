Cookbook.Views.RecipeAll = Backbone.CompositeView.extend({
  template: JST["recipes/all"],

  initialize: function () {
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
    var renderedContent = this.template({recipes: this.collection});
    this.$el.html(renderedContent);
    //this.renderRecipes();
    return this;
  }
});
