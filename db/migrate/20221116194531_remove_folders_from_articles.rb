class RemoveFoldersFromArticles < ActiveRecord::Migration[7.0]
  def change
    remove_column :articles, :folder_id
  end
end
