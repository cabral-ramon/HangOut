# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text
#  location    :string           not null
#  group_id    :integer          not null
#  date        :date             not null
#  time        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Event < ApplicationRecord
  validates :name, :location, :group_id, :date, presence: true

  belongs_to :group,
    primary_key: :id,
    foreign_key: :group_id,
    class_name: :Group

  has_many :rsvps,
    primary_key: :id,
    foreign_key: :event_id,
    class_name: "Rsvp"
end
