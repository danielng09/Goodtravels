# Phase 5: Filtering Activities

## Rails
### Models
* Bookmark

### Controllers
Api::BookmarksController
Api::ActivitiesController (most_reviewed)
Api::ActivitiesController (top_reviewed)

### Views
users/show.json.jbuilder
activities/most_reviewed.json.jbuilder
activities/most_viewed.json.jbuilder

## Backbone

### Models
* User (parse nested `bookmarks` and `reviews` associations)
* Bookmark

### Collections
* Bookmarks

### Views
* BookmarksIndex (composite view, contains BookmarksIndexItem subview)
* BookmarksIndexItem
* ReviewedIndex (composite view, contains ReviewedIndexItem subview)
* ReviewedIndexItem

## Gems/Libraries
