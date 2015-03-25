class FoodType < ActiveRecord::Base
  validates :name, presence: true

  has_many :recipes
end
