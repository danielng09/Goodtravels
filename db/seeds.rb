require_relative 'yelp_data.rb'

User.delete_all
Activity.delete_all
Review.delete_all
Want.delete_all

#users
user_attributes = [
  { username: 'admin', password: 'password' },
  { username: 'Lana', password: 'password', image_url: 'http://s3-ak.buzzfeed.com/static/2014-03/enhanced/webdr03/22/15/enhanced-buzz-13493-1395516498-1.jpg' },
  { username: 'Archer', password: 'password', image_url: 'http://s3-ak.buzzfeed.com/static/2014-03/enhanced/webdr02/22/15/enhanced-buzz-26973-1395516656-0.jpg' },
  { username: 'Cheryl', password: 'password', image_url: 'http://s3-ak.buzzfeed.com/static/2014-03/enhanced/webdr05/22/15/enhanced-buzz-15537-1395516379-11.jpg' },
  { username: 'Cyril', password: 'password', image_url: 'http://s3-ak.buzzfeed.com/static/2014-03/enhanced/webdr06/22/15/enhanced-buzz-24708-1395516082-5.jpg' },
  { username: 'Krieger', password: 'password', image_url: 'http://s3-ak.buzzfeed.com/static/2014-03/enhanced/webdr04/22/15/enhanced-buzz-28685-1395516565-25.jpg' },
  { username: 'Woodhouse', password: "JA0sl294j2s", image_url: "http://res.cloudinary.com/ds6oys8ca/image/upload/v1434420066/woodhouse_jfgxxr.jpg" }
]

users = []
user_attributes.each do |attributes|
  users << User.create(username: attributes[:username], password: attributes[:password], image_url: attributes[:image_url])
end

#activities
activities = []
activities.push(Activity.create(title: "App Academy",
                location: ["1061 Market St #4", "San Francisco, CA 94103"].join('\n'),
                description: "App Academy is an immersive web development and job placement program in San Francisco and New York City. It's San Francisco branch is located in the heart of SF!",
                image_url: "http://res.cloudinary.com/ds6oys8ca/image/upload/c_pad,h_306,w_450/v1435014293/app_academy_nfo9mx.png",
                lat: 37.7816,
                lng: -122.4109
                ))

activities.push(Activity.create(title: "Golden Gate Bridge",
                location: ["Golden Gate Bridge", "California"].join('\n'),
                description: "The Golden Gate Bridge is a suspension bridge spanning the Golden Gate strait, the mile-wide, three-mile-long channel between San Francisco Bay and the Pacific Ocean. The structure links the U.S. city of San Francisco, on the northern tip of the San Francisco Peninsula, to Marin County, bridging both U.S. Route 101 and California State Route 1 across the strait. The bridge is one of the most internationally recognized symbols of San Francisco, California, and the United States. It has been declared one of the Wonders of the Modern World by the American Society of Civil Engineers.",
                image_url: "http://upload.wikimedia.org/wikipedia/commons/0/0c/GoldenGateBridge-001.jpg",
                lat: 37.8197,
                lng: -122.4786
                ))

parse_yelp.each do |data|
  activities.push(Activity.create(data))
end

#reviews
review_combos = []

until review_combos.length == 50 do
  combo = [users.sample.id, activities.sample.id]
  review_combos.push(combo) unless review_combos.include?(combo)
end

ratings = [0, 1, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5]

review_combos.each do |user_id, activity_id|
  Review.create({ activity_id: activity_id,
                  user_id: user_id,
                  body: Faker::Lorem.paragraph(2),
                  rating: ratings.sample
                })
end

# Review.create(activity_id: 2,
#               user_id: 4,
#               body: "Went on a nice day and walked acrossed the bridge. I had a great view of SF while walking across the bridge",
#               rating: 4)
#
# Review.create(activity_id: 2,
#               user_id: 2,
#               body: "I had a rough time finding parking. Still a must-see but beware of the hordes of tourists.",
#               rating: 3)

# wants
want_combos = []
until want_combos.length == 100 do
  combo = [users.sample.id, activities.sample.id]
  want_combos.push(combo) unless want_combos.include?(combo)
end

want_combos.each do |user_id, activity_id|
  Want.create(user_id: user_id, activity_id: activity_id)
end
