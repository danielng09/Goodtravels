Goodtravels.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users',

  initialize: function (options) {
    this.review = options.review;
  }
});
