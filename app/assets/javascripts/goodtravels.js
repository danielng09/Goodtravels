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

function shorten(text, maxLength) {
    var ret = text;
    if (ret.length > maxLength) {
        ret = ret.substr(0,maxLength-3) + "...";
    }
    return ret;
}
