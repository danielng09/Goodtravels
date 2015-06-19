Goodtravels.Views.ReviewItem = Backbone.View.extend({
  className: 'activity-review-item',
  template: JST['reviews/show'],

  events: {
    'click button.edit-review':'openReviewForm',
    'click':'linkToUser',
    // 'mouseenter ':'toggleEditButton',
    // 'mouseleave ':'toggleEditButton',
  },

  initialize: function (options) {
    //may need to pass collection of activities
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
        path: "",
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
  },

  // toggleEditButton: function (event) {
  //   if (this.model.get('users_review')) {
  //     $('.edit-review').toggleClass('hidden');
  //   }
  // },

  openReviewForm: function (event) {
    event.stopPropagation();
    var modal = new Goodtravels.Views.ReviewForm({
      activity: this.activity,
      model: this.model, // review
      collection: this.collection // activities reviews
    });
    $('body').prepend(modal.render().$el);
  },

});
