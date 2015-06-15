json.array! @users do |user|
  json.extract! user, :username, :id, :image_url
  json.created_at user.created_at.strftime("%m/%d/%Y")
end
