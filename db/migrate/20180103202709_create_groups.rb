class CreateGroups < ActiveRecord::Migration[5.1]
  def change
    create_table :groups do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :locataion
    end
    add_index :groups, :name, unique: true
  end
end
