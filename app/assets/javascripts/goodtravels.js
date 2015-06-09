window.Goodtravels = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var activities = new Goodtravels.Collections.Activities();
    var router = new Goodtravels.Routers.Router({
        $rootEl: $('#content'),
        activities: activities
    });
    var navbar = new NavView({
      router: router,
      collection: activities
    });

    $('#nav').html(nav.render().$el);
  }
};

$(document).ready(function(){
  // Goodtravels.initialize();
});
