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
    var url = this.model.escape('image_url');
    url = "http://res.cloudinary.com/ds6oys8ca/image/upload/w_500/" + url.substring(url.lastIndexOf('/') + 1)
    var content = this.template({ activity: this.model, url: url });
    this.$el.html(content);

    setTimeout( function () {
      this.$('div.index-item-stars').raty({
        path: '',
        half: true,
        size: 1,
        readOnly: true,
        score: this.model.get('average_rating'),
      });
    }.bind(this), 0);
    return this;
  },

  linkToActivity: function (event) {
    var activityId = $(event.currentTarget).data('id');
    Backbone.history.navigate('activities/'+ activityId, { trigger: true });
  }

});
