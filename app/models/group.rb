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
#  owner_id           :integer
#

class Group < ApplicationRecord
  validates :name, :description, presence: true
  validates :name, uniqueness: { scope: :location }

  has_attached_file :image,
  :default_url => 'https://s3.us-east-2.amazonaws.com/hangout-pro/groups/images/000/000/108/original/Awesome-Nice-Image.jpg'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  # has_attached_file :image,
  # :default_url => ActionController::Base.helpers.asset_path('missing.jpeg')
  # validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

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

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: "User"

  has_many :comments,
    primary_key: :id,
    foreign_key: :group_id,
    class_name: "Comment"

  has_many :tags,
    primary_key: :id,
    foreign_key: :group_id,
    class_name: "Tag"

  def self.search(query)
    Group.where("
      lower(name) LIKE lower(?) OR
      lower(description) LIKE lower(?) OR
      lower(location) LIKE lower(?)", "%#{query}%", "%#{query}%", "%#{query}%")
  end


end
