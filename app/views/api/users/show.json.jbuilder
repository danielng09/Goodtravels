json.(@user, :username, :created_at)

json.activity_wants @user.activity_wants do |want|
  json.id want.id
  json.title want.title
  json.location want.location
  json.description want.description
  json.image_url want.image_url
end
