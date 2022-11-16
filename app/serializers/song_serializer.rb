class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :lyrics, :genre, :shazam_id, :artist, :image, :folder_id
end
