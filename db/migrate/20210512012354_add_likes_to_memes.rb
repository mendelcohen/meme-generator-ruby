class AddLikesToMemes < ActiveRecord::Migration[6.0]
  def change
    add_column :memes, :likes, :integer
  end
end
