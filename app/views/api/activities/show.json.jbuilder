json.extract! @activity, :id, :title, :location, :description, :image_url
wanted = current_user.wants.pluck(:activity_id).include?(@activity.id)
json.user_wanted wanted
if wanted
  json.user_want_id current_user.wants.find_by_activity_id(@activity.id).id
end
json.user_reviewed current_user.reviews.pluck(:activity_id).include?(@activity.id)

reviews = @reviews.pluck(:rating)
json.review_count reviews.count
unless reviews.empty?
  average_rating = ((reviews.inject(:+) / reviews.count) * 2).round / 2.0
  json.average_rating average_rating
else
  json.average_rating nil
end

json.reviews @activity.reviews do |review|
  json.extract! review, :activity_id, :user_id, :body, :rating
  json.id review.id
  json.created_at review.created_at.strftime("%m/%d/%Y")
  json.user do
    json.extract! review.user, :id, :username, :image_url
  end
end
