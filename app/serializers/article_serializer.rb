class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :user_id
  has_one :user
end
