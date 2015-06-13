Goodtravels.Views.ReviewItem = Backbone.View.extend({
  className: 'activity-review-item',
  template: JST['reviews/show'],

  render: function () {
    var content = this.template({
      review: this.model,
      user: this.model.user()
    });
    this.$el.html(content);

    setTimeout( function () {
      this.$('.user-star-rating').raty({
        path: "assets",
        half: true,
        readOnly: true,
        score: this.model.get('rating'),
      });
    }.bind(this), 0);

    return this;
  }
});
