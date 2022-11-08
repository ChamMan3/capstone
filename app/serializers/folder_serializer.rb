class FolderSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id
  has_many :songs
  has_one :user
end
