# == Schema Information
#
# Table name: rsvps
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  event_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Rsvp < ApplicationRecord
  validates :user_id, :event_id, presence: true
  validates_uniqueness_of :user_id, scope: :event_id

  belongs_to :user
  belongs_to :event
end
