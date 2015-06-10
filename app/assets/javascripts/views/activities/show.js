Goodtravels.Views.ShowActivity = Backbone.CompositeView.extend({
  tagName: 'div',
  className: 'show-activity row',
  template: JST['activities/show'],

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.reviews(), 'add', this.addReviewSubView);
    this.listenTo(this.model.reviews(), 'remove', this.removeReviewSubview);

    var reviewDetailView = new Goodtravels.Views.ShowDetails({ model: this.model });

    this.addSubview('div.activity-details', reviewDetailView);

    this.model.reviews().each(function(review) {
      addReviewSubView(review);
    });

    var newReviewView = new Goodtravels.Views.NewReview({
      collection: this.model.reviews()
    });
    this.addSubview('div.activity-new-review', newReviewView);
  },

  render: function () {
    var content = this.template({ activity: this.model });
    this.$el.html(content);
    this.$el.find('div.activity-reviews').prepend('<h4>Reviews</h4>');


    this.attachSubviews();
    return this;
  },

  addReviewSubView: function (review) {
    var reviewView = new Goodtravels.Views.ReviewItem({
      model: review
    });

    this.addSubview('div.activity-reviews', reviewView);
  },

  removeReviewSubview: function (review) {
    this.removeModelSubview('div.activity-reviews', review);
  }

});
