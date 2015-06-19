Goodtravels.Views.UserShowItem = Backbone.View.extend({
  className: 'user-review-item',
  template: JST['users/showItem'],

  events: {
    'click button.edit-review':'openReviewForm',
    'click':'linkToActivity',
    'mouseenter ':'toggleEditButton',
    'mouseleave ':'toggleEditButton',
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

  openReviewForm: function (event) {
    event.stopPropagation();
    var modal = new Goodtravels.Views.ReviewForm({
      activity_id: this.model.get('activity_id'),
      model: this.model, // review
      collection: this.collection // activities reviews
    });
    $('body').prepend(modal.render().$el);
  },

  linkToActivity: function (event) {
    event.preventDefault();
    var activityId = this.$el.data('id');
    Backbone.history.navigate('activities/'+ activityId, { trigger: true });
  },

  toggleEditButton: function (event) {
    if ($(event.currentTarget).data('id') === this.model.get('activity_id')) {
      $('.edit-review').toggleClass('hidden');
    }
  },

});
