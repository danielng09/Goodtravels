json.username @user.username
json.created_at @user.created_at.strftime("%m/%d/%Y")

json.wants @user.activity_wants do |want|
  json.id want.id
  json.title want.title
  json.location want.location
  json.description want.description
  json.image_url want.image_url
end

json.reviews @user.reviews do |review|
  json.id review.id
  json.activity_id review.activity_id
  json.body review.body
  json.rating review.rating
  json.created_at review.created_at.strftime("%m/%d/%Y")
end
