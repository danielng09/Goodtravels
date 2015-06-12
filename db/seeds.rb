require_relative 'yelp_data.rb'

User.destroy_all
Activity.destroy_all
Review.destroy_all
Want.destroy_all

User.create(username: 'admin', password: 'password')
User.create(username: 'vince', password: 'password')
User.create(username: 'e', password: 'password')
User.create(username: 'turtle', password: 'password')
User.create(username: 'guest', password: "JA0sl294j2s")

Activity.create(title: "App Academy",
                location: "1061 Market St #4, San Francisco, CA 94103",
                description: "Located in the heart of SF!",
                image_url: "http://www.appacademy.io/assets/site/app-academy-logo-sharing.png")

Activity.create(title: "Golden Gate Bridge",
                location: "Golden Gate Bridge, California",
                description: "The iconic landmark of San Francisco!",
                image_url: "http://upload.wikimedia.org/wikipedia/commons/0/0c/GoldenGateBridge-001.jpg")

Activity.create(title: "Twin Peaks",
                location: "501 Twin Peaks Boulevard, San Francisco, CA 94114",
                description: "Renowned, 180-degree views of the Bay Area are offered at this 64-acre park with hiking trails.",
                image_url: 'http://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Twinpeaks_longexposure.jpg/1599px-Twinpeaks_longexposure.jpg'
                )

Review.create(activity_id: 1,
              user_id: 3,
              body: "I was part of the April 2015 cohort and had an awesome time!",
              rating: 5)

Review.create(activity_id: 2,
              user_id: 4,
              body: "Went on a nice day and walked acrossed the bridge. I had a great view of SF while walking across the bridge",
              rating: 4)

Review.create(activity_id: 2,
              user_id: 2,
              body: "I had a rough time finding parking. Still a must-see but beware of the hordes of tourists.",
              rating: 3)

Want.create(user_id: 4, activity_id: 1)

Want.create(user_id: 4, activity_id: 2)

parse_yelp.each do |data|
  Activity.create(data)
end
