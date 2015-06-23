Goodtravels.Views.Search = Backbone.View.extend({
  template: JST['search/search'],

  events: {
    'click .search-activity-item':'linkToActivity',
    'click .search-user-item':'linkToUser',
  },

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

    this.$('#multiple-datasets .typeahead').typeahead({}, {
      name: 'activities',
      display: 'title',
      source: activities,
      templates: {
        header: '<p class="search-type">Activities</p>',
        suggestion: function (activity) {
          return "<div class='search-activity-item' data-id='" + activity.id + "'>" + activity.title + "</div>";
        }
      },
    }, {
      name: 'users',
      display: 'username',
      source: users,
      templates: {
        header: '<p class="search-type">Users</p>',
        suggestion: function (user) {
          return "<div class='search-user-item' data-id='" + user.id + "'>" + user.username + "</div>";
        }
      }
    });

    return this;
  },

  linkToActivity: function (event) {
    event.preventDefault();
    link = '#activities/' + $(event.currentTarget).data('id');
    $('.tt-input').val('');
    Backbone.history.navigate(link, { trigger: true });
  },

  linkToUser: function (event) {
    event.preventDefault();
    link = '#users/' + $(event.currentTarget).data('id');
    $('.tt-input').val('');
    Backbone.history.navigate(link, { trigger: true });
  },


});
