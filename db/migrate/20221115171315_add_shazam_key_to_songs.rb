class AddShazamKeyToSongs < ActiveRecord::Migration[7.0]
  def change
    add_column :songs, :shazam_id, :integer
  end
end
