$(function () {
  function initMap() {
    var location = new google.maps.LatLng(43.0331003, -88.03185409999998);
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: location,
        zoom: 16,
        panControl: false,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var markerImage = 'marker.png';
    var marker = new google.maps.Marker({
        position: location,
        map: map,
    });
  }
  google.maps.event.addDomListener(window, 'load', initMap);
});
