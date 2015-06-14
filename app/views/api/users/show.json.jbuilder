json.username @user.username
json.created_at @user.created_at.strftime("%m/%d/%Y")

# json.wants @user.activity_wants.pluck(:id)
json.wants do
  json.array! @activities do |activity|
    json.activity_id activity.id
    json.title activity.title
    json.location activity.location
    json.description activity.description
    json.image_url activity.image_url
    reviews = activity.reviews.pluck(:rating)
    json.review_count reviews.count
    unless reviews.empty?
      average_rating = ((reviews.inject(:+) / reviews.count) * 2).round / 2.0
      json.average_rating average_rating
    else
      json.average_rating nil
    end
  end
end

json.reviews @user.reviews do |review|
  json.id review.id
  json.activity_id review.activity_id
  json.body review.body
  json.rating review.rating
  json.created_at review.created_at.strftime("%m/%d/%Y")
end
