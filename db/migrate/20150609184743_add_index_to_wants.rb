class AddIndexToWants < ActiveRecord::Migration
  def change
    add_index :wants, [:user_id, :activity_id], unique: true
  end
end
