Cookbook.Views.RecipeShow = Backbone.View.extend({
  template: JST["recipes/show"],

  events: {
    "click #delete" : "deleteRecipe",
    "click #edit" : "editRecipe"
  },

  initialize: function (options) {
    this.food_preferences = options.food_preferences;
    this.food_types = options.food_types;
    this.listenTo(this.model, 'sync', this.render);
  },

  editRecipe: function () {
    var editView = new Cookbook.Views.RecipeForm({
      model: this.model,
      collection: this.collection,
      food_preferences: this.food_preferences,
      food_types: this.food_types
    });
    $("#recipe-modal").html(editView.render().$el);

    $("#recipe-modal").modal();
  },

  deleteRecipe: function (event) {
    event.preventDefault();
    this.model.destroy({
      success: function () {
        Backbone.history.navigate("#", { trigger: true });
      }
    });
  },

  render: function () {
    var renderedContent = this.template({
      recipe: this.model
    });

    this.$el.html(renderedContent);
    return this;
  }
});
