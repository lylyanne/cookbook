class Api::FoodTypesController < ApplicationController
  def index
    @food_types = FoodType.all
    render :json => @food_types
  end
end
