class AddUserRefToArticles < ActiveRecord::Migration[7.0]
  def change
    add_reference :articles, :users, null: false, foreign_key: true
  end
end
