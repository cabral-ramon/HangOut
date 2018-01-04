class AddImageColumnToGroups < ActiveRecord::Migration[5.1]
  def change
    add_column :groups, :img_url, :string
  end
end
