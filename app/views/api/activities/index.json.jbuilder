json.array! @activities do |activity|
  json.id activity.id
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
