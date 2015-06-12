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
    if (!this._user) {
      this._user = new Goodtravels.Models.User({ review: this });
    }

    return this._user;
  }
});
