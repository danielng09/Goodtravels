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

    Backbone.history.start();
  }
};

$(document).ready(function(){
  Goodtravels.initialize();
});
