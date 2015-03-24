# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
FoodType.delete_all
FoodPreference.delete_all
Cuisine.delete_all

food_types = ["Entree", "Breakfast", "Sides", "Dessert"]
food_types.each { |d| FoodType.where(:name => d).first_or_create }

food_preferences = ["Vegetarian", "Non-vegetarian"]
food_preferences.each{|d| FoodPreference.where(:name => d).first_or_create}

cuisines = ["American", "Chinese", "Italian"]
cuisines.each{|d| Cuisine.where(:name => d).first_or_create}
