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
    'users/:id': 'showUser'
  },

  indexActivities: function () {
    this.activities.fetch();
    var indexView = new Goodtravels.Views.ActivitiesIndex({
      collection: this.activities
    });

    this._swapView(indexView);
  },

  newActivity: function () {

  },

  editActivity: function () {

  },

  showActivity: function (id) {
    var activity = this.activities.getOrFetch(id);
    var showView = new Goodtravels.Views.ShowActivity({
      model: activity
    });

    this._swapView(showView);
  },

  indexUsers: function () {
    this.users.fetch();
    var usersIndex = new Goodtravels.Views.UsersIndexView({
      collection: this.users
    });

    this._swapView(usersIndex);
  },

  showUser: function (id) {

  },

  _swapView: function (view) {
   if (this._currentView) {
     this._currentView.remove();
   }

   this._currentView = view;
   this.$rootEl.html(view.render().$el);
   }
});
