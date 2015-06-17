Goodtravels.Views.ActivitiesIndex = Backbone.CompositeView.extend({
  template: JST['activities/index'],

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

});
