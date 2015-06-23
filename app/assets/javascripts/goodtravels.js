window.Goodtravels = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var activities = new Goodtravels.Collections.Activities();
    var users = new Goodtravels.Collections.Users();

    var router = new Goodtravels.Routers.Router({
        $rootEl: $('.backdrop'),
        activities: activities,
        users: users
    });

    Backbone.history.start();
    var search = new Goodtravels.Views.GoodSearch({ router: router });
    $('#search-bar-placeholder').html(search.render().$el);
  }
};

$(document).ready(function(){
  Goodtravels.initialize();
});
