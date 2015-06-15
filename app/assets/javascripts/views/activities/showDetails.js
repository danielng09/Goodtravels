Goodtravels.Views.ShowDetails = Backbone.View.extend({
  template: JST['activities/showDetails'],

  events: {
    'click .want-button':'toggleWant',
    'click .new-review-button': 'openReviewForm'
  },

  initialize: function (options) {
    this.currentUser = options.currentUser;
    this.listenTo(this.currentUser.wants(), 'add remove', this.render);
    this.listenTo(this.currentUser.reviews(), 'add remove', this.render);
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      activity: this.model,
    });
    this.$el.html(content);

    if (this.checkIfWantsMatch()) {
      this.$('.want-button').addClass('activity-wanted');
      this.addCheckGlyphicon('.want-button');
    }

    if (this.reviewed()) {
      this.$('.new-review-button').addClass('activity-reviewed disabled');
      this.$el.off('click', '.new-review-button');
      this.$('.new-review-button').text('Reviewed');
      this.addCheckGlyphicon('.new-review-button');
    }

    setTimeout(function () {
      this.$('.activity-detail-stars').raty({
        path: 'assets',
        readOnly: true,
        score: this.model.get('average_rating')
      });
    }.bind(this), 150);

    return this;
  },

  findWant: function () {
    return this.currentUser.wants().findWhere({ id: this.model.id });
  },

  checkIfWantsMatch: function () {
    return this.findWant() && this.findWant().length !== 0;
  },

  toggleWant: function (event) {
    event.preventDefault();
    if (this.checkIfWantsMatch()) {
      var want = this.findWant();
      want.destroy({
        success: function () {
          $(event.target).toggleClass('activity-wanted');
        }.bind(this)
      });
    } else {
      var want = new Goodtravels.Models.Want({ activity_id: this.model.id });
      want.save({}, {
        success: function () {
          $(event.target).toggleClass('activity-wanted');
          this.addCheckGlyphicon('.want-button');
          want.set({ id: want.get('activity_id') });
          this.currentUser.wants().add(want);
        }.bind(this)
      });
    }
  },

  reviewed: function () {
    var reviewMatch = this.currentUser.reviews().findWhere({ activity_id: this.model.id });
    return reviewMatch && reviewMatch.length !== 0;
  },

  addCheckGlyphicon: function (selector) {
    var htmlContent = '<span class="glyphicon glyphicon-ok" id="glyphicon-check" aria-hidden="true"></span>';
    this.$(selector).prepend(htmlContent);
  },

  openReviewForm: function () {
    var modal = new Goodtravels.Views.ReviewForm({
      collection: this.model.reviews(),
      activity_id: this.model.id,
      currentUser: this.currentUser
    });
    $('body').prepend(modal.render().$el);
  },
});
