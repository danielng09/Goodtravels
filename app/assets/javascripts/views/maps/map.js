Goodtravels.Views.MapShow = Backbone.View.extend({
  // Initialization
  attributes: {
    id: "map-canvas"
  },

  initialize: function () {
    this._markers = {};
  },

  initMap: function () {
    // Call this method `render` if you like; I've changed the name so users
    // need to be deliberate about calling it. The important part is that the
    // map object should only be instantiated ONCE for a given MapShow view.
    var mapOptions = {
      center: {
        lat: parseFloat(this.model.get('lat')),
        lng: parseFloat(this.model.get('lng'))
      },
      zoom: 13
    };

    this._map = new google.maps.Map(this.el, mapOptions);
    this.addMarker(this.model);
  },

  addMarker: function (listing) {
    if (this._markers[listing.id]) { return; }
    var view = this;
    var marker = new google.maps.Marker({
      position: {
        lat: parseFloat(listing.get('lat')),
        lng: parseFloat(listing.get('lng'))
        },
      map: this._map,
      title: listing.get('title')
    });

    google.maps.event.addListener(marker, 'click', function (event) {
      view.showMarkerInfo(event, marker);
    });

    this._markers[listing.id] = marker;
  },

  showMarkerInfo: function (event, marker) {
    var infoWindow = new google.maps.InfoWindow({
      content: marker.title
    });

    infoWindow.open(this._map, marker);
  }

});
