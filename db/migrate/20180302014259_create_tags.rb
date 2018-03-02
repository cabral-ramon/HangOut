class CreateTags < ActiveRecord::Migration[5.1]
  def change
    create_table :tags do |t|
      t.integer :group_id
      t.string :name

      t.timestamps
    end
  end
end
