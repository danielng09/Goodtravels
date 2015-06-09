class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :activity_id, null: false
      t.integer :user_id, null: false
      t.text :body
      t.integer :rating

      t.timestamps null: false
    end

    add_index :reviews, :activity_id
    add_index :reviews, :user_id
    add_index :reviews, [:user_id, :activity_id], unique: true

  end
end
