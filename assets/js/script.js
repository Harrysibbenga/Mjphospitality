/* curator-feed */
(function(){
var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
i.src = "https://cdn.curator.io/published/05465fd8-aeb9-4f62-b97d-940e9e2fcadb.js";
e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
})();


// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
  
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 52.6107, lng: -1.2579},
        zoom: 15
    });
    
    var myLatLng = {lat: 52.610806, lng: -1.257917};

    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'MJP Hospitality'
    });
}