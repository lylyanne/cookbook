Cookbook.Collections.Recipes = Backbone.Collection.extend({
  model: Cookbook.Models.Recipe,
  url: 'api/recipes',

  getOrFetch: function (id) {
    var recipe = this.get(id);
    var recipes = this;

    if(!recipe) {
      recipe = new Cookbook.Models.Recipe({ id: id });
      recipe.fetch({
        success: function () {
          recipes.add(recipe);
        }.bind(this)
      });
    } else {
      recipe.fetch();
    }

    return recipe;
  }
})
