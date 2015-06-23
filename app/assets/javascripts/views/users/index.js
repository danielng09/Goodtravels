Goodtravels.Views.UsersIndexView = Backbone.CompositeView.extend({
  id: 'users-page',
  className: 'col-md-10 col-md-offset-1',
  template: JST['users/index'],

  events: {
    'click #select-sort-users-reviews':'sortByReviews',
    'click #select-sort-users-wants':'sortByWants',
    'click #select-sort-users-joined':'sortByJoinDate',
    'click #select-sort-users-all':'sortByAll'
  },

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

  sortByReviews: function (event) {
    event.preventDefault();
    this.removeOldViews();

    this.sortCollection('review_count').forEach(function (user) {
      this.addUserSubview(user);
    }.bind(this));
  },

  sortByWants: function (event) {
    event.preventDefault();
    this.removeOldViews();

    this.sortCollection('want_count').forEach(function (user) {
      this.addUserSubview(user);
    }.bind(this));
  },

  sortByJoinDate: function (event) {
    event.preventDefault();
    this.removeOldViews();

    this.sortCollection('created_at').forEach(function (user) {
      this.addUserSubview(user);
    }.bind(this));
  },

  sortByAll: function (event) {
    event.preventDefault();
    this.removeOldViews();

    this.collection.each(function (user) {
      this.addUserSubview(user);
    }.bind(this));
  },

  removeOldViews: function () {
    this.eachSubview(function (subview) {
      subview.remove();
    });
    this._subviews = {};
  },

  sortCollection: function (attribute) {
    return this.collection.sortBy(function (user) {
      return user.get(attribute);
    }).reverse();
  },


});
