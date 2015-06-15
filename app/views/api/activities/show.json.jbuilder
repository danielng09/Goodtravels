json.(@activity, :id, :title, :location, :description, :image_url)

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
    json.extract! review.user, :id, :username
  end
end
