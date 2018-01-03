class FixLocationTypoInGroups < ActiveRecord::Migration[5.1]
  def change
    rename_column :groups, :locataion, :location
  end
end
