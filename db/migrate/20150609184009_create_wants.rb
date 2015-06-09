class CreateWants < ActiveRecord::Migration
  def change
    create_table :wants do |t|
      t.integer :user_id
      t.integer :activity_id

      t.timestamps null: false
    end

    add_index :wants, :user_id
    add_index :wants, :activity_id
  end
end
