class AddOrganizerToEventsTable < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :organizer_id, :integer
  end
end
