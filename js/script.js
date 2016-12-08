var link = document.querySelector(".btn-popup");
var popup = document.querySelector(".popup-feedback");
var login = popup.querySelector("[name=name]");
var close = document.querySelector(".popup-feedback__close");
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("popup-feedback-show");
  login.focus();
});
close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup-feedback-show");
});


function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(59.939200,30.321500)
  }
  var image = 'img/map-marker.png';

  var map = new google.maps.Map(document.getElementById('google-map'),
                                mapOptions);
  var myLatLng = new google.maps.LatLng(59.938794,30.323800);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
if (google) {
  google.maps.event.addDomListener(window, 'load', initialize);
}