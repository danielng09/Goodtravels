Goodtravels.Views.UsersIndexItem = Backbone.View.extend({
  template: JST['users/indexItem'],

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },
});
