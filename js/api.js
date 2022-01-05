var map;

function initMap() {
  var seoul = { lat: 37.52918627394679, lng: 126.96816625579193 };
  map = new google.maps.Map( document.getElementById('map'), {
      zoom: 13,
      center: seoul
    });

  new google.maps.Marker({
    position: seoul,
    map: map,
    label: "아모레퍼시픽 본사"
  });
}