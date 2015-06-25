require_relative 'yelp_data.rb'

User.delete_all
Activity.delete_all
Review.delete_all
Want.delete_all

#users
brett = User.create(username: 'Brett', password: 'password')
lana = User.create(username: 'Lana', password: 'password', image_url: 'http://s3-ak.buzzfeed.com/static/2014-03/enhanced/webdr03/22/15/enhanced-buzz-13493-1395516498-1.jpg')
archer = User.create(username: 'Archer', password: 'password', image_url: 'http://s3-ak.buzzfeed.com/static/2014-03/enhanced/webdr02/22/15/enhanced-buzz-26973-1395516656-0.jpg')
cheryl = User.create(username: 'Cheryl', password: 'password', image_url: 'http://s3-ak.buzzfeed.com/static/2014-03/enhanced/webdr05/22/15/enhanced-buzz-15537-1395516379-11.jpg')
cyril = User.create(username: 'Cyril', password: 'password', image_url: 'http://s3-ak.buzzfeed.com/static/2014-03/enhanced/webdr06/22/15/enhanced-buzz-24708-1395516082-5.jpg')
krieger = User.create(username: 'Krieger', password: 'password', image_url: 'http://s3-ak.buzzfeed.com/static/2014-03/enhanced/webdr04/22/15/enhanced-buzz-28685-1395516565-25.jpg')
woodhouse = User.create(username: 'Woodhouse', password: "JA0sl294j2s", image_url: "http://res.cloudinary.com/ds6oys8ca/image/upload/v1434420066/woodhouse_jfgxxr.jpg")

users = [brett, lana, archer, cheryl, cyril, krieger, woodhouse]

#activities
activities = []

activities.push(Activity.create(title: "Golden Gate Bridge",
                location: ["Golden Gate Bridge", "California"].join('\n'),
                description: "The Golden Gate Bridge is a suspension bridge spanning the Golden Gate strait, the mile-wide, three-mile-long channel between San Francisco Bay and the Pacific Ocean. The bridge is one of the most internationally recognized symbols of San Francisco, California, and the United States. It has been declared one of the Wonders of the Modern World by the American Society of Civil Engineers.",
                image_url: "http://upload.wikimedia.org/wikipedia/commons/0/0c/GoldenGateBridge-001.jpg",
                lat: 37.8197,
                lng: -122.4786
                ))

parse_yelp.each do |data|
  activities.push(Activity.create(data))
end

activities.push(Activity.create(title: "App Academy",
                location: ["1061 Market St #4", "San Francisco, CA 94103"].join('\n'),
                description: "App Academy is an immersive web development and job placement program in San Francisco and New York City. It's San Francisco branch is located in the heart of SF!",
                image_url: "http://res.cloudinary.com/ds6oys8ca/image/upload/c_pad,h_306,w_450/v1435014293/app_academy_nfo9mx.png",
                lat: 37.7816,
                lng: -122.4109
                ))

#reviews

archer.reviews.create(activity_id: 1, rating: 5, body: "I drove across the golden gate bridge singing 'Highway to the Danger Zone, I'm gonna take you, Right into the Danger Zone, Highway to the Danger Zone, Right into the Danger Zone'")
cheryl.reviews.create(activity_id: 1, rating: 4, body: "Went on a nice day and walked acrossed the bridge. I had a great view of SF while walking across the bridge")
lana.reviews.create(activity_id: 1, rating: 3, body: "I had a rough time finding parking. Still a must-see but beware of the hordes of tourists.")
cyril.reviews.create(activity_id: 2, rating: 5, body: "Severe case of acrophobia, thought this would be a breeze. Got really fatigued and had a panic attack about midway and turned back around again. There are pretty flowers and it apparently takes you to Coit Tower. 10/10 would have nightmares for the next few days about free falling again.")
lana.reviews.create(activity_id: 2, rating: 4, body: "Definitely a unique way to see San Francisco. And it was even a nice quiet area to enjoy a beautiful view!")
brett.reviews.create(activity_id: 2, rating: 5, body: "For anybody planning on visiting Coit tower, I would recommend taking the 15 minutes to climb up the Filbert steps.  It's great exercise and you get to admire some scenic views and cool neighborhoods on the way")
cyril.reviews.create(activity_id: 3, rating: 3, body: "Situated on top of Telegraph Hill, this tower which is visible from many points in the city is a nice place to come and visit.  For $8, you can take an elevator to the observation deck.  However, it sways a bit and if you're terrified of heights like me, it may be a bit much to handle.")
cheryl.reviews.create(activity_id: 3, rating: 5, body: "Went at daytime, parked at the bottom of the hill then climbed up to see a gorgeous and spectacular view of San Frans. Workout and then chill top-hill.We were unfortunate to get inside the tower,what a bummer! I Think it will be a perfect spot for a romantic picnic!")
krieger.reviews.create(activity_id: 4, rating: 2, body: "Mit höheren Steuern und einer großen Pensionsreform will die griechische Regierung die Gläubiger zufriedenstellen.")
krieger.reviews.create(activity_id: 5, rating: 4, body: "Aus allem, was er fragte, war nur so viel herauszubringen, dass das Kind mehrere Jahre mit Bettlern herumgezogen sei und dass es jetzt da sei. Als der Mann mit seiner Familie zu Abend aß, setzte sich das fremde Kind auch an den Tisch.")

# wants
want_combos = []
until want_combos.length == 100 do
  combo = [users.sample.id, activities.sample.id]
  want_combos.push(combo) unless want_combos.include?(combo)
end

want_combos.each do |user_id, activity_id|
  Want.create(user_id: user_id, activity_id: activity_id)
end
