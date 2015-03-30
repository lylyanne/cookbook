Cookbook.Views.RecipeShow = Backbone.View.extend({
  template: JST["recipes/show"],

  events: {
    "click #delete" : "deleteRecipe"
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
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
