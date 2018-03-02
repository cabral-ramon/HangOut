class AddCategoryToGroup < ActiveRecord::Migration[5.1]
  def change
    add_column :groups, :category, :string
  end
end
