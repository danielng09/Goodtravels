Goodtravels.Views.GoodSearch = Backbone.View.extend({
  template: JST['search/search'],

  render: function() {
    var content = this.template();
    this.$el.html(content);
    var users = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('username'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      prefetch: {
        url: 'api/users',
        cache: false
      }
    });

    var activities = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      prefetch: {
        url: 'api/activities',
        cache: false
      }
    });

    activities.initialize();
    users.initialize();

    this.$('#multiple-datasets .typeahead').typeahead({}, {
      name: 'activities',
      display: 'title',
      source: activities,
      templates: {
        header: '<p class="search-cat">Activities</p>',
      },
    }, {
      name: 'users',
      display: 'username',
      source: users,
      templates: {
        header: '<p class="search-cat">Users</p>',
      }
    });

    return this;
  }


});
