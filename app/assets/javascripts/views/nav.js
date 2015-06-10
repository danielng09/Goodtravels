Goodtravels.Views.Nav = Backbone.CompositeView.extend({
  template: JST['activities/nav'],

  initialize: function (options) {
    this.router = options.router;
  },

  render: function () {
    this.$el.html(this.template());

    return this;
  }

});
