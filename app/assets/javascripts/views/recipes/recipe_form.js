Cookbook.Views.RecipeForm = Backbone.View.extend({
  template: JST["recipes/form"],

  initialize: function (options) {
    this.recipeView = options.recipeView;
    this.food_preferences = options.food_preferences;
    this.food_types = options.food_types;
    this._imageUrl = "";
    this._params = Object.create(null);
    this._params["recipe"] = {
      "image": null
    };
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.food_preferences, 'sync', this.render);
    this.listenTo(this.food_types, 'sync', this.render);
  },

  // events: {
  //   'click button.update-logo': 'pickALogo',
  //   'submit form' : 'submit'
  // },

  render: function () {
    var renderedContent = this.template({
      recipeView: this.recipeView,
      recipe: this.model,
      food_preferences: this.food_preferences,
      food_types: this.food_types
    });
    this.$el.html(renderedContent);
    return this;
  },

  pickImage: function () {
    event.preventDefault();
    var that = this;

    filepicker.pick(
      function(Blob){
        this._params.recipe["image"] = Blob.url;
        $(".recipe-image").attr("src", Blob.url);
      }.bind(this)
    );
  },

  submit: function (event) {
    event.preventDefault();
    var that = this;

    var $form = $(event.currentTarget);
    var params = $form.serializeJSON();
    _.extend(this._params, params);
    this._params.recipe["image"] = $(".recipe-image").attr("src");
    this.model.set(this._params);
    this.model.save({}, {
      success: function () {
        that.collection.add(that.model, { merge: true });
        Backbone.history.navigate("#", { trigger: true });
      }
    });
  }
});
