Goodtravels.Views.UsersIndexView = Backbone.CompositeView.extend({
  id: 'users-page',
  className: 'col-md-10 col-md-offset-1',
  template: JST['users/index'],

  initialize: function (options) {
    this.listenTo(this.collection, 'add', this.addUserSubview);
    this.listenTo(this.collection, 'sync', this.render);

    this.collection.each(function(user) {
      this.addUserSubview(user);
    }.bind(this));
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    this.attachSubviews();
    return this;
  },

  addUserSubview: function (user) {
    var reviewView = new Goodtravels.Views.UsersIndexItem({
      model: user
    });

    this.addSubview('.users-index', reviewView);
  },

});
