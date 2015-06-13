Goodtravels.Views.ShowDetails = Backbone.View.extend({
  template: JST['activities/showDetails'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var numReviews = this.model.reviews().length;

    var content = this.template({
      activity: this.model,
      numReviews: numReviews
    });
    this.$el.html(content);


    var sumRatings = 0;
    this.model.reviews().toArray().forEach(function(review) {
      sumRatings += review.get('rating');
    });
    var averageRating = sumRatings / numReviews;
    setTimeout(function () {
      this.$('.activity-detail-stars').raty({
        path: 'assets',
        readOnly: true,
        score: averageRating
      });
    }.bind(this), 150);

    return this;
  }

});
