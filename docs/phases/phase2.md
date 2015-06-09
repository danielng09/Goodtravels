# Phase 2: Viewing and Creating Activity Reviews

## Rails
### Models

### Controllers
Api::ActivitiesController (create, destroy, index, show)
Api::ReviewsController (create, destroy, show, update)

### Views
* activities/show.json.jbuilder
* activities/index.json.jbuilder

## Backbone
### Models
* Activity (parses nested `reviews` association)
* Review

### Collections
* Activities
* Reviews

### Views
* ActivitiesIndex (composite view containing ActivitiesIndexItem subviews)
* ActivitiesIndexItem
* ActivityShow (composite view containing ReviewsIndex and Review Form subview)
* ReviewForm
* ReviewIndex (composite view containing ReviewsIndexItem subviews)
* ReviewIndexItem

## Gems/Libraries
* backbone-on-rails
* serializeJSON
