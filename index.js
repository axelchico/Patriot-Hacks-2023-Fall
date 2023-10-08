// Initialize and add the map
let map;
let directionsService;
let directionsRenderer;

async function initMap() {
  // The location of GMU
  const position = { lat: 38.831447, lng: -77.311772 };

  // Create a new map centered at GMU
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // Initialize DirectionsService and DirectionsRenderer
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer({
    map: map,
  });

  const marker = new google.maps.Marker({
    map: map,
    position: position,
    title: "GMU",
  });

}

function calcRoute() {
  var start = document.getElementById("startInput").value;
  const geocoder = new google.maps.Geocoder();

  // Make a geocoding request
  geocoder.geocode({ address: start }, function (results, status) {
    if (status === "OK" && results.length > 0) {
      const location = results[0].geometry.location;
      const latitude = location.lat();
      const longitude = location.lng();
      console.log(longitude, latitude)

  }});
  var end = "Eagle Bank Arena";
  var distance = document.getElementById("distanceInput").value;
  var request = {
    origin: start,
    destination: end,
    travelMode: "WALKING",
  };
  directionsService.route(request, function (result, status) {
    if (status == "OK") {
      directionsRenderer.setDirections(result);
      console.log("Success")
    }else{
      console.error('Directions request failed with status:', status);
    }
  });
}

// Initialize the map when the Google Maps API script is loaded
function initializeMap() {
  initMap();
}

// Attach the initializeMap function to the Google Maps API callback
google.maps.event.addDomListener(window, "load", initializeMap);
