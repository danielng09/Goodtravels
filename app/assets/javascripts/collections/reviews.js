Goodtravels.Collections.Reviews = Backbone.Collection.extend({
  url: '/api/reviews',
  model: Goodtravels.Models.Review,

  initialize: function (options) {
    this.activity = options.activity;
  }
});
