class RecipesController < ApplicationController
  def new
    @recipe = Recipe.new
  end

  def create
    @recipe = Recipe.new(recipe_params)
    @recipe.user_id = current_user.id
    if @recipe.save
      redirect_to :index
    else
      flash.now[:errors] = @recipe.errors.full_messages
      render :new
    end
  end

  def index
    @recipes = Recipe.all.where(user_id: current_user.id)
    render :index
  end

  private
  def recipe_params
    params.require(:recipe).permit(:name, :cooking_time, :difficulty,
                      :food_type_id, :food_preference_id, :cuisine_id,
                      :ingredients, :procedure)
  end
end
