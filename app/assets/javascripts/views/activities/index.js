Goodtravels.Views.ActivitiesIndex = Backbone.CompositeView.extend({
  className: "activities col-md-10 col-md-offset-1",
  template: JST['activities/index'],

  events: {
    'click #select-sort-reviews':'sortByReviews',
    'click #select-sort-ratings':'sortByRatings',
    'click #select-sort-wants':'sortByWants',
    'click #select-sort-all':'sortByAll'
  },

  initialize: function () {
    this.listenTo(this.collection, 'add', this.addActivitiesIndexItemSubview);
    this.listenTo(this.collection, 'remove', this.removeActivitiesIndexItemSubview);
    this.listenTo(this.collection, 'sync', this.render);

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
    var activitiesIndexItemView = new Goodtravels.Views.ActivitiesIndexItem({
      model: activity
    });
    this.addSubview('div.activities', activitiesIndexItemView);
  },

  removeActivitiesIndexItemSubview: function (activity) {
    this.removeModelSubview('div.activities', activity);
  },

  sortByReviews: function (event) {
    event.preventDefault();
    this.removeOldViews();

    this.sortCollection('review_count').forEach(function (activity) {
      this.addActivitiesIndexItemSubview(activity);
    }.bind(this));

  },

  sortByRatings: function (event) {
    event.preventDefault();
    this.removeOldViews();

    this.sortCollection('average_rating').forEach(function (activity) {
      this.addActivitiesIndexItemSubview(activity);
    }.bind(this));
  },

  sortByWants: function (event) {
    event.preventDefault();
    this.removeOldViews();

    this.sortCollection('want_count').forEach(function (activity) {
      this.addActivitiesIndexItemSubview(activity);
    }.bind(this));
  },

  sortByAll: function (event) {
    event.preventDefault();
    this.removeOldViews();

    this.collection.each(function (activity) {
      this.addActivitiesIndexItemSubview(activity);
    }.bind(this));
  },

  removeOldViews: function () {
    this.eachSubview(function (subview) {
      subview.remove();
    });
    this._subviews = {};
  },

  sortCollection: function (attribute) {
    return this.collection.sortBy(function (activity) {
      return activity.get(attribute);
    }).reverse();
  },

});
