# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
FoodType.delete_all
food_types = ["Entree", "Breakfast", "Sides", "Dessert"]
food_types.each { |d| FoodType.where(:name => d).create }
