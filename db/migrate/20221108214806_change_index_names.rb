class ChangeIndexNames < ActiveRecord::Migration[7.0]
  def change
    rename_column :folders, 'users_id', 'user_id'
    rename_column :songs, 'folders_id', 'folder_id'
    rename_column :articles, 'users_id', 'user_id'
    rename_column :articles, 'folders_id', 'folder_id'
  end
end
