Goodtravels.Views.ReviewForm = Backbone.View.extend({
  template: JST["reviews/form"],

  events: {
    'click .close': 'remove',
    'click .m-backdrop': 'remove',
    'submit .new-review': 'submitReview',
  },

  initialize: function (options) {
    this.activity_id = options.activity_id;
    this.currentUser = options.currentUser;
  },

  render: function () {
    this.$el.html(this.template());

    var that = this;
    setTimeout(function () {
      that.$('.new-review-stars').raty({
        path: 'assets',
        half: true,
        click: function (score, event) {
          var roundedScore = (Math.round(score * 2) / 2).toFixed(1);
          that.$('#rating-value').attr('value', roundedScore);
        }
      });
    }.bind(this), 100);

    return this;
  },

  submitReview: function (event) {
    event.preventDefault();
    var formData = this.$('.m-content > form').serializeJSON();
    var review = new Goodtravels.Models.Review(formData);
    review.set({ "activity_id": this.activity_id });
    var that = this;
    review.save({}, {
      success: function () {
        that.collection.add(review);
        that.currentUser.reviews().add(review);
        that.remove();
      }
    });
  }
});
