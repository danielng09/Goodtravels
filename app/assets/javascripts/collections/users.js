Goodtravels.Collections.Users = Backbone.Collection.extend({
  url: '/api/users',
  model: Goodtravels.Models.User,

  getOrFetch: function (id) {
    var user = this.get(id);
    if (!user) {
      user = new Goodtravels.Models.User({ id: id });
      var users = this;
      user.fetch({
        success: function () {
          users.add(user);
        }
      });
    } else {
      user.fetch();
    }

    return user;
  }
});
