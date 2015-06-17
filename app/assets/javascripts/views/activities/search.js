Goodtravels.Views.Search = Backbone.View.extend({

  template: JST['activities/search'],

  events: {
    'click .search-button':"search"
  },

  render: function () {
    var content = this.template({ activity: this.model });
    this.$el.html(content);
    return this;
  },

  search: function (event) {
    event.preventDefault();
    var formData = this.$el.find('.search-form').serializeJSON().searchParams;
    var searchedActivities = new Goodtravels.Collections.SearchedActivities();
    debugger;


    // var searchRegex = new RegExp('' + formData.toLowerCase());
    // var filteredActivities = this.collection.filter(function(activity) {
    //   return !!searchRegex.exec(activity.escape('title').toLowerCase());
    // });
    //
    // this.collection.each(function (activity) {
    //   this.removeActivitiesIndexItemSubview(activity);
    // }.bind(this));
    //
    // filteredActivities.forEach(function (activity) {
    //   this.addActivitiesIndexItemSubview(activity);
    // }.bind(this));

    this.render();
  }

});
