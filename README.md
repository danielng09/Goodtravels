# Goodtravels

[Goodtravels link][heroku]

[heroku]: #

## Minimum Viable Product
Goodtravels is a clone of Good Reads built on Rails and Backbone. Users review
travel related content and can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create accounts
- [x] Log in
- [x] View list of activities
- [x] View reviews on an activity
- [x] View average rating and number of reviews
- [x] Write review for activity
- [x] Give rating to activity
- [x] View list of activities reviewed
- [x] Bookmark activity
- [x] View list of bookmarked activities
- [x] Search for activity by name

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication and Activity Views (~1 day)
I will use Rails to implement user authentication and log in. By the end of
this phase, users will be able to access two views - a list of all activities
and show page for a specific activity. The most important part of this phase
will be pushing the app to Heroku and ensuring that everything works before
moving on to phase 2.

[Details][phase-one]

### Phase 2: Viewing and Creating Activity Reviews (~2 days)
I will add API routes to serve activity and review data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, users will be able to view activities as well as rate and review
those activities within a single Backbone app.

[Details][phase-two]

### Phase 3: Searching for Activities (~1 days)
I will add a search function for activities. Users should be able to search for
activities by name.

[Details][phase-three]

### Phase 4: Filtering Activities (~1-2 days)
I will enable users to view activities by selecting filters. Filters will include
their list of bookmarked activities, activities they have reviewed, top rated
activities, and most popular activities.

[Details][phase-four]

### Phase 5: Styling and Bonus Features (~2 days)
I will add styling to the application and implement bonus features if
time permits.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] Create new activities
- [ ] Users can upload photos onto activity page
- [ ] Carousel feature for images in activity detail
- [ ] Pagination/infinite scroll
- [ ] User avatars
- [ ] Google map with pins for activity location
- [ ] Allow friend association between users
- [ ] View another users activities
- [ ] Display closest activities
- [ ] Feed of friend reviews
- [ ] Typeahead search bar
- [ ] Group and search activities by type
- [ ] Add more details to activity such as cost and hours
- [ ] User can comment on another user's review
- [ ] User receives suggested activity based on preferences filter

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
