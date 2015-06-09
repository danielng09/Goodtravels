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

require 'test_helper'

class WantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
