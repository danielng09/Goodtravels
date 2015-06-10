Goodtravels.Views.ActivitiesIndexItem = Backbone.View.extend({
  tagName: 'div',
  className: 'activities-index-item',
  template: JST['activities/indexItem'],
  events: {
    'click div':'linkToActivity'
  },

  initialize: function (options) {
    this.$el.attr('data-id', this.model.id);
  },

  render: function () {
    var content = this.template({ activity: this.model });
    this.$el.html(content);
    return this;
  },

  linkToActivity: function (event) {
    var activityId = $(event.target).data('id');
    Backbone.history.navigate('activities/'+ activityId, { trigger: true });
  }

});
