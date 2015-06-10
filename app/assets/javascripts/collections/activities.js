Goodtravels.Collections.Activities = Backbone.Collection.extend({
  url: '/api/activities',
  model: Goodtravels.Models.Activity,

  comparator: function (activity) {

  },

  getOrFetch: function (id) {
    var activity = this.get(id);
    if (!activity) {
      activity = new Goodtravels.Models.Activity({ id: id });
      var activities = this;
      activity.fetch({
        success: function () {
          activities.add(activity);
        }
      });
    } else {
      activity.fetch();
    }

    return activity;
  }
});
