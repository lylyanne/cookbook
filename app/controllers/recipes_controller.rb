class RecipesController < ApplicationController
  def new
    @recipe = Recipe.new
    render :new
  end

  def create
    @recipe = Recipe.new(recipe_params)
    @recipe.user_id = current_user.id
    if @recipe.save
      render :json => @recipe
    else
      render :json => @recipe.errors, :status => :unprocessable_entity
    end
  end

  private
  def recipe_params
    params.require(:recipe).permit(:name, :cooking_time, :difficulty,
    :food_type_id, :food_preference_id, :cuisine_id,
    :ingredients, :procedure, :image)
  end
end
