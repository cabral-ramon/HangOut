# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  location        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :session_token, :password_digest, :email, :location, presence:true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 8 }, allow_nil: true
  # validates_email_format_of :email, :message => 'invalid e-mail'

  after_initialize :ensure_session_token!

  attr_reader :password

  has_many :memberships,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :memberships

  has_many :groups,
    through: :memberships,
    source: :group
    
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
