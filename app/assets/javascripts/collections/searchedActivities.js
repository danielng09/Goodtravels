Goodtravels.Collections.SearchedActivities = Backbone.Collection.extend({
  url: '/api/activities/search',
  model: Goodtravels.Models.Activity,

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
  },

  comparator: function (activity) {
    return activity.get('created_at');
  }
});
