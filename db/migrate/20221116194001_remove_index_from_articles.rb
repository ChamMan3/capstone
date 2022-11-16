class RemoveIndexFromArticles < ActiveRecord::Migration[7.0]
  def change
    remove_index :articles, column: :folder_id
  end
end
