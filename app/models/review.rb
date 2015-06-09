# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  activity_id :integer          not null
#  user_id     :integer          not null
#  body        :text
#  rating      :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ActiveRecord::Base
  validates :activity_id, :user_id, presence: true
  belongs_to :activity
  belongs_to :users
end
