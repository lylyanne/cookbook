class Recipe < ActiveRecord::Base
  DIFFICULTIES = ["easy", "medium", "hard"]

  validates :name, :cooking_time, :difficulty,
            :food_type_id, :food_preference_id, :cuisine_id,
            :ingredients, :procedure, :user_id, :image,
            presence: true
  validates :difficulty, inclusion: { in: DIFFICULTIES }
  validates :procedure, length: { maximum: 500 }

  after_initialize :ensure_image

  belongs_to :food_type
  belongs_to :food_preference
  belongs_to :cuisine
  belongs_to :user

  private
  def ensure_image
    self.image ||= "https://www.filepicker.io/api/file/gYepEQcSS8WY0AOkHdNf"
  end
end
