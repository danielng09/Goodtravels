Goodtravels.Views.UserShowView = Backbone.CompositeView.extend({
  template: JST['users/show'],

  initialize: function (options) {
    this.listenTo(this.model.reviews(), 'add', this.addUserSubview);
    this.listenTo(this.model, 'sync', this.render);
    // this.listenTo(this.collection, 'remove', this.removeReviewSubview);
    this.model.reviews().each(function(review) {
      this.addUserSubview(review);
    }.bind(this));

  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);

    this.attachSubviews();
    return this;
  },

  addUserSubview: function (review) {
    var reviewView = new Goodtravels.Views.UserShowItem({
      model: review
    });

    this.addSubview('.user-reviews', reviewView);
  },

});
