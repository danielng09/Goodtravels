class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.string :title, null: false
      t.string :location, null: false
      t.text :description
      t.string :image_url

      t.timestamps null: false
    end
  end
end
