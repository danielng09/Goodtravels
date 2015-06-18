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

    this.eachSubview(function (subview) {
      subview.remove();
    }.bind(this));

    var sortedCollection = this.collection.sortBy(function (activity) {
      return activity.get('review_count');
    }).reverse();

    sortedCollection.forEach(function (activity) {
      this.addActivitiesIndexItemSubview(activity);
    }.bind(this));

  },

  sortByRatings: function (event) {
    this.eachSubview(function (subview) {
      subview.remove();
    }.bind(this));

    var sortedCollection = this.collection.sortBy(function (activity) {
      return activity.get('average_rating');
    }).reverse();

    sortedCollection.forEach(function (activity) {
      this.addActivitiesIndexItemSubview(activity);
    }.bind(this));
  },

  sortByWants: function (event) {
    this.eachSubview(function (subview) {
      subview.remove();
    }.bind(this));

    var sortedCollection = this.collection.sortBy(function (activity) {
      return activity.get('want_count');
    }).reverse();

    sortedCollection.forEach(function (activity) {
      this.addActivitiesIndexItemSubview(activity);
    }.bind(this));
  },

  sortByAll: function (event) {
    this.eachSubview(function (subview) {
      subview.remove();
    }.bind(this));

    this.render();
  },

});
