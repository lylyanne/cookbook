class Api::FoodPreferencesController < ApplicationController
  def index
    @food_preferences = FoodPreference.all
    render :json => @food_preferences
  end
end
