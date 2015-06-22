Goodtravels.Views.UsersIndexItem = Backbone.View.extend({
  className: 'users-list-item col-md-6',

  events: {
    'click':'linkToUser'
  },

  template: JST['users/indexItem'],

  initialize: function () {
    this.$el.attr('data-id', this.model.id);
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },

  linkToUser: function (event) {
    event.preventDefault();
    var userId = this.$el.data('id');
    Backbone.history.navigate('users/'+ userId, { trigger: true });
  },

});
