class AddStuffToSongs < ActiveRecord::Migration[7.0]
  def change
    add_column :songs, :album, :string
    add_column :songs, :artist, :string
  end
end
