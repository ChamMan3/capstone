class FolderSerializer < ActiveModel::Serializer
  attributes :id, :title, :details, :user_id
  has_many :songs
  has_one :user
end
