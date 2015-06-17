Goodtravels.Views.Search = Backbone.View.extend({

  template: JST['activities/search'],

  events: {
    'click .search-button':"search"
  },

  initialize: function () {
    this.searchActivities = new Goodtravels.Collections.SearchedActivities();
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
    var searchIndexView = new Goodtravels.Views.ActivitiesIndex({
      collection: this.searchActivities
    });
    //zombie view?
    $('.backdrop').html(searchIndexView.render().$el);
  },

});
