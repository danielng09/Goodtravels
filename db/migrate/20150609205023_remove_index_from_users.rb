class RemoveIndexFromUsers < ActiveRecord::Migration
  def change
    remove_index :users, name: 'index_users_on_username'
    add_index :users, :username
  end
end
