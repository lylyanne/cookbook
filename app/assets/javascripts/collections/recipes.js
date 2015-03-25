Cookbook.Collections.Recipes = Backbone.Collection.extend({
  model: Cookbook.Models.Recipe,
  url: 'api/recipes'
})
