Goodtravels.Views.ShowDetails = Backbone.View.extend({
  template: JST['activities/showDetails'],

  events: {
    'click .want-button':'toggleWant'
  },

  initialize: function (options) {
    this.currentUser = options.currentUser;
    this.listenTo(this.currentUser.wants(), 'add remove', this.render);
    this.listenTo(this.model, 'sync', this.render);
    debugger;
  },

  render: function () {
    var content = this.template({
      activity: this.model,
    });
    this.$el.html(content);

    if (this.checkIfWantsMatch()) {
      this.$el.find('.want-button').addClass('activity-wanted');
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
      want.destroy({
        success: function () {
          $(event.target).toggleClass('activity-wanted');
        }
      });
    } else {
      var want = new Goodtravels.Models.Want({ activity_id: this.model.id });
      want.save({}, {
        success: function () {
          $(event.target).toggleClass('activity-wanted')
          this.currentUser.wants().add(want);
        }.bind(this)
      });
    }
  }

});
