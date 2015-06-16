Goodtravels.Views.ReviewItem = Backbone.View.extend({
  className: 'activity-review-item',
  template: JST['reviews/show'],

  events: {
    'click .avatar-thumb':'linkToUser'
  },

  initialize: function (options) {
    this.activity = options.activity;
    this.listenTo(this.activity, 'sync', this.render);
    this.$el.attr('data-id', this.model.get('user_id'));
  },

  render: function () {
    var content = this.template({
      review: this.model,
      user: this.model.user()
    });
    this.$el.html(content);

    setTimeout( function () {
      this.$('.review-star-rating').raty({
        path: "assets",
        half: true,
        readOnly: true,
        score: this.model.get('rating'),
      });
    }.bind(this), 0);

    return this;
  },

  linkToUser: function (event) {
    event.preventDefault();
    var userId = this.$el.data('id');
    Backbone.history.navigate('users/'+ userId, { trigger: true });
  }

});
