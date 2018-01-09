# == Schema Information
#
# Table name: groups
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  description        :string           not null
#  location           :string
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Group < ApplicationRecord
  validates :name, :description, presence: true
  validates :name, uniqueness: { scope: :location }

  has_attached_file :image, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  has_many :memberships,
    primary_key: :id,
    foreign_key: :group_id,
    class_name: "Membership"

  has_many :members,
    through: :memberships,
    source: :user

  has_many :events,
    primary_key: :id,
    foreign_key: :group_id,
    class_name: "Event"

end
