Goodtravels.Views.ShowActivity = Backbone.View.extend({
  tagName: 'div',
  className: 'show-activity row',
  template: JST['activities/show'],

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ activity: this.model });
    this.$el.html(content);
    return this;
  },

});
