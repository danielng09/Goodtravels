class AddCoordinatesToActivities < ActiveRecord::Migration
  def change
    add_column :activities, :lng, :float
    add_column :activities, :lat, :float
  end
end
