window.Goodtravels = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var activities = new Goodtravels.Collections.Activities();

    var router = new Goodtravels.Routers.Router({
        $rootEl: $('.backdrop'),
        activities: activities
    });

    var navbar = new Goodtravels.Views.Nav({
      router: router,
      collection: activities
    });

    $('#nav').html(navbar.render().$el);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Goodtravels.initialize();
});
