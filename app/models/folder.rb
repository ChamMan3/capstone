class Folder < ApplicationRecord
    has_many :songs
    has_many :articles
    belongs_to :user
end
