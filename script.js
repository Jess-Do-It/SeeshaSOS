// Get the SOS button element
var sosButton = document.getElementById("sosButton");

// Add a click event listener to the SOS button
sosButton.addEventListener("click", function() {
  // Get the user's location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      alert("We are sending help.\n Your location details are:\nLatitude: " + latitude + "\nLongitude: " + longitude);
    }, function(error) {
      alert("Error getting location: " + error.message);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
});
