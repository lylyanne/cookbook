class Recipe < ActiveRecord::Base
  DIFFICULTIES = ["easy", "medium", "hard"]

  validates :name, :cooking_time, :difficulty,
            :food_type_id, :food_preference_id, :cuisine_id,
            :ingredients, :procedure, :user_id, presence: true
  validates :difficulty, inclusion: { in: DIFFICULTIES }
  validates :procedure, length: { maximum: 500 }
end