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
end
