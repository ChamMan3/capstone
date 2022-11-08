class AddFolderRefToArticles < ActiveRecord::Migration[7.0]
  def change
    add_reference :articles, :folders, null: false, foreign_key: true
  end
end
