Goodtravels.Views.ShowDetails = Backbone.View.extend({
  template: JST['activities/showDetails'],

  events: {
    'click .want-button':'toggleWant',
    'click .new-review-button': 'openReviewForm'
  },

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      activity: this.model,
    });
    this.$el.html(content);
    this.$('.activity-picture-container').css("background-size", "cover");
    this.$('.activity-picture-container').css("background-position", "center");

    if (this.model.get('user_wanted')) {
      this.$('.want-button').addClass('activity-wanted');
      this.addCheckGlyphicon('.want-button');
    }

    if (this.model.get('user_reviewed')) {
      this.$('.new-review-button').addClass('activity-reviewed disabled');
      this.$el.off('click', '.new-review-button');
      this.$('.new-review-button').text('Reviewed');
      this.addCheckGlyphicon('.new-review-button');
    }

    setTimeout(function () {
      this.$('.activity-detail-stars').raty({
        path: '',
        readOnly: true,
        score: this.model.get('average_rating')
      });
    }.bind(this), 150);

    return this;
  },

  toggleWant: function (event) {
    event.preventDefault();
    if (this.model.get('user_wanted')) {
      var want = new Goodtravels.Models.Want({ id: this.model.get('user_want_id') });
      want.destroy({
        success: function () {
          this.model.fetch();
        }.bind(this)
      });
    } else {
      var want = new Goodtravels.Models.Want({ activity_id: this.model.id });
      want.save({}, {
        success: function () {
          this.model.fetch();
        }.bind(this)
      });
    }
  },

  addCheckGlyphicon: function (selector) {
    var htmlContent = '<span class="glyphicon glyphicon-ok" id="glyphicon-check" aria-hidden="true"></span>';
    this.$(selector).prepend(htmlContent);
  },

  openReviewForm: function () {
    var review = new Goodtravels.Models.Review();
    var modal = new Goodtravels.Views.ReviewForm({
      activity: this.model,
      model: review,
      collection: this.model.reviews(),
    });
    $('body').prepend(modal.render().$el);
  },
});
