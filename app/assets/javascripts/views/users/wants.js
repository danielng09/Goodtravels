Goodtravels.Views.WantsView = Backbone.CompositeView.extend({
  className: 'want-list',
  template: JST['users/wants'],

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.wants(), 'add', this.addWantSubview);

    this.model.wants().each(function(activity) {
      this.addWantSubview(activity);
    }.bind(this));
  },

  render: function () {
    this.$el.html(this.template());
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
