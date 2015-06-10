Goodtravels.Models.Activity = Backbone.Model.extend({
  urlRoot: '/api/activities',

  parse: function (response) {
    if (response.reviews) {
      this.reviews().set(response.reviews);
      delete response.reviews;
    }
    return response;
  },

  reviews: function () {
    if (!this._reviews) {
      this._reviews = new Goodtravels.Collections.Reviews([], { activity: this });
    }

    return this._reviews;
  }

});
