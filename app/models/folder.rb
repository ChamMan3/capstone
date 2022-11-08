class Folder < ApplicationRecord
    has_many :songs, dependent: :destroy
    has_many :articles
    belongs_to :user
end
