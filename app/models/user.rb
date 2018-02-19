# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  username           :string           not null
#  email              :string           not null
#  location           :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ApplicationRecord
  validates :username, :session_token, :password_digest, :email, :location, presence:true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 8 }, allow_nil: true

  has_attached_file :image, default_url: "/app/assets/images/default.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  after_initialize :ensure_session_token!

  attr_reader :password

  has_many :memberships,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "Membership"

  has_many :groups,
    through: :memberships,
    source: :group

  has_many :rsvps,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "Rsvp"

  has_many :owned_groups,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: "Group"

  has_many :events,
    primary_key: :id,
    foreign_key: :organizer_id,
    class_name: :Event

  has_many :comments,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "Comment"

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user
    user.is_password?(password) ? user: nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = new_session_token
    save!
    self.session_token
  end

  def new_session_token
    self.session_token = SecureRandom.urlsafe_base64
  end

  private


  def ensure_session_token!
    new_session_token unless self.new_session_token
  end

end
