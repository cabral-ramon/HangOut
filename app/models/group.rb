# == Schema Information
#
# Table name: groups
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :string           not null
#  location    :string
#  img_url     :string
#

class Group < ApplicationRecord
  validates :name, :description, presence: true
  validates :name, uniqueness: { scope: :location }

  has_attached_file :image, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
