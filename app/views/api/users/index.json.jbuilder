json.array! @users do |user|
  json.extract! user, :username, :id, :image_url
  json.created_at user.created_at.strftime("%m/%d/%Y")
  json.review_count user.reviews.count
  json.want_count user.wants.count
end
