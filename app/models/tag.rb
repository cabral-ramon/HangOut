# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  group_id   :integer
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
CATEGORIES = [
  "Outdoors & Adventure", "Tech", "Family", "Health & Wellness",
  "Sports & Fitness", "Learning", "Photography", "Food & Drink",
  "Writing", "Language & Culture", "Music", "Movements", "LGBTQ",
  "Film", "Sci-Fi & Games", "Beliefs", "Arts", "Book Clubs", "Dance",
  "Pets", "Hobbies & Crafts", "Fashion & Beauty", "Social",
  "Career & Business"
  ]
class Tag < ApplicationRecord
  validates :group_id, :name, presence: true
  validates_uniqueness_of :name, scope: :group_id
  validates :name, inclusion: { in: CATEGORIES }

  belongs_to :group
end
