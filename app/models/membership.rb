class Membership < ApplicationRecord
  validates :user_id, :group_id, presence: true
  validates_uniqueness_of :user_id, scope: :group_id

  belongs_to :user
  belongs_to :group
end
