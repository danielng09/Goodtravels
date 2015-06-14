Goodtravels.Views.ShowDetails = Backbone.View.extend({
  template: JST['activities/showDetails'],

  events: {
    'click .want-button':'toggleWant'
  },

  initialize: function (options) {
    this.currentUser = options.currentUser;
    this.listenTo(this.currentUser.wants(), 'add remove', this.render);
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var numReviews = this.model.reviews().length;
    var content = this.template({
      activity: this.model,
      numReviews: numReviews,
    });
    this.$el.html(content);

    if (this.checkIfWantsMatch()) {
      this.$el.find('.want-button').addClass('activity-wanted');
    }

    var sumRatings = 0;
    this.model.reviews().toArray().forEach(function(review) {
      sumRatings += review.get('rating');
    });
    var averageRating = sumRatings / numReviews;
    setTimeout(function () {
      this.$('.activity-detail-stars').raty({
        path: 'assets',
        readOnly: true,
        score: averageRating
      });
    }.bind(this), 150);

    return this;
  },

  findWant: function () {
    return this.currentUser.wants()
               .findWhere({ activity_id: this.model.id });
  },

  checkIfWantsMatch: function () {
    return this.findWant() && this.findWant().length !== 0;
  },

  toggleWant: function (event) {
    event.preventDefault();
    if (this.checkIfWantsMatch()) {
      var want = this.findWant();
      debugger;
      want.destroy({
        success: function () {
          $(event.target).toggleClass('activity-wanted');
          // this.currentUser.wants().remove(want);
        }
      });
    } else {
      var want = new Goodtravels.Models.Want({ activity_id: this.model.id });
      want.save({}, {
        success: function () {
          debugger;
          $(event.target).toggleClass('activity-wanted')
          this.currentUser.wants().add(want);
        }.bind(this)
      });
    }
  }

});
