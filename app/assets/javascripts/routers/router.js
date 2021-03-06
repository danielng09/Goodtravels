Goodtravels.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.activities = options.activities;
    this.users = options.users;
  },

  routes: {
    '': 'indexActivities',
    'activities/new':'newActivity',
    'activities/:id/edit':'editActivity',
    'activities/:id':'showActivity',
    'users': 'indexUsers',
    'users/:id/wantlist': 'showWants',
    'users/:id': 'showUser',
  },

  indexActivities: function () {
    this.activities.fetch();
    var indexView = new Goodtravels.Views.ActivitiesIndex({
      collection: this.activities
    });

    this._swapView(indexView);
  },

  showActivity: function (id) {
    var activity = this.activities.getOrFetch(id);
    var currentUser = this.users.getOrFetch(CURRENT_USER_ID);
    var showView = new Goodtravels.Views.ShowActivity({
      model: activity,
      currentUser: currentUser
    });

    this._swapView(showView);
  },

  indexUsers: function () {
    this.users.fetch();
    var usersIndexView = new Goodtravels.Views.UsersIndexView({
      collection: this.users
    });

    this._swapView(usersIndexView);
  },

  showUser: function (id) {
    var user = this.users.getOrFetch(id);
    var userShowView = new Goodtravels.Views.UserShowView({
      model: user
    });

    this._swapView(userShowView);
  },

  showWants: function (id) {
    var user = new Goodtravels.Models.User({ id: id });
    user.fetch();

    var wantsView = new Goodtravels.Views.WantsView({
      model: user
    });

    this._swapView(wantsView);
  },

  _swapView: function (view) {
   this._currentView && this._currentView.remove();
   this._currentView = view;

    this.$rootEl.html(view.$el);
    view.render();
   }
});
