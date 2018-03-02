class DropCategoriesFromGroup < ActiveRecord::Migration[5.1]
  def change
    remove_column :groups, :category
  end
end
