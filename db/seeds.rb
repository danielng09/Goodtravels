require_relative 'yelp_data.rb'

User.destroy_all
Activity.destroy_all
Review.destroy_all
Want.destroy_all

User.create(username: 'admin', password: 'password')
User.create(username: 'Lana', password: 'password',
            image_url: 'http://s3-ak.buzzfeed.com/static/2014-03/enhanced/webdr03/22/15/enhanced-buzz-13493-1395516498-1.jpg')
User.create(username: 'Archer', password: 'password',
            image_url: 'http://s3-ak.buzzfeed.com/static/2014-03/enhanced/webdr02/22/15/enhanced-buzz-26973-1395516656-0.jpg')
User.create(username: 'Cheryl', password: 'password',
            image_url: 'http://s3-ak.buzzfeed.com/static/2014-03/enhanced/webdr05/22/15/enhanced-buzz-15537-1395516379-11.jpg')
User.create(username: 'Cyril', password: 'password',
            image_url: 'http://s3-ak.buzzfeed.com/static/2014-03/enhanced/webdr06/22/15/enhanced-buzz-24708-1395516082-5.jpg')
User.create(username: 'Krieger', password: 'password',
            image_url: 'http://s3-ak.buzzfeed.com/static/2014-03/enhanced/webdr04/22/15/enhanced-buzz-28685-1395516565-25.jpg')
User.create(username: 'Woodhouse', password: "JA0sl294j2s",
            image_url: "http://res.cloudinary.com/ds6oys8ca/image/upload/v1434420066/woodhouse_jfgxxr.jpg")

Activity.create(title: "App Academy",
                location: ["1061 Market St #4", "San Francisco, CA 94103"].join('\n'),
                description: "Located in the heart of SF!",
                image_url: "http://www.appacademy.io/assets/site/app-academy-logo-sharing.png",
                lat: 37.7816,
                lng: -122.4109
                )

Activity.create(title: "Golden Gate Bridge",
                location: ["Golden Gate Bridge", "California"].join('\n'),
                description: "The iconic landmark of San Francisco!",
                image_url: "http://upload.wikimedia.org/wikipedia/commons/0/0c/GoldenGateBridge-001.jpg",
                lat: 37.8197,
                lng: -122.4786
                )

Activity.create(title: "Twin Peaks",
                location: ["501 Twin Peaks Boulevard", "San Francisco, CA 94114"].join('\n'),
                description: "Renowned, 180-degree views of the Bay Area are offered at this 64-acre park with hiking trails.",
                image_url: 'http://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Twinpeaks_longexposure.jpg/1599px-Twinpeaks_longexposure.jpg',
                lat: 37.781668,
                lng: -122.410920
                )

Review.create(activity_id: 1,
              user_id: 3,
              body: "I had a great time here!",
              rating: 5)

Review.create(activity_id: 2,
              user_id: 4,
              body: "Went on a nice day and walked acrossed the bridge. I had a great view of SF while walking across the bridge",
              rating: 4)

Review.create(activity_id: 2,
              user_id: 2,
              body: "I had a rough time finding parking. Still a must-see but beware of the hordes of tourists.",
              rating: 3)
want_combos = []
100.times do
  want_combos.push([(rand() * 5).round + 1, (rand() * 28).round])
end

want_combos.uniq.each do |user_id, activity_id|
  Want.create(user_id: user_id, activity_id: activity_id)
end

parse_yelp.each do |data|
  Activity.create(data)
end
