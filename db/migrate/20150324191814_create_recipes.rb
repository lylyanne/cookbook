class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :name, null: false
      t.string :cooking_time, null: false
      t.string :difficulty, null: false
      t.integer :food_type_id, null: false
      t.integer :food_preference_id, null: false
      t.integer :cuisine_id, null: false
      t.text :ingredients, null: false
      t.text :procedure, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
 
  end
end
