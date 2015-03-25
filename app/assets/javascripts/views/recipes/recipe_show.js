Cookbook.Views.RecipeShow = Backbone.View.extend({
  template: JST["recipes/show"],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({
      recipe: this.model
    });

    this.$el.html(renderedContent);
    return this;
  }
});
