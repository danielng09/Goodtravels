Goodtravels.Views.NewReview = Backbone.View.extend({
  template: JST['reviews/new'],

  events: {
    'submit .new-review': 'submitReview'
  },

  initialize: function (options) {
    this.activity_id = options.activity_id;
  },

  render: function () {
    this.$el.html(this.template());

    return this;
  },

  submitReview: function (event) {
    event.preventDefault();
    var formData = this.$el.children().serializeJSON();
    var review = new Goodtravels.Models.Review();
    review.set(formData);
    review.set({ "activity_id": this.activity_id });
    var that = this;
    review.save({}, {
      success: function () {
        that.collection.add(review);
      }
    });
  }
});
