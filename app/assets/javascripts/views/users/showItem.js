Goodtravels.Views.UserShowItem = Backbone.View.extend({
  template: JST['users/showItem'],

  render: function () {
    var content = this.template({ review: this.model });
    this.$el.html(content);
    return this;
  },
});
