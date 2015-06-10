Goodtravels.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.activities = options.activities;
  },

  routes: {
    '': 'index'
  },

  index: function () {
    var indexView = new Goodtravels.Views.

    this._swapView(indexView);
  },

  _swapView: function (view) {
   if (this._currentView) {
     this._currentView.remove();
   }

   this._currentView = view;
   this.$rootEl.html(view.render().$el);
   }
});
