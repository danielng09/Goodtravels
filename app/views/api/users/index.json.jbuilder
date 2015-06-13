json.array! @users do |user|
  json.username user.username
  json.id user.id
  json.created_at user.created_at.strftime("%m/%d/%Y")
end
