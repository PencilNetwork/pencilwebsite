$(document).ready(function(){
    
    $("#pills-home-tab").click(function(){
        $('#pills-home-tab-img').attr("src","dist/imgs/home/pencil-logo-wt.png");
        $('#pills-Vision-tab-img').attr("src","dist/imgs/home/vision.png");
        $('#pills-mission-tab-img').attr("src","dist/imgs/home/mission.png");
        $('#pills-startup-tab-img').attr("src","dist/imgs/home/startup.png");
        $('#pills-marketing-tab-img').attr("src","dist/imgs/home/colbrative-marketing.png");
        
    }); 
    $("#pills-Vision-tab").click(function(){
        $('#pills-home-tab-img').attr("src","dist/imgs/home/pencil-logo-bk.png");
        $('#pills-Vision-tab-img').attr("src","dist/imgs/home/vision-copy.png");
        $('#pills-mission-tab-img').attr("src","dist/imgs/home/mission.png");
        $('#pills-startup-tab-img').attr("src","dist/imgs/home/startup.png");
        $('#pills-marketing-tab-img').attr("src","dist/imgs/home/colbrative-marketing.png");
        
    }); 
    $("#pills-mission-tab").click(function(){
        $('#pills-home-tab-img').attr("src","dist/imgs/home/pencil-logo-bk.png");
        $('#pills-Vision-tab-img').attr("src","dist/imgs/home/vision.png");
        $('#pills-mission-tab-img').attr("src","dist/imgs/home/mission-copy.png");
        $('#pills-startup-tab-img').attr("src","dist/imgs/home/startup.png");
        $('#pills-marketing-tab-img').attr("src","dist/imgs/home/colbrative-marketing.png");
        
    }); 
    $("#pills-startup-tab").click(function(){
        $('#pills-home-tab-img').attr("src","dist/imgs/home/pencil-logo-bk.png");
        $('#pills-Vision-tab-img').attr("src","dist/imgs/home/vision.png");
        $('#pills-mission-tab-img').attr("src","dist/imgs/home/mission.png");
        $('#pills-startup-tab-img').attr("src","dist/imgs/home/startup-copy.png");
        $('#pills-marketing-tab-img').attr("src","dist/imgs/home/colbrative-marketing.png");
        
    }); 
    $("#pills-collaborative-marketing-tab").click(function(){
        $('#pills-home-tab-img').attr("src","dist/imgs/home/pencil-logo-bk.png");
        $('#pills-Vision-tab-img').attr("src","dist/imgs/home/vision.png");
        $('#pills-mission-tab-img').attr("src","dist/imgs/home/mission.png");
        $('#pills-startup-tab-img').attr("src","dist/imgs/home/startup.png");
        $('#pills-marketing-tab-img').attr("src","dist/imgs/home/colbrative-marketing-copy.png");
        
    });
    
    
     // Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
//      var map, infoWindow;
//      function initMap() {
//        map = new google.maps.Map(document.getElementById('map'), {
//          center: {lat: -34.397, lng: 150.644},
//          zoom: 6
//        });
//        infoWindow = new google.maps.InfoWindow;
//
//        // Try HTML5 geolocation.
//        if (navigator.geolocation) {
//          navigator.geolocation.getCurrentPosition(function(position) {
//            var pos = {
//              lat: position.coords.latitude,
//              lng: position.coords.longitude
//            };
//
//            infoWindow.setPosition(pos);
//            infoWindow.setContent('Location found.');
//            infoWindow.open(map);
//            map.setCenter(pos);
//          }, function() {
//            handleLocationError(true, infoWindow, map.getCenter());
//          });
//        } else {
//          // Browser doesn't support Geolocation
//          handleLocationError(false, infoWindow, map.getCenter());
//        }
//      }
//
//      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//        infoWindow.setPosition(pos);
//        infoWindow.setContent(browserHasGeolocation ?
//                              'Error: The Geolocation service failed.' :
//                              'Error: Your browser doesn\'t support geolocation.');
//        infoWindow.open(map);
//      }
//    
    
    
    
    
});


var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU";
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}
//To use this code on your website, get a free API key from Google.
//Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}
    
    