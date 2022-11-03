class FolderSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :songs
end
