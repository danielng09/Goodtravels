Goodtravels.Views.Search = Backbone.View.extend({
  className: 'activities-search-bar',
  template: JST['activities/search'],

  render: function () {
    var content = this.template({ activity: this.model });
    this.$el.html(content);
    return this;
  }

});
