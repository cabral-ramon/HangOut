class AddOwnersToGroups < ActiveRecord::Migration[5.1]
  def change
    add_column :groups, :owner_id, :integer
  end
end
