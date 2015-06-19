json.extract! @activity, :id, :title, :location, :description, :image_url, :lng, :lat

#wanted or reviewed by current_user
wanted = current_user.wants.pluck(:activity_id).include?(@activity.id)
json.user_wanted wanted
if wanted
  json.user_want_id current_user.wants.find_by_activity_id(@activity.id).id
end
json.user_reviewed current_user.reviews.pluck(:activity_id).include?(@activity.id)

#average ratings & review count
reviews = @reviews.pluck(:rating)
json.review_count reviews.count
unless reviews.empty?
  average_rating = ((reviews.inject(:+) / reviews.count) * 2).round / 2.0
  json.average_rating average_rating
else
  json.average_rating nil
end

#reviews
json.reviews @activity.reviews do |review|
  json.extract! review, :activity_id, :user_id, :body, :rating
  json.id review.id
  json.created_at review.created_at.strftime("%m/%d/%Y")
  json.users_review review.user_id == current_user.id
  json.user do
    json.extract! review.user, :id, :username, :image_url
  end
end
