class Api::RecipesController < ApplicationController
  def new
    @recipe = Recipe.new
    render json: @recipe
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

  def index
    @recipes = Recipe.all.where(user_id: current_user.id)
    render :json => @recipes
  end

  def edit
  end

  def update
  end

  def show
  end

  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.destroy
    render :json => "success"
  end

  private
  def recipe_params
    params.require(:recipe).permit(:name, :cooking_time, :difficulty,
                      :food_type_id, :food_preference_id, :cuisine_id,
                      :ingredients, :procedure)
  end
end
