Goodtravels.Views.UserShowView = Backbone.CompositeView.extend({
  className: 'col-md-10 col-md-offset-1',
  id: 'user-show-page',

  events: {
     "click button": "upload"
   },

  template: JST['users/show'],

  initialize: function (options) {
    this.listenTo(this.model.reviews(), 'add', this.addUserReview);
    this.listenTo(this.model.wants(), 'add', this.addUserWant);
    this.listenTo(this.model.wants(), 'remove', this.removeUserWant);

    this.listenTo(this.model, 'sync', this.render);

    this.model.reviews().each(function(review) {
      this.addUserReview(review);
    }.bind(this));

    this.model.wants().each(function(want) {
      this.addUserWant(want);
    }.bind(this));
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);

    this.attachSubviews();
    return this;
  },

  addUserReview: function (review) {
    var reviewView = new Goodtravels.Views.UserShowItem({
      model: review
    });

    this.addSubview('.user-reviews', reviewView);
  },

  addUserWant: function (want) {
    var activityView = new Goodtravels.Views.ActivitiesIndexItem({
      model: want
    });

    this.addSubview('.user-want-list', activityView);
  },

  upload: function (event) {
    event.preventDefault();
    var that = this;
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function (error, result){
      var data = result[0];
      that.model.set({image_url: data.url});
      that.model.save({}, {
        success: function () {
          console.log("success");
        }
      });
    });
  },

});
