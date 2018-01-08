class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.text :description
      t.string :location, null: false
      t.integer :group_id, null: false
      t.date :date, null: false
      t.string :time

      t.timestamps
    end
    add_index :events, :group_id
  end
end
