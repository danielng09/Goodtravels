json.array! @activities do |activity|
  json.extract! activity, :id, :title, :location, :description, :image_url
  reviews = activity.reviews.pluck(:rating)
  json.review_count reviews.count
  json.want_count activity.wants.count
  unless reviews.empty?
    average_rating = ((reviews.inject(:+) / reviews.count) * 2).round / 2.0
    json.average_rating average_rating
  else
    json.average_rating nil
  end
end
