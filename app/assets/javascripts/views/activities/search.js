Goodtravels.Views.Search = Backbone.View.extend({
  tagName: 'form',

  className: 'search-form',
  template: JST['activities/search'],

  render: function () {
    var content = this.template({ activity: this.model });
    this.$el.html(content);
    return this;
  }

});
