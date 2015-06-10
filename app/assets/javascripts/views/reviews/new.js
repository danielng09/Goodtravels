Goodtravels.Views.NewReview = Backbone.View.extend({
  template: JST['reviews/new'],

  events: {
    'click button': 'submitReview'
  },

  render: function () {
    this.$el.html(this.template());

    return this;
  },

  submitReview: function (event) {
    event.preventDefault();
    var formData = this.$el.serializeJSON();
    var review = new Goodtravels.Models.Review();
    review.set(formData);

    var that = this;
    review.model.save({}, {
      success: function () {
        that.collection.add(review);
      }
    });
  }
});
