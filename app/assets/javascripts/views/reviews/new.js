Goodtravels.Views.NewReview = Backbone.View.extend({
  template: JST['reviews/new'],

  events: {
    'submit .new-review': 'submitReview',
    // 'click .new-review-stars': 'clickStars'
  },

  initialize: function (options) {
    this.activity_id = options.activity_id;
  },

  render: function () {
    this.$el.html(this.template());

    setTimeout(function () {
      this.$('.new-review-stars').raty({
        path: 'assets',
        click: this.clickStars
      });
    }.bind(this), 100);

    return this;
  },

  clickStars: function () {
    console.log("clicked");
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
