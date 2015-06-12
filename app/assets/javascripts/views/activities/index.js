Goodtravels.Views.ActivitiesIndex = Backbone.CompositeView.extend({
  template: JST['activities/index'],

  events: {
    'click submit.search-bar':"search"
  },

  initialize: function () {
    this.listenTo(this.collection, 'add', this.addActivitiesIndexItemSubview);
    this.listenTo(this.collection, 'remove', this.removeActivitiesIndexItemSubview);
    this.listenTo(this.collection, 'sync', this.render);

    searchView = new Goodtravels.Views.Search();
    this.addSubview('.search-bar', searchView);

    this.collection.each(function (activity) {
      this.addActivitiesIndexItemSubview(activity);
    }.bind(this));
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  },

  addActivitiesIndexItemSubview: function (activity) {
    var ActivitiesIndexItemView = new Goodtravels.Views.ActivitiesIndexItem({
      model: activity
    });

    this.addSubview('div.activities', ActivitiesIndexItemView);
  },

  removeActivitiesIndexItemSubview: function (activity) {
    this.removeModelSubview('div.activities', activity);
  },

  search: function (event) {
    event.preventDefault();
  }

});
