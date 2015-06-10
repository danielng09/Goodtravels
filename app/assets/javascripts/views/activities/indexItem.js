Goodtravels.Views.ActivitiesIndexItem = Backbone.View.extend({
  className: 'activities-index-item',
  template: JST['activities/indexItem'],
  events: {
    'click':'linkToActivity'
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
    var activityId = $(event.currentTarget).data('id');
    Backbone.history.navigate('activities/'+ activityId, { trigger: true });
  }

});
