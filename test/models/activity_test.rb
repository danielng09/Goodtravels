# == Schema Information
#
# Table name: activities
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  location    :string           not null
#  description :text
#  image_url   :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class ActivityTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
