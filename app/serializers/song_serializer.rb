class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :lyrics
end
