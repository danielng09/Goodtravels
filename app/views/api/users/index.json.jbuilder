json.array! @users do |user|
  json.extract! user, :username, :id
  json.created_at user.created_at.strftime("%m/%d/%Y")
end
