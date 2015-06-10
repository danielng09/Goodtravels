Goodtravels.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.activities = options.activities;
  },

  routes: {
    '': 'index',
    'activities/new':'newActivity',
    'activities/:id/edit':'editActivity',
    'activities/:id':'showActivity'
  },

  index: function () {
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

  _swapView: function (view) {
   if (this._currentView) {
     this._currentView.remove();
   }

   this._currentView = view;
   this.$rootEl.html(view.render().$el);
   }
});
