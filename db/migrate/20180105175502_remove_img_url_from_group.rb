class RemoveImgUrlFromGroup < ActiveRecord::Migration[5.1]
  def change
    remove_column :groups, :img_url
  end
end
