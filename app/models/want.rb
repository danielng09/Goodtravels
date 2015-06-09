# == Schema Information
#
# Table name: wants
#
#  id          :integer          not null, primary key
#  user_id     :integer
#  activity_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Want < ActiveRecord::Base
  belongs_to :user
  belongs_to :activity
end
