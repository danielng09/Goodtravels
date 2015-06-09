json.(@activity, :id, :title, :location, :description, :image_url)

json.reviews @activity.reviews do |review|
  json.id review.id
  json.activity_id review.activity_id
  json.user_id review.user_id
  json.body review.body
  json.rating review.rating
end
