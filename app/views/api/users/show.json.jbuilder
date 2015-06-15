json.extract! @user, :username, :image_url
json.created_at @user.created_at.strftime("%m/%d/%Y")

json.wants do
  json.array! @activities do |activity|
    json.extract! activity, :id, :title, :location, :description, :image_url
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
  json.extract! review, :id, :activity_id, :body, :rating
  json.created_at review.created_at.strftime("%m/%d/%Y")
end
