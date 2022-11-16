class Folder < ApplicationRecord
    has_many :songs, dependent: :destroy
    belongs_to :user
    validates :title, presence: true
end
