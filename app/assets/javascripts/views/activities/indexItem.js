Goodtravels.Views.ActivitiesIndexItem = Backbone.View.extend({

  className: 'activities-index-item col-md-3',
  template: JST['activities/indexItem'],
  events: {
    'click':'linkToActivity'
  },

  initialize: function (options) {
    this.$el.attr('data-id', this.model.id);
    this.$el.css('background', 'url("' + this.model.escape('image_url') + '")');
    this.$el.css("background-size", "cover");
  },

  render: function () {
    var content = this.template({ activity: this.model });
    this.$el.html(content);

    setTimeout( function () {

      this.$('div.index-item-stars').raty({
        path: 'assets',
        half: true,
        // readOnly: true,
      });
    }.bind(this), 0);
    return this;
  },

  linkToActivity: function (event) {
    var activityId = $(event.currentTarget).data('id');
    Backbone.history.navigate('activities/'+ activityId, { trigger: true });
  }

});
