Goodtravels.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users',

  initialize: function (options) {
    this.review = options.review;
  },

//parse (1) reviews (2) wants (3) things done
  parse: function (response) {
    if (response.reviews) {
      this.reviews().set(response.reviews);
      delete response.reviews;
    }

    if (response.wants) {
      this.wants = response.wants;
      delete response.wants;
    }

    return response;
  },

  reviews: function () {
    if (!this._reviews) {
      this._reviews = new Goodtravels.Collections.Reviews([], {});
    }

    return this._reviews;
  },



});
