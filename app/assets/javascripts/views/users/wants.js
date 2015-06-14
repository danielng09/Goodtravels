Goodtravels.Views.WantsView = Backbone.CompositeView.extend({
  template: JST['users/wants'],

//model is user
//collection is activities
//when model is actually fetched, filter activities again
  initialize: function (options) {
    // this.listenTo(this.model.reviews(), 'add', this.addUserSubview);
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'sync', this.render);
    //
    setTimeout( function () {
      this.filterActivities().forEach(function(activity) {
        this.addWantSubview(activity);
      }.bind(this));
    }.bind(this), 150);
  },

  filterActivities: function () {
    return this.collection.filter(function(activity) {
      if (this.model.wants.indexOf(activity.id) === -1) {
        return false;
      } else {
        return true;
      }
    }.bind(this));
  },


  render: function () {
    var filteredActivities = this.filterActivities();
    var content = this.template();

    this.$el.html(content);

    this.attachSubviews();
    return this;
  },

  addWantSubview: function (activity) {
    var wantSubview = new Goodtravels.Views.ActivitiesIndexItem({
      model: activity
    });

    this.addSubview('div.want-list', wantSubview);
  },

});
