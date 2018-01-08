# == Schema Information
#
# Table name: memberships
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  group_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Membership < ApplicationRecord
  validates :user_id, :group_id, presence: true
  validates_uniqueness_of :user_id, scope: :group_id

  belongs_to :user
  belongs_to :group
end
