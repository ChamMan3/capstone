class AddUserRefToFolders < ActiveRecord::Migration[7.0]
  def change
    add_reference :folders, :users, null: false, foreign_key: true
  end
end
