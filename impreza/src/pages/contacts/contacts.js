/* eslint-disable */
function initMap() {
  const myLatLng = { lat: 50.112779, lng: 36.107498 };

  // Create a map object and specify the DOM element
  // for display.
  const map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 16,
  });

  // Create a marker and set its position.
  const marker = new google.maps.Marker({
    map,
    position: myLatLng,
  });

  const InfoWindow = new google.maps.InfoWindow({
    content: '<h1>Hey, we are here!<h1>',
  });
}
