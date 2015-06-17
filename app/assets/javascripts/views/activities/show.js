Goodtravels.Views.ShowActivity = Backbone.CompositeView.extend({
  className: 'show-activity row',
  template: JST['activities/show'],

  initialize: function (options) {
    this.currentUser = options.currentUser;

    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.reviews(), 'sync', this.render);
    this.listenTo(this.model.reviews(), 'add', this.addReviewSubView);
    this.listenTo(this.model.reviews(), 'remove', this.removeReviewSubview);

    var reviewDetailView = new Goodtravels.Views.ShowDetails({
      model: this.model,
      currentUser: this.currentUser
    });

    this.addSubview('div.activity-details', reviewDetailView);

    this.model.reviews().each(function(review) {
      this.addReviewSubView(review);
    }.bind(this));

    this.mapView = new Goodtravels.Views.MapShow({ model: this.model });
  },

  render: function () {
    var content = this.template({ activity: this.model });
    this.$el.html(content);
    this.attachSubviews();

    this.$('.activity-map').html(this.mapView.$el);
    this.mapView.initMap();

    return this;
  },

  addReviewSubView: function (review) {
    var reviewView = new Goodtravels.Views.ReviewItem({
      activity: this.model,
      model: review
    });

    this.addSubview('div.activity-reviews', reviewView);
  },

  removeReviewSubview: function (review) {
    this.removeModelSubview('div.activity-reviews', review);
  }

});
