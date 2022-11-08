class AddFolderRefToSongs < ActiveRecord::Migration[7.0]
  def change
    add_reference :songs, :folders, null: false, foreign_key: true
  end
end
