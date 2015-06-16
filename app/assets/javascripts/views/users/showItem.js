Goodtravels.Views.UserShowItem = Backbone.View.extend({
  className: 'user-review-item',
  template: JST['users/showItem'],

  events: {
    'click .activity-thumb':'linkToActivity'
  },

  initialize: function () {
    this.$el.attr('data-id', this.model.get('activity_id'));
  },

  render: function () {
    var content = this.template({ review: this.model });
    this.$el.html(content);

    setTimeout( function () {
      this.$('.profile-review-star-rating').raty({
        path: "",
        half: true,
        readOnly: true,
        score: this.model.get('rating'),
      });
    }.bind(this), 0);

    return this;
  },

  linkToActivity: function (event) {
    event.preventDefault();
    var activityId = this.$el.data('id');
    Backbone.history.navigate('activities/'+ activityId, { trigger: true });
  }

});
