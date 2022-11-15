class AddImageToSongs < ActiveRecord::Migration[7.0]
  def change
    add_column :songs, :image, :string
    add_column :songs, :genre, :string
  end
end
