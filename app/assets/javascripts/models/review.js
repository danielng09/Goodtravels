Goodtravels.Models.Review = Backbone.Model.extend({
  urlRoot: '/api/reviews',

  parse: function (response) {
    if (response.user) {
      this.user().set(response.user);
      delete response.user;
    }
    return response;
  },

  user: function () {
    // change this function later to get from Users collection
    // can probably get rid of nested user in api activities
    if (!this._user) {
      this._user = new Goodtravels.Models.User({ review: this });
    }

    return this._user;
  }
});
