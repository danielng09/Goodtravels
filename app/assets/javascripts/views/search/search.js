Goodtravels.Views.GoodSearch = Backbone.View.extend({
  template: JST['search/search'],

  render: function() {
    var content = this.template();
    this.$el.html(content);
    var users = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('username'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      prefetch: 'api/users'
    });

    var activities = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      prefetch: 'api/activities'
    });

    $('#multiple-datasets .typeahead').typeahead({
      highlight: true
    }, {
      name: 'users',
      display: 'username',
      source: users,
      templates: {
        header: '<h3 class="search-user-name">Users</h3>'
      }
    }, {
      name: 'activities',
      display: 'title',
      source: stories,
      templates: {
        header: '<h3 class="search-activity-name">Stories</h3>'
      }
    });

    return this;
  }

});
