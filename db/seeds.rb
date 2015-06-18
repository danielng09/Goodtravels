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
                description: "Located in the heart of SF!",
                image_url: "http://www.appacademy.io/assets/site/app-academy-logo-sharing.png",
                lat: 37.7816,
                lng: -122.4109
                ))

activities.push(Activity.create(title: "Golden Gate Bridge",
                location: ["Golden Gate Bridge", "California"].join('\n'),
                description: "The iconic landmark of San Francisco!",
                image_url: "http://upload.wikimedia.org/wikipedia/commons/0/0c/GoldenGateBridge-001.jpg",
                lat: 37.8197,
                lng: -122.4786
                ))

activities.push(Activity.create(title: "Twin Peaks",
                location: ["501 Twin Peaks Boulevard", "San Francisco, CA 94114"].join('\n'),
                description: "Renowned, 180-degree views of the Bay Area are offered at this 64-acre park with hiking trails.",
                image_url: 'http://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Twinpeaks_longexposure.jpg/1599px-Twinpeaks_longexposure.jpg',
                lat: 37.781668,
                lng: -122.410920
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
