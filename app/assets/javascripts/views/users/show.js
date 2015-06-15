Goodtravels.Views.UserShowView = Backbone.CompositeView.extend({
  events: {
     "click button": "upload"
   },

  template: JST['users/show'],

  initialize: function (options) {
    this.listenTo(this.model.reviews(), 'add', this.addUserSubview);
    this.listenTo(this.model, 'sync', this.render);
    this.model.reviews().each(function(review) {
      this.addUserSubview(review);
    }.bind(this));
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);

    this.attachSubviews();
    return this;
  },

  addUserSubview: function (review) {
    var reviewView = new Goodtravels.Views.UserShowItem({
      model: review
    });

    this.addSubview('.user-reviews', reviewView);
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
