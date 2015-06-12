Goodtravels.Views.ShowDetails = Backbone.View.extend({
  template: JST['activities/showDetails'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      activity: this.model
    });
    this.$el.html(content);

    setTimeout(function () {
      this.$('activity-detail-stars').raty({
        path: 'assets',
      });
    }.bind(this), 150);

    return this;
  }

});
