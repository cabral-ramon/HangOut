# == Schema Information
#
# Table name: events
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  description  :text
#  location     :string           not null
#  group_id     :integer          not null
#  date         :date             not null
#  time         :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  organizer_id :integer
#

class Event < ApplicationRecord
  validates :name, :location, :group_id, :date, presence: true

  belongs_to :group,
    primary_key: :id,
    foreign_key: :group_id,
    class_name: :Group

  belongs_to :organizer,
    primary_key: :id,
    foreign_key: :organizer_id,
    class_name: :User

  has_many :rsvps,
    primary_key: :id,
    foreign_key: :event_id,
    class_name: "Rsvp"

  has_many :comments,
    primary_key: :id,
    foreign_key: :event_id,
    class_name: "Comment"
end
