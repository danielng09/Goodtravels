Goodtravels.Views.Search = Backbone.View.extend({

  template: JST['activities/search'],

  events: {
    'click .search-button':"search"
  },

  initialize: function (options) {
    this.router = options.router;

    this.searchActivities = new Goodtravels.Collections.SearchedActivities();
    this.searchIndexView = new Goodtravels.Views.ActivitiesIndex({
      collection: this.searchActivities
    });
  },

  render: function () {
    var content = this.template({ activity: this.model });
    this.$el.html(content);
    return this;
  },

  search: function (event) {
    event.preventDefault();
    var searchInput = this.$el.find('.search-form').serializeJSON();
    this.searchActivities.fetch({data: searchInput});

    // this.router._swapView(this.searchIndexView);
    $('.backdrop').html(this.searchIndexView.render().$el);
  },

});
