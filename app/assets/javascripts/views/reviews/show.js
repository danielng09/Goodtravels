Goodtravels.Views.ReviewItem = Backbone.View.extend({
  className: 'activity-review-item',
  template: JST['reviews/show'],

  render: function () {
    var content = this.template({
      review: this.model
    });
    this.$el.html(content);
    return this;
  }
});
