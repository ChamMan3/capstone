class DropAlbumsAndArtists < ActiveRecord::Migration[7.0]
  def change
    drop_table :albums
  end
end
