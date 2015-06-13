Goodtravels.Views.ShowDetails = Backbone.View.extend({
  template: JST['activities/showDetails'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      activity: this.model
    });
    this.$el.html(content);

    var numRatings = this.model.reviews().length;
    var sumRatings = 0;
    this.model.reviews().toArray().forEach(function(review) {
      sumRatings += review.get('rating');
    });
    var averageRating = sumRatings / numRatings;
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
