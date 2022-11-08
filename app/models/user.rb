class User < ApplicationRecord
  
    has_many :folders
    has_many :articles
    has_many :songs, through: :folders
    has_secure_password
    validates_presence_of :email
    validates_uniqueness_of :email
    validates :name, presence: true
end
