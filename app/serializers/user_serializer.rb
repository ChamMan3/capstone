class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password_digest, :email
  has_many :folders
end
