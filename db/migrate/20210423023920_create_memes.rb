class CreateMemes < ActiveRecord::Migration[6.0]
  def change
    create_table :memes do |t|
      t.string :bottom_text
      t.string :img_url
      t.string :top_text
      t.integer :user_id

      t.timestamps
    end
  end
end
