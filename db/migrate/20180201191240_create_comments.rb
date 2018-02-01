class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :author_id, null: false
      t.integer :group_id, null: false
      t.integer :event_id

      t.timestamps
    end
  end
end
